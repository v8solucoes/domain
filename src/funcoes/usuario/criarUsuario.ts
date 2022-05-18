import { ConstrutorFirebase as Firebase } from "../../construtor/16-export/firebase.export";
import { RequisicaoDados } from "../../construtor/11-credencial/credencial.interface";
import { Funcao_Construtor } from "../../construtor/15-funcao/funcao.construtor";
import { Resposta } from "../../construtor/14-resposta/resposta.interface";
import { Resposta_Construtor } from "../../construtor/14-resposta/resposta.construtor";

export class CriarUsuario {

    funcao = new Funcao_Construtor()
    resposta = new Resposta_Construtor()

    async iniciar(req: RequisicaoDados): Promise<Resposta<any>> {

        try {

            const data = await this.funcao.compor(
                this.criarIdAuth
            )(req)

            return this.resposta.sucesso({
                data: data,
                codigo: 'idUsuario',
                mensagem: `Gerou Id: ${data}`,
                credencial: null
            })

        } catch (error) {

            return this.resposta.erro({
                data: error,
                codigo: 'idUsuario',
                mensagem: `Erro Criação ID`,
                credencial: req.credencial
            })
        }

    }

    async criarIdAuth(req: RequisicaoDados): Promise<Resposta<any>> {

        try {
            const data = await Firebase.auth.createUser({
                'displayName': 'Emerson Felix',
                'email': 'conta@v8sites.com.br',
                'password': '123456'
            })

            req.dados.teste = data.uid

            return this.resposta.sucesso({
                credencial: req.credencial,
                data: req.dados,
                codigo: 'idUsuario',
                mensagem: `Gerou Id: ${data.uid}`
            })

        } catch (error) {

            return this.resposta.erro({
                data: error,
                codigo: 'idUsuario',
                mensagem: `Erro Criação ID`,
                credencial: req.credencial
            })
        }

    }
    // Criar Acesso:
    // Criar Conta / Modulo> Conta: 'Adm' | 'Revenda' | 'Cliente' - Retorna IdConta: xxxxxxx
    // Pegar Permissao / Modulo> Permissao: 'Adm' | 'Revenda' | 'Cliente' - Retorna Permissao: xxxxxxx
    // Criar Usuário / Modulo> Usuário 'Adm' | 'Revenda' | 'Cliente' - Retorna Usuário: Permissão
    /*     static async salvarUsuario(req: I_RequisicaoDados): Promise<I_Resposta> {
    
            const credencialModelo = C_Credencial.modulo('set', 'modelo-adm', 'modeloMaster', C_Credencial.usuarioMaster)
            
            try {
                const crudUsuario = await new C_CRUD({ credencial: credencialModelo, dados: req.dados }).crud.set
                
            } catch (error) {
                
            }
    
        } */
}

