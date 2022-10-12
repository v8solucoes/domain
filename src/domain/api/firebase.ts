
import { FirebaseAPI, FirebaseUserRecord } from "../../shared/api"
import { Irequest, IresponseValidatorCompose, Inivel, IpermissionNivel, Iuser } from "../../shared/interface"
import { Documents } from "../documents/document"
import { UserController } from "../model/user.controllers"
import { ModelUser } from "../model/users"
import { DataLocal } from "../repository/data-local"
/* import { DataLocalDomain } from "../repository/data-local" */
import { responseValidatorError } from "../validators/validators-response"

export class Firebase {

  static async userPermissionAndModelAsync(token: string, req: Irequest) {

    /*  const tokenInvalid = `eyJfQXV0aEVtdWxhdG9yUmVmcmVzaFRva2VuIjoiRE8gTk9UIE1PRElGWSIsImxvY2FsSWQiOiJMNzlVTE1iZVV6OEowYnNJUDlkb0xNcXV5ajNzIiwicHJvdmlkZXIiOiJwYXNzd29yZCIsImV4dHJhQ2xhaW1zIjp7fSwicHJvamVjdElkIjoidjhhcHAtODg4Y2QifQ` */

    try {

      const getUser = await FirebaseAPI.auth.verifyIdToken(token)
      const nivel = getUser['nivel'] as  Inivel
      
      const user: Iuser = {
        'name': getUser.name,
         nivel,
        'userId' : getUser.uid
      }

      const credential = await FirebaseAPI.db.collection(`${req.environment}/${req.domain}/${nivel}/user-${nivel}/colection/`).doc(getUser.uid).get()

      if (credential.exists) {
        const { permission } = credential.data() as any  
       
        const localModel = new DataLocal()

        let model: any = {}

        for (const acess of permission[nivel]) {

          if (localModel.getModule(acess.id,nivel).model[acess.id].id == 'undefined') {
            throw `Model not Exist ${acess.id}`
          } else {
            model[`${acess.id}`] = localModel.getModule(acess.id,nivel).model[acess.id]
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
    const documentNivel = Documents.path(req).nivel as Inivel
    const documenteName = req.document == 'account-adm' ? 'user-adm' : req.document

    let test: any = []

    for (const acess of permission[documentNivel]) {

      if (documenteName == acess?.colection && acess.id) {
        test.push(documenteName)
      } else {
        throw `Colection: ${acess.id} not Permission: ID: ${acess.id} / Colection: ${acess.colection}`
      }
    }
    return test.length ? true : false
  }
  static async colection(req: Irequest) {

    
    try {
      
      const colection = await Documents.path(req).colection.get()
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
      
      const document = await Documents.path(req, req.key as string).document.get()
      /*    let dataBase: any = {} */
      
      console.log(document.data())

        return document.data()

    } catch (error) {
      return { error }
    }

  }

  static create() { return FirebaseAPI.auth }

  static async createUser(req: Irequest): Promise<FirebaseUserRecord | IresponseValidatorCompose> {

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
}