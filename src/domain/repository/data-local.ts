import { ImodelUndefinedProperty, Imodule, Ipermission, Irequest } from "../../shared/interface"

export class DataLocalDomain {

  user = null

  permission: Ipermission[] = [
    {
    id: 'account-adm',
    view: {
      form: true,
      title: true,
      subTitle: true,
      },
    colection:'account-adm',
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
        id: 'password',
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
    },
    {
    id: 'sign-in',
    view: {
      form: true,
      title: true,
      subTitle: true,
    },
    _group: [
      {
        id: 'email',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
      {
        id: 'password',
        view: {
          form: true,
          title: true,
          subTitle: true,
        },
      },
     
    ],
    }
  ]
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
        mask: 'namePersonal',
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
            sync: ['namePersonal'],
            async: [],
            updateOn: 'change',
            disabled: false,
            valueMin: 8,
            valueMax: 35,
            required: true,
            mask:'namePersonal',
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
            sync: ['emailValidate'],
            async: ['emailAccountExistResponseErrorAsync'],
            updateOn: 'change',
            disabled: false,
            valueMin: 8,
            valueMax: 35,
            required: false,
            mask: 'emailValidate',
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
            sync: ['telephone'],
            async: [],
            updateOn: 'change',
            disabled: false,
            valueMin: 10,
            valueMax: 11,
            required: true,
            mask: 'telephone',
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
        password: {
          id: 'password',
          typeData: 'value',
          typeInput: 'input',
          text: {
            en: {
              label: 'Password',
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
            mask: 'anyResNull',
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
            sync: ['checkIsTrue'],
            async: [],
            updateOn: 'change',
            disabled: false,
            valueMin: 10,
            valueMax: 11,
            required: true,
            mask: 'checkIsTrue',
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
      colection: {
        title: 'name',
        subTitle: 'email',
        description: 'userId'
      }
    },
    [`sign-in`]: {
      id: 'login',
      typeData: 'object',
      typeInput: 'group',
      text: {
        en: {
          label: 'Login',
          valueTest: 'Valor Teste',
          placeholder: 'Faça su login',
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
        mask: 'namePersonal',
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
            sync: ['namePersonal'],
            async: [],
            updateOn: 'change',
            disabled: false,
            valueMin: 8,
            valueMax: 35,
            required: true,
            mask:'namePersonal',
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
            sync: ['emailValidate'],
            async: ['emailAccountExistResponseSucessAsync'],
            updateOn: 'change',
            disabled: false,
            valueMin: 8,
            valueMax: 35,
            required: false,
            mask: 'emailValidate',
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
            sync: ['telephone'],
            async: [],
            updateOn: 'change',
            disabled: false,
            valueMin: 10,
            valueMax: 11,
            required: true,
            mask: 'telephone',
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
        password: {
          id: 'password',
          typeData: 'value',
          typeInput: 'input',
          text: {
            en: {
              label: 'Password',
              valueTest: false,
              placeholder: 'Password',
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
            mask: 'anyResNull',
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
            sync: ['checkIsTrue'],
            async: [],
            updateOn: 'change',
            disabled: false,
            valueMin: 10,
            valueMax: 11,
            required: true,
            mask: 'checkIsTrue',
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
  document:any = {
    [`account-adm`]: {
      name: 'Emerson Felix',
      email: 'contato@v8sites.com.br',
      telephone: '11981231970',
      password: '123456',
      acceptTerms: true
    },
    [`sign-in`]: {
      name: 'Emerson Felix',
      email: 'contato@v8sites.com.br',
      telephone: '11981231970',
      password: '123456',
      acceptTerms: true
    },
  }
  colection:{[keyof:string]: any[]} = {
    [`account-adm`]: [{
      name: 'DB Emeson Felix',
    /*   email: 'teste@vo.com' */
    }],
  }
  getModule(module: Irequest['document']): Imodule {

 
    const permission = this.permission.filter((permissions:Ipermission) => permissions.id == module)
    const model = this.model
    const document = {[module]: this.document[module]}

   this.permission.length ? 'tem': console.log(`não tem Permission: ${module}`)
   this.model[module] ? 'tem': console.log(`não tem Model: ${module}`)

    return {
      permission,
      model,
      document
    };
  }
  constructor() { 
    
  }
}