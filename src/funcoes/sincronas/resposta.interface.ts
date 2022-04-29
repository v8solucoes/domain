import { Nome_Dados } from "../../construtor/dados/dados.interface";

export interface Nome_Resposta {
    sucessoErro: Nome_Dados['funcao'] |'semMensagem' | 'semIdMensagem' 
    | `lerColecao` | 'lerDocumento' | 'gravarLote'

    soErro: `auth/network-request-failed` | 'auth/email-already-in-use'
    soSucesso: `autenticacaoSucesso`
    sucesso: Nome_Resposta['soSucesso'] | Nome_Resposta['sucessoErro'] 
    erro: Nome_Resposta['soErro'] | Nome_Resposta['sucessoErro']
  }

export interface Estrutura_Resposta {
  sucesso: boolean;
  mensagem: string;
  mensagemCodigo: Nome_Resposta['sucesso']
  credencial: any
  data: any;
  erroCodigo: Nome_Resposta['erro']
  erroMensagem: string
}

export interface Resposta {
    sucesso: RespostaSucesso
    erro: RespostaErro
}

export type RespostaAsync = Promise<RespostaSucesso | RespostaErro>

export type RespostaSucesso = NomePropriedades<Omit<Estrutura_Resposta, 'erroCodigo' | 'erroMensagem'>>
export type RespostaErro = Omit<Estrutura_Resposta, 'mensagem' | 'mensagemCodigo'>

export interface FuncaoResposta {
  criarUsuario: { 
    id: string
    data: any
  }
}

export type NomePropriedades<T> = { [K in keyof T]: K };
/* Recebe { propriedade: valor } Devolve Nome = "propriedade" | "prop..." | 
Documentação https://www.typescriptlang.org/docs/handbook/2/mapped-types.html*/