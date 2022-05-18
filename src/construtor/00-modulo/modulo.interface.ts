import { Nome_Dados } from "../01-dados/dados.interface";

export interface Construtor_Modulo {
 nome: Nome_Dados['moduloNome'];
 pasta: Nome_Dados['moduloPasta'];
 tipoAcesso: Nome_Dados['tipoAcesso'],
 servico: boolean,
 rota: string,
 id: Nome_Dados['stringOuBoolean']
}
export type Estrutura_Modulo = Record<Nome_Dados['moduloId'], Omit<Construtor_Modulo, 'rota' | 'id'>>