import { ModelUser } from "../domain/model/users";
import { ValidatorsRemote } from "../domain/validators/validators-remote";
import { NameProperty } from "./typscript";
import { ValidatorsLocal } from "./validator-local";

export { ModelUser as ImodelUser }
// Create New Colection
// 1 Create name in
    // IDoc
    // Ipermission
    // IpermissionFormControl
    // Data Base - domain/src/domain/controllers/account-adm.ts line 70
    // Validator - domain/src/domain/options/options.validator.ts
    // Level domain/repository/data-router-path.ts

// Constructor DOCUMENT / COLECTION

export type Idoc = {

  [`user-adm`]: Pick<ModelUser, 'name' | 'email' | 'phone' | 'password' | 'acceptTerms' | 'emailVerified' | 'multiFactor' | 'level' | 'userId'>
  [`account-adm-new`]: Pick<ModelUser, 'name' | 'email' | 'phone' | 'password' | 'acceptTerms'>
  [`sign-in`]: Pick<ModelUser, 'email' | 'password'>
  [`dashboard`]: { [x: string]: string }
  [`developing-one`]: Pick<ModelUser, 'name' | 'email' | 'phone'>
  [`developing-two`]: Pick<ModelUser, 'name' | 'email' | 'phone'>
  [`partner-developing-one`]: Pick<ModelUser, 'name' | 'email' | 'phone'>
  [`partner-developing-two`]: Pick<ModelUser, 'name' | 'email' | 'phone'>
  [`partner-developing-three`]: Pick<ModelUser, 'name' | 'email' | 'phone'>
  [`client-developing-one`]: Pick<ModelUser, 'name' | 'email' | 'phone'>
  [`client-developing-two`]: Pick<ModelUser, 'name' | 'email' | 'phone'>
  [`client-developing-three`]: Pick<ModelUser, 'name' | 'email' | 'phone'>

  // funcões básicas do sistema não modificar
  [`recursive`]: { [x: string]: string }
  [`null`]: { [x: string]: string }
}
export type Ipermission = {
  adm: [
    IpermissionCreate<'user-adm'>,
    IpermissionCreate<'developing-one'>,
    IpermissionCreate<'developing-two'>
  ]
  partner: [
    IpermissionCreate<'partner-developing-one'>,
    IpermissionCreate<'partner-developing-two'>,
    IpermissionCreate<'partner-developing-three'>,
  ],
  client: [
    IpermissionCreate<'client-developing-one'>,
    IpermissionCreate<'client-developing-two'>,
    IpermissionCreate<'client-developing-three'>,
  ],
  system: [
    IpermissionCreate<'user-adm'>,
    IpermissionCreate<'account-adm-new'>,
    IpermissionCreate<'sign-in'>,
    IpermissionCreate<'recursive'>,
    IpermissionCreate<'dashboard'>,
    IpermissionCreate<'null'>,
  ]
}
export type IpermissionFormControl = [
// adm
  IpermissionCreate<'account-adm-new'>,
  IpermissionCreate<'developing-one'>,
  IpermissionCreate<'developing-two'>,

// partner
  IpermissionCreate<'user-adm'>,
  IpermissionCreate<'partner-developing-one'>,
  IpermissionCreate<'partner-developing-two'>,
  IpermissionCreate<'partner-developing-three'>,
  
 // client 
  IpermissionCreate<'client-developing-one'>,
  IpermissionCreate<'client-developing-two'>,
  IpermissionCreate<'client-developing-three'>,
  
// system
  IpermissionCreate<'sign-in'>,
  IpermissionCreate<'recursive'>,
  IpermissionCreate<'dashboard'>,
  IpermissionCreate<'null'>,
]


export type test = { oi: string }
export type Icol = { [key in keyof Idoc]: { [x: string]: any } }
export type Icontrollers = { [key in keyof Idoc]: Record<Irequest['action'], () => Promise<IresponseValidatorCompose | null>> }

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
  _group: { [key in keyof Idoc[name]as `id` | `view`]: key | IpermissionView }[]
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
export type Ilevel = keyof Ipermission
export type IlevelSelect = { [key in keyof Pick<Idoc,'account-adm-new' | 'user-adm' >]: Ilevel }
export type IlevelPermissionOption = 
Ipermission |
Pick<Ipermission, `partner` | `client` | `system`> |
Pick<Ipermission, `client` | `system`> |
Pick<Ipermission, 'system'> 

export type IlevelPermission = {
  [key in keyof Ipermission]: IlevelPermissionOption
}

//Constructor Model

export interface ImodelConfig {

  typeModel: 'object' | 'array' | 'value'
  typeInput: 'generic' | 'booleanToggle' | 'acceptTerms' | 'group';
  typeInputHtml: 'password' | 'email' | 'text';
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

export type Iuser = Pick<ModelUser, 'level' | 'name' | 'userId'> & { acessToken: string }

export type Inivel = keyof Ipermission

/* export type InivelDocument = { [key in keyof Idoc]: keyof Ipermission } */

export type IpermissionNivel = {
  [key in keyof Ipermission]: IpermissionRecursive[]
}
export type IrouterPathColection = { [key in keyof Idoc]: {
  root: string;
  level: Ilevel;
} }

export type Irequest = {
  language: 'en' | 'pt';
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

// FORM GROUP

export interface FormControl<T> {
  permission: IpermissionFormControl[number];
  model: Imodel2;
  document: any
  language: Irequest['language']
  request: Irequest
  form: T
}

export type UserModel = {
  model: ImodelCreate<'user-adm'>
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
export type IvalidatorError = Record<Irequest['language'], { [key: string]: any }>

export type IresponseValidatorUnit = {
  [key: string]: any;
} | null

export type IresponseValidatorCompose = Ivalidator | null