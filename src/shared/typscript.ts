import { ModelUser } from "../domain/model/users";
/* import { ImodelRecursive, IpermissionRecursive } from "./interface"; */

/* import { Idoc, IpermissionView } from "./interface"; */
/* import { Idoc, Irequest } from "./interface"; */
/* const mod: ImodelRecursive = {
  'recursive': {
    id: 'recursive',
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
      'name': {
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
      }
    },
  }
} */

/* const tes: IpermissionRecursive = {
  id: 'sign-in',
  view: {
    form: true,
    title: true,
    subTitle: true,
  },
  'colection': 'account-adm',
  _group: [{
    id: 'sign-in',
    view: {
      form: true,
      title: true,
      subTitle: true,
    },
    'colection': 'account-adm'
  },
  {
    id: 'sign-in',
    view: {
      form: true,
      title: true,
      subTitle: true,
    },
    'colection': 'account-adm'
  }]
} */

/* interface Ipermission {
  id: string;
  view: {
    form: boolean;
    title: boolean;
    subTitle: boolean;
  }
  colection?: Irequest['document']
  _group?: Ipermission[]
} */
/* interface IpermissionBase {
  view: {
    form: boolean;
    title: boolean;
    subTitle: boolean;
  }
  colection?: Irequest['document']
} */

/* type IpermissionRecursive<name extends keyof Idoc> = IpermissionBase & {
  id: name;
  _group: { [key in keyof Idoc[name]]: { id: key } & IpermissionBase }[]
} */

export type NameProperty<T> = { [K in keyof T]: K }[keyof T];
export type NameValue<T> = T[keyof T]

/* type TestIf<name extends keyof Idoc> = {
  id: name extends 'recursive' ? string : name;
  view: IpermissionView
  _group?: name extends 'recursive' ?
  TestIf<'recursive'>[] : { [key in keyof Idoc[name]as `id` | `view`]: key | IpermissionView }[]
  
}
const testIf: TestIf<'any'> = {
  id: 'teste',
  view: {
    form: true,
    title: true,
    subTitle: true,
  },
  _group: [
    {
      id: 'casa',
      view: {
        form: true,
        title: true,
        subTitle: true,
      },
      _group:[{id:'adsfa',
      view: {
        form: true,
        title: true,
        subTitle: true,
      }
      
      }]
    },
  ],
} */

/* export type IpermissionCreate<name extends keyof Idoc> = {
  id: name
  view: IpermissionView
  colection?: keyof Idoc
  _group?: {
    [ x in keyof Idoc[name] as `id` | 'view' ] : keyof Idoc[name] | IpermissionView }[]
} */



//Prova de conceito TYPE a partir de Objeto
/* export class Teste {
  nome = 'felix' || 'teste'
  objeto = { casa: 'casa1', teste: 'as' }
  lista = ['ricado', 'teste']
}
const nome: Teste['nome'] = 'tte' || 'asdf'
const objeto: Teste['objeto'] = { 'casa': 'casawww', 'teste': 'awes' }
const lista: Teste['lista'] = ['ricado', 'teste'] */

// Prova de conceito 2

export type Doc = {
  [`user-create-adm`]: Pick<ModelUser, 'name' | 'email'>
}
export type Permission2<name extends keyof Doc> = { [x in keyof Doc[name]as `id` | 'view']: keyof Doc[name] | {
  form: boolean;
  title: boolean;
  subTitle: boolean;
} };
export type GroupSub<name> = {
  id: name
  view: {
    form: boolean;
    title: boolean;
    subTitle: boolean;
  }
}

export const permission2: Permission2<'user-create-adm'>[] = [{
  'id': 'name', view: {
    form: true,
    title: true,
    subTitle: true
  }
}, {
  'id': 'email', view: {
    form: true,
    title: true,
    subTitle: true
  }
}]