import { Irequest, ValidatorResponse } from "../../shared/interface"

export abstract class FunctionsDomain {
  req: Irequest
  constructor(req: Irequest) {
    this.req = req
  }
  abstract get create(): Promise<ValidatorResponse>
  abstract get test(): ValidatorResponse
  abstract get async(): Promise<ValidatorResponse>
  abstract get sync(): ValidatorResponse

}