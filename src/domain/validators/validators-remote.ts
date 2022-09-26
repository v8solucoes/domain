import { Irequest } from "../../shared/interface";
import { EmailAccountExistRespErrorAsync } from "./validate/email-user-exist-res-error-async";
import { EmailAccountExistRespSucessAsync } from "./validate/email-user-exist-res-sucess-async";
import { ValidatorsLocal } from "./validators-local";


export class ValidatorsRemote extends ValidatorsLocal {
  private request: Irequest
  constructor(req: Irequest) {
    super(req);
    this.request = req
  }
  get emailAccountExistResponseErrorAsync() { return new EmailAccountExistRespErrorAsync(this.request) }
  get emailAccountExistResponseSucessAsync() { return new EmailAccountExistRespSucessAsync(this.request) }
 
}