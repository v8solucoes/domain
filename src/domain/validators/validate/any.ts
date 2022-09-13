import { IresponseValidatorCompose } from "../../../shared/interface";
import { ValidatorDomain } from "../validator.domain";
import { responseValidatorError } from "../validators-response";

export class AnyResNull extends ValidatorDomain {

  get clearDirt() { 

    return this.req.validator.value 
  }
  get applyMaskView() {

    return this.clearDirt
  }
  get applyMaskData() {

    return this.clearDirt
  }
  get validate(): IresponseValidatorCompose {
  
    return responseValidatorError(null, this.req)
  }
  get validateAsync(): Promise<IresponseValidatorCompose> {
    return new Promise<IresponseValidatorCompose>((resolve, reject) => {
      resolve(this.validate)
    })
  }

}