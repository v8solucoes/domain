import { Irequest } from "../../shared/interface";
import { CheckIsTrue } from "./validate/check-is-true";
import { EmailValidate  } from "./validate/email-validate";
import { NamePersonal } from "./validate/name-personal";
import { Telephone } from "./validate/telephone";
import { TestRequest } from "./validate/testRequest";


export class ValidatorsLocal {
 private req: Irequest
  constructor(req: Irequest)  {
    this.req = req
  }
get checkIsTrue() { return new CheckIsTrue(this.req) }
get namePersonal() { return new NamePersonal(this.req) }
get emailValidate() { return new EmailValidate(this.req) }
get telephone() { return new Telephone(this.req) }
get testRequest() { return new TestRequest(this.req) }
}