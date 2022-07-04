import { ValidatorResponse, IValidatorRequest } from "../../../shared/interface";
import { TestUnit } from "./test-unit";

export class TestCompose extends TestUnit {
  constructor(req: IValidatorRequest) {
    super(req)
  }
  get namePersonal(): ValidatorResponse {
    return this.compose(
      this.minCharacter(8),
      this.maxCharacter(35),
      this.minWord(2),
    )
  }
  get emailValid(): ValidatorResponse {
    return this.composeAsync(
      this.emailValidFormat,
    )
  }
  get emailExist(): ValidatorResponse {
    return this.compose(
      this.emailExistDatabase,
    )
  }
  
}