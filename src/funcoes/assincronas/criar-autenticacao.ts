
import { ConstrutorFirebase as Firebase } from "../../construtor/firebase/firebase.construtor";
import { Credencial, Requisicao, RespostaErro, RespostaSucesso } from "../../construtor/interface/interface";
import { respostaErro, respostaSucesso } from "../sincronas/resposta";

export class CriarAutenticacao {

    static async start(requisicao: Requisicao): Promise<RespostaSucesso | RespostaErro> {

        const usuario = requisicao.credencial.usuario as Credencial['usuario']
   /*      const dados = requisicao.dados  */

        try {
            const data = await Firebase.auth.createUser({
                'displayName': usuario.nome,
                'email': usuario.email,
                'password': usuario.senha,
            }
            )
            return respostaSucesso(
                {
                    sucesso: true,
                    mensagem: `Criar Autenticação`,
                    mensagemCodigo: 'criarAutenticacao',
                    data: data,
                    credencial: requisicao.credencial
                }
            )

        } catch (error) {

            return respostaErro({
                sucesso: false,
                erroMensagem: `Erro Criar Autenticão`,
                erroCodigo: 'lerColecao',
                data: error,
                credencial: requisicao.credencial
            })
        }

    }
}

