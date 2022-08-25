import { Irequest } from "../../shared/interface"
import { AccountAdm } from "./account-adm"

export class Documents {
  private request: Irequest
  constructor(req: Irequest) {
/*     super(req) */
    this.request = req
  }
 get account_adm() { return new AccountAdm(this.request) }

}
 
/* export class ValidatorsBack extends Validators {
  private request: IvalidatorRequest
  constructor(req: IvalidatorRequest) {
    super(req);
    this.request = req
  }
  get emailAccountExistAsync() { return new EmailUserExistAsync(this.request) }
} */