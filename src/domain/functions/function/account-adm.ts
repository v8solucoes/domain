import { IValidatorRequest, ValidatorResponse } from "../../../shared/interface";
/* import { ValidatorsBack } from "../../validators/validators-back"; */
import { FunctionsDomain } from "../functions.domain";
/* import { TestCompose } from"../../validators/test/test-compose" */

export class AccountAdm extends FunctionsDomain {

  get create(): Promise<ValidatorResponse> {
    
   /*  const data = this.req.data as {
      "name": string,
      "email": string,
      "telephone": number,
      "acceptTerms": boolean
    } */
    // Test value

    
    // Create

    return new Promise<ValidatorResponse>((resolve, reject) => {
      resolve(null)
    })

  }
  get test(): ValidatorResponse {
    
     const data = this.req.data as {
      "name": string,
      "email": string,
      "telephone": number,
      "acceptTerms": boolean
    }

    const reqFront: IValidatorRequest = {
      'language': this.req.language,
      'nameValidator': 'namePersonal',
      'value': data.name,
      'valueAll': '',
      'valueId': ''
    } 

   /*  let reque: IValidatorRequest = {
     'language' = req.language
    } */
/*     const test = new ValidatorsBack() */

/*     const name: Ir

    const test = new TestCompose() */
/*     const test = new TestCompose() */
    throw new Error("Method not implemented.");
  }
  get async(): Promise<ValidatorResponse> {
    throw new Error("Method not implemented.");
  }
  get sync(): ValidatorResponse {
    throw new Error("Method not implemented.");
  }
  
 

}