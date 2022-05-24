import { Icredential, Irequest } from "../../shared/interface";
import { Credencial_Construtor } from "./credential.constructor";

export class Credencial_Modelo {

  credencial = new Credencial_Construtor()

  constructor() { }

  usuarioAdm(req: Irequest): Icredential {

    return {
      user: {
        userUid: 'masterUsuario'
        , agencyId: 'masterRevenda'
        , clientId: 'masterCliente'
        , accessType: 'adm'
      }, request: {
        environment: "ambienteTesteV8",
        action: req.action,
        moduleId: req.moduleId,
        itemId: req.action,
        function: req.function,
        domain: "localhost",
        dateUpdate: new Date(),
        dateCreate: new Date(),
      }
    }
  }

}