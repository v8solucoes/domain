import { Resposta, RespostaMascara, RespostaMascaraReq, RespostaPadrao } from "./resposta.interface"
import { Modelo_Resposta } from "./resposta.modelo"

export class Resposta_Padrao_Construtor {

  sucesso(req: RespostaPadrao): Resposta<any> {

    return this.resposta_Padrao(req, true)
  }

  erro(req: RespostaPadrao): Resposta<any> {

    return this.resposta_Padrao(req, false)
  }

  resposta_Padrao(req: RespostaPadrao, sucesso: boolean): Resposta<any> {

    const mensagem = new Modelo_Resposta(req.data).mensagem
    const erro = sucesso ? 'sucesso' : 'erro'

    return {
      sucesso: sucesso,
      mensagem: req.mensagem || mensagem[req.codigo][erro],
      codigo: req.codigo,
      data: req.data,
      credencial: req.credencial,
    }
  }
}
export class Resposta_Mascara_Construtor {

  sucesso(req: RespostaMascaraReq): RespostaMascara<any> {

    return this.resposta_Mascara(req, true)
  }

  erro(req: RespostaMascaraReq): RespostaMascara<any> {

    return this.resposta_Mascara(req, false)
  }

  resposta_Mascara(req: RespostaMascaraReq, sucesso: boolean): RespostaMascara<any> {

    const mensagem = new Modelo_Resposta(req.data).mensagem
    const erro = sucesso ? 'sucesso' : 'erro'

    return {
      sucesso: sucesso,
      mensagem: req.mensagem || mensagem[req.codigo][erro],
      codigo: req.codigo,
      data: req.data,
    }
  }
}

export class RespostaTesteConstrutor {

 public resposta(sucesso: boolean, resposta: string) {

    try {

      if (sucesso) {
        return true
      } else {

        throw new Error(resposta)
      }
    } catch (error) {

      return error
    }
  }
}
