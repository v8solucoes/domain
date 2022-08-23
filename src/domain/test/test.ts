import { Ilanguage, ImodelUndefinedProperty, InameValidatorLocal, InameValidatorRemote, Ipermission, Irequest, IValidatorRequest, ValidatorResponse } from "../../shared/interface";
import { ValidatorsRemote } from "../../shared/validator-remote";

export class Test {

  private listTest: any = []

  constructor(
    public language: Ilanguage,
    public request: Irequest,
    public permissions: Ipermission[],
    public model: ImodelUndefinedProperty,
    public document: any) { }

  async exe(): Promise<ValidatorResponse> {

    try {

      this.registerTest(this.request.language, this.permissions, this.model, this.document)

      console.log(this.listTest)

      return Promise.all(this.listTest).then(o => {
        const errors = o.filter(result => result !== null)
        const aprovated = !errors ? null : { test: errors }
        return aprovated as ValidatorResponse
      })
    } catch (error) {
      return { error }
    }
  }

  registerTest(language: Ilanguage, permissions: Ipermission[], model: ImodelUndefinedProperty, data: any) {

    for (const permission of permissions) {

      const validatorRequest = (validator: InameValidatorLocal | InameValidatorRemote): Irequest => {
        const req: IValidatorRequest = {
          id: permission.id,
          label: model[permission.id].text[language]!.label,
          value: data[permission.id] ? data[permission.id] : null,
          language: language,
          name: validator,
          typeExecute: 'back'
        }
        this.request.validator = req
        console.log(this.request)
        return this.request
      }

      if (model[permission.id].typeData == 'object') {

        this.registerTest(
          language,
          permission._group as Ipermission[],
          model[permission.id]._group as ImodelUndefinedProperty,
          data[permission.id]
        );

      }

      if (model[permission.id].typeData == 'value') {

        // Validators Async
        model[permission.id].validate.async.map(
          (validator) => {
            this.listTest.push(new ValidatorsRemote(validatorRequest(validator))[validator].validateAsync)
          })
        // Validators Sync
        model[permission.id].validate.sync.map(
          (validator) => {
            this.listTest.push(new ValidatorsRemote(validatorRequest(validator))[validator].validateAsync)
          })
      }

      if (model[permission.id].typeData != 'value' && model[permission.id].typeData != 'object') {

        this.listTest.push({ [`type-test`]: `${model[permission.id].typeData} > not registrer (typeData)` })
      }

    }

  }

 /*  aprovated(): ValidatorResponse {

    const result = [
      {
        "minChater--Em": "Mínimo 8 caracteres atual 2 ",
        "minWord--1": "Minímo 2 palavras atual 1"
      },
      {
        "error": "Email already exists!"
      },
      null,
      null
    ].filter(result => result !== null)

    try {
      return result
    } catch (error) {
      return { error }
    }
  } */

}