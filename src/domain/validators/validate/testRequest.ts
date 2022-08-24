import { IvalidatorResponse } from "../../../shared/interface";
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
  get validate(): IvalidatorResponse {
    throw new Error("Method not implemented.");
  }
  get validateAsync(): Promise<IvalidatorResponse> {
    throw new Error("Method not implemented.");
  }

}