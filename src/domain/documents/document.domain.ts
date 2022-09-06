import { getFirestore } from "firebase-admin/firestore";
import { FirebaseAPI } from "../../shared/api";
import { Irequest, IresponseValidatorCompose } from "../../shared/interface";
import { DataLocalDomain } from "../../domain/repository/data-local";
import { FirebaseAuth } from "../api/firebase-auth";
import { TestDocument } from "../../shared/validator-remote";

export abstract class DocumentDomain {

  constructor(public req: Irequest) { }
  get db() {
    return {
      createUser: FirebaseAuth.createUser(this.req),
      createUserConfig: FirebaseAuth.create(),
      lote: getFirestore().batch(),
      statistic: this.statistic,
      local: new DataLocalDomain().getModule(this.req.document),
      crud: getFirestore(),
      path: (id?:string)=> this.path2(this.req,id),
    }
  }
  async testPermisionDomain() { return await new TestDocument(this.req).permisionDomain()

  }

  abstract create(): Promise<IresponseValidatorCompose | null>

  path2(req: Irequest, id: string = FirebaseAPI.db.bundle().bundleId) {
   
    console.log('PATH2 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
    console.log(req)
    const rota = {
      [`account-adm`]: { root: `${req.environment}/${req.domain}/adm/user-adm` }
    }
    return {
      get colection() { return FirebaseAPI.db.collection(`${rota[req.document].root}/colection/`).doc(id) },
      get historic() { return FirebaseAPI.db.collection(`${rota[req.document].root}/historic/`).doc(id) },
      get statistic() { return FirebaseAPI.db.doc(`${rota[req.document].root}/`) }
    }
  }
  path(document: Irequest['document'], id: string = FirebaseAPI.db.bundle().bundleId) {
    const req = this.req
    console.log('PATH @@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
    console.log(this.req)
    const rota = {
      [`account-adm`]: { root: `${req.environment}/${req.domain}/adm/user-adm` }
    }
    return {
      get colection() { return FirebaseAPI.db.collection(`${rota[document].root}/colection/`).doc(id) },
      get historic() { return FirebaseAPI.db.collection(`${rota[document].root}/historic/`).doc(id) },
      get statistic() { return FirebaseAPI.db.doc(`${rota[document].root}/`) }
    }
  }
  get statistic() {

    const req = this.req
    const fire = FirebaseAPI.fieldValue

    return {

      get create() {
        return {
          create: fire.increment(1),
          dateUpdate: fire.serverTimestamp(),
          dateCreate: fire.serverTimestamp(),
          historic: this.historic,
        }
      },

      get update() {
        return {
          update: fire.increment(1),
          dateUpdate: fire.serverTimestamp(),
          historic: this.historic,
        }
      },
      get set() {
        return {
          set: fire.increment(1),
          dateUpdate: fire.serverTimestamp(),
          historic: this.historic,
        }
      },

      get delete() {
        return {
          delete: fire.increment(1),
          dateUpdate: fire.serverTimestamp(),
          historic: this.historic,
        }
      },
      get historic() {
        return fire.arrayUnion(req)
      }
    }
  }

}