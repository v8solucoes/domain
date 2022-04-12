import { CredencialModelo } from "../credencial/credencial.modelo";
import { nomeAcao, nomePermissao } from "../dados/dados.interface";
import { Credencial, Requisicao, RespostaErro, RespostaSucesso } from "../interface/interface";
import { ConstrutorRequisicao } from "./requisicao.construtor";

export class ModeloRequisicao {

  async crud(requisicao: Requisicao){

    const req = new ConstrutorRequisicao(requisicao).crud()
    const acao = requisicao.credencial.requisicao.acao as nomeAcao

    try {
      return req[acao] as Promise<RespostaSucesso | RespostaErro>
    } catch (error) {
      return error as Promise<RespostaSucesso | RespostaErro>
    }

  }

 static requisicao(credencial: Credencial, dados: any): Requisicao{
    return {
       credencial,
      dados
    }
  }
 static modelo(acao: nomeAcao, tipoAcesso: nomePermissao, dados?:any): Requisicao{
    return {
       credencial: CredencialModelo.modelo(acao)[tipoAcesso], 
      dados: dados || null
    }
  }
  
}
