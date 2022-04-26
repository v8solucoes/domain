import { Estrutura_Dados, Nome_Dados, Req_Dados } from "../dados/dados.interface";

export interface Nome_Doc {
  cabecalho: 'interface' | 'constante' | 'json';
  documentoNome: 'permissao' | 'dados' | 'modelo'
  documentoTipo: `${Nome_Doc['documentoNome']}_Interface` | `${Nome_Doc['documentoNome']}_Dados`
}

export interface Req_Doc {

  criarDocumento: {
    dados: Req_Dados['dados'],
    nomeDocumento: Nome_Doc['documentoTipo']
  }

  criarGrupo: {
    dados: Required<Estrutura_Dados>,
    pai: Nome_Dados['tipoDados'],
    filho: Nome_Dados['tipoDados'],
    nomeDocumento: Nome_Doc['documentoTipo']
  }
}
export interface Resposta_Doc {
  documentoTipo: Record<Nome_Doc['documentoTipo'], {
    cabecalho(documento: string): string
  } & Record<Nome_Dados['tipoDados'], string>>
  documentoCabecalho: {
    nomeDocumento: Nome_Doc['documentoTipo']
  }
}

/* FUNÇÕES */
export type NomePropriedades<T> = { [K in keyof T]: K }[keyof T];
