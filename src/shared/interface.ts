import { ModelUser } from "../domain/model/users";
import { ValidatorsRemote } from "../domain/validators/validators-remote";
import { NameProperty } from "./typscript";
import { ValidatorsLocal } from "./validator-local";

export { ModelUser as ImodelUser }

// FORM GROUP

export interface FormControl<T> {
  permission: Ipermission2[number];
  model: Imodel2;
  document: any
  language: Irequest['language']
  request: Irequest
  form: T
}

//Constructor DOCUMENT / COLECTION
export type UserModel = {
  model: ImodelCreate<'user-adm'>
}

export type Idoc = {

  [`user-adm`]: Pick<ModelUser, 'name' | 'email' | 'phone' | 'password' | 'acceptTerms' | 'emailVerified' | 'multiFactor' | 'nivel' | 'userId'>
  [`account-adm-new`]: Pick<ModelUser, 'name' | 'email' | 'phone' | 'password' | 'acceptTerms'>
  [`sign-in`]: Pick<ModelUser, 'email' | 'password'>
  [`dashboard`]: { [x:string] : string}

  // funcões básicas do sistema não modificar
  [`recursive`]: { [x: string]: string }
  [`null`]: { [x:string] : string}
}
export type test = { oi:string}
export type Icol = { [key in keyof Idoc]: { [x:string]: any } }
export type Icontrollers = { [key in keyof Idoc]: Record<Irequest['action'], () => Promise<IresponseValidatorCompose | null> > }

//Constructor PERMISSION

export interface IpermissionView {
  form: boolean;
  title: boolean;
  subTitle: boolean;
}

export type IpermissionCreate<name extends keyof Idoc> = {
  id: name
  view: IpermissionView
  colection?: Irequest['document']
  _group: { [key in keyof Idoc[name] as `id` | `view` ] :  key | IpermissionView }[]
}
export type IpermissionRecursive =
  Record<keyof Pick<IpermissionCreate<'recursive'>, 'id'>, string> &
  Record<keyof Pick<IpermissionCreate<'recursive'>, 'view'>, IpermissionView> &
  Partial<Record<keyof Pick<IpermissionCreate<'recursive'>, '_group'>, IpermissionRecursive[]>> &
  Partial<Record<keyof Pick<IpermissionCreate<'recursive'>, 'colection'>, Irequest['document']>>

export type IpermissionRecursiveConfig = IpermissionRecursive
export type Isettings = {
  theme: 'dark' | 'ligth',
  fontSize: number,
  language: Irequest['language']
}
export type Ipermission2 = [
    IpermissionCreate<'user-adm'>,
    IpermissionCreate<'account-adm-new'>,
    IpermissionCreate<'sign-in'>,
    IpermissionCreate<'recursive'>,
  ]

//Constructor Model

export interface ImodelConfig {

  typeModel: 'object' | 'array' | 'value'
  typeInput: 'generic'| 'booleanToggle' | 'acceptTerms' | 'group';
  typeInputHtml: 'password'| 'email' | 'text';
  text: {
    en: {
      clearInput: string;
      label: string;
      valueTest: string | boolean;
      valueDefault: any;
      placeholder: string;
      prefix?: string;
      suffix?: string;
      help?: string;
      hintStart?: string;
      hintEnd?: string;
      sucess?: string;
      error?: string;
    },
    pt: {
      clearInput: string;
      label: string;
      valueTest: string | boolean;
      valueDefault: any;
      placeholder: string;
      prefix?: string;
      suffix?: string;
      help?: string;
      hintStart?: string;
      hintEnd?: string;
      sucess?: string;
      error?: string;
    },
  },
  validate: {
    sync: InameValidatorLocal[];
    async: InameValidatorRemote[];
    updateOn: 'blur' | 'submit' | 'change';
    disabled: boolean;
    valueMin: number;
    valueMax: number;
    required: boolean;
    mask: InameValidatorLocal;
  }
  design: {
    tools?: {
      accont?: boolean;
      clear?: boolean;
    }
    html?: {
      typeInput?: 'text' | 'color' | 'url'
    }
    icon?: {
      prefix?: string;
      suffix?: string;
      start?: string;
      end?: string;
    }
    css: {
      materialDesign: {
        appearance: 'fill' | 'outline' | 'standard' | 'legacy';
      },
      form: {
        container: 'f-total'
        | 'f-metade-esquerda'
        | 'f-metade-direita'
        | 'f-1-direita'
        | 'f-1-meio'
        | 'f-1-esquerda'
        | 'f-2-direita'
        | 'f-2-esquerda',
      }
    }
  }
  colection?: {
    title: string,
    subTitle: string,
    description: string
  }
}

export type ImodelCreate<name extends keyof Idoc> = {
  id: name;
  _group: { [key in keyof Idoc[name]]: { id: key } & ImodelConfig }
} & ImodelConfig

export type Imodel2 = { [key in keyof Idoc]: ImodelCreate<key> }

export type ImodelRecursive = {
  [o: string]: ImodelRecursiveConfig
}
export type ImodelRecursiveConfig =
  Record<keyof Pick<ImodelCreate<'recursive'>, 'id'>, string> &
  Partial<Record<keyof Pick<ImodelCreate<'recursive'>, '_group'>, ImodelRecursive>> &
  ImodelConfig

export type Iuser = Pick<ModelUser, 'nivel' | 'name' | 'userId'> & {acessToken:string}

export type Inivel = 'adm'

export type Ipath = {
  [key in keyof Idoc]: {
    root: string
    nivel: Inivel
  }
}

export type Irequest = {
  language: 'en'| 'pt';
  page: 'account' | 'login' | 'app';
  document: NameProperty<Idoc>;
  controller: 'accountAdmFirst' | null
  action: 'create' | 'update' | 'null';
  key: string | null;
  environment: 'prod' | 'test' | 'create' | 'update' | 'set';
  domain: 'localhost' | '127.0.0.1' | 'v8app-888cd.firebaseapp.com' | 'v8app-888cd.web.app';
  dateTime: Date | null;
  colection: Irequest['document']
  user?: Iuser
  validator?: Ivalidator;
  data?: any | null;
  dataLast?: { [keyof in Irequest['document']]: Irequest }
  lastUrlNoLanguage?: string
  lastUrl?: string;
}

export type InameValidatorLocal = NameProperty<ValidatorsLocal>
export type InameValidatorRemote = NameProperty<ValidatorsRemote>


export type IpermissionNivel = {
  adm: Ipermission[]
}

export interface Ipermission {
  id: string;
  view: {
    form: boolean;
    title: boolean;
    subTitle: boolean;
  }
  colection?: Irequest['document']
  _group?: Ipermission[]
}
export interface ImodalErrorForm {
  width: string,
  error: string[],
  model: ImodelRecursive,
  language: Irequest['language']
}

export interface Ivalidator {
  id: string;
  name: InameValidatorLocal | InameValidatorRemote;
  label: string;
  value: any;
  error: Ivalidator | Ivalidator[] | null;
  language: Irequest['language'];
  typeExecute: 'front' | 'back'
}
export type IvalidatorError = Record<Irequest['language'],{ [key: string]: any }>

export type IresponseValidatorUnit = {
  [key: string]: any;
} | null

export type IresponseValidatorCompose = Ivalidator | null