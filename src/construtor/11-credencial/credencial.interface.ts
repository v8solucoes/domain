import { dados_Interface, dados_Interface_Opcional } from "../04-dist/dadosApp/dadosApp.dados";

export interface RequisicaoDados { credencial: Credencial, dados:any }  

// Montar Interface Módulos
export type Credencial = dados_Interface['adm']['credencial']
export type Requisicao = dados_Interface['adm']['credencial']['requisicao']
export type Usuario = dados_Interface['adm']['credencial']['usuario']
export type Credencial_Opcional = dados_Interface_Opcional['adm']['credencial']

// Construtores
export type CredencialModulo = Pick<Credencial['requisicao'], 'acao' | 'idModulo'| 'idItem' | 'funcao'>

