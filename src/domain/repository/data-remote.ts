import { getFirestore } from "firebase-admin/firestore";
import { FirebaseAPI } from "../../shared/api";
import { Irequest, IresponseValidatorCompose } from "../../shared/interface";
import { DataLocalDomain } from "./data-local";
import { Firebase } from "../api/firebase";
import { TestDocument } from "../../shared/validator-remote";
import { Documents } from "../documents/document";

export abstract class DataRemote {

  constructor(public req: Irequest) { }

  get db() {
    return {
      createUser: Firebase.createUser(this.req),
      createUserConfig: Firebase.create(),
      lote: getFirestore().batch(),
      getStatistic: this.statistic,
      getLocalDocument: new DataLocalDomain().getModule(this.req.document),
      pathDocument: (id?: string) => Documents.path(this.req, id),
      crud: getFirestore(),
    }
  }
  async testPermisionDomain() {
    return await new TestDocument(this.req).permisionDomain()

  }

  abstract create(): Promise<IresponseValidatorCompose | null>

/*   path(req: Irequest, id: string = FirebaseAPI.db.bundle().bundleId) {

    const rota = {
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
      get nivel() { return FirebaseAPI.db.doc(`${rota[req.document].nivel}/`) }
    }
  } */

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