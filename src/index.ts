import { ModeloArquivo as Arquivo} from "./construtor/arquivo/arquivo.modelo";
import { ModeloRequisicao } from "./construtor/requisicao/requesicao.modelo";
import { dados_Dados } from "./construtor/dist/dadosApp/dadosApp.dados";

export class Start  {

  constructor() {
       
  this.start()
  
  }
  async start() {

    Arquivo.dados('dadosApp')

   const modeloGravarAdm = ModeloRequisicao.modelo('set','adm', dados_Dados )
   const modeloLerAdm =  ModeloRequisicao.modelo('lerDocumento','adm')

    try {

      const modeloAdmCriar = await new ModeloRequisicao().crud(modeloGravarAdm)
      
      const modelo = await new ModeloRequisicao().crud(modeloLerAdm)
/*       const autenticar = await CriarAutenticacao.start() */
 
      console.log(modelo)
       return modeloAdmCriar
    } catch (error) {
      
    }
  }
}
const start = new Start();
