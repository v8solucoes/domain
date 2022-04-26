import { DocumentoConstrutor as Documento } from "../documento/documento.construtor";
import { ConstrutorArquivo as Arquivo } from "./arquivo.construtor";

export class ModeloArquivo {
  static dados(nome: string) {
 
    Arquivo.novo(`../dist/${nome}`,`${nome}.dados.ts`, new Documento().start());
    } 
}
