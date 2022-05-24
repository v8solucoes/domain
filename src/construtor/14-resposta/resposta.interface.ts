import { Icredential } from "../../shared/interface";


export type CodigoMensagem = 'semCodigo'| "funcoesAsync" | 'idUsuario'|
'mesagemSemCodigo' | `lerColecao` | 'lerDocumento' 
| 'gravarLote' | `auth/network-request-failed` | 'auth/email-already-in-use' | `autenticacaoSucesso`

export type Resposta<data> = {
  sucesso: boolean;
  mensagem: string;
  codigo: CodigoMensagem
  credencial: Icredential | null
  data: data;
}

export type RespostaTeste = Omit<Resposta<{ input:any, objeto:any, config:any}>, 'credencial'>
export type RespostaTesteReq = Omit<RespostaTeste,'sucesso' | 'codigo'> & Partial<RespostaTeste['codigo']>

export type RespostaMascara<data> = Omit<Resposta<data>, 'credencial'>
export type RespostaMascaraReq = Omit<RespostaMascara<any>,'sucesso'>

export type RespostaPadrao = Omit<Resposta<any>,'sucesso'>
export type RespostaModelo = Record<CodigoMensagem, { sucesso: string, erro:string}>
