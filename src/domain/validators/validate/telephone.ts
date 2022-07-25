import { ValidatorResponse } from "../../../shared/interface";
import { ValidatorDomain } from "../validator.domain";
import { TestCompose } from "../test/test-compose";

export class Telephone extends ValidatorDomain {

  get clearDirt(): string {

    return this.req.value.replace(/\D/g, "").slice(0,11)
  }
  
  get applyMaskView(): string {
   // (00) 00000-0000
    const tel = this.clearDirt
    if (tel.length < 10) { return tel.replace(/(\d{2})(\d)/, "($1) $2") }
    if (tel.length == 10) { return tel.replace(/(\d{2})(\d{4})(\d{4})(\d*)/, "($1) $2-$3") }
    if (tel.length >= 10) { return tel.replace(/(\d{2})(\d{5})(\d{4})(\d*)/, "($1) $2-$3") }

    return tel
  }

  get applyMaskData(): string {
    return this.clearDirt
  }

  get validate(): ValidatorResponse {
   
    this.clearDirt

    return  new TestCompose(this.req).telephone
  }

  get validateAsync(): Promise<ValidatorResponse> {
    return new Promise<ValidatorResponse>((resolve, reject) => {
      resolve(this.validate)
    })
  }

}