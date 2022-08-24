import { IvalidatorResponse, Irequest } from "../../../shared/interface";
import { OptionsValidator } from "../../options/options.validator"
import { TestUnit } from "./test-unit";

export class TestCompose extends TestUnit {
  constructor(req: Irequest) {
    super(req)
  }

  get checkIsTrue(): IvalidatorResponse {
    const test = this.compose(
      this.checkValueIsTrue,
    )
    return this.reponseValidatorCompose(test, this.req)
  }

  get telephone(): IvalidatorResponse {
    const test = this.compose(
      this.minCharacter(10),
      this.maxCharacter(11),
    )
    return this.reponseValidatorCompose(test, this.req)
  }

  get emailValid(): IvalidatorResponse {
    const test = this.compose(
      this.emailValidFormat,
    )
    return this.reponseValidatorCompose(test, this.req)
  } 

  get namePersonal(): IvalidatorResponse {
    const test = this.compose(
      this.minCharacter(8),
      this.maxCharacter(35),
      this.minWord(2),
    )
    return this.reponseValidatorCompose(test, this.req)
  }

  get testRequest(): IvalidatorResponse {

    const options = new OptionsValidator()
    const req = this.req

    const test = this.compose(
      this.existValueInArray(req.page, options.page.array),
      this.existValueInArray(req.domain, options.domain.array),
      this.existValueInArray(req.action, options.action.array),
      this.existValueInArray(req.document, options.document.array),
      this.existValueInArray(req.language, options.language.array),
      this.existValueInArray(req.environment, options.environment.array),
    )
    return this.reponseValidatorCompose(test, this.req)
  }
}