import { IresponseValidatorCompose } from "../../../shared/interface";
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

  get validate(): IresponseValidatorCompose {
    return new TestCompose(this.req).emailValid
  }
  
  get validateAsync(): Promise<IresponseValidatorCompose> {
    
    return new Promise<IresponseValidatorCompose>((resolve, reject) => {
      resolve(this.validate)
    })
  }

}