import { ValidatorResponse } from "../../../shared/interface";
import { FirebaseAuth } from "../api/firebase-auth";
import { ValidateCompose } from "../validate-compose";
import { ValidatorDomain } from "../validator.domain";

export class EmailUserExist extends ValidatorDomain {

  get clearDirt(): string {
    return new ValidateCompose(this.req).emailValidate.clearDirt
  }
  get applyMaskView(): string {
    return new ValidateCompose(this.req).emailValidate.applyMaskView
  }
  get applyMaskData(): string {
    throw new ValidateCompose(this.req).emailValidate.applyMaskData
  }
  get validate(): Promise<ValidatorResponse> {
    return FirebaseAuth.emailAccountExist(this.req)
  }
}