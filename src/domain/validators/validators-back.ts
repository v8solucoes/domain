import { IValidatorRequest } from "../../shared/interface";
import { EmailUserExistAsync } from "./validate/email-user-exist-async";
import { Validators } from "./validators";


export class ValidatorsBack extends Validators {
  private request: IValidatorRequest
  constructor(req: IValidatorRequest) {
    super(req);
    this.request = req
  }
  get emailAccountExistAsync() { return new EmailUserExistAsync(this.request) }
}