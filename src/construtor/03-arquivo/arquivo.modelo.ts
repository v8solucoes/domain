import { DocumentoConstrutor as Documento } from "../02-documento/documento.construtor";
import { ConstrutorArquivo as Arquivo } from "./arquivo.construtor";

export class Modelo_Arquivo {
  static dados(nome: string) {
 
    Arquivo.novo(`../04-dist/${nome}`,`${nome}.dados.ts`, new Documento().start());
    } 
}
