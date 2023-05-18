import { Icol, IpermissionRecursive, Idoc, Imodel2, Irequest, ImodelRecursive, Isettings, Ipermission } from "../../shared/interface"
import { action, level } from './data-text-language';
import { DataModel } from './data-model';
import { inputModel, inputType, inputTypeHtml } from "./data-variables";
import { _permission } from "./data-permission";
import { _router } from "./data-router-path";
import { _document } from "./data.document";

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
    [`developing-one`]: {
      id: 'developing-one',
      typeModel: 'object',
      typeInput: 'group',
      typeInputHtml: 'text',
      text: {
        en: {
          label: 'Developing 1',
          valueTest: 'Value Test',
          placeholder: 'Account',
          clearInput: 'Clear',
          valueDefault: null
        },
        pt: {
          label: 'Desenvolvimento 1',
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
        'email': this.userModel.model._group.email,
        'name': this.userModel.model._group.name,
        'phone': this.userModel.model._group.phone,
      },
      colection: {
        title: 'name',
        subTitle: 'email',
        description: 'userId'
      }
    },
    [`developing-two`]: {
      id: 'developing-two',
      typeModel: 'object',
      typeInput: 'group',
      typeInputHtml: 'text',
      text: {
        en: {
          label: 'Developing 2',
          valueTest: 'Vue Test',
          placeholder: 'Account',
          clearInput: 'Clear',
          valueDefault: null
        },
        pt: {
          label: 'Desenvolvimento 2',
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
        'email': this.userModel.model._group.email,
        'name': this.userModel.model._group.name,
        'phone': this.userModel.model._group.phone,
      },
      colection: {
        title: 'name',
        subTitle: 'email',
        description: 'userId'
      }
    },
    [`partner-developing-one`]: {
      id: 'partner-developing-one',
      typeModel: 'object',
      typeInput: 'group',
      typeInputHtml: 'text',
      text: {
        en: {
          label: 'Developing Partner 1',
          valueTest: 'Value Test',
          placeholder: 'Account',
          clearInput: 'Clear',
          valueDefault: null
        },
        pt: {
          label: 'Desenvolvimento Parceiro 1',
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
        'email': this.userModel.model._group.email,
        'name': this.userModel.model._group.name,
        'phone': this.userModel.model._group.phone,
      },
      colection: {
        title: 'name',
        subTitle: 'email',
        description: 'userId'
      }
    },
    [`partner-developing-two`]: {
      id: 'partner-developing-two',
      typeModel: 'object',
      typeInput: 'group',
      typeInputHtml: 'text',
      text: {
        en: {
          label: 'Developing Partner 2',
          valueTest: 'Vue Test',
          placeholder: 'Account',
          clearInput: 'Clear',
          valueDefault: null
        },
        pt: {
          label: 'Desenvolvimento Parceiro 2',
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
        'email': this.userModel.model._group.email,
        'name': this.userModel.model._group.name,
        'phone': this.userModel.model._group.phone,
      },
      colection: {
        title: 'name',
        subTitle: 'email',
        description: 'userId'
      }
    },
    [`partner-developing-three`]: {
      id: 'partner-developing-three',
      typeModel: 'object',
      typeInput: 'group',
      typeInputHtml: 'text',
      text: {
        en: {
          label: 'Developing Partner 3',
          valueTest: 'Vue Test',
          placeholder: 'Account',
          clearInput: 'Clear',
          valueDefault: null
        },
        pt: {
          label: 'Desenvolvimento Parceiro 3',
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
        'email': this.userModel.model._group.email,
        'name': this.userModel.model._group.name,
        'phone': this.userModel.model._group.phone,
      },
      colection: {
        title: 'name',
        subTitle: 'email',
        description: 'userId'
      }
    },
    [`client-developing-one`]: {
      id: 'client-developing-one',
      typeModel: 'object',
      typeInput: 'group',
      typeInputHtml: 'text',
      text: {
        en: {
          label: 'Developing Client 1',
          valueTest: 'Vue Test',
          placeholder: 'Account',
          clearInput: 'Clear',
          valueDefault: null
        },
        pt: {
          label: 'Desenvolvimento Cliente 1',
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
        'email': this.userModel.model._group.email,
        'name': this.userModel.model._group.name,
        'phone': this.userModel.model._group.phone,
      },
      colection: {
        title: 'name',
        subTitle: 'email',
        description: 'userId'
      }
    },
    [`client-developing-two`]: {
      id: 'client-developing-two',
      typeModel: 'object',
      typeInput: 'group',
      typeInputHtml: 'text',
      text: {
        en: {
          label: 'Developing Client 2',
          valueTest: 'Vue Test',
          placeholder: 'Account',
          clearInput: 'Clear',
          valueDefault: null
        },
        pt: {
          label: 'Desenvolvimento Cliente 2',
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
        'email': this.userModel.model._group.email,
        'name': this.userModel.model._group.name,
        'phone': this.userModel.model._group.phone,
      },
      colection: {
        title: 'name',
        subTitle: 'email',
        description: 'userId'
      }
    },
    [`client-developing-three`]: {
      id: 'client-developing-three',
      typeModel: 'object',
      typeInput: 'group',
      typeInputHtml: 'text',
      text: {
        en: {
          label: 'Developing Client 3',
          valueTest: 'Vue Test',
          placeholder: 'Account',
          clearInput: 'Clear',
          valueDefault: null
        },
        pt: {
          label: 'Desenvolvimento Cliente 3',
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
        'email': this.userModel.model._group.email,
        'name': this.userModel.model._group.name,
        'phone': this.userModel.model._group.phone,
      },
      colection: {
        title: 'name',
        subTitle: 'email',
        description: 'userId'
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
  document: Idoc = _document
  colection: Icol = {} as any
 
  constructor(){
    super();
    this.permission = _permission
  }

  getRecursive(module: Irequest['document']) {

    const level = _router('test', 'localhost')[module].level

    const permission = this.permission[level as 'adm'].filter((permissions: any) => permissions.id == module)
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