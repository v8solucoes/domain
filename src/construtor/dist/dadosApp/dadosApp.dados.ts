
    export type NomePropriedades<T> = { [K in keyof T]: K }[keyof T];

export interface InterfaceDados {
  id: string;
  nome?: string;
  valor?: any | boolean
  tipo?: Modelo['tipo']
  interface?: Dados['interface'];
  dados?: Partial<Dados>;
  modelo?: Partial<Modelo>;
  exibir?: Partial<Exibir>;
  _grupo?: { [key: string]: InterfaceDados }[]
}

export interface Dados {
  interface: 'string' | 'boolean' | 'any' | 'Date'
  | `nomePermissao`
  | `nomeStringOuBoolean`
  | `nomeAcao`
  | `nomeModulo`
  | `nomeModuloPasta`
  | `nomeAmbiente`
  
  valor: any;
}

export type nomeAcao = 'criar' | 'set' | 'editar' | 'deletar' | 'lerColecao' | 'lerDocumento'
export type nomeStringOuBoolean = string | boolean
export type nomePermissao = "adm" | "revenda" | "cliente" | "usuario"
export type nomeModulo = `usuario_${nomePermissao}`
export type nomeModuloPasta = '/lista' | '/relatorio' | '/historico' | '/deletar'
export type nomeAmbiente = 'ambienteTesteV8' | 'ambienteProducao'

export interface Exibir {
  formulario: boolean;
  titulo: boolean;
  subTitulo: boolean;
}

export interface Modelo {
  nome: string;
  tipo: "string" | "lista" | "objeto";
  valorInicial: string | number | boolean;
  design: string;
  validarSincrono: boolean;
  validarAssincrono: boolean;
  colecao: {
    lista: boolean;
    objeto: boolean;
  };
}
export interface Resposta {
  acao: nomeAcao;
  sucesso: boolean;
  mensagem?: string;
  credencial?: any
  data?: any;
  itemId?: string;
  respostaDataBase?: any;
}
    export const permissao_Dados : permissao_Interface ={ usuarioAdm :
      [  {
      
        id: "usuarioAdm",
        tipo: "objeto",
        exibir: {"formulario":true,"titulo":false,"subTitulo":false},

      _grupo: [  {
      
        id: "credencial",
        tipo: "objeto",
        exibir: {"formulario":true,"titulo":true,"subTitulo":true},

      _grupo: [  {
      
        id: "usuario",
        tipo: "objeto",
        exibir: {"formulario":true,"titulo":false,"subTitulo":false},

      _grupo: [ {
        id: "id_adm",
        tipo: "string",
        exibir: {"formulario":true,"titulo":false,"subTitulo":false},
},{
        id: "id_usuario",
        tipo: "string",
        exibir: {"formulario":true,"titulo":false,"subTitulo":false},
},{
        id: "id_revenda",
        tipo: "string",
        exibir: {"formulario":true,"titulo":false,"subTitulo":false},
},{
        id: "id_cliente",
        tipo: "string",
        exibir: {"formulario":true,"titulo":false,"subTitulo":false},
},{
        id: "tipoAcesso",
        tipo: "string",
        exibir: {"formulario":true,"titulo":false,"subTitulo":false},
},{
        id: "nome",
        tipo: "string",
        exibir: {"formulario":true,"titulo":false,"subTitulo":false},
},{
        id: "email",
        tipo: "string",
        exibir: {"formulario":true,"titulo":false,"subTitulo":false},
}]
    } , {
      
        id: "modulo",
        tipo: "objeto",
        exibir: {"formulario":true,"titulo":false,"subTitulo":false},

      _grupo: [ {
        id: "id",
        tipo: "string",
        exibir: {"formulario":true,"titulo":false,"subTitulo":false},
},{
        id: "nome",
        tipo: "string",
        exibir: {"formulario":true,"titulo":false,"subTitulo":false},
},{
        id: "url",
        tipo: "string",
        exibir: {"formulario":true,"titulo":false,"subTitulo":false},
},{
        id: "servico",
        tipo: "string",
        exibir: {"formulario":true,"titulo":false,"subTitulo":false},
},{
        id: "tipoModulo",
        tipo: "string",
        exibir: {"formulario":true,"titulo":false,"subTitulo":false},
}]
    } , {
      
        id: "requisicao",
        tipo: "objeto",
        exibir: {"formulario":true,"titulo":false,"subTitulo":false},

      _grupo: [ {
        id: "ambiente",
        tipo: "string",
        exibir: {"formulario":true,"titulo":false,"subTitulo":false},
},{
        id: "acao",
        tipo: "string",
        exibir: {"formulario":true,"titulo":false,"subTitulo":false},
},{
        id: "item",
        tipo: "string",
        exibir: {"formulario":true,"titulo":false,"subTitulo":false},
},{
        id: "itemCriar",
        tipo: "string",
        exibir: {"formulario":true,"titulo":false,"subTitulo":false},
},{
        id: "dominio",
        tipo: "string",
        exibir: {"formulario":true,"titulo":false,"subTitulo":false},
},{
        id: "dataUpdate",
        tipo: "string",
        exibir: {"formulario":true,"titulo":false,"subTitulo":false},
},{
        id: "dataCriacao",
        tipo: "string",
        exibir: {"formulario":true,"titulo":false,"subTitulo":false},
}]
    } ]
    } ]
    } ] }
    export interface permissao_Interface{ usuarioAdm :
      [  {
      
        id: "usuarioAdm",
        tipo: Modelo['tipo'],
        exibir: Partial<Exibir>,

      _grupo: [  {
      
        id: "credencial",
        tipo: Modelo['tipo'],
        exibir: Partial<Exibir>,

      _grupo: [  {
      
        id: "usuario",
        tipo: Modelo['tipo'],
        exibir: Partial<Exibir>,

      _grupo: [ {
        id: "id_adm",
        tipo: Modelo['tipo'],
        exibir: Partial<Exibir>,
},{
        id: "id_usuario",
        tipo: Modelo['tipo'],
        exibir: Partial<Exibir>,
},{
        id: "id_revenda",
        tipo: Modelo['tipo'],
        exibir: Partial<Exibir>,
},{
        id: "id_cliente",
        tipo: Modelo['tipo'],
        exibir: Partial<Exibir>,
},{
        id: "tipoAcesso",
        tipo: Modelo['tipo'],
        exibir: Partial<Exibir>,
},{
        id: "nome",
        tipo: Modelo['tipo'],
        exibir: Partial<Exibir>,
},{
        id: "email",
        tipo: Modelo['tipo'],
        exibir: Partial<Exibir>,
}]
    } , {
      
        id: "modulo",
        tipo: Modelo['tipo'],
        exibir: Partial<Exibir>,

      _grupo: [ {
        id: "id",
        tipo: Modelo['tipo'],
        exibir: Partial<Exibir>,
},{
        id: "nome",
        tipo: Modelo['tipo'],
        exibir: Partial<Exibir>,
},{
        id: "url",
        tipo: Modelo['tipo'],
        exibir: Partial<Exibir>,
},{
        id: "servico",
        tipo: Modelo['tipo'],
        exibir: Partial<Exibir>,
},{
        id: "tipoModulo",
        tipo: Modelo['tipo'],
        exibir: Partial<Exibir>,
}]
    } , {
      
        id: "requisicao",
        tipo: Modelo['tipo'],
        exibir: Partial<Exibir>,

      _grupo: [ {
        id: "ambiente",
        tipo: Modelo['tipo'],
        exibir: Partial<Exibir>,
},{
        id: "acao",
        tipo: Modelo['tipo'],
        exibir: Partial<Exibir>,
},{
        id: "item",
        tipo: Modelo['tipo'],
        exibir: Partial<Exibir>,
},{
        id: "itemCriar",
        tipo: Modelo['tipo'],
        exibir: Partial<Exibir>,
},{
        id: "dominio",
        tipo: Modelo['tipo'],
        exibir: Partial<Exibir>,
},{
        id: "dataUpdate",
        tipo: Modelo['tipo'],
        exibir: Partial<Exibir>,
},{
        id: "dataCriacao",
        tipo: Modelo['tipo'],
        exibir: Partial<Exibir>,
}]
    } ]
    } ]
    } ] }
    export const dados_Dados : dados_Interface ={ usuarioAdm : { credencial : { usuario : { id_adm :  "v8888asdfasdf"
,id_usuario :  "ZEjRkWCDc1PkuIaFyaWnYqmJY4q1"
,id_revenda :  "C0JrcUWVqTQR3sPt8Qqo"
,id_cliente :  "gfFyiX5IU4OaoXm4BDzX"
,tipoAcesso :  "adm"
,nome :  "Emerson"
,email :  "teste@v8sites.com.br"
 },modulo : { id :  "usuario_adm"
,nome :  "Usuario Adm"
,url :  "usuario-adm"
,servico : true
,tipoModulo :  "adm"
 },requisicao : { ambiente :  "ambienteTesteV8"
,acao : 'criar'
,item :  "sem item"
,itemCriar :  "itemCriar - sem dados"
,dominio :  "localhost"
,dataUpdate : new Date()
,dataCriacao : new Date()
 } } } }
    export interface dados_Interface{ usuarioAdm : { credencial : { usuario : { id_adm : string
,id_usuario : string
,id_revenda : string
,id_cliente : string
,tipoAcesso : nomePermissao
,nome : string
,email : string
 },modulo : { id : nomeModulo
,nome : string
,url : string
,servico : boolean
,tipoModulo : nomePermissao
 },requisicao : { ambiente : nomeAmbiente
,acao : nomeAcao
,item : string
,itemCriar : nomeStringOuBoolean
,dominio : string
,dataUpdate : Date
,dataCriacao : Date
 } } } }
    export const modelo_Dados : modelo_Interface ={ usuarioAdm : { credencial : { usuario : { id_adm : {"nome":"Administrador","tipo":"string","valorInicial":"string","design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,id_usuario : {"nome":"Usuário","tipo":"string","valorInicial":"string","design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,id_revenda : {"nome":"Revenda","tipo":"string","valorInicial":"string","design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,id_cliente : {"nome":"Cliente","tipo":"string","valorInicial":"string","design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,tipoAcesso : {"nome":"Tipo de Acesso","tipo":"string","valorInicial":"string","design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,nome : {"nome":"Nome","tipo":"string","valorInicial":"string","design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,email : {"nome":"E-mail","tipo":"string","valorInicial":"string","design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
 },modulo : { id : {"nome":"Id","tipo":"string","valorInicial":"string","design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,nome : {"nome":"Nome","tipo":"string","valorInicial":"string","design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,url : {"nome":"Url","tipo":"string","valorInicial":"string","design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,servico : {"nome":"Serviço","tipo":"string","valorInicial":"string","design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,tipoModulo : {"nome":"tipoModulo","tipo":"string","valorInicial":"string","design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
 },requisicao : { ambiente : {"nome":"Ambiente","tipo":"string","valorInicial":"string","design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,acao : {"nome":"Ação","tipo":"string","valorInicial":"string","design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,item : {"nome":"Item","tipo":"string","valorInicial":"string","design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,itemCriar : {"nome":"Item Criar","tipo":"string","valorInicial":"string","design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,dominio : {"nome":"Domínio","tipo":"string","valorInicial":"string","design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,dataUpdate : {"nome":"Data Update","tipo":"string","valorInicial":"string","design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,dataCriacao : {"nome":"Data Criacao","tipo":"string","valorInicial":"string","design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
 } } } }
    export interface modelo_Interface{ usuarioAdm : { credencial : { usuario : { id_adm : Partial<Modelo>
,id_usuario : Partial<Modelo>
,id_revenda : Partial<Modelo>
,id_cliente : Partial<Modelo>
,tipoAcesso : Partial<Modelo>
,nome : Partial<Modelo>
,email : Partial<Modelo>
 },modulo : { id : Partial<Modelo>
,nome : Partial<Modelo>
,url : Partial<Modelo>
,servico : Partial<Modelo>
,tipoModulo : Partial<Modelo>
 },requisicao : { ambiente : Partial<Modelo>
,acao : Partial<Modelo>
,item : Partial<Modelo>
,itemCriar : Partial<Modelo>
,dominio : Partial<Modelo>
,dataUpdate : Partial<Modelo>
,dataCriacao : Partial<Modelo>
 } } } }
    