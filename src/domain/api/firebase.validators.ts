import { FirebaseAPI } from "../../shared/api"
import { Ivalidator, IresponseValidatorUnit } from "../../shared/interface"

export class FirebaseValidator {

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
}