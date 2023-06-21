import { Irequest, IresponseValidatorCompose } from "../../../shared/interface";
import { OptionsValidator } from "../../options/options.validator"
import { responseValidatorCompose } from "../validators-response";
import { TestUnit } from "./test-unit";

export class TestCompose extends TestUnit {
  constructor(req: Irequest) {
    super(req)
  }

  get checkIsTrue(): IresponseValidatorCompose {
    const test = this.compose(
      this.checkValueIsTrue,
    )
    return responseValidatorCompose(test, this.req)
  }

  get telephone(): IresponseValidatorCompose {
    const test = this.compose(
      this.minCharacter(10),
      this.maxCharacter(11),
    )
    return responseValidatorCompose(test, this.req)
  }

  get emailValid(): IresponseValidatorCompose {
    const test = this.compose(
      this.emailValidFormat,
    )
    return responseValidatorCompose(test, this.req)
  } 

  get namePersonal(): IresponseValidatorCompose {
    const test = this.compose(
      this.minCharacter(8),
      this.maxCharacter(35),
      this.minWord(2),
    )
    return responseValidatorCompose(test, this.req)
  }

  get testRequest(): IresponseValidatorCompose {

    const options = new OptionsValidator()
    const req = this.req

    const test = this.compose(
      this.existValueInArray(req.language, options.language),
      this.existValueInArray(req.page, options.page),
      this.existValueInArray(req.domain, options.domain),
      this.existValueInArray(req.action, options.action),
      this.existValueInArray(req.document, options.document),
      this.existValueInArray(req.documentSub, options.document),
      this.existValueInArray(req.environment, options.environment),
    )
    return responseValidatorCompose(test, this.req)
  }
  get testRequestDocument(): IresponseValidatorCompose {
    const testRequest  = this.testRequest
    const options = new OptionsValidator()
    const req = this.req

    const testDocument = this.compose(
      this.existValueInArray(req.action, options.action),
      this.typeStringValue(req.key as string),
    )
    const result = testRequest == null && testDocument == null ? null : { ...testDocument, ...testRequest}
    return responseValidatorCompose(result, this.req)
  }
  get testRequestDomainLangPageEnvi(): IresponseValidatorCompose {

    const options = new OptionsValidator()
    const req = this.req

    const test = this.compose(
      this.existValueInArray(req.domain, options.domain),
      this.existValueInArray(req.language, options.language),
      this.existValueInArray(req.page, options.page),
      this.existValueInArray(req.environment, options.environment),
    )
    return responseValidatorCompose(test, this.req)
  }
 
}