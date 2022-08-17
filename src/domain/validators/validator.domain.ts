import { Irequest, ValidatorResponse } from "../../shared/interface"

export abstract class ValidatorDomain {
  req: Irequest
  constructor(req: Irequest) {
    this.req = req
  }
  abstract get clearDirt(): string
  abstract get applyMaskView(): string
  abstract get applyMaskData(): string
  abstract get validate(): ValidatorResponse
  abstract get validateAsync(): Promise<ValidatorResponse> 
}