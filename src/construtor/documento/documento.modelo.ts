import { ConstrutorArquivo as Arquivo } from "../arquivo/arquivo.construtor";
import { ConstrutorDocumento as Documento } from "./documento.construtor";
import { InterfaceDados } from "../dados/dados.interface";
import { Formata, TipoDocumento  } from "./documento.interface";

export class ModeloDocumento {

 static tipoDocumento: { [keyof: string]: TipoDocumento} = {
    dados: { cabecalho: 'dados', modelo:'dados', nome:'dados'},
    dadosInterface: { cabecalho: 'interface', modelo:'dadosInterface',  nome:'dados'},
    modelo: { cabecalho: 'dados', modelo:'modelo', nome:'modelo'},
    modeloInterface: { cabecalho: 'interface', modelo:'modeloInterface', nome:'modelo'},
    permissao: { cabecalho: 'dados', modelo:'permissao', nome:'permissao'},
    permissaoInterface: { cabecalho: 'interface', modelo:'permissaoInterface', nome:'permissao'}
  }

  static dados(nomeVariavel: string, dados: any): string {

    const sucesso = `Documento criado: ${nomeVariavel}`;

    const criardados = `
    ${Arquivo.lerArquivo('../dados/dados.interface.ts')}
    ${Documento.criarGrupo(dados, ModeloDocumento.metodoLista(ModeloDocumento.tipoDocumento.permissao))}
    ${Documento.criarGrupo(dados, ModeloDocumento.metodoLista(ModeloDocumento.tipoDocumento.permissaoInterface))}
    ${Documento.criarGrupo(dados, ModeloDocumento.metodoObjeto(ModeloDocumento.tipoDocumento.dados))}
    ${Documento.criarGrupo(dados, ModeloDocumento.metodoObjeto(ModeloDocumento.tipoDocumento.dadosInterface))}
    ${Documento.criarGrupo(dados, ModeloDocumento.metodoObjeto(ModeloDocumento.tipoDocumento.modelo))}
    ${Documento.criarGrupo(dados, ModeloDocumento.metodoObjeto(ModeloDocumento.tipoDocumento.modeloInterface))}
    `;

    console.log(sucesso);
    return criardados;
  }

  static cabecalho = (tipoDocumento:TipoDocumento ) => {

    const dados = `${tipoDocumento.nome}_Dados`
    const inteface = `${tipoDocumento.nome}_Interface`
    const mensagemErro = `Sem Tipo: ${tipoDocumento.nome}`

    switch (tipoDocumento.cabecalho) {

      case 'dados': return `export const ${dados} : ${inteface} =`

      case 'interface': return `export interface ${inteface}`

      default: console.log(mensagemErro); break;
    }
    
    return mensagemErro
 
  } 

  static modelo = ( tipoDocumento:TipoDocumento, propriedade: any, valor: Required<InterfaceDados> ) => {
    
    const mensagemErro = `Sem Tipo: ${tipoDocumento.modelo}`
    const valorDados = (valor.dados.interface == 'boolean' || valor.dados.interface == 'Date') ? `${valor.dados.valor}` : ` "${valor.dados.valor}"`
    
    switch (tipoDocumento.modelo) {

      case 'dados': return `${propriedade} : ${valorDados}\n`;

      case 'dadosInterface': return `${propriedade} : ${valor.dados.interface}\n`;

      case 'modelo': return `${propriedade} : ${JSON.stringify(valor.modelo)}\n`;

      case 'modeloInterface': return `${propriedade} : Partial<Modelo>\n`;
     
      case 'permissao': return `
        id: "${valor.id}",
        tipo: "${valor.tipo}",
        exibir: ${JSON.stringify(valor.exibir)},\n`;

      case 'permissaoInterface': return`
        id: "${valor.id}",
        tipo: Modelo['tipo'],
        exibir: Partial<Exibir>,\n`;

      default: console.log(mensagemErro); break;
    }
    
    return mensagemErro
 
  } 

 static metodoLista(tipoDocumento:TipoDocumento): Formata{
   
  const modelos = { cabecalho: ModeloDocumento.cabecalho(tipoDocumento),

    modelo: (propriedade: any, valor: Required<InterfaceDados>) => {
      return ModeloDocumento.modelo(tipoDocumento, propriedade, valor)
    },

    objeto: (propriedade: any, valor: Required<InterfaceDados>, valorRecursivo: string
    ) => `${propriedade} :
      [ ${modelos.objetoRecursivo(propriedade,valor,valorRecursivo)}]`,

    objetoRecursivo: (propriedade: any, valor: Required<InterfaceDados>, valorRecursivo: string
    ) => ` {
      ${modelos.modelo(propriedade,valor)}
      _grupo: [ ${valorRecursivo}]
    } `,

    string: (propriedade: any, valor: Required<InterfaceDados>) =>
     `{${modelos.modelo(propriedade, valor)}}`,
  }
  return modelos
}
 static metodoObjeto(tipoDocumento:TipoDocumento){
   
  const modelos = { cabecalho: ModeloDocumento.cabecalho(tipoDocumento),

    modelo: (propriedade: any, valor: Required<InterfaceDados>) => {
      return ModeloDocumento.modelo(tipoDocumento, propriedade, valor)
    },

    objeto: (propriedade: any, valor: Required<InterfaceDados>, valorRecursivo: string
    ) => `${propriedade} : { ${valorRecursivo} }`,

    objetoRecursivo: (propriedade: any, valor: Required<InterfaceDados>, valorRecursivo: string
    ) => `${modelos.objeto(propriedade, valor, valorRecursivo)}`,

    string: (propriedade: any, valor: Required<InterfaceDados>) =>
     `${modelos.modelo(propriedade, valor)}`,
  }
  return modelos
}
  
}
