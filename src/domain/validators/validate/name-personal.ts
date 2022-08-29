import { IresponseValidatorCompose } from "../../../shared/interface";
import { ReplaceCompose } from "../replace/replace-compose";
import { TestCompose } from "../test/test-compose";
import { ValidatorDomain } from "../validator.domain";

export class NamePersonal extends ValidatorDomain {

  get clearDirt(): string {
    return new ReplaceCompose().removeEspecialCharactersName(this.req.validator?.value)
  }

  get applyMaskView(): string {
    return new ReplaceCompose().toUpperCaseFirstAll(this.clearDirt)
  }

  get applyMaskData(): string {
    return new ReplaceCompose().toUpperCaseFirstAll(this.clearDirt)
  }

  get validate(): IresponseValidatorCompose {
    return new TestCompose(this.req).namePersonal
  }

  get validateAsync(): Promise<IresponseValidatorCompose> {
    return new Promise<IresponseValidatorCompose>((resolve, reject) => {
      resolve(this.validate)
    })
  }

}

