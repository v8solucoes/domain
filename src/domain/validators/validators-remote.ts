import { Irequest } from "../../shared/interface";
import { EmailUserExistAsync } from "./validate/email-user-exist-async";
import { ValidatorsLocal } from "./validators-local";


export class ValidatorsRemote extends ValidatorsLocal {
  private request: Irequest
  constructor(req: Irequest) {
    super(req);
    this.request = req
  }
  get emailAccountExistAsync() { return new EmailUserExistAsync(this.request) }
}