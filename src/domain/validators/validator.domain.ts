import { IValidatorRequest, ValidatorResponse } from "../../shared/interface"

export abstract class ValidatorDomain {
  req: IValidatorRequest
  constructor(req: IValidatorRequest) {
    this.req = req
  }
  abstract get clearDirt(): string
  abstract get applyMaskView(): string
  abstract get applyMaskData(): string
  abstract get validate(): ValidatorResponse
  abstract get validateAsync(): Promise<ValidatorResponse> 
}