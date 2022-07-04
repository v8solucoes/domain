import { IValidatorRequest } from "../../shared/interface";
import { EmailValidate  } from "./validate/email-validate";
import { NamePersonal } from "./validate/name-personal";


export class ValidateUnit {
 private req: IValidatorRequest
  constructor(req: IValidatorRequest) {
    this.req = req
  }
get namePersonal() { return new NamePersonal(this.req) }
get emailValidate() { return new EmailValidate(this.req) }
}