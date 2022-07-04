import { IValidatorRequest } from "../../shared/interface";
import { EmailUserExist } from "./validate/email-user-exist";


export class ValidateUnitAsync {
 private req: IValidatorRequest
  constructor(req: IValidatorRequest) {
    this.req = req
  }

  get emailUserExist() {
    return new EmailUserExist(this.req)
  }
}