import { Icredential, Irequest, IrequestData, Iuser } from '../../shared/interface';


export class Credencial_Construtor {

  credencial(req: Icredential): Icredential {
    return {
      user: this.user(req.user),
      request: this.request(req.request)
    }
  }

  user(req: Iuser): Iuser {
    return req
  }

  request(req: Irequest): Irequest {
    return req
  }

  requetDate(credential: Icredential, dados: any): IrequestData {
    return {
      credential,
      dados
    }
  }
}