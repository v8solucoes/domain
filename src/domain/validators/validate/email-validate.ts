import { ValidatorResponse } from "../../../shared/interface";
import { TestCompose } from "../test/test-compose";
import { ValidatorDomain } from "../validator.domain";
import { ReplaceCompose } from "../replace/replace-compose";

export class EmailValidate extends ValidatorDomain {

  get clearDirt(): string {
    return new ReplaceCompose().removeEspecialCharactersEmail(this.req.validator?.value)
  }
  
  get applyMaskView(): string {
    return this.clearDirt
  }

  get applyMaskData(): string {
    return this.clearDirt
  }

  get validate(): ValidatorResponse {
    return new TestCompose(this.req).emailValid
  }
  get validateAsync(): Promise<ValidatorResponse> {
    
    return new Promise<ValidatorResponse>((resolve, reject) => {
      resolve(this.validate)
    })
  }

}