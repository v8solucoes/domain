import { IresponseValidatorCompose } from "../../../shared/interface";
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
  get validate(): IresponseValidatorCompose {
    throw new Error("Method not implemented.");
  }
  get validateAsync(): Promise<IresponseValidatorCompose> {
    throw new Error("Method not implemented.");
  }

}