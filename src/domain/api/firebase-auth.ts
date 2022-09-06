import { FirebaseAPI, FirebaseUserRecord } from "../../shared/api"
import { Ivalidator, IresponseValidatorUnit, Irequest, IresponseValidatorCompose } from "../../shared/interface"
import { UserController } from "../model/user.controllers"
import { ModelUser } from "../model/users"
import { responseValidatorError } from "../validators/validators-response"

export class FirebaseAuth {

  static async emailAccountExist(req: Ivalidator): Promise<IresponseValidatorUnit> {

    const message = {
      en: '"Email is already in use!"',
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