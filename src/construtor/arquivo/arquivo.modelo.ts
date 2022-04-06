import { ModeloDados as Dados } from "../dados/dados.modelo";
import { ModeloDocumento as Documento } from "../documento/documento.modelo";
import { ConstrutorArquivo as Arquivo } from "./arquivo.construtor";

export class ModeloArquivo {
  static dados(nome: string) {
    Arquivo.novo(`../dist/${nome}`,`${nome}.dados.ts`, Documento.dados(nome, Dados.modulo));
    } 
}
