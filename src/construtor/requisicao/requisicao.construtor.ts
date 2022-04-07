// FIREBASE NUNCA REMOVER IMPORT DO TOPO
import * as admin from "firebase-admin";
if (admin.apps.length === 0) {admin.initializeApp()}
import { getFirestore, FieldValue } from "firebase-admin/firestore";
/* SE PRECISAR EXECUTE ESSE COMANDO PARA GRAVAR AS CREDENCIAIS
 export GOOGLE_APPLICATION_CREDENTIALS="/home/v8/meu-apresentador/construtor/src/v8app-888cd-a6f93a11cbe1.json"
*/
import { nomeModulo, nomeModuloPasta, nomePermissao } from "../dist/dadosApp/dadosApp.dados";
import { nomeAcao, Resposta } from "../dados/dados.interface";
import { Requisicao, Usuario } from "./requisicao.interface";

export class ConstrutorRequisicao {

  credencial: Requisicao["credencial"];
  dados: any;
  db = getFirestore();
  lote = this.db.batch();

  constructor(requisicao: Requisicao) {

    this.credencial = requisicao.credencial;
    this.dados = requisicao.dados;
  }

  // Rotas Criação
  get rotaDinamica() { return this.criarRota(this.credencial.modulo.id, this.tipoID()) }
  rotaUsuario(id: string) {
    const acao = this.credencial.requisicao.acao
    const modulo = this.credencial.modulo.id
    const tipoUsuario: Usuario = `id_${this.credencial.usuario.tipoAcesso}`
    const id_usuario = this.credencial.usuario[tipoUsuario]
    let valorId = id
    if (acao == 'criar' && modulo == 'usuario_adm' || 'usuario_cliente' || 'usuario_revenda') {

    } else {
      valorId = id_usuario
    }

    return this.criarRota(`usuario_${this.credencial.usuario.tipoAcesso}`, valorId)
  }
  criarRota(nomeModulo: nomeModulo, id: string) {

    const tipoModulo = this.credencial.modulo.tipoModulo
    const ambiente = this.credencial.requisicao.ambiente;
    const id_usuario = this.credencial.usuario
    const acao = this.credencial.requisicao.acao
    acao == 'criar' ? this.credencial.requisicao.item = id : ''

    const pastaTipo = (nomeModulo: nomeModulo): Record<nomePermissao, string> => {
      return {
        adm: `${ambiente}/${nomeModulo}`,
        revenda: `${ambiente}/_revenda/${id_usuario.id_revenda}/${nomeModulo}`,
        cliente: `${ambiente}/_revenda/${id_usuario.id_revenda}/_cliente/${id_usuario.id_cliente}/${nomeModulo}`,
        usuario: `${ambiente}/_revenda/${id_usuario.id_revenda}/_cliente/${id_usuario.id_cliente}/_usuario/${id_usuario.id_usuario}/${nomeModulo}`,
      }
    };
    const dbColecao = (nomeModuloPasta: nomeModuloPasta) => this.db.collection(pastaTipo(nomeModulo)[tipoModulo] + nomeModuloPasta)
    const dbDocumento = () => this.db.doc(pastaTipo(nomeModulo)[tipoModulo])

    return {
      get colecaoLista() { return dbColecao('/lista') },
      get colecaoHistorico() { return dbColecao('/historico') },
      get colecaoDeletar() { return dbColecao('/deletar') },
      get documento() { return dbDocumento() },
      get documentoLista() { return this.colecaoLista.doc(id) },
      get documentoHistorico() { return this.colecaoHistorico.doc(id) },
      get documentoRelatorio() { return this.documento },
      get documentoDeletar() { return this.colecaoDeletar.doc(id) },
      get id() { return id }
    }

  }

  crud(): Record<nomeAcao, Promise<Resposta>> {

    const acao = this.credencial.requisicao.acao,
      rota = this.rotaDinamica,
      rotaUsuario = this.rotaUsuario(rota.id),
      lote = this.lote,
      dados = this.dados,
      historico = this.historico,
      relatorio = this.relatorio,
      gravar = ()=> { return this.gravar(acao) },
      lerColecao = ()=> { return this.lerColecao() },
      lerDocumento = ()=> { return this.lerDocumento() }

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

  async lerColecao(): Promise<Resposta> {

    const acao = this.credencial.requisicao.acao

    try {

      const rota = this.rotaDinamica

      let dataBase: any = {}

      const snapshot = await rota.colecaoLista.get() as any

      snapshot.forEach((doc: { id: string; data: any }) => {
        dataBase[doc.id] = doc.data()
      });

      return this.resposta(true, acao, snapshot, `Sucesso Ler Colecao: ${acao}`, dataBase)

    } catch (error) {
      return this.resposta(false, acao, error, `Erro Ler Colecao: ${acao}`)
    }

  }

  async lerDocumento(): Promise<Resposta> {
    const acao = this.credencial.requisicao.acao
    try {

      const rota = this.rotaDinamica

      const snapshot = await rota.documentoLista.get() as any

      return this.resposta(true, acao, snapshot, `Sucesso Ler Documento: ${acao}`, snapshot.data())

    } catch (error) {
      return this.resposta(false, acao, error, `Erro Ler Documento: ${acao}`)
    }
  }

  async gravar(acao: nomeAcao): Promise<Resposta> {

    try {
      const lote = await this.lote.commit()
      return this.resposta(true, acao, lote, `Sucesso Gravar: ${acao}`)
    } catch (error) {
      return this.resposta(false, acao, error, `Erro Gravar: ${acao}`)
    }
  }

  tipoID() {

    const novoIdDaRequisicao = this.credencial.requisicao.itemCriar;

    if (novoIdDaRequisicao != false) {
      return `${this.credencial.requisicao.itemCriar}`
    } else {

      return (this.credencial.requisicao.acao == "criar" || this.credencial.requisicao.acao == 'set')  ? this.db.bundle().bundleId : this.credencial.requisicao.item;
    }
  }

  resposta(sucesso: boolean, acao: nomeAcao, repostaDB: any, mensagem: string, data?: any): Resposta {
    return {
      acao,
      sucesso: sucesso,
      mensagem: mensagem,
      data: data || null,
      ...this.credencial as any,
      itemId: this.credencial.requisicao.item,
      respostaDataBase: repostaDB
    }
  }

  get relatorio() {
    this.credencial.requisicao.dataCriacao = new Date();
    const historico = this.historico
    return {

      get criar() {
        return {
          criado: FieldValue.increment(1),
          dataUpdate: FieldValue.serverTimestamp(),
          dataCriacao: FieldValue.serverTimestamp(),
          ...historico,
        }
      },

      get editar() {
        return {
          editado: FieldValue.increment(1),
          dataUpdate: FieldValue.serverTimestamp(),
          ...historico,
        }
      },
      
      get deletar() {
        return {
          deletado: FieldValue.increment(1),
          dataUpdate: FieldValue.serverTimestamp(),
          ...historico,
        }
      }
    }
  }
  get historico() {
    this.credencial.requisicao.dataCriacao = new Date();
    return { _historico: FieldValue.arrayUnion(this.credencial) }
  }

}