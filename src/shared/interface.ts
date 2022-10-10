import { ModelUser } from "../domain/model/users";
import { ValidatorsRemote } from "../domain/validators/validators-remote";
import { AccountAdm, NameProperty } from "./typscript";
import { ValidatorsLocal } from "./validator-local";

export { ModelUser as ImodelUser}

export interface IFormData {
  permission: Ipermission[];
  model: ImodelUndefinedProperty;
  form: any
  language: Ilanguage
}
export interface IcreateForm<T> {
  permission: Ipermission[];
  model: ImodelUndefinedProperty;
  document: any
  language: Ilanguage
  request: Irequest
  form: T
}
export interface Imodule {
  permission: Ipermission[];
  model: ImodelUndefinedProperty;
  document: any
}
export interface Idata { ['account-adm']: {
  permission: Ipermission[]
  model: Imodel
  document: any
  colection: any[]
  request: Irequest | null
  form?: IFormData | null
}
}
export type Inivel = 'adm'
export type Ipath = {
  [keyof: string]: {
    root: string
    nivel: Inivel
  }
}
export interface Icolection {
 [keyof:string]: any
 [`account-Adm`]: Ipermission
 [`sign-in`]: AccountAdm
 [`null`]: AccountAdm
}

export type Irequest = {
  language: 'en';
  page: 'account' ;
  document: 'user-adm' | 'account-adm' | 'sign-in' | 'null' ;
  action: 'create' | 'null';
  key: string | null;
  environment: 'prod' | 'test';
  domain: 'localchost';
  dateTime: Date | null;
  colection: Irequest['document']
  user?: Iuser
  validator?: Ivalidator;
  data?: any | null;
}

export type Ilanguage = 'en'
export type Ipage = 'account'
export type ImoduleId = 'account-adm'
export type Iaction = 'create'
export type Ienvironment = 'test' | 'prod'
export type Idomain = 'test' | 'prod'
export type InameValidatorLocal = NameProperty<ValidatorsLocal>
export type InameValidatorRemote = NameProperty<ValidatorsRemote>

export type IdataProperty = { [keyof: string]: Idata }
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
export type ImodelDefinedProperty = ImodelUndefinedProperty
export type ImodelUndefinedProperty = { [key: string]: Imodel }
export type Iuser =  Pick<ModelUser,'nivel' | 'name' | 'userId'>
export interface Imodel {
  id: string;
  typeData: ItypeName['dataType'];
  typeInput: 'email' | 'acceptTerms' | 'group' | 'range' | 'input' | 'radio' | 'text-area' | 'select' | 'galeriaHorizontal' | 'color' | 'slide-toggle';
  text: {
    en?: {
      clearInput: string;
      label: string;
      valueTest: string | boolean;
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
  _group?: ImodelUndefinedProperty

}

export interface ItypeName {

  dataType: 'object' | 'array' | 'value'

}

export interface Ivalidator {
  id: string;
  name: InameValidatorLocal | InameValidatorRemote;
  label: string;
  value: any;
  error: Ivalidator | Ivalidator[] | null;
  language: Ilanguage;
  typeExecute: 'front' | 'back'
} 
export interface IvalidatorError {
  en: { [key: string]: any };
}
export type IresponseValidatorUnit = {
  [key: string]: any;
} | null

export type IresponseValidatorCompose = Ivalidator | null