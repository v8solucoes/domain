
    import { Modelo_Dados, Nome_Dados, Permissao_Dados } from "../../01-dados/dados.interface";
     export const dados_Dados : dados_Interface  =  {  adm : {  conta : {  nome : "José" 
, email : "teste@v8teste.com" 
, senha : "123456" 
, telefone : "11-98123-1970" 
, cpf : "283110418" 
 }  
 }   }  
     export interface dados_Interface  {  adm : {  conta : {  nome : string 
, email : string 
, senha : string 
, telefone : string 
, cpf : string 
 }  
 }   }  
     export interface dados_Interface_Opcional  {  adm : {  conta : {  nome ?: string 
, email ?: string 
, senha ?: string 
, telefone ?: string 
, cpf ?: string 
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
 ] }  
     export const modelo_Dados : modelo_Interface  =  {  adm : {  conta : { nome : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,email : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,senha : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,telefone : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
,cpf : {"design":"string;","validarSincrono":false,"validarAssincrono":false,"colecao":{"lista":false,"objeto":false}}
 } 
 }  }  
     export interface modelo_Interface  {  adm : {  conta : { nome : Modelo_Dados
,email : Modelo_Dados
,senha : Modelo_Dados
,telefone : Modelo_Dados
,cpf : Modelo_Dados
 } 
 }  }  
    