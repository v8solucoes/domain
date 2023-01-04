import { FirebaseAPI } from "../../shared/api"
import { Icontrollers, Ipath, Irequest } from "../../shared/interface"
import { AccountAdm } from "./account-adm"

export class Controllers implements Icontrollers {
  private request: Irequest = null as any

  constructor(req: Irequest) {
    /*     super(req) */
    this.request = req
  }
  get [`user-adm`]() { return new AccountAdm(this.request) }
  get [`account-adm-new`]() { return new AccountAdm(this.request) }
  get [`sign-in`]() { return new AccountAdm(this.request) }
  get [`recursive`]() { return new AccountAdm(this.request) }
  get [`null`]() { return new AccountAdm(this.request) }


  static path(req: Irequest, id: string = FirebaseAPI.db.bundle().bundleId) {

    const rota: Ipath = {
      [`account-adm-new`]: {
        root: `${req.environment}/${req.domain}/adm/user-adm`,
        nivel: 'adm'
      },
      [`user-adm`]: {
        root: `${req.environment}/${req.domain}/adm/user-adm`,
        nivel: 'adm'
      },
      [`sign-in`]: {
        root: `${req.environment}/${req.domain}/adm/user-adm`,
        nivel: 'adm'
      },
      [`recursive`]: {
        root: `${req.environment}/${req.domain}/adm/any`,
        nivel: 'adm'
      },
      [`null`]: {
        root: `${req.environment}/${req.domain}/adm/any`,
        nivel: 'adm'
      },
    }
    return {
      get colection() { return FirebaseAPI.db.collection(`${rota[req.document].root}/colection/`) },
      get document() { return FirebaseAPI.db.collection(`${rota[req.document].root}/colection/`).doc(id) },
      get historic() { return FirebaseAPI.db.collection(`${rota[req.document].root}/historic/`).doc(id) },
      get statistic() { return FirebaseAPI.db.doc(`${rota[req.document].root}/`) },
      get nivel() { return `${rota[req.document].nivel}` }
    }
  }

}