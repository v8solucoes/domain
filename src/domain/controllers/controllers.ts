import { FirebaseAPI } from "../../shared/api"
import { Icontrollers, Irequest } from "../../shared/interface"
import { _router } from "../repository/data-router-path"
import { AccountAdm } from "./account-adm"

export class Controllers implements Icontrollers {
  
  private request: Irequest = null as any

  constructor(req: Irequest) {
    /*     super(req) */
    this.request = req
  }
  get [`dashboard`]() { return new AccountAdm(this.request) }
  get [`user-adm`]() { return new AccountAdm(this.request) }
  get [`account-adm-new`]() { return new AccountAdm(this.request) }
  get [`sign-in`]() { return new AccountAdm(this.request) }
  get [`recursive`]() { return new AccountAdm(this.request) }
  get [`null`]() { return new AccountAdm(this.request) }


  static path(req: Irequest, id: string = FirebaseAPI.db.bundle().bundleId) {
    
    const path = _router(req.environment,req.domain)[req.document].backAnd
    const router: any = path.root
    const level: any = path.level
  /*   const rota: Ipath = {
      [`dashboard`]: {
        root: `${req.environment}/${req.domain}/adm/user-adm`,
        nivel: 'adm'
      },
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
    } */
    return {
      get colection() { return FirebaseAPI.db.collection(`${router}/colection/`) },
      get document() { return FirebaseAPI.db.collection(`${router}/colection/`).doc(id) },
      get historic() { return FirebaseAPI.db.collection(`${router}/historic/`).doc(id) },
      get statistic() { return FirebaseAPI.db.doc(`${router}/`) },
      get nivel() { return `${level}` }
    }
  }

}