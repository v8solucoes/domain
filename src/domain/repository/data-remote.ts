import { getFirestore } from "firebase-admin/firestore";
import { FirebaseAPI } from "../../shared/api";
import { Irequest, IresponseValidatorCompose } from "../../shared/interface";
import { DataLocalDomain } from "./data-local";
import { Firebase } from "../api/firebase";
import { TestDocument } from "../../shared/validator-remote";
import { getAuth } from "firebase-admin/auth";

export abstract class DbService {

  constructor(public req: Irequest) { }

  get createUser(){ return Firebase.createUser(this.req)}
  get createUserConfig(){ return getAuth()}
  get createLote(){ return getFirestore().batch() }
  get getStatistic(){ return this.statistic }
  get getLocalPermision(){ return new DataLocalDomain().getModule(this.req.document).permission }
  get getLocalModel(){ return new DataLocalDomain().getModule(this.req.document).model }
  get getLocalDocument(){ return new DataLocalDomain().getModule(this.req.document).document }
  pathDocument(id?: string) { this.path(this.req, id) }
  
  get db() {
    return {
      createUser: Firebase.createUser(this.req),
      createUserConfig: Firebase.create(),
      lote: getFirestore().batch(),
      statistic: this.statistic,
      local: new DataLocalDomain().getModule(this.req.document),
      crud: getFirestore(),
      path: (id?:string)=> this.path(this.req,id),
    }
  }
  async testPermisionDomain() { return await new TestDocument(this.req).permisionDomain()

  }

  abstract create(): Promise<IresponseValidatorCompose | null>

  path(req: Irequest, id: string = FirebaseAPI.db.bundle().bundleId) {
   
    const rota = {
      [`account-adm`]: {
        root: `${req.environment}/${req.domain}/adm/user-adm`,
        nivel: 'adm'
      },
      [`sign-in`]: {
        root: `${req.environment}/${req.domain}/adm/user-adm`,
        nivel: 'adm' },
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