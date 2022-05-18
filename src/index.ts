import { Modelo_Arquivo as Arquivo } from "./construtor/03-arquivo/arquivo.modelo";
/* import { type } from "os";
import { NomePropriedades } from "./construtor/01-dados/dados.interface";
import { Mascara_Modelo } from "./construtor/01-validar/mascara/mascara.modelo";
import { Testar_Modelo } from "./construtor/01-validar/testar/testar.modelo";
import { dados_Dados, dados_Teste, modelo_Dados, permissao_Dados } from "./construtor/04-dist/dadosApp/-dadosApp.dados"; */
import { Credencial_Modelo } from "./construtor/11-credencial/credencial.modelo";
/* import { Construtor_Crud } from "./construtor/13-CRUD/crud.construtor"; */

export class Start {

  credencial = new Credencial_Modelo()

  constructor() {
    Arquivo.dados('dadosApp')
  /*   this.start() */
  }

  async start() {

    try {
        /*  console.log(new Testar_Modelo().minimoEmaximo({ input:'asfasd', objeto:3, config:7})) */
        /*  console.log(new Mascara_Modelo().converterTextoPadraoURL('   Félix  MÃS tudo ----   ')) */
        /*  console.log(dados_Teste.adm.credencial.usuario.tipoAcesso())  */
        /*  console.log(dados_Teste.adm.credencial.usuario.tipoAcesso({ input:'asfasd', objeto:3, config:7})) */
        /*  const teste = new Opcoes()
            console.log(teste.tipoAcesso.interface)
            const oi = await teste.tipoAcesso.teste('caixa') */

      /*  const dados = this.criarArquivoDados */

        /* const crudUsuario = await this.gravarModelo
           const crudModelo = await this.gravarUsuario
            
           console.log(crudUsuario)
           console.log(crudModelo) */

      return 'sucesso'

    } catch (error) {
      console.log(error)

      return error

    }

  }

  /* get criarArquivoDados() { return Arquivo.dados('dadosApp') }

  get gravarUsuario() {
    return new Construtor_Crud({
      credencial: this.credencial.usuarioAdm({
        acao: 'set',
        idModulo: 'usuario-adm',
        idItem: 'usuarioMaster',
        funcao: 'criarAutenticacao'
      }), dados: permissao_Dados
    }).crud.set
  }

  get gravarModelo() {
    return new Construtor_Crud(
      {
        credencial: this.credencial.usuarioAdm({
          acao: 'set',
          idModulo: 'modelo-adm',
          idItem: 'modeloMaster',
          funcao: 'criarAutenticacao'
        }), dados: {
          permissao: permissao_Dados,
          dados: dados_Dados,
          modelo: modelo_Dados
        }
      }).crud.set
  } */
}

const start = new Start()