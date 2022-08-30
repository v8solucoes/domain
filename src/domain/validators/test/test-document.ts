import { Ilanguage, ImodelUndefinedProperty, InameValidatorLocal, InameValidatorRemote, Ipermission, Irequest, IresponseValidatorCompose, Ivalidator } from "../../../shared/interface";
import { ValidatorsRemote } from "../../../shared/validator-remote";
import { DataLocalDomain } from "../../repository/data-local";
import { responseValidatorCompose, responseValidatorUnit } from "../validators-response";

export class TestDocument {

  private listTest: any = []

  constructor(
    public req: Irequest,
) { 
/*     console.log('this.request')
    console.log(this.request) */
    }

  async exe(
    language: Ilanguage,
    req: Irequest,
    permissions: Ipermission[],
    model: ImodelUndefinedProperty,
    document: any

  ): Promise<IresponseValidatorCompose> {

    try {
      req.validator.typeExecute = 'back'

      this.registerTest(language, req, permissions, model, document)

      return Promise.all<IresponseValidatorCompose[]>(this.listTest).then(test => {

        const errors = test.filter(result => result !== null)
      
        console.log('errors exe')
        console.log(errors)
       
        return responseValidatorCompose(errors,this.req)
      })
    } catch (error) {

      const reprovated = responseValidatorUnit(false, {error: error as string})
   
      return responseValidatorCompose(reprovated,this.req)
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
        console.log(validator)
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

  async permisionDomain(): Promise<IresponseValidatorCompose | null> {

    try {

      const local = new DataLocalDomain().getModule(this.req.document)
      const test = await this.exe( this.req.language,
        this.req,
        local.permission,
        local.model,
        this.req.data)
      return test

    } catch (error) {
      const reprovated = responseValidatorUnit(false, {error: error as string})
   
      return responseValidatorCompose(reprovated,this.req)
    }

  }
}