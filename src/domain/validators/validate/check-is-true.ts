import { ValidatorResponse } from "../../../shared/interface";
import { TestCompose } from "../test/test-compose";
import { ValidatorDomain } from "../validator.domain";

export class CheckIsTrue extends ValidatorDomain {
  get clearDirt() { 
    const value = this.req.validator.value == true ? true : false
    return value 
  }
  get applyMaskView() {

    return this.clearDirt
  }
  get applyMaskData() {

    return this.clearDirt
  }
  get validate(): ValidatorResponse {
  
    return new TestCompose(this.req).checkIsTrue
  }
  get validateAsync(): Promise<ValidatorResponse> {
    return new Promise<ValidatorResponse>((resolve, reject) => {
      resolve(this.validate)
    })
  }

}