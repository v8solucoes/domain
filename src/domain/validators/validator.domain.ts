import { Irequest, ValidatorResponse } from "../../shared/interface"

export abstract class ValidatorDomain {

  constructor(public req: Irequest) {
    
  }
  abstract get clearDirt(): string
  abstract get applyMaskView(): string
  abstract get applyMaskData(): string
  abstract get validate(): ValidatorResponse
  abstract get validateAsync(): Promise<ValidatorResponse> 
}