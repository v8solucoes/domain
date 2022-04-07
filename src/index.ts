import { ModeloArquivo as Arquivo} from "./construtor/arquivo/arquivo.modelo";
import { ModeloRequisicao } from "./construtor/requisicao/requesicao.modelo";
import { dados_Dados } from "./construtor/dist/dadosApp/dadosApp.dados";
import { Requisicao } from "./construtor/requisicao/requisicao.interface";

export class Start  {

  constructor() {
   Arquivo.dados('dadosApp')
   
/*   this.start() */
  
  }
  async start(){
    dados_Dados.usuarioAdm.credencial.requisicao.acao == 'editar'
    const requisicao: Requisicao = {
      credencial: dados_Dados.usuarioAdm.credencial,
      dados: dados_Dados
    }

    try {
      const dados = await new ModeloRequisicao().crud(requisicao)
      console.log(dados)
       return dados
    } catch (error) {
      
    }
  }
}
const start = new Start();
