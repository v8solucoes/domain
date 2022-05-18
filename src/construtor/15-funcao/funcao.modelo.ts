import { Nome_Dados } from "../01-dados/dados.interface"
import { Resposta } from "../14-resposta/resposta.interface"
import { CriarUsuario } from "../../funcoes/usuario/criarUsuario"
import { RequisicaoDados } from "../11-credencial/credencial.export"

export class Funcao_Modelo

implements Record<(Nome_Dados['funcao']), Promise<Resposta<any>>> {

    private requisicao: RequisicaoDados

    constructor(requisicao: RequisicaoDados) {
        this.requisicao = requisicao
    }
    public get criarAutenticacao() { return new CriarUsuario().iniciar(this.requisicao) }
}