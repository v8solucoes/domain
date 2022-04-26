import { Nome_Dados } from "../dados/dados.interface";
import { CredencialOpcional, Requisicao } from "../interface/interface";
import { ConstrutorCredencial } from "./credencial.construtor";

export class ModeloCredencial {

  constructor() { }

  static modelo(acao: Nome_Dados['acao']) {
    return {
      adm: ConstrutorCredencial.modelo('modelo_adm', acao, '0jf6pebVEvLGB46StUP8'),
      revenda: ConstrutorCredencial.modelo('modelo_revenda', acao, '0jf6pebVEvLGB46StUP8'),
      cliente: ConstrutorCredencial.modelo('modelo_cliente', acao, '0jf6pebVEvLGB46StUP8'),
      usuario: ConstrutorCredencial.modelo('modelo_usuario', acao, '0jf6pebVEvLGB46StUP8'),
    }
  }
  static usuario(acao: Nome_Dados['acao'], id: string, credencial?: CredencialOpcional) {
    return {
      adm: ConstrutorCredencial.modelo('usuario_adm', acao, id, credencial),
      revenda: ConstrutorCredencial.modelo('usuario_revenda', acao, id, credencial),
      cliente: ConstrutorCredencial.modelo('usuario_cliente', acao, id, credencial),
      usuario: ConstrutorCredencial.modelo('usuario_usuario', acao, id, credencial),
    }
  }
  static requisicaoModelo(acao: Nome_Dados['acao'], tipoAcesso: Nome_Dados['tipoAcesso'], dados?: any): Requisicao {
    return {
      credencial: this.modelo(acao)[tipoAcesso],
      dados: dados || null
    }
  }
  static requisicaoUsuario(acao: Nome_Dados['acao'], id: string, tipoAcesso: Nome_Dados['tipoAcesso'],
  dados?: any, credencial?: CredencialOpcional): Requisicao {
    return {
      credencial: this.usuario(acao, id, credencial)[tipoAcesso],
      dados: dados || null
    }
  }
}