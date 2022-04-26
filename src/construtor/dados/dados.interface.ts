export type NomePropriedades<T> = { [K in keyof T]: K }[keyof T];

export interface Nome_Dados {
  funcao: 'semFuncao' | 'criarAutenticacao',
  tema: 'pad-tema-black' | 'pad-tema-white' | 'cus-tema-black' | 'cus-tema-white'
  acao: 'criar' | 'set' | 'editar' | 'deletar' | 'lerColecao' | 'lerDocumento',
  stringOuBoolean: string | boolean,
  tipoAcesso: "adm" | "revenda" | "cliente" | "usuario",
  modulo: `usuario_${Nome_Dados['tipoAcesso']}` | `modelo_${Nome_Dados['tipoAcesso']}`,
  moduloId: `usuario${Capitalize<Nome_Dados['tipoAcesso']>}`
  moduloUrl: `usuario-${Lowercase<Nome_Dados['tipoAcesso']>}`
  moduloNome: `Usuário ${Capitalize<Nome_Dados['tipoAcesso']>}`
  moduloPasta: '/lista' | '/relatorio' | '/historico' | '/deletar'
  ambiente: 'ambienteTesteV8' | 'ambienteProducao',
  tipoDados: 'objeto' | 'lista' | 'valor'
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

export interface Estrutura_Dados {
  id: string;
  nome?: string
  valor?: any | boolean
  tipo?: Nome_Dados['tipoDados']
  interface?: Interface_Dados;
  modelo?: Partial<Modelo_Dados>;
  permissao?: Partial<Permissao_Dados>;
  _grupo: Required<Estrutura_Dados>[] | Required<Omit<Estrutura_Dados, '_grupo'>>[]
}

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
  dados: Required<Estrutura_Dados>[]
  objeto: Estrutura_Dados
  lista: Estrutura_Dados
  valor: Omit<Estrutura_Dados, '_grupo'>
  criarValor: Omit<Estrutura_Dados, '_grupo'>
}
export interface Resposta_Dados {
  dados: Required<Estrutura_Dados>[]
  objeto: Required<Estrutura_Dados>
  lista: Required<Estrutura_Dados>
  valor: Required<Omit<Estrutura_Dados, '_grupo'>>
  criarValor: Required<Omit<Estrutura_Dados, '_grupo'>>
  modelo: Required<Modelo_Dados>
  permissao: Required<Permissao_Dados>
}
