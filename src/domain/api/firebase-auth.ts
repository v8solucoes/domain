import { FirebaseAPI, FirebaseUserRecord } from "../../shared/api"
import { Ivalidator, IresponseValidatorUnit, Irequest, IresponseValidatorCompose } from "../../shared/interface"
import { UserController } from "../model/user.controllers"
import { ModelUser } from "../model/users"
import { DataLocalDomain } from "../repository/data-local"
import { responseValidatorError } from "../validators/validators-response"

export class FirebaseAuth {

  static async loginGetModelAsync(token: string, req: Irequest) {

  /*  const tokenInvalid = `eyJfQXV0aEVtdWxhdG9yUmVmcmVzaFRva2VuIjoiRE8gTk9UIE1PRElGWSIsImxvY2FsSWQiOiJMNzlVTE1iZVV6OEowYnNJUDlkb0xNcXV5ajNzIiwicHJvdmlkZXIiOiJwYXNzd29yZCIsImV4dHJhQ2xhaW1zIjp7fSwicHJvamVjdElkIjoidjhhcHAtODg4Y2QifQ` */
    
    try {
      console.log('loginGetModelAsync')
      console.log(req)

      const user = await FirebaseAPI.auth.verifyIdToken(token)
      const nivel = user['nivel']

      const credential = await FirebaseAPI.db.collection(`${req.environment}/${req.domain}/${nivel}/user-${nivel}/colection/`).doc(user.uid).get()
      const { permission } = credential.data() as any
      let model:any = {}
      for (const acess of permission) {
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

  static async emailAccountExistRespErrorAsync(req: Ivalidator): Promise<IresponseValidatorUnit> {

    const message = {
      en: '"Email is already in use-Error!"',
      pt: 'Email já utilizado!'
    }

    try {
      // Test diferent email
      /*       req.value = 'contato@v8sites.com.br' */

      await FirebaseAPI.auth.getUserByEmail(req.value)

      return { [`auth/email-already-exists`]: message[req.language] }

    } catch (error) {

      // Return error null firebase if not exist.
      return null
    }

  }
  static async emailAccountExistRespSucessAsync(req: Ivalidator): Promise<IresponseValidatorUnit> {

    const message = {
      en: '"Email invalid!"',
      pt: 'Email já utilizado!'
    }

    try {
      // Test diferent email
      /*       req.value = 'contato@v8sites.com.br' */

      await FirebaseAPI.auth.getUserByEmail(req.value)

      return null

    } catch (error) {

      // Return error null firebase if not exist.
      return { [`auth/email-already-exists`]: message[req.language] }
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