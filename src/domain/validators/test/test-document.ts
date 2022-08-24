import { Ilanguage, ImodelUndefinedProperty, InameValidatorLocal, InameValidatorRemote, Ipermission, Irequest, Ivalidator } from "../../../shared/interface";
import { ValidatorsRemote } from "../../../shared/validator-remote";

export class Test {

  private listTest: any = []

  constructor(
    public language: Ilanguage,
    private request: Irequest,
    public permissions: Ipermission[],
    public model: ImodelUndefinedProperty,
    public document: any) { 
    console.log('this.request')
    console.log(this.request)
    }

  async exe(): Promise<Ivalidator> {

    try {

      this.registerTest(this.request.language, this.request, this.permissions, this.model, this.document)

     /*  console.log(this.listTest) */

      return Promise.all(this.listTest).then(o => {
        const errors = o.filter(result => result !== null)
        this.request.validator.error = !errors ? null : errors
       /*  console.log(this.request) */
        return this.request.validator
      })
    } catch (error) {
      this.request.validator.error = error as any
        return this.request.validator
    }
  }

  registerTest(language: Ilanguage, request: Irequest, permissions: Ipermission[], model: ImodelUndefinedProperty, data: any) {

    for (const permission of permissions) {

      const validatorRequest = (validatorName: InameValidatorLocal | InameValidatorRemote): Irequest => {
        const  req = {...request}
        const validator: Ivalidator = {
          id: permission.id,
          label: model[permission.id].text[language]!.label,
          value: data[permission.id] ? data[permission.id] : null,
          language: language,
          name: validatorName,
          typeExecute: 'back',
          error: null
        }
        req.validator = validator
        console.log(req)
        return req
      }

      if (model[permission.id].typeData == 'object') {

        this.registerTest(
          language,
          request,
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
      // Erro if type not exist
      if (model[permission.id].typeData != 'value' && model[permission.id].typeData != 'object') {

        this.listTest.push({ [`type-test`]: `${model[permission.id].typeData} > not registrer (typeData)` })
      }
      ////

    }

  }
}