import { dados_Interface } from "../dist/dadosApp/dadosApp.dados";

export interface Requisicao {
credencial: dados_Interface['usuarioAdm']['credencial']
dados: any
}
export type Usuario = NomePropriedades<dados_Interface['usuarioAdm']['credencial']['usuario']>

  export type NomePropriedades<T> = { [K in keyof T]: K }[keyof T];
/* Recebe { propriedade: valor } Devolve Nome = "propriedade" | "prop..." | 
Documentação https://www.typescriptlang.org/docs/handbook/2/mapped-types.html*/