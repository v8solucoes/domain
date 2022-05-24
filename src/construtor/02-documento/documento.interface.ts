import { Construtor_Dados, Nome_Dados, Req_Dados } from "../01-dados/dados.interface";

export interface Nome_Doc {
  cabecalho: 'interface' | 'constante' | 'json';
  documentoNome: 'permissao' | 'dados' | 'modelo'
  documentoTipo: 'IdadosOpcional' | `I${Nome_Doc['documentoNome']}` | `${Nome_Doc['documentoNome']}`
}

export interface Req_Doc {

  criarDocumento: {
    dados: Req_Dados['dados'],
    nomeDocumento: Nome_Doc['documentoTipo']
  }

  criarGrupo: {
    dados: Required<Construtor_Dados>,
    pai: Nome_Dados['tipoDados'],
    nomeDocumento: Nome_Doc['documentoTipo']
  }
}
export interface Resposta_Doc {
  documentoTipo: Record<Nome_Doc['documentoTipo'], {
    cabecalho(documento: string): string,
    modelo:string
  } & Record<Nome_Dados['tipoDados'], string>>
  documentoCabecalho: {
    nomeDocumento: Nome_Doc['documentoTipo']
  }
}

/* FUNÇÕES */
export type NomePropriedades<T> = { [K in keyof T]: K }[keyof T];
