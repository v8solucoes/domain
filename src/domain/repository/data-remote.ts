import { getFirestore } from "firebase-admin/firestore";
import { FirebaseAPI } from "../../shared/api";
import { Irequest, IresponseValidatorCompose } from "../../shared/interface";
import { DataLocal } from "./data-local";
import { Firebase } from "../api/firebase";
import { TestDocument } from "../../shared/validator-remote";
import { Documents } from "../documents/document";
import { ModelUser } from "../model/users";

export abstract class DataRemote {

  constructor(public req: Irequest) { }

  get db() {
    return {
      createUser: Firebase.createUser(this.req),
      createUserConfig: Firebase.create(),
      lote: getFirestore().batch(),
      getStatistic: this.statistic,
      getLocalDocument: new DataLocal().getModule(this.req.document, this.req.user!.nivel),
      getUserAdm: new DataLocal().getModule('user-adm', 'adm'),
      pathDocument: (id?: string) => Documents.path(this.req, id),
      crud: getFirestore(),
    }
  }
  async testPermisionDomain() {
    return await new TestDocument(this.req).permisionDomain()

  }

  abstract create(): Promise<IresponseValidatorCompose | null>

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
        delete  req.validator 
        return fire.arrayUnion(req)
      },
       historicDocument(user: Pick<ModelUser,'name'| 'userId' | 'email'>, modification:any) {
         const  dateUpdate = new Date()
         const historic = {
          dateUpdate,
          ...user,
          modification
        } 
        return fire.arrayUnion(historic)
      }
    }
  }

}