import { Resposta, nomeAcao } from "../dados/dados.interface";
import { ConstrutorRequisicao } from "./requisicao.construtor";
import { Requisicao } from "./requisicao.interface";

export class ModeloRequisicao {

  async crud(requisicao: Requisicao){

    const req = new ConstrutorRequisicao(requisicao).crud()
    const acao = requisicao.credencial.requisicao.acao as Exclude<nomeAcao, 'lerColecao' | 'lerDocumento'>

    try {
      return req[acao] as Promise<Resposta>
    } catch (error) {
      return error as Promise<Resposta>
    }

  }
}
