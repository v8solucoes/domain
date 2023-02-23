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
  // Adm
    get [`user-adm`]() { return new AccountAdm(this.request) }
    get [`developing-one`]() { return new AccountAdm(this.request) }
    get [`developing-two`]() { return new AccountAdm(this.request) }
  // Partner
    get [`partner-developing-one`]() { return new AccountAdm(this.request) }
    get [`partner-developing-two`]() { return new AccountAdm(this.request) }
    get [`partner-developing-three`]() { return new AccountAdm(this.request) }
  // Client
    get [`client-developing-one`]() { return new AccountAdm(this.request) }
    get [`client-developing-two`]() { return new AccountAdm(this.request) }
    get [`client-developing-three`]() { return new AccountAdm(this.request) }
 // System
  get [`dashboard`]() { return new AccountAdm(this.request) }
  get [`account-adm-new`]() { return new AccountAdm(this.request) }
  get [`sign-in`]() { return new AccountAdm(this.request) }
  get [`recursive`]() { return new AccountAdm(this.request) }
  get [`null`]() { return new AccountAdm(this.request) }


  static path(req: Irequest, id: string = FirebaseAPI.db.bundle().bundleId) {
    
    const path = _router(req.environment,req.domain)[req.document]
    const router: any = path.root
    const level: any = path.level
 
    return {
      get colection() { return FirebaseAPI.db.collection(`${router}/colection/`) },
      get document() { return FirebaseAPI.db.collection(`${router}/colection/`).doc(id) },
      get historic() { return FirebaseAPI.db.collection(`${router}/historic/`).doc(id) },
      get statistic() { return FirebaseAPI.db.doc(`${router}/`) },
      get nivel() { return `${level}` }
    }
  }

}