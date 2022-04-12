import { nomeFuncao } from "../dados/dados.interface";
import { dados_Interface } from "../dist/dadosApp/dadosApp.dados";

export type UsuarioAdm = dados_Interface['usuarioAdm']

export type Credencial= UsuarioAdm['credencial']

export interface CredencialOpcional {
 usuario?: Partial<Credencial['usuario']>
 modulo?: Partial<Credencial['modulo']>
 requisicao?: Partial<Credencial['requisicao']>
}

export interface Requisicao {
credencial: Credencial
dados: any
}

export type UsuarioNomePropriedade = NomePropriedades<Credencial['usuario']>

export const mensagemSucesso = {
  'lerDocumento': `Documento lido com sucesso!`
}
export const mensagemErro = (data:any) => {
  return {
    get lerDocumento() { return `Ler Documento ${data.nome}`}
  }
  
}


export interface Resposta {
  sucesso: boolean;
  mensagem: string;
  mensagemCodigo: NomeCodigoMensagem | nomeFuncao
  credencial: any
  data: any;
  erroCodigo: NomeCodigoMensagem | NomeCodigoMensagemOutras | nomeFuncao
  erroMensagem: string
}

export type RespostaSucesso = Omit<Resposta,'erroCodigo' | 'erroMensagem'>
export type RespostaErro = Omit<Resposta,'mensagem' | 'mensagemCodigo'>
export type NomeCodigoMensagem =  `lerColecao` | 'lerDocumento' | 'gravarLote'
export type NomeCodigoMensagemOutras =  `auth/network-request-failed` | 'auth/email-already-in-use'


  export type NomePropriedades<T> = { [K in keyof T]: K }[keyof T];
/* Recebe { propriedade: valor } Devolve Nome = "propriedade" | "prop..." | 
Documentação https://www.typescriptlang.org/docs/handbook/2/mapped-types.html*/