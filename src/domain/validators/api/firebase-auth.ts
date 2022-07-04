import { FirebaseAPI } from "../../../shared/api"
import { IValidatorRequest, ValidatorResponse } from "../../../shared/interface"

export class FirebaseAuth {

  static async emailAccountExist(req: IValidatorRequest): Promise<ValidatorResponse> {
   
    console.log('FIREBASE AUTH')
   
    try {

      await FirebaseAPI.auth.getUserByEmail('conta@v8sitesxx.com.br')

      return null

    } catch (error) {

      return { emailAccountExist:`Email já Existe`}
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