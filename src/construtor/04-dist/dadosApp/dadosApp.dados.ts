
    import { Modelo_Dados, Nome_Dados, Permissao_Dados } from "../../01-dados/dados.interface";
     export const dados_Dados : dados_Interface  =  {  adm : {  conta : {  nome : "José" 
, email : "teste@v8teste.com" 
, senha : "123456" 
, telefone : "11-98123-1970" 
, cpf : "283110418" 
 }  
, credencial : {  usuario : {  id_usuario : "ZEjRkWCDc1PkuIaFyaWnYqmJY4q1" 
, id_revenda : "C0JrcUWVqTQR3sPt8Qqo" 
, id_cliente : "gfFyiX5IU4OaoXm4BDzX" 
, tipoAcesso : "adm" 
 }  
, requisicao : {  ambiente : "ambienteTesteV8" 
, idModulo : "conta-adm" 
, idItem : "sem item" 
, acao : "set" 
, funcao : "criarAutenticacao" 
, dominio : "localhost" 
, dataUpdate : "Sem Valor Inicial" 
, dataCriacao : "Sem Valor Inicial" 
 }  
 }  
 }   }  
     export interface dados_Interface  {  adm : {  conta : {  nome : string 
, email : string 
, senha : string 
, telefone : string 
, cpf : string 
 }  
, credencial : {  usuario : {  id_usuario : string 
, id_revenda : string 
, id_cliente : string 
, tipoAcesso : 'adm' | 'revenda' | 'cliente' 
 }  
, requisicao : {  ambiente : 'ambienteTesteV8' | 'producao' 
, idModulo : 'conta-adm' 
, idItem : string | boolean 
, acao : 'criar' | 'set' | 'deletar' | 'update' | 'lerColecao' | 'lerDocumento' 
, funcao : 'criarAutenticacao' 
, dominio : string 
, dataUpdate : string | Date 
, dataCriacao : string | Date 
 }  
 }  
 }   }  
     export interface dados_Interface_Opcional  {  adm : {  conta : {  nome ?: string 
, email ?: string 
, senha ?: string 
, telefone ?: string 
, cpf ?: string 
 }  
, credencial : {  usuario : {  id_usuario ?: string 
, id_revenda ?: string 
, id_cliente ?: string 
, tipoAcesso ?: 'adm' | 'revenda' | 'cliente' 
 }  
, requisicao : {  ambiente ?: 'ambienteTesteV8' | 'producao' 
, idModulo ?: 'conta-adm' 
, idItem ?: string | boolean 
, acao ?: 'criar' | 'set' | 'deletar' | 'update' | 'lerColecao' | 'lerDocumento' 
, funcao ?: 'criarAutenticacao' 
, dominio ?: string 
, dataUpdate ?: string | Date 
, dataCriacao ?: string | Date 
 }  
 }  
 }   }  
     export const permissao_Dados : permissao_Interface[]  =  [  {  
          id: "adm",
          tipo: "objeto",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false},  
 _grupo: [  {  
          id: "conta",
          tipo: "objeto",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false},  
 _grupo: [  { 
          id: "nome",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
, { 
          id: "email",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
, { 
          id: "senha",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
, { 
          id: "telefone",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
, { 
          id: "cpf",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
 ] } 
, {  
          id: "credencial",
          tipo: "objeto",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false},  
 _grupo: [  {  
          id: "usuario",
          tipo: "objeto",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false},  
 _grupo: [  { 
          id: "id_usuario",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
, { 
          id: "id_revenda",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
, { 
          id: "id_cliente",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
, { 
          id: "tipoAcesso",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
 ] } 
, {  
          id: "requisicao",
          tipo: "objeto",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false},  
 _grupo: [  { 
          id: "ambiente",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
, { 
          id: "idModulo",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
, { 
          id: "idItem",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
, { 
          id: "acao",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
, { 
          id: "funcao",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
, { 
          id: "dominio",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
, { 
          id: "dataUpdate",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
, { 
          id: "dataCriacao",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
 ] } 
 ] } 
 ] }  ]  
     export interface permissao_Interface  {  
          id: "adm";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
            
 _grupo: [  {  
          id: "conta";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
            
 _grupo: [  { 
          id: "nome";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
, { 
          id: "email";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
, { 
          id: "senha";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
, { 
          id: "telefone";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
, { 
          id: "cpf";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
 ] } 
, {  
          id: "credencial";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
            
 _grupo: [  {  
          id: "usuario";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
            
 _grupo: [  { 
          id: "id_usuario";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
, { 
          id: "id_revenda";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
, { 
          id: "id_cliente";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
, { 
          id: "tipoAcesso";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
 ] } 
, {  
          id: "requisicao";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
            
 _grupo: [  { 
          id: "ambiente";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
, { 
          id: "idModulo";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
, { 
          id: "idItem";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
, { 
          id: "acao";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
, { 
          id: "funcao";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
, { 
          id: "dominio";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
, { 
          id: "dataUpdate";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
, { 
          id: "dataCriacao";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
 ] } 
 ] } 
 ] }  
     export const modelo_Dados : modelo_Interface  =  {  adm : {  conta : { nome : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,email : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,senha : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,telefone : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,cpf : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
 } 
, credencial : {  usuario : { id_usuario : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,id_revenda : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,id_cliente : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,tipoAcesso : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
 } 
, requisicao : { ambiente : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,idModulo : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,idItem : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,acao : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,funcao : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,dominio : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,dataUpdate : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,dataCriacao : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
 } 
 } 
 }  }  
     export interface modelo_Interface  {  adm : {  conta : { nome : Modelo_Dados
,email : Modelo_Dados
,senha : Modelo_Dados
,telefone : Modelo_Dados
,cpf : Modelo_Dados
 } 
, credencial : {  usuario : { id_usuario : Modelo_Dados
,id_revenda : Modelo_Dados
,id_cliente : Modelo_Dados
,tipoAcesso : Modelo_Dados
 } 
, requisicao : { ambiente : Modelo_Dados
,idModulo : Modelo_Dados
,idItem : Modelo_Dados
,acao : Modelo_Dados
,funcao : Modelo_Dados
,dominio : Modelo_Dados
,dataUpdate : Modelo_Dados
,dataCriacao : Modelo_Dados
 } 
 } 
 }  }  
    