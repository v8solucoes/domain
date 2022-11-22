import { ModelUser } from "../domain/model/users";
import { ValidatorsRemote } from "../domain/validators/validators-remote";
import { NameProperty } from "./typscript";
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
/* export type ok = 'teste' | 'este'
export type Idocumentlast<T extends Irequest['document']> = {
 [K in keyof Idocument]:`${ok}`
}
const test: Idocumentlast<'user-adm'> = { 'teste': 'este'} */

/* { [K in keyof Idocument]?: IcreateForm<UntypedFormGroup> } */
/* export type names='teste'
type T0 = InstanceType<typeof Irequest['document']>; */
/* export type teste<T  extends names> = {
  T : any 
}  */
 
export type Idocument = {
  [`user-adm`]: ModelUser
  [`account-adm`]: Pick<ModelUser, 'name' | 'email' | 'phone' | 'password' | 'acceptTerms'>
  [`sign-in`]: Pick<ModelUser, 'name'| 'password'>
  [`null`]: any
}
export type Icolection =  Idocument & {[keyof:string]: any}

export type Irequest = {
  language: 'en';
  page: 'account' ;
  document: NameProperty<Idocument> ;
  action: 'create' | 'null' ;
  key: string | null;
  environment: 'prod' | 'test' | 'create' | 'update' | 'set';
  domain: 'localchost';
  dateTime: Date | null;
  colection: Irequest['document']
  user?: Iuser
  validator?: Ivalidator;
  data?: any | null;
  dataLast?: {[keyof in Irequest['document']]: Idata}
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
  typeInput: 'booleanToggle' | 'email' | 'acceptTerms' | 'group' | 'range' | 'input' | 'radio' | 'text-area' | 'select' | 'galeriaHorizontal' | 'color' | 'slide-toggle';
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