import { Icol, IpermissionRecursive, Idoc, Imodel2, Irequest, ImodelRecursive, Isettings, Ipermission } from "../../shared/interface"
import { action, level } from './data-text-language';
import { DataModel } from './data-model';
import { inputModel, inputType, inputTypeHtml } from "./data-variables";
import { _permission } from "./data-permission";
import { _router } from "./data-router-path";

export class DataLocal extends DataModel {

  settings: Isettings = {
    theme: 'dark',
    fontSize: 0,
    language: 'en'
  }

  text = { action, level }
  variable = { inputModel, inputType, inputTypeHtml }

  permission: Ipermission = _permission;
  perm = {
    system:''
  }

  model: Imodel2 = {
    [`user-adm`]: {
      id: 'user-adm',
      typeModel: 'object',
      typeInput: 'group',
      typeInputHtml: 'text',
      text: {
        en: {
          label: 'Users Adm',
          valueTest: 'Valor Teste',
          placeholder: 'Faça su conta',
          clearInput: 'Clear',
          valueDefault: null
        },
        pt: {
          label: 'Usuários Adm',
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
      typeModel: 'object',
      typeInput: 'group',
      typeInputHtml: 'text',
      text: {
        en: {
          label: 'New Account',
          valueTest: 'Value Test',
          placeholder: 'Create Account',
          clearInput: 'Clear',
          valueDefault: null
        },
        pt: {
          label: 'Nova Conta',
          valueTest: 'Valor Teste',
          placeholder: 'Create Account',
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
      typeModel: 'object',
      typeInput: 'group',
      typeInputHtml: 'text',
      text: {
        en: {
          label: 'Log In',
          valueTest: 'Value Test',
          placeholder: 'Text Name',
          clearInput: 'Clear',
          valueDefault: null
        },
        pt: {
          label: 'Login',
          valueTest: 'Valor Teste',
          placeholder: 'Texto Nome',
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
      typeModel: 'object',
      typeInput: 'group',
    typeInputHtml: 'text',
      text: {
        en: {
          label: 'Login',
          valueTest: 'Value Test',
          placeholder: 'Text Name',
          clearInput: 'Clear',
          valueDefault: null
        },
        pt: {
          label: 'Login',
          valueTest: 'Valor Teste',
          placeholder: 'Texto Nome',
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
          typeModel: 'value',
          typeInput: 'generic',
          typeInputHtml: 'text',
          text: {
            en: {
              label: 'Personal Name',
              valueTest: 'Value Test',
              placeholder: 'Text Name',
              clearInput: 'Clear',
              valueDefault: null
            },
            pt: {
              label: 'Nome',
              valueTest: 'Valor Teste',
              placeholder: 'Texto Nome',
              clearInput: 'Clear',
              valueDefault: null
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
    [`dashboard`]: {
      id: 'dashboard',
      typeModel: 'object',
      typeInput: 'group',
      typeInputHtml: 'text',
      text: {
        en: {
          label: 'Dashboard',
          valueTest: 'Value Test',
          placeholder: 'Text Name',
          clearInput: 'Clear',
          valueDefault: null
        },
        pt: {
          label: 'Dashboard',
          valueTest: 'Valor Teste',
          placeholder: 'Texto Nome',
          clearInput: 'Limpar',
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
          typeModel: 'value',
          typeInput: 'group',
          typeInputHtml: 'text',
          text: {
            en: {
              label: 'Personal Name',
              valueTest: 'Valor Teste',
              placeholder: 'Text Name',
              clearInput: 'Clear',
              valueDefault: null
            },
            pt: {
              label: 'Name',
              valueTest: 'Valor Teste',
              placeholder: 'Texto Nome',
              clearInput: 'Clear',
              valueDefault: null
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
      typeModel: 'object',
      typeInput: 'group',
      typeInputHtml: 'text',
      text: {
        en: {
          label: 'Null',
          valueTest: 'Valor Teste',
          placeholder: 'Text Name',
          clearInput: 'Clear',
          valueDefault: null
        },
        pt: {
          label: 'Null',
          valueTest: 'Valor Teste',
          placeholder: 'Texto Nome',
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
          typeModel: 'value',
          typeInput: 'group',
          typeInputHtml: 'text',
          text: {
            en: {
              label: 'Personal Name',
              valueTest: 'Valor Teste',
              placeholder: 'Text Name',
              clearInput: 'Clear',
              valueDefault: null
            },
            pt: {
              label: 'Name',
              valueTest: 'Valor Teste',
              placeholder: 'Texto Nome',
              clearInput: 'Clear',
              valueDefault: null
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
    [`dashboard`]: {
      any: 'any',
    },
  }
  colection: Icol = {} as any
 
  constructor(){
    super();
    this.permission = _permission
  }

  getRecursive(module: Irequest['document']) {
   
    const level = _router('', '')[module].frontAnd.level
    const permission = this.permission[level].filter((permissions) => permissions.id == module)
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