
import { Requisicao, RespostaErro, RespostaSucesso } from "../../construtor/interface/interface";
import { respostaErro, respostaSucesso } from "../sincronas/resposta";

export class SemFuncao {

    static async start(requisicao: Requisicao): Promise<RespostaSucesso | RespostaErro> {

     /*    const usuario = requisicao.credencial.usuario as Credencial['usuario'] */

        try {

            return respostaSucesso(
                {
                    sucesso: true,
                    mensagem: `Sem Função`,
                    mensagemCodigo: 'semFuncao',
                    data: null,
                    credencial: requisicao.credencial
                }
            )

        } catch (error) {

            return respostaErro({
                sucesso: false,
                erroMensagem: `Erro Sem Funcao`,
                erroCodigo: 'semFuncao',
                data: error,
                credencial: requisicao.credencial
            })
        }

    }
}

