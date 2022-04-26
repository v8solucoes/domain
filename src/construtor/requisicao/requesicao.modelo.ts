import { ModeloCredencial } from "../credencial/credencial.modelo";
import { Nome_Dados } from "../dados/dados.interface";
import { Credencial, Requisicao, RespostaErro, RespostaSucesso } from "../interface/interface";
import { ConstrutorRequisicao } from "./requisicao.construtor";

export class ModeloRequisicao {

  async crud(requisicao: Requisicao){

    const req = new ConstrutorRequisicao(requisicao).crud()
    const acao = requisicao.credencial.requisicao.acao as Nome_Dados['acao']

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
  static modelo(acao: Nome_Dados['acao'], tipoAcesso: Nome_Dados['tipoAcesso'], dados?:any): Requisicao{
    return {
       credencial: ModeloCredencial.modelo(acao)[tipoAcesso], 
      dados: dados || null
    }
  }
  
}
