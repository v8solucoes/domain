import { Nome_Resposta } from "./resposta.interface"

export function mensagemSucesso(data: any): Record<Nome_Resposta['sucesso'] , string> {

    return {
      get semMensagem() { return `Sucesso - Sem Mensagem Sucesso`},  
      get semIdMensagem() { return `Sucesso - Sem ID Sucesso`},  
      get lerColecao() { return `Sucesso Ler Coleção ${data}` },
      get lerDocumento() { return `Sucesso Ler Coleção ${data}` },
      get gravarLote() { return `Sucesso Gravar Lote ${data}` },
      get criarAutenticacao() { return `Erro Gravar Coleção ${data}` },
      get semFuncao() { return `Erro Sem Função ${data}` },
      get autenticacaoSucesso() { return `Sucesso Autenticação Sem Função ${data}` },
   
    }
  
  }