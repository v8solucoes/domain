import { FirebaseAPI } from "../../../shared/api"
import { Ivalidator, IvalidatorResponse } from "../../../shared/interface"

export class FirebaseAuth {

  static async emailAccountExist(req: Ivalidator): Promise<IvalidatorResponse> {

    const errors = {
      en: 'Email already registered!',
      pt: 'Email já utilizado!'
    }

    try {
      await FirebaseAPI.auth.getUserByEmail(req.value)
     
      return  {[`email-already-registered`]: errors[req.language]}


    } catch (error) {

      return null
    }

  }
  /*  async criarIdAuth(req: Irequest): Promise<IvalidatorResponse> {
 
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