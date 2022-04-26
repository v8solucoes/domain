import { Nome_Dados } from "../../construtor/dados/dados.interface"
import { Requisicao, RespostaErro, RespostaSucesso } from "../../construtor/interface/interface"
import { CriarAutenticacao } from "../assincronas/criar-autenticacao"
import { SemFuncao } from "../assincronas/semFuncao"

export class Funcoes implements Record<(Nome_Dados['funcao']), Promise<RespostaSucesso | RespostaErro>>{

    private requisicao: Requisicao

    constructor(requisicao: Requisicao) {
        this.requisicao = requisicao
    }
    public get criarAutenticacao() { return CriarAutenticacao.start(this.requisicao) }
    public get semFuncao() { return SemFuncao.start(this.requisicao) }

}