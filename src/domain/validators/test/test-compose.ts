import { ValidatorResponse, Irequest } from "../../../shared/interface";
import { TestUnit } from "./test-unit";

export class TestCompose extends TestUnit {
  constructor(req: Irequest) {
    super(req)
  }
  get telephone(): ValidatorResponse {
    const test = this.compose(
      this.minCharacter(10),
      this.maxCharacter(11),
    )
    return this.reponseValidatorCompose(test, this.req)
  }

  get namePersonal(): ValidatorResponse {
    const test = this.compose(
      this.minCharacter(8),
      this.maxCharacter(35),
      this.minWord(2),
    )
    return this.reponseValidatorCompose(test, this.req)
   /*  return this.reponseValidatorCompose(test, this.req) */
  }
  get emailValid(): ValidatorResponse {
    const test = this.compose(
      this.emailValidFormat,
    )
    return this.reponseValidatorCompose(test, this.req)
  } 
  
}