
import { PropriedadeNome } from "../typscript/typscript.funcoes";
import { DadosEntidades } from "./dados.entidades";

export type NomePropriedades<T> = { [K in keyof T]: K }[keyof T];

export interface Nome_Dados {
  tipoDados: 'objeto' | 'lista' | 'valor'
  ambiente: PropriedadeNome<DadosEntidades['ambiente']>,
  acao: PropriedadeNome<DadosEntidades['acaoCrud']>,
  funcao: DadosEntidades['funcao'],
  moduloId: PropriedadeNome<DadosEntidades['moduloId']>,
  tipoAcesso: PropriedadeNome<DadosEntidades['tipoAcesso']>,
  tema: 'pad-tema-black' | 'pad-tema-white' | 'cus-tema-black' | 'cus-tema-white'
  stringOuBoolean: string | boolean,
  moduloNome: 'funcao'
  | `Usuário ${Capitalize<Nome_Dados['tipoAcesso']>}`
  | `Conta ${Capitalize<Nome_Dados['tipoAcesso']>}`
  moduloPasta: '/lista' | '/relatorio' | '/historico' | '/deletar'
  documento: "Dados" | "Interface" | "PermissaoDados" | "PermissaoInterface"
}

export type Interface_Dados = 'string' | 'boolean' | 'any' | 'Date | string' | 'number' | 'null'
| `Nome_Dados['tipoAcesso']`
| `Nome_Dados['stringOuBoolean']`
| `Nome_Dados['acao']`
| `Nome_Dados['modulo']`
| `Nome_Dados['moduloPasta']`
| `Nome_Dados['moduloNome']`
| `Nome_Dados['moduloUrl']`
| `Nome_Dados['moduloId']`
| `Nome_Dados['ambiente']`
| `Nome_Dados['tema']`
| `Nome_Dados['funcao']`
| `Nome_Dados['modeloTipo']`
| `Nome_Dados['documento']`

export interface Construtor_Dados {
  id: string;
  nome?: string
  valor?: any | boolean
  tipo?: Nome_Dados['tipoDados']
  interface?: any;
  tipoCampo?: PropriedadeNome<DadosEntidades>;
  modelo?: Partial<Modelo_Dados>;
  permissao?: Partial<Permissao_Dados>;
  _grupo: Required<Construtor_Dados>[] | Required<Omit<Construtor_Dados, '_grupo'>>[]
}
/* interface?: Interface_Dados; */
export interface Permissao_Dados {
  formulario: boolean;
  titulo: boolean;
  subTitulo: boolean;
}

export interface Modelo_Dados {
  design: string;
  validarSincrono: boolean;
  validarAssincrono: boolean;
  colecao: {
    lista: boolean;
    objeto: boolean;
  };
}

export interface Req_Dados {
  dados: Required<Construtor_Dados>[]
  objeto: Construtor_Dados
  lista: Construtor_Dados
  valor: Omit<Construtor_Dados, '_grupo'>
  criarValor: Omit<Construtor_Dados, '_grupo'>
}
export interface Resposta_Dados {
  dados: Required<Construtor_Dados>[]
  objeto: Required<Construtor_Dados>
  lista: Required<Construtor_Dados>
  valor: Required<Omit<Construtor_Dados, '_grupo'>>
  criarValor: Required<Omit<Construtor_Dados, '_grupo'>>
  modelo: Required<Modelo_Dados>
  permissao: Required<Permissao_Dados>
}
