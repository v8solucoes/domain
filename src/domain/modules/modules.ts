import { Irequest } from "../../shared/interface"
import { AccountAdm } from "./module/account-adm"

export class Module {
  private request: Irequest
  constructor(req: Irequest) {
/*     super(req) */
    this.request = req
  }
 get accountAdm() { return new AccountAdm(this.request) }

}
 
/* export class ValidatorsBack extends Validators {
  private request: IvalidatorRequest
  constructor(req: IvalidatorRequest) {
    super(req);
    this.request = req
  }
  get emailAccountExistAsync() { return new EmailUserExistAsync(this.request) }
} */