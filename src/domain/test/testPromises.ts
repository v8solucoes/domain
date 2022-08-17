import { ImodelUndefinedProperty, Ilanguage, Ipermission, IValidatorRequest, ValidatorType } from "../../shared/interface";
import { ValidatorsBack } from "../../shared/validator-remote";
import { Validators } from "../../shared/validator-local";

export class TestPromisse {

  listTest: any = []
  permission: Ipermission[] = [{
    id: 'account-adm',
    view: {
      form: true,
      title: true,
      subTitle: true,
    },
    _group: [
      {
        id: 'name',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
      {
        id: 'email',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
      {
        id: 'telephone',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
      {
        id: 'acceptTerms',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
    ],
  }]
  model: ImodelUndefinedProperty = {
    [`account-adm`]: {
      id: 'account-adm',
      typeData: 'object',
      typeInput: 'group',
      text: {
        en: {
          label: 'New Account',
          valueTest: 'Valor Teste',
          placeholder: 'Faça su conta',
          clearInput: 'Clear',
        },
      },
      validate: {
        sync: [],
        async: [],
        updateOn: 'change',
        disabled: false,
        valueMin: 8,
        valueMax: 35,
        required: false,
        front: 'string',
        back: 'string',
        test: 'emailValidate',
      },
      design: {
        css: {
          materialDesign: {
            appearance: 'fill',
          },
          form: {
            container: 'f-total',
          },
        },
      },
      _group: {
        name: {
          id: 'name',
          typeData: 'value',
          typeInput: 'input',
          text: {
            en: {
              label: 'Personal Name',
              valueTest: 'Test Name',
              placeholder: 'Fill in you name',
              clearInput: 'Clear',
            },
          },
          validate: {
            sync: [{ 'type': 'validator', 'validator': 'namePersonal' }],
            async: [],
            updateOn: 'change',
            disabled: false,
            valueMin: 8,
            valueMax: 35,
            required: true,
            front: 'string',
            back: 'string',
            test: 'namePersonal',
          },
          design: {
            tools: {
              accont: true,
              clear: true,
            },
            css: {
              materialDesign: {
                appearance: 'fill',
              },
              form: {
                container: 'f-total',
              },
            },
          },
        },
        email: {
          id: 'email',
          typeData: 'value',
          typeInput: 'email',
          text: {
            en: {
              label: 'E-mail',
              valueTest: 'Test Email',
              placeholder: 'Fill in you email',
              clearInput: 'Clear',
            },
          },
          validate: {
            sync: [{ 'type': 'validator', 'validator': 'emailValidate' }],
            async: [{ 'type': 'back', 'validator': 'emailAccountExistAsync' }],
            updateOn: 'change',
            disabled: false,
            valueMin: 8,
            valueMax: 35,
            required: true,
            front: 'string',
            back: 'string',
            test: 'emailValidate',
          },
          design: {
            tools: {
              accont: true,
              clear: true,
            },
            css: {
              materialDesign: {
                appearance: 'fill',
              },
              form: {
                container: 'f-total',
              },
            },
          },
        },
        telephone: {
          id: 'telephone',
          typeData: 'value',
          typeInput: 'input',
          text: {
            en: {
              label: 'Telephone',
              valueTest: 'Test Telephone',
              placeholder: 'Fill in your Telephone',
              clearInput: 'Clear',
            },
          },
          validate: {
            sync: [{ 'type': 'validator', 'validator': 'telephone' }],
            async: [],
            updateOn: 'change',
            disabled: false,
            valueMin: 10,
            valueMax: 11,
            required: true,
            front: 'string',
            back: 'string',
            test: 'telephone',
          },
          design: {
            tools: {
              accont: true,
              clear: true,
            },
            css: {
              materialDesign: {
                appearance: 'fill',
              },
              form: {
                container: 'f-total',
              },
            },
          },
        },
        acceptTerms: {
          id: 'acceptTerms',
          typeData: 'value',
          typeInput: 'acceptTerms',
          text: {
            en: {
              label: 'Accept Terms',
              valueTest: false,
              placeholder: 'Accept Terms',
              clearInput: 'Clear',
            },
          },
          validate: {
            sync: [],
            async: [],
            updateOn: 'change',
            disabled: false,
            valueMin: 10,
            valueMax: 11,
            required: true,
            front: 'string',
            back: 'string',
            test: 'telephone',
          },
          design: {
            tools: {
              accont: true,
              clear: true,
            },
            css: {
              materialDesign: {
                appearance: 'fill',
              },
              form: {
                container: 'f-total',
              },
            },
          },
        },
      },
    },
  }
  document: any = {
    [`account-adm`]: {
      name: 'Emerson',
      email: 'contato@v8sites.com.br',
      telephone: '11981231970',
      acceptTerms: true
    },
  }

  validator: IValidatorRequest = { 'language': 'en', 'value': 'contato@v8sites.com.br', 'nameValidator': 'emailAccountExistAsync' }

  promessa01 = new ValidatorsBack(this.validator)['emailAccountExistAsync'].validateAsync
  promessa02 = new ValidatorsBack(this.validator)['namePersonal'].validateAsync
  promessaSync = new Validators(this.validator)['namePersonal'].validateAsync

  functions: any[] = []

  constructor() {
    console.log('Promisses')
    this.promisesAll()
  }
  async promisesAll() {

    try {

      this.registerTest(this.permission, this.model, 'en', this.document)
      console.log(this.listTest)

      return Promise.all(this.listTest).then(o => console.log(o))
    } catch (error) {

    }
  }

  registerTest(permissions: Ipermission[], model: ImodelUndefinedProperty, language: Ilanguage, data: any) {

    for (const permission of permissions) {

      if (model[permission.id].typeData == 'object') {

        this.registerTest(
          permission._group as Ipermission[],
          model[permission.id]._group as ImodelUndefinedProperty,
          language,
          data[permission.id]
        );

      }

      if (model[permission.id].typeData == 'value') {

        const value = data[permission.id] ? data[permission.id] : null
        model[permission.id].validate.async.map(
          (nameValidatorAsync) => {
            this.listTest.push(new ValidatorsBack({ language, value, nameValidator: nameValidatorAsync.validator })[nameValidatorAsync.validator].validateAsync)
          })
        model[permission.id].validate.sync.map(
          (nameValidatorSync) => {
            this.listTest.push(new ValidatorsBack({ language, value, nameValidator: nameValidatorSync.validator })[nameValidatorSync.validator].validateAsync)
          })
      }
      if (model[permission.id].typeData != 'value' && model[permission.id].typeData != 'object') {

        this.listTest.push({ [`type-test`]: `${model[permission.id].typeData} > not registrer (typeData)` })
      }

    }

  }

  async promisesRecursive(permissions: Ipermission[], model: ImodelUndefinedProperty, language: Ilanguage, data: any) {

    try {

      let grup: any = {}
      let list: any[] = []

      for (let i = 0; i < permissions.length; i++) {
        /*   console.log(i)
          console.log((i == permissions.length-1) ? true: false ) */
        if (model[permissions[i].id].typeData == 'object') {

          this.promisesRecursive(
            permissions[i]._group as Ipermission[],
            model[permissions[i].id]._group as ImodelUndefinedProperty,
            language,
            data[permissions[i].id]
          );

        }

        if (model[permissions[i].id].typeData == 'value') {
          grup[permissions[i].id] = await this.promises2()
          list.push(await this.promises2())
        }
        if (permissions.length - 1 == i) {
          /*    console.log(list) */
          return list
        }

        /* switch (model[permission.id].typeData) {

          case 'object':

            this.promisesRecursive(
              permission._group as Ipermission[],
              model[permission.id]._group as ImodelUndefinedProperty,
              language,
              data[permission.id]
            );

            break;

          case 'value':

            grup[permission.id] = await this.promises2()

            break;

          default:
            break;
        } */

      }
      /*   if (grup) {
          console.log(grup)
          return await Promise.resolve(grup)
        } else {
          return 'objeto com valor'
      } */


    } catch (error) {
      return null

    }
  }

  async promises2() {

    const lista: any[] = [];

    const validator: ValidatorType[] = [
      { 'type': 'validator', 'validator': 'emailValidate' },
      { 'type': 'validator', 'validator': 'namePersonal' },
      { 'type': 'validator', 'validator': 'namePersonal' },
    ]
    validator
      .filter((validatorType: ValidatorType) => validatorType.type == 'validator')
      .map((validator: ValidatorType) => {

        return lista.push(this.promessaSync)
      })

    return Promise.all(lista)
  }

}

const start = new TestPromisse()

/* 
Explicações:
https://oieduardorabelo.medium.com/javascript-armadilhas-do-asyn-await-em-loops-1cdad44db7f0
 */