import { Idados as Idata} from "../construtor/04-dist/dadosApp/dadosApp.dados";
import { Resposta } from "../construtor/14-resposta/resposta.interface";
import { NameProperty } from "./typscript";
import { ValidatorMethod } from "./validator";

export { Idata }
export type Icredential = Idata['adm']['credential']
export type Iuser = Idata['adm']['credential']['user']
export type Iresponse<data> = Resposta<data>
export type Irequest = Idata['adm']['credential']['request']
export type IrequestData = { credential: Icredential, dados: any }
export type Ilanguage = 'en'
export type InameValidator = NameProperty<ValidatorMethod>

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
  typeInput: 'group'| 'range' | 'input' | 'radio' | 'text-area' | 'select' | 'galeriaHorizontal' | 'color' | 'slide-toggle';
  text: {
    en?: {
      clearInput: string;
      label: string;
      valueTest: string;
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
    sync: NameProperty<ValidatorMethod>[]
    async: NameProperty<ValidatorMethod>[],
    updateOn: 'blur' | 'submit' | 'change'
    disabled: boolean,
    valueMin: number,
    valueMax: number,
    required: boolean
    front: string
    back: string
    teste: string
  }
  design: {
    tools?: {
      accont?: boolean,
      clear?: boolean
    }
    html?: {
      typeInput?: 'text' | 'color' | 'url'
    }
    icon?: {
      prefix?: string;
      suffix?: string;
      start?: string
      end?: string
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

export interface ValidatorRequest {
  value: any;
  language: Ilanguage
}
export interface ValidatorError {
  en: { [key: string]: any };
}
export type ValidatorReponse = {
  [key: string]: any;
} | null;