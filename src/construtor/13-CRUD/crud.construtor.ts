import { Nome_Dados } from "../01-dados/dados.interface";
import { ConstrutorFirebase as Firebase } from '../16-export/firebase.export'
import { Construtor_Rota } from "../12-rota/rota.construtor";
import { Resposta_Crud } from "./crud.interface";

import { Resposta} from "../14-resposta/reposta.export";
import { Credencial, RequisicaoDados } from "../../method/credential/credential.interface";
import { Resposta_Padrao_Construtor } from "../14-resposta/resposta.construtor";

export class Construtor_Crud {
  
  credencial: Credencial;
  dados: any;
  db = Firebase.db;
  rota = new Construtor_Rota()
  lote = this.db.batch();
  resposta = new Resposta_Padrao_Construtor

  constructor(
   public req: RequisicaoDados
    ) {
    this.credencial = req.credencial;
    this.dados = req.dados;
  }

  get crud(): Resposta_Crud['crud'] {

    const acao = this.credencial.requisicao.acao,
      rota = this.rota.rotaFirebase('modulo', this.credencial),
      rotaUsuario = this.rota.rotaFirebase('usuario', this.credencial),
      lote = this.lote,
      dados = this.dados,
      historico = this.historico,
      relatorio = this.relatorio,
      gravar = () => { return this.gravar(acao) },
      lerColecao = () => { return this.lerColecao() },
      lerDocumento = () => { return this.lerDocumento() }

    return {
      get criar() {
        lote.create(rota.documentoLista, { ...dados, ...historico });
        lote.create(rota.documentoHistorico, historico);
        lote.create(rota.documentoRelatorio, relatorio.criar);
        return gravar()
      },
      get set() {
        lote.set(rota.documentoLista, { ...dados, ...historico });
        lote.set(rota.documentoHistorico, historico);
        lote.set(rota.documentoRelatorio, relatorio.criar);     
        return gravar()
      },
      get editar() {
        lote.update(rota.documentoLista, { ...dados, ...historico });
        lote.update(rota.documentoHistorico, historico);
        lote.update(rota.documentoRelatorio, relatorio.editar);
        lote.update(rotaUsuario.documentoLista, historico)
        return gravar()
      },
      get deletar() {
        lote.create(rota.documentoDeletar, { ...dados, ...historico });
        lote.update(rota.documentoHistorico, historico);
        lote.update(rota.documentoRelatorio, relatorio.editar);
        lote.update(rotaUsuario.documentoLista, historico);
        lote.delete(rota.documentoLista);
        return gravar()
      },
      get lerColecao() { return lerColecao() },
      get lerDocumento() { return lerDocumento() }
    }
  }

  async lerColecao(): Promise<Resposta<any>> {

    try {

      const rota = this.rota.rotaFirebase('modulo', this.credencial)

      let dataBase: any = {}

      const snapshot = await rota.colecaoLista.get() as any

      snapshot.forEach((doc: { id: string; data: any }) => {
        dataBase[doc.id] = doc.data()
      });

      return (
        this.resposta.sucesso({
          credencial: this.credencial,
          data: dataBase,
          codigo: 'lerColecao',
          mensagem: 'Coleção Carregada com sucesso'
        })
      )

    } catch (error) {

      return this.resposta.erro({
        credencial: this.credencial,
        data: error,
        codigo: 'lerColecao',
        mensagem: 'Erro Ler Coleção'
      })

    }

  }

  async lerDocumento(): Promise<Resposta<any>> {

    try {

      const rota = this.rota.rotaFirebase('modulo', this.credencial)

      const snapshot = await rota.documentoLista.get()

      if (snapshot.exists) {

        return this.resposta.sucesso({
          credencial: this.credencial,
          data: snapshot.data(),
          codigo: 'lerDocumento',
          mensagem: 'Documento Carregado com Sucesso'
        })

      } else {
        return this.resposta.erro({
          credencial: this.credencial,
          data: snapshot.data(),
          mensagem: `Erro Documento não Existe itemId: ${rota.id}`,
          codigo: 'lerDocumento',
        })
      }

    } catch (error) {

      return this.resposta.erro({
        credencial: this.credencial,
        data: error,
        mensagem: `Erro Ler Documento itemId: ${this.credencial.requisicao.idItem}`,
        codigo: 'lerDocumento',
      })
    }
  }

  async gravar(acao: Nome_Dados['acao']): Promise<Resposta<any>> {
    try {
      
      const lote = await this.lote.commit()
      
      return this.resposta.sucesso({
        credencial: this.credencial,
        data: lote,
        mensagem: `Sucesso Gravar: ${acao} / itemId: ${this.credencial.requisicao.idItem}`,
        codigo: 'gravarLote',
      })

    } catch (error) {

      return this.resposta.erro({
        credencial: this.credencial,
        data: error,
        mensagem: `Erro Gravar: ${acao} / itemId: ${this.credencial.requisicao.idItem}`,
        codigo: 'gravarLote',
      })

    }
  }

  get relatorio() {
    
    this.credencial.requisicao.dataCriacao = new Date();
    const historico = this.historico

    return {

      get criar() {
        return {
          criado: Firebase.fieldValue.increment(1),
          dataUpdate: Firebase.fieldValue.serverTimestamp(),
          dataCriacao: Firebase.fieldValue.serverTimestamp(),
          ...historico,
        }
      },

      get editar() {
        return {
          editado: Firebase.fieldValue.increment(1),
          dataUpdate: Firebase.fieldValue.serverTimestamp(),
          ...historico,
        }
      },

      get deletar() {
        return {
          deletado: Firebase.fieldValue.increment(1),
          dataUpdate: Firebase.fieldValue.serverTimestamp(),
          ...historico,
        }
      }
    }
  }
  get historico() {
    this.credencial.requisicao.dataCriacao = new Date();
    return { _historico: Firebase.fieldValue.arrayUnion(this.credencial) }
  }

}