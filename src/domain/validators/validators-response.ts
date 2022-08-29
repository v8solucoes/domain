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

export const reponseValidatorCompose = (test: IresponseValidatorUnit, req: Irequest): IresponseValidatorCompose => {

  return test == null ? null : {
    validator: req.validator,
    error: test,
    label: req.validator!.label
  }

}