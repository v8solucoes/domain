import { Irequest, IresponseValidatorCompose, IresponseValidatorUnit } from "../../shared/interface";

export const responseValidatorUnit = (sucess: boolean, errorLanguage: { [key: string]: string }): IresponseValidatorUnit => {

  try {
    if (sucess) {
      return null;
    } else {
      throw new Error(`${JSON.stringify(errorLanguage)}`);
    }
  } catch (error) {
    /*       console.log(errorLanguage) */
    return errorLanguage;
  }
}

export const responseValidatorCompose = (test: IresponseValidatorUnit, req: Irequest): IresponseValidatorCompose => {

  req.validator.error = test as any
  return test == null ? null : req.validator

}