import { IresponseValidatorCompose } from "../../../shared/interface";
import { ValidatorsLocal } from "../validators-local";
import { ValidatorDomain } from "../validator.domain";
import { responseValidatorCompose } from "../validators-response";
import { FirebaseValidator } from "../../api/firebase.validators";

export class EmailAccountExistRespErrorAsync extends ValidatorDomain {

  get clearDirt(): string {
    return new ValidatorsLocal(this.req).emailValidate.clearDirt
  }
  get applyMaskView(): string {
    return new ValidatorsLocal(this.req).emailValidate.applyMaskView
  }
  get applyMaskData(): string {
    return new ValidatorsLocal(this.req).emailValidate.applyMaskData
  }
  get validate(): IresponseValidatorCompose {

    throw new Error("Method not implemented.");
    
  }
  get validateAsync(): Promise<IresponseValidatorCompose> {

    return FirebaseValidator.emailAccountExistRespErrorAsync(this.req.validator!).then((test) => {

     /*  console.log('firebase Response')
      console.log(reponseValidatorCompose(test, this.req)) */

      return responseValidatorCompose(test, this.req)

    } )
  }
}