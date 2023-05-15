import { _router } from './../repository/data-router-path';
import { FirebaseAPI, FirebaseUserRecord } from "../../shared/api"
import { IpermissionFormControl, Irequest, IresponseValidatorCompose, Ilevel, IpermissionNivel, Iuser } from "../../shared/interface"
import { Controllers } from "../controllers/controllers"
import { UserController } from "../model/user.controllers"
import { ModelUser } from "../model/users"
import { DataLocal } from "../repository/data-local"
import { responseValidatorError } from "../validators/validators-response"


export class Firebase {

  static async userPermissionAndModelAsync(token: string, req: Irequest) {

    /*  const tokenInvalid = `eyJfQXV0aEVtdWxhdG9yUmVmcmVzaFRva2VuIjoiRE8gTk9UIE1PRElGWSIsImxvY2FsSWQiOiJMNzlVTE1iZVV6OEowYnNJUDlkb0xNcXV5ajNzIiwicHJvdmlkZXIiOiJwYXNzd29yZCIsImV4dHJhQ2xhaW1zIjp7fSwicHJvamVjdElkIjoidjhhcHAtODg4Y2QifQ` */

    try {

      const getUser = await FirebaseAPI.auth.verifyIdToken(token)
      const level = getUser['level'] as Ilevel

      const user: Iuser = {
        'name': getUser.name,
        level,
        'userId': getUser.uid,
        acessToken: token
      }

      const credential = await FirebaseAPI.db.collection(`${req.environment}/${req.domain}/${level}/user-${level}/colection/`).doc(getUser.uid).get()

      if (credential.exists) {
        const { permission } = credential.data() as any

        const localModel = new DataLocal()

        let model: any = {}

        for (const acess of permission[level] as IpermissionFormControl) {

          if (localModel.getRecursive(acess.id).model[acess.id].id == 'account-adm') {
            throw `Model not Exist ${acess.id}`
          } else {
            model[`${acess.id}`] = localModel.getRecursive(acess.id).model[acess.id]
          }
        }
        return {
          permission,
          model,
          user,
          token,
          getUser
        }
      } else {
        throw `Colection not Exist`
      }

    } catch (error) {
      return { error }
    }
  }
  static securityColectionAndDocumentAcessIsValid(permission: IpermissionNivel, req: Irequest): boolean {

    const level = _router('test','localhost')[req.document].level

    let test: any = []

    for (const acess of permission[level]) {

      if ( req.document == acess.id) {
        test.push(req.document)
      }
    }
    if (test.length) { } else { throw `Colection id: ${req.document} not existe in Permission: ${JSON.stringify(test)}`} 

    return test.length ? true : false
  }
  static async colection(req: Irequest) {


    try {

      const colection = await Controllers.path(req).colection.get()
      let dataBase: any = {}
      colection.forEach((doc: { id: string; data: any }) => {
        dataBase[doc.id] = {
          ...doc.data()
        }
      });
      return dataBase

    } catch (error) {
      return { error }
    }

  }
  static async document(req: Irequest) {

    try {

      const document = await Controllers.path(req, req.key as string).document.get()
      /*    let dataBase: any = {} */

      console.log(document.data())

      return document.data()

    } catch (error) {
      return { error }
    }

  }

  static create() { return FirebaseAPI }

  /*   static async createUser(req: Irequest): Promise<FirebaseUserRecord | IresponseValidatorCompose> {
      const user = req.data[req.document] as ModelUser
      console.log('Create USER')
      return await FirebaseAPI.auth.createUser(new UserController(user).firebaseCreate)
  
    } */

  static async createUser(req: Irequest): Promise<FirebaseUserRecord | IresponseValidatorCompose> {
    const user = req.data[req.document] as ModelUser

    const message = {
      en: 'Problema create account.',
      pt: 'Problema ao criar a conta.'
    }

    try {
      const newUser = await FirebaseAPI.auth.createUser(new UserController(user).firebaseCreate)

      return newUser

    } catch (error) {
      console.log('error Firebase Create user')
      console.log(new UserController(user).firebaseCreate)
      console.log(error)
      return responseValidatorError({ error, message }, req)
    }

  }
  /* static async updateUser(req: Irequest): Promise<FirebaseUserRecord | IresponseValidatorCompose> {
    const user = req.data[req.document] as ModelUser
    const getUser = await FirebaseAPI.auth.verifyIdToken(req.user!.userId).
    return await FirebaseAPI.auth.updateUser(req.user!.userId, user.email)

  } */
}
 /*  static async createUser(req: Irequest): Promise<FirebaseUserRecord | IresponseValidatorCompose> {
   const user = req.data[req.document] as ModelUser
   
   const message = {
     en: 'Problema create account.',
     pt: 'Problema ao criar a conta.'
   }
   
   try {
     
     return await FirebaseAPI.auth.createUser(new UserController(user).firebaseCreate)

   } catch (error) {
     console.log('error Create user')
     return responseValidatorError({ error, message }, req)
   }

 }
} */