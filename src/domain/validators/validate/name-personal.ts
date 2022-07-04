import { ValidatorResponse } from "../../../shared/interface";
import { ReplaceCompose } from "../replace/replace-compose";
import { TestCompose } from "../test/test-compose";
import { ValidatorDomain } from "../validator.domain";

export class NamePersonal extends ValidatorDomain {

  get clearDirt(): string {
    return new ReplaceCompose().removeEspecialCharactersName(this.req.value)
  }
  
  get applyMaskView(): string {
    return new ReplaceCompose().toUpperCaseFirstAll(this.clearDirt)
  }

  get applyMaskData(): string {
    return new ReplaceCompose().toUpperCaseFirstAll(this.clearDirt)
  }

  get validate(): ValidatorResponse {
    return new TestCompose(this.req).namePersonal
  }

}