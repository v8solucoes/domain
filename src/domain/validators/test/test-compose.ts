import { ValidatorResponse, Irequest } from "../../../shared/interface";
import { TestUnit } from "./test-unit";

export class TestCompose extends TestUnit {
  constructor(req: Irequest) {
    super(req)
  }
  get telephone(): ValidatorResponse {
    return this.compose(
      this.minCharacter(10),
      this.maxCharacter(11),
    )
  }

  get namePersonal(): ValidatorResponse {
    return this.compose(
      this.minCharacter(8),
      this.maxCharacter(35),
      this.minWord(2),
    )
  }
  get emailValid(): ValidatorResponse {
    return this.compose(
      this.emailValidFormat,
    )
  }
/*   get emailExist(): ValidatorResponse {
    return this.compose(
      this.emailExistDatabase,
    )
  } */
  
}