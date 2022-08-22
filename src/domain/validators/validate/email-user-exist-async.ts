import { ValidatorResponse } from "../../../shared/interface";
import { FirebaseAuth } from "../api/firebase-auth";
import { ValidatorsLocal } from "../validators-local";
import { ValidatorDomain } from "../validator.domain";

export class EmailUserExistAsync extends ValidatorDomain {

  get clearDirt(): string {
    return new ValidatorsLocal(this.req).emailValidate.clearDirt
  }
  get applyMaskView(): string {
    return new ValidatorsLocal(this.req).emailValidate.applyMaskView
  }
  get applyMaskData(): string {
    return new ValidatorsLocal(this.req).emailValidate.applyMaskData
  }
  get validate(): ValidatorResponse {
    return {null:'not implemented'}
  }
  get validateAsync(): Promise<ValidatorResponse> {
    console.log(this.req.validator?.value)
    return FirebaseAuth.emailAccountExist(this.req.validator!)
  }
}