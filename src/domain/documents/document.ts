import { FirebaseAPI } from "../../shared/api"
import { Ipath, Irequest } from "../../shared/interface"
import { AccountAdm } from "./account-adm"

export class Documents {
  private request: Irequest
  constructor(req: Irequest) {
/*     super(req) */
    this.request = req
  }
  get account_adm() { return new AccountAdm(this.request) }
  
 static path(req: Irequest, id: string = FirebaseAPI.db.bundle().bundleId) {

    const rota: Ipath = {
      [`account-adm`]: {
        root: `${req.environment}/${req.domain}/adm/user-adm`,
        nivel: 'adm'
      },
      [`sign-in`]: {
        root: `${req.environment}/${req.domain}/adm/user-adm`,
        nivel: 'adm'
      },
      [`null`]: {
        root: `${req.environment}/${req.domain}/adm/null`,
        nivel: 'adm'
      },
    }
    return {
      get colection() { return FirebaseAPI.db.collection(`${rota[req.document].root}/colection/`).doc(id) },
      get historic() { return FirebaseAPI.db.collection(`${rota[req.document].root}/historic/`).doc(id) },
      get statistic() { return FirebaseAPI.db.doc(`${rota[req.document].root}/`) },
      get nivel() { return `${rota[req.document].nivel}`}
    }
  }

}