import { ValidatorResponse } from "../../../shared/interface";
import { FirebaseAuth } from "../api/firebase-auth";
import { Validators } from "../validators";
import { ValidatorDomain } from "../validator.domain";

export class EmailUserExistAsync extends ValidatorDomain {

  get clearDirt(): string {
    return new Validators(this.req).emailValidate.clearDirt
  }
  get applyMaskView(): string {
    return new Validators(this.req).emailValidate.applyMaskView
  }
  get applyMaskData(): string {
    return new Validators(this.req).emailValidate.applyMaskData
  }
  get validate(): ValidatorResponse {
    return {null:'not implemented'}
  }
  get validateAsync(): Promise<ValidatorResponse> {
    return FirebaseAuth.emailAccountExist(this.req)
  }
}