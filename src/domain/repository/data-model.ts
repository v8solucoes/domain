import { UserModel, ClientModel, ClientPendency, IModelSendMessage } from "../../shared/interface"

export class DataModel {
  
  emailAccountExistResponseErrorAsync: UserModel['model']['_group']['email'] = {

    id: 'email',
    typeModel: 'value',
    typeInput: 'generic',
    typeInputHtml: 'email',
    text: {
      en: {
        label: 'E-mail',
        valueTest: 'Test Email',
        placeholder: 'Fill in you email',
        clearInput: 'Clear',
        valueDefault: null
      },
      pt: {
        label: 'E-mail',
        valueTest: 'Test Email',
        placeholder: 'Digite seu email',
        clearInput: 'Limpar',
        valueDefault: null
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

  }
  emailAccountExistResponseSucessAsync: UserModel['model']['_group']['email'] = {

    id: 'email',
    typeModel: 'value',
    typeInput: 'generic',
    typeInputHtml: 'text',
    text: {
      en: {
        label: 'E-mail',
        valueTest: 'Test Email',
        placeholder: 'Fill in you email',
        clearInput: 'Clear',
        valueDefault: null
      },
      pt: {
        label: 'E-mail',
        valueTest: 'Test Email',
        placeholder: 'Digite seu email',
        clearInput: 'Limpar',
        valueDefault: null
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
    }
  }
  emailSimpleValidation: UserModel['model']['_group']['email'] = {

    id: 'email',
    typeModel: 'value',
    typeInput: 'generic',
    typeInputHtml: 'email',
    text: {
      en: {
        label: 'E-mail',
        valueTest: 'Test Email',
        placeholder: 'Fill in you email',
        clearInput: 'Clear',
        valueDefault: null
      },
      pt: {
        label: 'E-mail',
        valueTest: 'Test Email',
        placeholder: 'Digite seu email',
        clearInput: 'Limpar',
        valueDefault: null
      },
    },
    validate: {
      sync: ['emailValidate'],
      async: [],
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
    }
  }
  emailSimpleValidationPrimary: ClientModel['model']['_group']['emailPrimary'] = {

    id: 'emailPrimary',
    typeModel: 'value',
    typeInput: 'generic',
    typeInputHtml: 'email',
    text: {
      en: {
        label: 'E-mail',
        valueTest: 'Test Email',
        placeholder: 'Fill in you email',
        clearInput: 'Clear',
        valueDefault: null
      },
      pt: {
        label: 'E-mail',
        valueTest: 'Test Email',
        placeholder: 'Digite seu email',
        clearInput: 'Limpar',
        valueDefault: null
      },
    },
    validate: {
      sync: ['emailValidate'],
      async: [],
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
    }
  }
  emailSimpleValidationSecundary: ClientModel['model']['_group']['emailSecundary'] = {

    id: 'emailSecundary',
    typeModel: 'value',
    typeInput: 'generic',
    typeInputHtml: 'email',
    text: {
      en: {
        label: 'E-mail',
        valueTest: 'Test Email',
        placeholder: 'Fill in you email',
        clearInput: 'Clear',
        valueDefault: null
      },
      pt: {
        label: 'E-mail',
        valueTest: 'Test Email',
        placeholder: 'Digite seu email',
        clearInput: 'Limpar',
        valueDefault: null
      },
    },
    validate: {
      sync: ['emailValidate'],
      async: [],
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
    }
  }

  userModel: UserModel = {
    model: {
      id: 'user-adm',
      typeModel: 'object',
      typeInput: 'group',
      typeInputHtml: 'text',
      text: {
        en: {
          label: 'Administrator',
          valueTest: 'Value Test',
          placeholder: 'Preencha',
          clearInput: 'Clear',
          valueDefault: null
        },
        pt: {
          label: 'Administrador',
          valueTest: 'Teste Valor',
          placeholder: 'Preencha',
          clearInput: 'Limpar',
          valueDefault: null
        }
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
              valueTest: 'Test Name',
              valueDefault: null,
              placeholder: 'Fill in you name',
              clearInput: 'Clear'
            },
            pt: {
              label: 'Nome',
              valueTest: 'Teste Nome',
              valueDefault: null,
              placeholder: 'Preencha seu Nome',
              clearInput: 'Limpar'
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
        },
        email: {...this.emailSimpleValidation
          
        },
        phone: {
          id: 'phone',
          typeModel: 'value',
          typeInput: 'generic',
          typeInputHtml: 'text',
          text: {
            en: {
              label: 'Telephone',
              valueTest: 'Test Telephone',
              valueDefault: null,
              placeholder: 'Fill in your Telephone',
              clearInput: 'Clear',
            },
            pt: {
              label: 'Telefone',
              valueTest: 'Teste Telefone',
              valueDefault: null,
              placeholder: 'Preencha seu Telefone',
              clearInput: 'Limpar',
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
          typeModel: 'value',
          typeInput: 'generic',
          typeInputHtml: 'password',
          text: {
            en: {
              label: 'Password',
              valueTest: false,
              valueDefault: null,
              placeholder: 'Password',
              clearInput: 'Clear',
            },
            pt: {
              label: 'Senha',
              valueTest: false,
              valueDefault: null,
              placeholder: 'Senha',
              clearInput: 'Limpar',
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
          typeModel: 'value',
          typeInput: 'acceptTerms',
          typeInputHtml: 'text',
          text: {
            en: {
              label: 'Accept Terms',
              valueTest: false,
              valueDefault: null,
              placeholder: 'Accept Terms',
              clearInput: 'Clear',
            },
            pt: {
              label: 'Aceitar Termos',
              valueTest: false,
              valueDefault: null,
              placeholder: 'Aceitar Termos',
              clearInput: 'Limpar',
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
          typeModel: 'value',
          typeInput: 'booleanToggle',
          typeInputHtml: 'text',
          text: {
            en: {
              label: 'Email Verified',
              valueTest: false,
              valueDefault: false,
              placeholder: 'Accept Terms',
              clearInput: 'Clear',
            },
            pt: {
              label: 'Email Verificado',
              valueTest: false,
              valueDefault: false,
              placeholder: 'Aceitar Termos',
              clearInput: 'Limpar',
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
          typeModel: 'value',
          typeInput: 'booleanToggle',
          typeInputHtml: 'text',
          text: {
            en: {
              label: 'Multi Factor',
              valueTest: false,
              valueDefault: false,
              placeholder: 'Mult Factor',
              clearInput: 'Clear',
            },
            pt: {
              label: 'Multi Fator',
              valueTest: false,
              valueDefault: false,
              placeholder: 'Multi Fator',
              clearInput: 'Limpar',
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
        level: {
          id: 'level',
          typeModel: 'value',
          typeInput: 'generic',
          typeInputHtml: 'text',
          text: {
            en: {
              label: 'Nível',
              valueTest: false,
              valueDefault: null,
              placeholder: 'Nivel',
              clearInput: 'Clear',
            },
            pt: {
              label: 'Nível',
              valueTest: false,
              valueDefault: null,
              placeholder: 'Nivel',
              clearInput: 'Limpar',
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
          typeModel: 'value',
          typeInput: 'generic',
          typeInputHtml: 'text',
          text: {
            en: {
              label: 'User Id',
              valueTest: false,
              valueDefault: null,
              placeholder: 'ID',
              clearInput: 'Clear',
            },
            pt: {
              label: 'User Id',
              valueTest: false,
              valueDefault: null,
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
    }
  }

  clientModel: ClientModel = {
    model: {
      id: 'client-adm',
      typeModel: 'object',
      typeInput: 'group',
      typeInputHtml: 'text',
      text: {
        en: {
          label: 'Client Adm',
          valueTest: 'Value Test',
          placeholder: 'Preencha',
          clearInput: 'Clear',
          valueDefault: null
        },
        pt: {
          label: 'Cliente Adm',
          valueTest: 'Teste Valor',
          placeholder: 'Preencha',
          clearInput: 'Limpar',
          valueDefault: null
        }
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
        namePersonal: {
          id: 'namePersonal',
          typeModel: 'value',
          typeInput: 'generic',
          typeInputHtml: 'text',
          text: {
            en: {
              label: 'Personal Name',
              valueTest: 'Test Name',
              valueDefault: null,
              placeholder: 'Fill in you name',
              clearInput: 'Clear'
            },
            pt: {
              label: 'Nome Pessoal',
              valueTest: 'Teste Nome',
              valueDefault: null,
              placeholder: 'Preencha seu Nome',
              clearInput: 'Limpar'
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
        },
        nameFantasy: {
          id: 'nameFantasy',
          typeModel: 'value',
          typeInput: 'generic',
          typeInputHtml: 'text',
          text: {
            en: {
              label: 'Fantasy Name',
              valueTest: 'Test Name',
              valueDefault: null,
              placeholder: 'Fill in you name',
              clearInput: 'Clear'
            },
            pt: {
              label: 'Nome Fantasia',
              valueTest: 'Teste Nome',
              valueDefault: null,
              placeholder: 'Preencha seu Nome',
              clearInput: 'Limpar'
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
        },
        nameCorporate: {
          id: 'nameCorporate',
          typeModel: 'value',
          typeInput: 'generic',
          typeInputHtml: 'text',
          text: {
            en: {
              label: 'Corporate Name',
              valueTest: 'Test Name',
              valueDefault: null,
              placeholder: 'Fill in you name',
              clearInput: 'Clear'
            },
            pt: {
              label: 'Razão Social',
              valueTest: 'Teste Nome',
              valueDefault: null,
              placeholder: 'Preencha seu Nome',
              clearInput: 'Limpar'
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
        },
        emailPrimary: {...this.emailSimpleValidationPrimary
        },
        emailSecundary: {...this.emailSimpleValidationSecundary 
        },
        phonePrimary: {
          id: 'phonePrimary',
          typeModel: 'value',
          typeInput: 'generic',
          typeInputHtml: 'text',
          text: {
            en: {
              label: 'Telephone Primary',
              valueTest: 'Test Telephone',
              valueDefault: null,
              placeholder: 'Fill in your Telephone',
              clearInput: 'Clear',
            },
            pt: {
              label: 'Telefone Principal',
              valueTest: 'Teste Telefone',
              valueDefault: null,
              placeholder: 'Preencha seu Telefone',
              clearInput: 'Limpar',
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
        phoneSecundary: {
          id: 'phoneSecundary',
          typeModel: 'value',
          typeInput: 'generic',
          typeInputHtml: 'text',
          text: {
            en: {
              label: 'Telephone Primary',
              valueTest: 'Test Telephone',
              valueDefault: null,
              placeholder: 'Fill in your Telephone',
              clearInput: 'Clear',
            },
            pt: {
              label: 'Telefone Principal',
              valueTest: 'Teste Telefone',
              valueDefault: null,
              placeholder: 'Preencha seu Telefone',
              clearInput: 'Limpar',
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
        cpfCnpj: {
          id: 'cpfCnpj',
          typeModel: 'value',
          typeInput: 'generic',
          typeInputHtml: 'text',
          text: {
            en: {
              label: 'CPF or CNPJ',
              valueTest: false,
              valueDefault: null,
              placeholder: 'Nivel',
              clearInput: 'Clear',
            },
            pt: {
              label: 'CPF ou CNPJ',
              valueTest: false,
              valueDefault: null,
              placeholder: 'Nivel',
              clearInput: 'Limpar',
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
    }
  }

  clientPendency: ClientPendency = {
    model: {
      id: 'pendency',
      typeModel: 'object',
      typeInput: 'group',
      typeInputHtml: 'text',
      text: {
        en: {
          label: 'Pendency',
          valueTest: 'Value Test',
          placeholder: 'Preencha',
          clearInput: 'Clear',
          valueDefault: null
        },
        pt: {
          label: 'Pendências',
          valueTest: 'Teste Valor',
          placeholder: 'Preencha',
          clearInput: 'Limpar',
          valueDefault: null
        }
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
       'document': {
          id: 'document',
          typeModel: 'value',
          typeInput: 'generic',
          typeInputHtml: 'text',
          text: {
            en: {
              label: 'Documents',
              valueTest: 'Test Name',
              valueDefault: null,
              placeholder: 'Fill in you name',
              clearInput: 'Clear'
            },
            pt: {
              label: 'Documentos',
              valueTest: 'Teste Nome',
              valueDefault: null,
              placeholder: 'Preencha seu Nome',
              clearInput: 'Limpar'
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
        },
       'firstContact': {
          id: 'firstContact',
          typeModel: 'value',
          typeInput: 'generic',
          typeInputHtml: 'text',
          text: {
            en: {
              label: 'First Contact',
              valueTest: 'Test Name',
              valueDefault: null,
              placeholder: 'Fill in you name',
              clearInput: 'Clear'
            },
            pt: {
              label: 'Primeiro Contato',
              valueTest: 'Teste Nome',
              valueDefault: null,
              placeholder: 'Preencha seu Nome',
              clearInput: 'Limpar'
            },
          },
          validate: {
            sync: [],
            async: [],
            updateOn: 'change',
            disabled: false,
            valueMin: 8,
            valueMax: 35,
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
        'inspection': {
          id: 'inspection',
          typeModel: 'value',
          typeInput: 'generic',
          typeInputHtml: 'text',
          text: {
            en: {
              label: 'Inspection',
              valueTest: 'Test Name',
              valueDefault: null,
              placeholder: 'Fill in you name',
              clearInput: 'Clear'
            },
            pt: {
              label: 'Inspeção',
              valueTest: 'Teste Nome',
              valueDefault: null,
              placeholder: 'Preencha seu Nome',
              clearInput: 'Limpar'
            },
          },
          validate: {
            sync: [],
            async: [],
            updateOn: 'change',
            disabled: false,
            valueMin: 8,
            valueMax: 35,
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
        'payment': {
          id: 'payment',
          typeModel: 'value',
          typeInput: 'generic',
          typeInputHtml: 'text',
          text: {
            en: {
              label: 'Payment',
              valueTest: 'Test Telephone',
              valueDefault: null,
              placeholder: 'Fill in your Telephone',
              clearInput: 'Clear',
            },
            pt: {
              label: 'Pagamento',
              valueTest: 'Teste Telefone',
              valueDefault: null,
              placeholder: 'Preencha seu Telefone',
              clearInput: 'Limpar',
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
        'proposalFast': {
          id: 'proposalFast',
          typeModel: 'value',
          typeInput: 'generic',
          typeInputHtml: 'text',
          text: {
            en: {
              label: 'Proposal Fast',
              valueTest: 'Test Telephone',
              valueDefault: null,
              placeholder: 'Fill in your Telephone',
              clearInput: 'Clear',
            },
            pt: {
              label: 'Proposta Rápida',
              valueTest: 'Teste Telefone',
              valueDefault: null,
              placeholder: 'Preencha seu Telefone',
              clearInput: 'Limpar',
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
       'signature': {
          id: 'signature',
          typeModel: 'value',
          typeInput: 'generic',
          typeInputHtml: 'text',
          text: {
            en: {
              label: 'Signature',
              valueTest: false,
              valueDefault: null,
              placeholder: 'Nivel',
              clearInput: 'Clear',
            },
            pt: {
              label: 'Assinatura',
              valueTest: false,
              valueDefault: null,
              placeholder: 'Nivel',
              clearInput: 'Limpar',
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
       'proposalComplete': {
          id: 'proposalComplete',
          typeModel: 'value',
          typeInput: 'generic',
          typeInputHtml: 'text',
          text: {
            en: {
              label: 'Proposal Complete',
              valueTest: false,
              valueDefault: null,
              placeholder: 'Nivel',
              clearInput: 'Clear',
            },
            pt: {
              label: 'Proposta Completa',
              valueTest: false,
              valueDefault: null,
              placeholder: 'Nivel',
              clearInput: 'Limpar',
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
    }
  }
  sendMessage: IModelSendMessage = {
    model: {
      id: 'send-message',
      typeModel: 'object',
      typeInput: 'group',
      typeInputHtml: 'text',
      text: {
        en: {
          label: 'Send Message',
          valueTest: 'Value Test',
          placeholder: 'Preencha',
          clearInput: 'Clear',
          valueDefault: null
        },
        pt: {
          label: 'Enviar Mensagem',
          valueTest: 'Teste Valor',
          placeholder: 'Preencha',
          clearInput: 'Limpar',
          valueDefault: null
        }
      },
      validate: {
        sync: [],
        async: [],
        updateOn: 'change',
        disabled: false,
        valueMin: 8,
        valueMax: 35,
        required: false,
        mask: 'anyResNull',
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
       'title': {
          id: 'title',
          typeModel: 'value',
          typeInput: 'generic',
          typeInputHtml: 'text',
          text: {
            en: {
              label: 'Title',
              valueTest: 'Test Name',
              valueDefault: null,
              placeholder: 'Fill in you name',
              clearInput: 'Clear'
            },
            pt: {
              label: 'Título',
              valueTest: 'Teste Nome',
              valueDefault: null,
              placeholder: 'Preencha seu Nome',
              clearInput: 'Limpar'
            },
          },
          validate: {
            sync: [],
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
        },
       'message': {
          id: 'message',
          typeModel: 'value',
          typeInput: 'generic',
          typeInputHtml: 'text',
          text: {
            en: {
              label: 'Message',
              valueTest: 'Test Name',
              valueDefault: null,
              placeholder: 'Fill in you name',
              clearInput: 'Clear'
            },
            pt: {
              label: 'Mensagem',
              valueTest: 'Teste Nome',
              valueDefault: null,
              placeholder: 'Preencha seu Nome',
              clearInput: 'Limpar'
            },
          },
          validate: {
            sync: [],
            async: [],
            updateOn: 'change',
            disabled: false,
            valueMin: 8,
            valueMax: 35,
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
        }

      },
      colection: {
        title: 'name',
        subTitle: 'email',
        description: 'userId'
      }
    }
  }

}