import { Nome_Dados } from "../01-dados/dados.interface";
import { Resposta } from "../14-resposta/reposta.export";

export interface Resposta_Crud {

    crud: Record<Nome_Dados['acao'], Promise<Resposta<any>>>
    lerColecao: Promise<Resposta<any>>
    lerDocumento: Promise<Resposta<any>>
}