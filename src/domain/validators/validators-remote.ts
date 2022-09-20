import { Irequest } from "../../shared/interface";
import { FirebaseAuth } from "../api/firebase-auth";
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
export class ValidatorsLogin {
  token: string
  req: Irequest

  constructor(token: string, req: Irequest) {
    this.token = token
    this.req = req
  }
 
  get loginGetModel() {
    
    return FirebaseAuth.loginGetModelAsync(this.token,this.req )
  }
}