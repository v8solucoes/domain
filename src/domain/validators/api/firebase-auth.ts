import { FirebaseAPI } from "../../../shared/api"
import { IValidatorRequest, ValidatorResponse } from "../../../shared/interface"

export class FirebaseAuth {

  static async emailAccountExist(req: IValidatorRequest): Promise<ValidatorResponse> {
   
    console.log('FIREBASE AUTH')
    // 'conta@v8sitesxx.com.br'
   
    try {
      const error = {
        en: 'Email already exists!',
        pt: 'Email já existe!'
      }
      await FirebaseAPI.auth.getUserByEmail(req.value)
  /*     console.log({ error: error[req.language] }) */

      return { [`email-exist > ${req.value}`]: error[req.language] }

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