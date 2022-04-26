import { ModeloArquivo as Arquivo} from "./construtor/arquivo/arquivo.modelo";
import { ModeloRequisicao } from "./construtor/requisicao/requesicao.modelo";
import { dados_Dados, modelo_Dados, permissao_Dados } from "./construtor/dist/dadosApp/dadosApp.dados";
import { ModeloCredencial } from "./construtor/credencial/credencial.modelo";

export class Start  {

  constructor() {
       
  this.start()
  
  }
  async start() {

    Arquivo.dados('dadosApp')

   const modeloGravarAdm = ModeloCredencial.requisicaoModelo('set','adm', {
    dados: dados_Dados,
    permissao: permissao_Dados,
    modelo: modelo_Dados
    } )
   const usuarioGravarAdm = ModeloCredencial.requisicaoUsuario('set','uU7GcmNuxlXp7iYqv85jXJpbDQy1','adm', dados_Dados )
  /*  const modeloLerAdm =  ModeloCredencial.requisicaoModelo('lerDocumento','adm') */

    try {

      const modeloAdmCriar = await new ModeloRequisicao().crud(modeloGravarAdm)
      const usuarioAdmCriar = await new ModeloRequisicao().crud(usuarioGravarAdm)
      
      /* const modelo = await new ModeloRequisicao().crud(modeloLerAdm) */
 
      console.log(modeloAdmCriar)
      console.log(usuarioAdmCriar)
       return 
    } catch (error) {
      return error
    }
  
  }
}
const start = new Start()
