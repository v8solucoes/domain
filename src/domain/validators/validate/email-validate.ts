import { ValidatorResponse } from "../../../shared/interface";
import { TestCompose } from "../test/test-compose";
import { ValidatorDomain } from "../validator.domain";
import { ReplaceCompose } from "../replace/replace-compose";

export class EmailValidate extends ValidatorDomain {

  get clearDirt(): string {
    return new ReplaceCompose().removeEspecialCharactersEmail(this.req.value)
  }
  
  get applyMaskView(): string {
    return new ReplaceCompose().removeEspecialCharactersEmail(this.clearDirt)
  }

  get applyMaskData(): string {
    return new ReplaceCompose().removeEspecialCharactersEmail(this.clearDirt)
  }

  get validate(): ValidatorResponse {
    return new TestCompose(this.req).emailValid
  }

}