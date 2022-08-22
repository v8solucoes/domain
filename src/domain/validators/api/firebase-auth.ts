import { FirebaseAPI } from "../../../shared/api"
import { IValidatorRequest, ValidatorResponseCompose } from "../../../shared/interface"

export class FirebaseAuth {

  static async emailAccountExist(req: IValidatorRequest): Promise<ValidatorResponseCompose> {

    const errors = {
      en: 'Email already exists!',
      pt: 'Email já existe!'
    }

    try {
      await FirebaseAPI.auth.getUserByEmail(req.value)
     
      return  {
        validator: req,
        error: {[`email-exist`]: errors[req.language]},
        label: req!.label
      }


    } catch (error) {

      return null
    }

  }
  /*  async criarIdAuth(req: Irequest): Promise<ValidatorResponse> {
 
     try {
         const data = await FirebaseAPI.auth.createUser({
             'displayName': 'Emerson Felix',
             'email': 'conta@v8sites.com.br',
             'password': '123456'
         })
 
         req.dados.teste = data.uid
 
         return null
 
     } catch (error) {
 
         return { erro: 'Conta já Existe'}
     }
 
 } */
}