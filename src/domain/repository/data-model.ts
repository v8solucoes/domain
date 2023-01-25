import { UserModel } from "../../shared/interface"

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

}