import { Icol, IpermissionRecursive, Idoc, Imodel2, Ipermission2, Irequest, ImodelRecursive } from "../../shared/interface"
import { action, level } from './data-text-language';
import { DataModel } from './data-model';

export class DataLocal extends DataModel {

  text = { action, level }

  permission: Ipermission2 = [
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
          id: 'phone',
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
      id: 'account-adm-new',
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
          id: 'phone',
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
    },
    {
      id: 'recursive',
      view: {
        form: true,
        title: true,
        subTitle: true,
      },
      _group: [
        {
          id: 'any',
          view: {
            form: true,
            title: true,
            subTitle: true,
          },
        },
      ],
    }
  ]
  model: Imodel2 = {
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
          valueDefault: null
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
      _group: this.userModel.model._group,
      colection: {
        title: 'name',
        subTitle: 'email',
        description: 'userId'
      }
    },
    [`account-adm-new`]: {
      id: 'account-adm-new',
      typeData: 'object',
      typeInput: 'group',
      text: {
        en: {
          label: 'New Account',
          valueTest: 'Valor Teste',
          placeholder: 'Faça su conta',
          clearInput: 'Clear',
          valueDefault: null
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
        name: this.userModel.model._group.name,
        email: this.emailAccountExistResponseErrorAsync,
        phone: this.userModel.model._group.phone,
        password: this.userModel.model._group.password,
        acceptTerms: this.userModel.model._group.acceptTerms,
      },
      colection: {
        title: 'name',
        subTitle: 'email',
        description: 'userId'
      }
    },
    [`sign-in`]: {
      id: 'sign-in',
      _group: {
        email: { ...this.emailAccountExistResponseSucessAsync },
        password: this.userModel.model._group.password
      },
      typeData: 'object',
      typeInput: 'group',
      text: {
        en: {
          label: 'Login',
          valueTest: 'Valor Teste',
          placeholder: 'Faça su login',
          clearInput: 'Clear',
          valueDefault: null
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
      }
    },
    [`recursive`]: {
      id: 'recursive',
      typeData: 'object',
      typeInput: 'group',
      text: {
        en: {
          label: 'Login',
          valueTest: 'Valor Teste',
          placeholder: 'Faça su login',
          clearInput: 'Clear',
          valueDefault: null
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
              valueDefault: null,
              placeholder: 'Fill in you name',
              clearInput: 'Clear'
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
            mask: 'namePersonal',
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
        }
      },
    },
    [`null`]: {
      id: 'null',
      typeData: 'object',
      typeInput: 'group',
      text: {
        en: {
          label: 'Login',
          valueTest: 'Valor Teste',
          placeholder: 'Faça su login',
          clearInput: 'Clear',
          valueDefault: null
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
              valueDefault: null,
              placeholder: 'Fill in you name',
              clearInput: 'Clear'
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
            mask: 'namePersonal',
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
        }
      },
    },
  }
  document: Idoc = {
    [`user-adm`]: {
      "emailVerified": false,
      "password": "123456",
      "multiFactor": false,
      "name": "Emerson Felix",
      "acceptTerms": true,
      "phone": "11981231970",
      "nivel": "adm",
      "userId": "mvP0YpF2NIm0EFf50gfTR7EnBNUz",
      "email": "contato@v8sites.com.br"
    },
    [`account-adm-new`]: {
      name: 'Emerson Felix',
      email: 'contato@v8sites.com.br',
      phone: '11981231970',
      password: '123456',
      acceptTerms: true
    },
    [`sign-in`]: {
      email: 'contato@v8sites.com.br',
      password: '123456',
    },
    [`recursive`]: {
      any: 'any',
    },
    [`null`]: {
      any: 'any',
    },
  }
  colection: Icol = {} as any

  getRecursive(module: Irequest['document']) {

    const permission = this.permission.filter((permissions) => permissions.id == module)
    const model = this.model as unknown as ImodelRecursive
    const document = this.document[module]

    permission.length ? 'tem' : console.log(`não tem Permission: ${module}`)
    this.model[module] ? 'tem' : console.log(`não tem Model: ${module}`)
    this.document[module] ? 'tem' : console.log(`não tem Document: ${module}`)

    return {
      get permission() { return permission as unknown as IpermissionRecursive[] },
      get model() { return model as unknown as ImodelRecursive },
      get document() { return document as unknown as any }
    };
  }

}