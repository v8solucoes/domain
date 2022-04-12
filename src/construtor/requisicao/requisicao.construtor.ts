import { nomeAcao, nomeModulo, nomeModuloPasta, nomePermissao } from "../dados/dados.interface";
import { Requisicao, RespostaErro, RespostaSucesso, UsuarioNomePropriedade } from '../interface/interface'
import { ConstrutorFirebase as Firebase } from "../firebase/firebase.construtor";
import { respostaErro, respostaSucesso } from "../../funcoes/sincronas/resposta";

export class ConstrutorRequisicao {

  credencial: Requisicao["credencial"];
  dados: any;
  db = Firebase.db;
  lote = this.db.batch();

  constructor(requisicao: Requisicao) {

    this.credencial = requisicao.credencial;
    this.dados = requisicao.dados;
  }

  // Rotas Criação
  get rotaDinamica() { return this.criarRota(this.credencial.modulo.id, this.tipoID()) }
  rotaUsuario(id: string) {
    const modulo = this.credencial.modulo.id
    const tipoUsuario: UsuarioNomePropriedade = `id_${this.credencial.usuario.tipoAcesso}`
    const id_usuario = this.credencial.usuario[tipoUsuario]
    let valorId = id
    if (this.acaoGravar() && modulo == 'usuario_adm' || 'usuario_cliente' || 'usuario_revenda') {

    } else {
      valorId = id_usuario
    }

    return this.criarRota(`usuario_${this.credencial.usuario.tipoAcesso}`, valorId)
  }

  acaoGravar(): boolean {
    const tipoAcao = this.credencial.requisicao.acao
    return (tipoAcao == 'criar' || tipoAcao == 'set') ? true : false
  }

  tipoModulo(nomeModulo: nomeModulo): nomePermissao {

    const modulo: Record<nomeModulo, nomePermissao> = {
      usuario_adm: 'adm',
      usuario_revenda: 'revenda',
      usuario_cliente: 'cliente',
      usuario_usuario: 'usuario',
      modelo_adm: 'adm',
      modelo_revenda: 'revenda',
      modelo_cliente: 'cliente',
      modelo_usuario: 'usuario',

    }
    return modulo[nomeModulo] as nomePermissao
  }
  criarRota(nomeModulo: nomeModulo, id: string) {

    const tipoModulo = this.tipoModulo(nomeModulo)

    const ambiente = this.credencial.requisicao.ambiente;
    const id_usuario = this.credencial.usuario;
    this.acaoGravar() ? this.credencial.requisicao.item = id : ''

    const pastaTipo = (nomeModulo: nomeModulo): Record<nomePermissao, string> => {
      return {
        adm: `${ambiente}/${nomeModulo}`,
        revenda: `${ambiente}/_revenda/${id_usuario.id_revenda}/${nomeModulo}`,
        cliente: `${ambiente}/_revenda/${id_usuario.id_revenda}/_cliente/${id_usuario.id_cliente}/${nomeModulo}`,
        usuario: `${ambiente}/_revenda/${id_usuario.id_revenda}/_cliente/${id_usuario.id_cliente}/_usuario/${id_usuario.id_usuario}/${nomeModulo}`,
      }
    };
    const pataTipo = pastaTipo(nomeModulo);
    const dbColecao = (nomeModuloPasta: nomeModuloPasta) => this.db.collection(pataTipo[tipoModulo] + nomeModuloPasta)
    const dbDocumento = () => this.db.doc(pataTipo[tipoModulo])

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

  crud(): Record<nomeAcao, Promise<RespostaSucesso | RespostaErro>> {

    const acao = this.credencial.requisicao.acao,
      rota = this.rotaDinamica,
      rotaUsuario = this.rotaUsuario(rota.id),
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

  async lerColecao(): Promise<RespostaSucesso | RespostaErro> {

    try {

      const rota = this.rotaDinamica

      let dataBase: any = {}

      const snapshot = await rota.colecaoLista.get() as any

      snapshot.forEach((doc: { id: string; data: any }) => {
        dataBase[doc.id] = doc.data()
      });

      return respostaSucesso(
        {
          sucesso: true,
          mensagem: `Sucesso Ler Colecao`,
          mensagemCodigo: 'lerColecao',
          data: dataBase,
          credencial: this.credencial
        }
      )

    } catch (error) {

      return respostaErro({
        sucesso: false,
        erroMensagem: `Erro Ler Colecao`,
        erroCodigo: 'lerColecao',
        data: error,
        credencial: this.credencial
      })
    }

  }

  async lerDocumento(): Promise<RespostaSucesso | RespostaErro> {

    try {

      const rota = this.rotaDinamica

      const snapshot = await rota.documentoLista.get()

      if (snapshot.exists) {

        return respostaSucesso(
          {
            sucesso: true,
            mensagem: `Sucesso Ler Documento itemId: ${this.credencial.requisicao.item}`,
            mensagemCodigo: 'lerDocumento',
            data: snapshot.data(),
            credencial: this.credencial
          }
        )

      } else {
        return respostaSucesso(
          {
            sucesso: true,
            mensagem: `Documento não Existe itemId: ${rota.id}`,
            mensagemCodigo: 'lerDocumento',
            data: snapshot.data(),
            credencial: this.credencial
          })
      }

    } catch (error) {

      return respostaErro(
        {
          sucesso: false,
          erroMensagem: `Erro Ler Documento itemId: ${this.credencial.requisicao.item}`,
          erroCodigo: 'lerDocumento',
          data: error,
          credencial: this.credencial
        })
    }
  }

  async gravar(acao: nomeAcao): Promise<RespostaSucesso | RespostaErro> {
    /*     true, acao, lote, `Sucesso Gravar: ${acao}`, null */
    try {
      const lote = await this.lote.commit()
      return respostaSucesso(
        {
          sucesso: true,
          mensagem: `Sucesso Gravar: ${acao} / itemId: ${this.credencial.requisicao.item}`,
          mensagemCodigo: 'gravarLote',
          data: lote,
          credencial: this.credencial
        }
      )
    } catch (error) {
      return respostaErro(
        {
          sucesso: false,
          erroMensagem: `Erro Gravar: ${acao} / itemId: ${this.credencial.requisicao.item}`,
          erroCodigo: 'gravarLote',
          data: error,
          credencial: this.credencial
        })
    }
  }

  tipoID() {

    if (this.credencial.requisicao.itemCriar != false) {
      return `${this.credencial.requisicao.itemCriar}`
    } else {

      return this.acaoGravar() ? this.db.bundle().bundleId : this.credencial.requisicao.item;
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