import { Irequest } from "../../shared/interface"
import { AccountAdm } from "./function/account-adm"
import { Functions } from "./functions"

export class FunctionsBack extends Functions{
  private request: Irequest
  constructor(req: Irequest) {
    super(req)
    this.request = req
  }
 get accountAdm() { return new AccountAdm(this.request) }

}
 
/* export class ValidatorsBack extends Validators {
  private request: IValidatorRequest
  constructor(req: IValidatorRequest) {
    super(req);
    this.request = req
  }
  get emailAccountExistAsync() { return new EmailUserExistAsync(this.request) }
} */