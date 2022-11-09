import { ImodelUndefinedProperty, Imodule, Inivel, Ipermission, IpermissionNivel, Irequest } from "../../shared/interface"

export class DataLocal {

  user = null

  permission: IpermissionNivel = {
    adm:    [
      {
      id: 'user-adm',
      view: {
        form: true,
        title: true,
        subTitle: true,
        },
      colection: 'user-adm',
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
          id: 'acceptTerms',
          view: {
            form: true,
            title: true,
            subTitle: true,
          },
        },
        {
          id: 'emailVerified',
          view: {
            form: true,
            title: true,
            subTitle: true,
          },
        },
        {
          id: 'multiFactor',
          view: {
            form: true,
            title: true,
            subTitle: true,
          },
        },
        {
          id: 'name',
          view: {
            form: true,
            title: true,
            subTitle: true,
          },
        },
        {
          id: 'nivel',
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
          id: 'telephone',
          view: {
            form: true,
            title: true,
            subTitle: true,
          },
        },
        {
          id: 'userId',
          view: {
            form: true,
            title: true,
            subTitle: true,
          },
        },

      ]
      },
      {
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
  }
 
  model: ImodelUndefinedProperty = {
    [`user-adm`]: {
      id: 'user-adm',
      typeData: 'object',
      typeInput: 'group',
      text: {
        en: {
          label: 'User Adm',
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
        emailVerified: {
          id: 'emailVerified',
          typeData: 'value',
          typeInput: 'booleanToggle',
          text: {
            en: {
              label: 'Email Verified',
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
        multiFactor: {
          id: 'multiFactor',
          typeData: 'value',
          typeInput: 'booleanToggle',
          text: {
            en: {
              label: 'Multi Factor',
              valueTest: false,
              placeholder: 'Mult Factor',
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
        nivel: {
          id: 'nivel',
          typeData: 'value',
          typeInput: 'input',
          text: {
            en: {
              label: 'Nível',
              valueTest: false,
              placeholder: 'Nivel',
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
        userId: {
          id: 'userId',
          typeData: 'value',
          typeInput: 'input',
          text: {
            en: {
              label: 'User Id',
              valueTest: false,
              placeholder: 'ID',
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
      },
      colection: {
        title: 'name',
        subTitle: 'email',
        description: 'userId'
      }
    },
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
  document: any = {
    [`user-adm`]: {
      "permission": {
          "adm": [
              {
                  "view": {
                      "form": true,
                      "subTitle": true,
                      "title": true
                  },
                  "id": "account-adm",
                  "_group": [
                      {
                          "view": {
                              "form": true,
                              "subTitle": true,
                              "title": true
                          },
                          "id": "name"
                      },
                      {
                          "view": {
                              "form": true,
                              "subTitle": true,
                              "title": true
                          },
                          "id": "email"
                      },
                      {
                          "view": {
                              "form": true,
                              "subTitle": true,
                              "title": true
                          },
                          "id": "telephone"
                      },
                      {
                          "view": {
                              "form": true,
                              "subTitle": true,
                              "title": true
                          },
                          "id": "password"
                      },
                      {
                          "view": {
                              "form": true,
                              "subTitle": true,
                              "title": true
                          },
                          "id": "acceptTerms"
                      }
                  ],
                  "colection": "account-adm"
              }
          ]
      },
      "user": {
          "emailVerified": false,
          "password": "123456",
          "multiFactor": false,
          "name": "Emerson Felix",
          "acceptTerms": true,
          "telephone": "11981231970",
          "nivel": "adm",
          "userId": "mvP0YpF2NIm0EFf50gfTR7EnBNUz",
          "email": "contato@v8sites.com.bry"
      }
  },
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
  getModule(module: Irequest['document'], nivel:Inivel): Imodule {

    const permission = this.permission[nivel].filter((permissions:Ipermission) => permissions.id == module)
    const model = this.model
    const document = {[module]: this.document[module]}

   nivel ? 'tem': console.log(`não tem Nível de Acesso: ${nivel}`)
   permission.length ? 'tem': console.log(`não tem Permission: ${module}`)
   this.permission[nivel].length ? 'tem': console.log(`não tem Permission: ${module}`)
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