import { Credencial_Construtor } from "./credencial.construtor";
import { Credencial, CredencialModulo } from "./credencial.interface";

export class Credencial_Modelo {

  credencial = new Credencial_Construtor()

  constructor() { }

  usuarioAdm(req: CredencialModulo): Credencial {

    return {
      usuario: {
        id_usuario: 'masterUsuario'
        , id_revenda: 'masterRevenda'
        , id_cliente: 'masterCliente'
        , tipoAcesso: 'adm'
      }, requisicao: {
        ambiente: "ambienteTesteV8",
        acao: req.acao,
        idModulo: req.idModulo,
        idItem: req.acao,
        funcao: req.funcao,
        dominio: "localhost",
        dataUpdate: new Date(),
        dataCriacao: new Date(),
      }
    }
  }

}