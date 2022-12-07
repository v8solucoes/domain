import { UserModel } from "../../shared/interface"

export class DataModel {

  emailAccountExistResponseErrorAsync: UserModel['model']['_group']['email'] = {

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

  }
  emailAccountExistResponseSucessAsync: UserModel['model']['_group']['email'] = {

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
    }
  }

  userModel: UserModel = {
    model: {
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
        phone: {
          id: 'phone',
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
    }
  }
}