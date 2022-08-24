import { IvalidatorResponse } from "../../../shared/interface";
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
  get validate(): IvalidatorResponse {
  
    return new TestCompose(this.req).checkIsTrue
  }
  get validateAsync(): Promise<IvalidatorResponse> {
    return new Promise<IvalidatorResponse>((resolve, reject) => {
      resolve(this.validate)
    })
  }

}