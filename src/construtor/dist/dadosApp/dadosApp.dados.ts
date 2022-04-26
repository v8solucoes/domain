
    import { Modelo_Dados, Nome_Dados, Permissao_Dados } from "../../dados/dados.interface";
     export const dados_Dados : dados_Interface  =  {  usuarioAdm : {  credencial : {  usuario : {  id_adm : "v8888asdfasdf" 
, id_usuario : "ZEjRkWCDc1PkuIaFyaWnYqmJY4q1" 
, id_revenda : "C0JrcUWVqTQR3sPt8Qqo" 
, id_cliente : "gfFyiX5IU4OaoXm4BDzX" 
, tipoAcesso : "adm" 
, nome : "Emerson" 
, email : "teste@v8sites.com.br" 
, telefone : "11-0000-0000" 
, senha : "123456" 
 } 
, modulo : {  id : "usuario_adm" 
, nome : "Usuario Adm" 
, url : "usuario-adm" 
, servico : true 
, tipoModulo : "adm" 
 } 
, requisicao : {  ambiente : "ambienteTesteV8" 
, funcao : "semFuncao" 
, acao : "set" 
, item : "sem item" 
, itemCriar : "Sem Valor Inicial" 
, dominio : "localhost" 
, dataUpdate : "Sem Valor Inicial" 
, dataCriacao : "Sem Valor Inicial" 
 } 
 } 
, design : {  iniciarMenuFixo : true 
, tema : "pad-tema-black" 
, temaFonte : "Sem Valor Inicial" 
 } 
, menu : {  adm : {  principal : [  {  moduloNome : "usuario" 
, url : "usuario-adm" 
, tipo : "adm" 
, acao : "lerColecao" 
, item : "ffffff" 
, icone : "home" 
 }  
 ] 
 } 
 } 
 }  }  
     export interface dados_Interface  {  usuarioAdm : {  credencial : {  usuario : {  id_adm : string 
, id_usuario : string 
, id_revenda : string 
, id_cliente : string 
, tipoAcesso : Nome_Dados['tipoAcesso'] 
, nome : string 
, email : string 
, telefone : string 
, senha : string 
 } 
, modulo : {  id : Nome_Dados['modulo'] 
, nome : string 
, url : string 
, servico : boolean 
, tipoModulo : Nome_Dados['tipoAcesso'] 
 } 
, requisicao : {  ambiente : Nome_Dados['ambiente'] 
, funcao : Nome_Dados['funcao'] 
, acao : Nome_Dados['acao'] 
, item : string 
, itemCriar : Nome_Dados['stringOuBoolean'] 
, dominio : string 
, dataUpdate : Date | string 
, dataCriacao : Date | string 
 } 
 } 
, design : {  iniciarMenuFixo : boolean 
, tema : Nome_Dados['tema'] 
, temaFonte : string 
 } 
, menu : {  adm : {  principal : [  {  moduloNome : string 
, url : Nome_Dados['moduloUrl'] 
, tipo : Nome_Dados['tipoAcesso'] 
, acao : Nome_Dados['acao'] 
, item : string 
, icone : string 
 }  
 ] 
 } 
 } 
 }  }  
     export const permissao_Dados : permissao_Interface[]  =  [  {  
          id: "usuarioAdm",
          tipo: "objeto",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false},  
 _grupo: [  {  
          id: "credencial",
          tipo: "objeto",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false},  
 _grupo: [  {  
          id: "usuario",
          tipo: "objeto",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false},  
 _grupo: [  { 
          id: "id_adm",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
, { 
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
, { 
          id: "nome",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
, { 
          id: "email",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
, { 
          id: "telefone",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
, { 
          id: "senha",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
 ] } 
, {  
          id: "modulo",
          tipo: "objeto",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false},  
 _grupo: [  { 
          id: "id",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
, { 
          id: "nome",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
, { 
          id: "url",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
, { 
          id: "servico",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
, { 
          id: "tipoModulo",
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
          id: "funcao",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
, { 
          id: "acao",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
, { 
          id: "item",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
, { 
          id: "itemCriar",
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
, {  
          id: "design",
          tipo: "objeto",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false},  
 _grupo: [  { 
          id: "iniciarMenuFixo",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
, { 
          id: "tema",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
, { 
          id: "temaFonte",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
 ] } 
, {  
          id: "menu",
          tipo: "objeto",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false},  
 _grupo: [  {  
          id: "adm",
          tipo: "objeto",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false},  
 _grupo: [  {  
          id: "principal",
          tipo: "lista",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false},  
 _grupo: [  {  
          id: "usuarioAdm",
          tipo: "objeto",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false},  
 _grupo: [  { 
          id: "moduloNome",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
, { 
          id: "url",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
, { 
          id: "tipo",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
, { 
          id: "acao",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
, { 
          id: "item",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
, { 
          id: "icone",
          tipo: "valor",
          exibir: {"formulario":true,"titulo":false,"subTitulo":false}, } 
 ] } 
 ] } 
 ] } 
 ] } 
 ] }  ]  
     export interface permissao_Interface  {  
          id: "usuarioAdm";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
            
 _grupo: [  {  
          id: "credencial";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
            
 _grupo: [  {  
          id: "usuario";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
            
 _grupo: [  { 
          id: "id_adm";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
, { 
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
, { 
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
          id: "telefone";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
, { 
          id: "senha";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
 ] } 
, {  
          id: "modulo";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
            
 _grupo: [  { 
          id: "id";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
, { 
          id: "nome";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
, { 
          id: "url";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
, { 
          id: "servico";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
, { 
          id: "tipoModulo";
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
          id: "funcao";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
, { 
          id: "acao";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
, { 
          id: "item";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
, { 
          id: "itemCriar";
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
, {  
          id: "design";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
            
 _grupo: [  { 
          id: "iniciarMenuFixo";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
, { 
          id: "tema";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
, { 
          id: "temaFonte";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
 ] } 
, {  
          id: "menu";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
            
 _grupo: [  {  
          id: "adm";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
            
 _grupo: [  {  
          id: "principal";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
            
 _grupo: [  {  
          id: "usuarioAdm";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
            
 _grupo: [  { 
          id: "moduloNome";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
, { 
          id: "url";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
, { 
          id: "tipo";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
, { 
          id: "acao";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
, { 
          id: "item";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
, { 
          id: "icone";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
           } 
 ] } 
 ] } 
 ] } 
 ] } 
 ] }  
     export const modelo_Dados : modelo_Interface  =  {  usuarioAdm : {  credencial : {  usuario : { id_adm : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,id_usuario : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,id_revenda : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,id_cliente : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,tipoAcesso : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,nome : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,email : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,telefone : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,senha : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
 } 
, modulo : { id : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,nome : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,url : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,servico : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,tipoModulo : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
 } 
, requisicao : { ambiente : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,funcao : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,acao : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,item : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,itemCriar : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,dominio : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,dataUpdate : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,dataCriacao : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
 } 
 } 
, design : { iniciarMenuFixo : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,tema : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,temaFonte : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
 } 
, menu : {  adm : {  principal : {  usuarioAdm : { moduloNome : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,url : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,tipo : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,acao : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,item : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,icone : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
 } 
 } 
 } 
 } 
 }  }  
     export interface modelo_Interface  {  usuarioAdm : {  credencial : {  usuario : { id_adm : Modelo_Dados
,id_usuario : Modelo_Dados
,id_revenda : Modelo_Dados
,id_cliente : Modelo_Dados
,tipoAcesso : Modelo_Dados
,nome : Modelo_Dados
,email : Modelo_Dados
,telefone : Modelo_Dados
,senha : Modelo_Dados
 } 
, modulo : { id : Modelo_Dados
,nome : Modelo_Dados
,url : Modelo_Dados
,servico : Modelo_Dados
,tipoModulo : Modelo_Dados
 } 
, requisicao : { ambiente : Modelo_Dados
,funcao : Modelo_Dados
,acao : Modelo_Dados
,item : Modelo_Dados
,itemCriar : Modelo_Dados
,dominio : Modelo_Dados
,dataUpdate : Modelo_Dados
,dataCriacao : Modelo_Dados
 } 
 } 
, design : { iniciarMenuFixo : Modelo_Dados
,tema : Modelo_Dados
,temaFonte : Modelo_Dados
 } 
, menu : {  adm : {  principal : {  usuarioAdm : { moduloNome : Modelo_Dados
,url : Modelo_Dados
,tipo : Modelo_Dados
,acao : Modelo_Dados
,item : Modelo_Dados
,icone : Modelo_Dados
 } 
 } 
 } 
 } 
 }  }  
    