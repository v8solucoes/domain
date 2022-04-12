export type NomePropriedades<T> = { [K in keyof T]: K }[keyof T];

export interface InterfaceDados {
  id: string;
  nome?: string;
  valor?: any | boolean
  tipo?: Modelo['tipo']
  interface?: Dados['interface'];
  dados?: Partial<Dados>;
  modelo?: Partial<Modelo>;
  exibir?: Partial<Exibir>;
  _grupo?: { [key: string]: InterfaceDados }[]
}

export interface Dados {
  interface: 'string' | 'boolean' | 'any' | 'Date' | 'number'
  | `nomePermissao`
  | `nomeStringOuBoolean`
  | `nomeAcao`
  | `nomeModulo`
  | `nomeModuloPasta`
  | `nomeAmbiente`
  | `nomeTema`
  | `nomeFuncao`
  
  valor: any;
}
export type nomeFuncao = 'semFuncao' | 'criarAutenticacao'
export type nomeTema = 'pad-tema-black' | 'pad-tema-white' | 'cus-tema-black' | 'cus-tema-white' 
export type nomeAcao = 'criar' | 'set' | 'editar' | 'deletar' | 'lerColecao' | 'lerDocumento'
export type nomeStringOuBoolean = string | boolean
export type nomePermissao = "adm" | "revenda" | "cliente" | "usuario"
export type nomeModulo = `usuario_${nomePermissao}` | `modelo_${nomePermissao}`
export type nomeModuloPasta = '/lista' | '/relatorio' | '/historico' | '/deletar'
export type nomeAmbiente = 'ambienteTesteV8' | 'ambienteProducao'

export interface Exibir {
  formulario: boolean;
  titulo: boolean;
  subTitulo: boolean;
}

export interface Modelo {
  nome: string;
  tipo: "string" | "lista" | "objeto";
  valorInicial: string | number | boolean;
  design: string;
  validarSincrono: boolean;
  validarAssincrono: boolean;
  colecao: {
    lista: boolean;
    objeto: boolean;
  };
}
