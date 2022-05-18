export type PropriedadeNome<T> = { [K in keyof T]: K }[keyof T];
/* Recebe { propriedade: valor } Devolve Nome = "propriedade" | "prop..." | 
Documentação https://www.typescriptlang.org/docs/handbook/2/mapped-types.html*/

export type PropriedadeValor<T> = T [keyof T]
/* Recebe { propriedade: valor } Devolve Nome = "valor" | "prop..." | 
Documentação: https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html */

/* 
PROVA DE CONCEITO ==============================================

const tipoAcesso = ['adm', 'revenda', 'cliente']

type Move = keyof typeof tipoAcesso;

export class TipoClasse {
    teste(valor:string):string{ return 'teste'}
    casa(valor:string):string{ return 'teste'}
  }
  
  export type Classe = TipoClasse
  export type ClassNome = PropriedadeNome<Classe>
  export type ClassValor = PropriedadeValor<Classe>
  
  const constante: ClassValor = (valor:string)=>{ return valor} 
  const objeto: Classe =  { 
    teste(valor:string) { return valor},
    casa(valor:string) { return valor},
   }
  export class ClasseExtende extends TipoClasse {}
  
  export class ClasseImplementa implements TipoClasse {
    teste(valor:string) { return valor}
    casa(valor:string) { return valor}
  }
  
  new ClasseExtende().casa('teste') */

/* type World = "world";
type Greeting = `hello ${World}`; */
/* https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html */

/* Typos TiposObrigatorios >Partial<Type> */
export type Obrigatorio<T> = Required<T>
export type Opcional<T> = Partial<T>
