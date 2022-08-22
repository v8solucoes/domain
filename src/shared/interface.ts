/* import { Idados} from "../construtor/04-dist/dadosApp/dadosApp.dados";
import { Resposta } from "../construtor/14-resposta/resposta.interface"; */
/* import { OptionsValidator } from "./validator"; */
import { ValidatorsRemote } from "../domain/validators/validators-remote";
import { NameProperty } from "./typscript";
import { ValidatorsLocal } from "./validator-local";

/* export { IrequestDomain } from "../domain/request/request.domain"; */
/* export type Icredential = Idados['adm']['credential']
export type Iuser = Idados['adm']['credential']['user'] */
/* export type Iresponse<data> = Resposta<data> */
export interface IFormData {
  permission: Ipermission[];
  model: ImodelUndefinedProperty;
  form: any
  language: Ilanguage
}
export interface IcreateForm {
  permission: Ipermission[];
  model: ImodelUndefinedProperty;
  document: any
  language: Ilanguage
  request: Irequest
  form: any
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

export type Irequest = {
  language: 'en';
  page: 'account';
  document: 'account-adm';
  action: 'create';
  environment: 'prod' | 'value';
  domain: 'localchost';
  dateUpdate: Date;
  colection: Irequest['document'] | null;
  validator: IValidatorRequest | null;
  data: any | null;
  item: string | null;
  dateCreate: Date | null;
}
/* export type IrequestData = { credential: Icredential, dados: any } */
export type Ilanguage = 'en'
export type Ipage = 'account'
export type ImoduleId = 'account-adm'
export type Iaction = 'create'
export type Ienvironment = 'test' | 'prod'
export type Idomain = 'test' | 'prod'
export type InameValidatorLocal = NameProperty<ValidatorsLocal>
export type InameValidatorRemote = NameProperty<ValidatorsRemote>


export type IdataProperty = { [keyof: string]: Idata }

/* export interface Idata {
  permission: Ipermission[]
  dataDocument?: any
  dataColection?: any[]
} */

export interface Ipermission {
  id: string;
  view: {
    form: boolean;
    title: boolean;
    subTitle: boolean;
  }
  _group?: Ipermission[]
}
export type ImodelDefinedProperty = ImodelUndefinedProperty
export type ImodelUndefinedProperty = { [key: string]: Imodel }

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
  _group?: ImodelUndefinedProperty 

}

export interface ItypeName {

  dataType: 'object' | 'array' | 'value'

}

export interface IValidatorRequest {
  id: string;
  name: InameValidatorLocal | InameValidatorRemote;
  label: string;
  value: any;
  language: Ilanguage;
  typeExecute: 'front' | 'back'
}
export interface ValidatorError {
  en: { [key: string]: any };
}
export type ValidatorResponse = {
  [key: string]: any;
} | null

export type ResponseCompose = {
  label: string,
  error: ValidatorResponse
  validator: IValidatorRequest | null;
} 
export type ValidatorResponseCompose = ResponseCompose | ResponseCompose[] | null 