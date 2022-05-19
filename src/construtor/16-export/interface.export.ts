import { NomePropriedades } from "../../funcoes/outras/funcoes.typscript";
import { dados_Interface } from "../04-dist/dadosApp/dadosApp.dados";

export type Modulo = dados_Interface['adm']
export type Credencial = dados_Interface['adm']['credencial']
export type Usuario = Credencial['usuario']
export type I_Requisicao = Credencial['requisicao']
export type ModuloNome = NomePropriedades<Modulo>