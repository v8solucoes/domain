import { FirebaseAPI, FirebaseUserRecord } from "../../shared/api"
import { Irequest, IresponseValidatorCompose, Ipermission } from "../../shared/interface"
import { UserController } from "../model/user.controllers"
import { ModelUser } from "../model/users"
import { DataLocalDomain } from "../repository/data-local"
import { responseValidatorError } from "../validators/validators-response"

export class Firebase {

  static async userPermissionAndModelAsync(token: string, req: Irequest) {

  /*  const tokenInvalid = `eyJfQXV0aEVtdWxhdG9yUmVmcmVzaFRva2VuIjoiRE8gTk9UIE1PRElGWSIsImxvY2FsSWQiOiJMNzlVTE1iZVV6OEowYnNJUDlkb0xNcXV5ajNzIiwicHJvdmlkZXIiOiJwYXNzd29yZCIsImV4dHJhQ2xhaW1zIjp7fSwicHJvamVjdElkIjoidjhhcHAtODg4Y2QifQ` */
    
    try {

      const user = await FirebaseAPI.auth.verifyIdToken(token)
      const nivel = user['nivel']

      const credential = await FirebaseAPI.db.collection(`${req.environment}/${req.domain}/${nivel}/user-${nivel}/colection/`).doc(user.uid).get()
     
      const { permission }= credential.data() as any
    
      let model: any = {}
      for (const acess of permission.adm) {
        model[`${acess.id}`] = new DataLocalDomain().getModule(acess.id).model[acess.id]
      }
      return {
        permission,
        model,
        user,
        token
      }
      
    } catch (error) {
      return {error}
    }

  }
  securityAccess(permission: { adm: Ipermission[] }, req: Irequest) {
/*    const documentNivel =  new DocumentDomain(req) */
  }
  static async colection(token: string, req: Irequest) {

  /*  const tokenInvalid = `eyJfQXV0aEVtdWxhdG9yUmVmcmVzaFRva2VuIjoiRE8gTk9UIE1PRElGWSIsImxvY2FsSWQiOiJMNzlVTE1iZVV6OEowYnNJUDlkb0xNcXV5ajNzIiwicHJvdmlkZXIiOiJwYXNzd29yZCIsImV4dHJhQ2xhaW1zIjp7fSwicHJvamVjdElkIjoidjhhcHAtODg4Y2QifQ` */
    
    try {

      const user = await Firebase.userPermissionAndModelAsync(token, req)
/* 
      const { permission } = user

      const reqPermission = req.document
 */
      /* Compare */

      return user
      
      // Test Permission Request X DB ?
/*       const nivel = user */

     /*  const credential = await FirebaseAPI.db.collection(`${req.environment}/${req.domain}/${nivel}/user-${nivel}/colection/`).doc(user.uid).get() */
    /*   const { permission } = credential.data() as any
    
      let model: any = {}
      for (const acess of user.permission) {
        model[`${acess.id}`] = new DataLocalDomain().getModule(acess.id).model[acess.id]
      }
      return {
        permission,
        model,
        user,
        token
      } */
      
    } catch (error) {
      return {error}
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