import { ValidatorResponse } from "../../../shared/interface";
import { ValidatorDomain } from "../validator.domain";

export class TestRequest extends ValidatorDomain {
  get clearDirt(): string {
    throw new Error("Method not implemented.");
  }
  get applyMaskView(): string {
    throw new Error("Method not implemented.");
  }
  get applyMaskData(): string {
    throw new Error("Method not implemented.");
  }
  get validate(): ValidatorResponse {
    throw new Error("Method not implemented.");
  }
  get validateAsync(): Promise<ValidatorResponse> {
    throw new Error("Method not implemented.");
  }

}