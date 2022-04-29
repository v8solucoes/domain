import { RespostaErro, RespostaSucesso } from "../../construtor/interface/interface"


export const respostaSucesso = (resposta: RespostaSucesso): Required<RespostaSucesso> => {

  return {

    sucesso: resposta.sucesso,
    mensagem: resposta.mensagem || 'sem MensagemConstrutorResposta',
    mensagemCodigo: resposta.mensagemCodigo || 'sem MensagemConstrutorResposta',
    data: resposta.data || null,
    credencial: resposta.credencial || null,
  }
}

export const respostaErro = (resposta: RespostaErro): Required<RespostaErro> => {

  return {
    sucesso: resposta.sucesso,
    erroMensagem: resposta.erroMensagem || 'sem MensagemConstrutorResposta',
    erroCodigo: resposta.erroCodigo || 'sem MensagemConstrutorResposta',
    data: resposta.data || null,
    credencial: resposta.credencial || null,
  }
}