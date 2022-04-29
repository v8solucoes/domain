import { Nome_Resposta } from "./resposta.interface"

export function mensagemErro(data: any): Record<Nome_Resposta['erro'] , string> {

    return {
  
      get lerColecao() { return `Erro Ler Coleção ${data}` },
      get lerDocumento() { return `Erro Ler Coleção ${data}` },
      get gravarLote() { return `Erro Gravar Lote ${data}` },
      get [`auth/network-request-failed`](){ return `Conexão Falhou: ${data}`},
      get ['auth/email-already-in-use'](){ return `E-mail já Existe: ${data}`},
      get criarAutenticacao() { return `Erro Gravar Coleção ${data}` },
      get semFuncao() { return `Erro Sem Função ${data}` },
      get semMensagem() { return `Sucesso - Sem Mensagem Sucesso`},  
      get semIdMensagem() { return `Sucesso - Sem ID Sucesso`}, 
   
    }
  
  }