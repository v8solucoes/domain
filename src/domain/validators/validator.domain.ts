import { Irequest, IvalidatorResponse } from "../../shared/interface"

export abstract class ValidatorDomain {

  constructor(public req: Irequest) {
    
  }
  abstract get clearDirt(): string | boolean 
  abstract get applyMaskView(): string | boolean
  abstract get applyMaskData(): string | boolean
  abstract get validate(): IvalidatorResponse
  abstract get validateAsync(): Promise<IvalidatorResponse> 
}