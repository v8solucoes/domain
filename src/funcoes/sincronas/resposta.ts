import { Resposta, RespostaErro, RespostaSucesso } from "../../construtor/interface/interface"


export const respostaSucesso = (resposta: RespostaSucesso): RespostaSucesso => {

  return {

    sucesso: resposta.sucesso,
    mensagem: resposta.mensagem || 'sem MensagemConstrutorResposta',
    mensagemCodigo: resposta.mensagemCodigo || 'sem MensagemConstrutorResposta',
    data: resposta.data || null,
    credencial: resposta.credencial || null,
  }
}

export const respostaErro = (resposta: RespostaErro): RespostaErro => {

  return {
    sucesso: resposta.sucesso,
    erroMensagem: resposta.erroMensagem || 'sem MensagemConstrutorResposta',
    erroCodigo: resposta.erroCodigo || 'sem MensagemConstrutorResposta',
    data: resposta.data || null,
    credencial: resposta.credencial || null,
  }
}

export const mensagemSucesso = (data: any): Record<Resposta['mensagemCodigo'], string> => {

  return {
    get lerColecao() { return `Sucesso Ler Coleção ${data}` },
    get lerDocumento() { return `Sucesso Ler Coleção ${data}` },
    get gravarLote() { return `Lote Gravado Coleção ${data}` },
    get criarAutenticacao() { return `Lote Gravado Coleção ${data}` },
    get semFuncao() { return `Sucesso Sem Função ${data}` },
  }

}

export const mensagemErro = (data: any): Record<Resposta['erroCodigo'] , string> => {

  return {

    get lerColecao() { return `Erro Ler Coleção ${data}` },
    get lerDocumento() { return `Erro Ler Coleção ${data}` },
    get gravarLote() { return `Erro Gravar Lote ${data}` },
    get [`auth/network-request-failed`](){ return `Conexão Falhou: ${data}`},
    get ['auth/email-already-in-use'](){ return `E-mail já Existe: ${data}`},
    get criarAutenticacao() { return `Erro Gravar Coleção ${data}` },
    get semFuncao() { return `Erro Sem Função ${data}` },
 
  }

}

