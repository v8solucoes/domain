import { ImodelRecursive } from './../../../shared/interface';
import { InameValidatorLocal, InameValidatorRemote, IpermissionFormControl, Irequest, IresponseValidatorCompose, Ivalidator } from "../../../shared/interface";
import { ValidatorsRemote } from "../../../shared/validator-remote";
import { DataLocal } from "../../repository/data-local";
import { responseValidatorError } from "../validators-response";

export class TestDocument {

  private listTest: any = []

  constructor(
    public req: Irequest,
  ) {
    /*     console.log('this.request')
        console.log(this.request) */
  }

  async exe(
    language: Irequest['language'],
    req: Irequest,
    permissions: IpermissionFormControl,
    model: ImodelRecursive,
    document: any

  ): Promise<IresponseValidatorCompose> {

    try {

      req.validator!.typeExecute = 'back'

      this.registerTest(language, req, permissions, model, document)

      return Promise.all<IresponseValidatorCompose[]>(this.listTest).then(test => {

        const errorTest = test.filter(result => result !== null)

        if (!errorTest.length) { return null } else {

        /*   console.log('TEST ERROR TROW ===================================')
          console.log(errorTest) */

          throw Object.assign({}, errorTest)
        }

      })

    } catch (error) {

      console.log('TEST ERROR CATCH ======================================')
      console.log(error)

      return responseValidatorError(error, this.req)
    }
  }

  registerTest(language: Irequest['language'], request: Irequest, permissions: IpermissionFormControl, model: ImodelRecursive, data: any) {

    for (const permission of permissions) {

      const validatorRequest = (validatorName: InameValidatorLocal | InameValidatorRemote): Irequest => {
        const req = { ...request }
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
       /*  console.log(validator) */
        return req
      }

      if (model[permission.id].typeModel == 'object') {

        this.registerTest(
          language,
          request,
          permission._group as IpermissionFormControl,
          model[permission.id]._group as ImodelRecursive,
          data[permission.id]
        );

      }

      if (model[permission.id].typeModel == 'value') {

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
      if (model[permission.id].typeModel != 'value' && model[permission.id].typeModel != 'object') {

        this.listTest.push({ [`type-test`]: `${model[permission.id].typeModel} > not registrer (typeModel)` })
      }
      ////

    }

  }

  async permisionDomain(): Promise<IresponseValidatorCompose | null> {

    const local = new DataLocal().getRecursive(this.req.document) as any

    return await this.exe(this.req.language,
      this.req,
      local.permission,
      local.model,
      this.req.data)
  }
}