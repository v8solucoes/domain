import { nomeAcao, nomeFuncao } from "../dados/dados.interface";
import { CredencialOpcional} from "../interface/interface";
import { ConstrutorCredencial } from "./credencial.construtor";

export class CredencialModelo  {

    constructor(){}

   static modelo(acao:nomeAcao)

    { 
      return {
        adm: ConstrutorCredencial.modelo('modelo_adm', acao, '0jf6pebVEvLGB46StUP8'),
        revenda: ConstrutorCredencial.modelo('modelo_revenda',acao,'0jf6pebVEvLGB46StUP8'),
        cliente: ConstrutorCredencial.modelo('modelo_cliente',acao,'0jf6pebVEvLGB46StUP8'),
        usuario: ConstrutorCredencial.modelo('modelo_usuario',acao,'0jf6pebVEvLGB46StUP8'),
    }
}
  static  usuario(acao:nomeAcao, id: string, credencial: CredencialOpcional)

    {
      return {
        adm: ConstrutorCredencial.modelo('usuario_adm', acao, id, credencial),
        revenda: ConstrutorCredencial.modelo('usuario_revenda',acao, id, credencial),
        cliente: ConstrutorCredencial.modelo('usuario_cliente',acao, id, credencial),
        usuario: ConstrutorCredencial.modelo('usuario_usuario',acao, id, credencial),
    }
}
}