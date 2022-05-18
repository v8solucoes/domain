export type NomePropriedades<T> = { [K in keyof T]: K }[keyof T];
/* Recebe { propriedade: valor } Devolve Nome = "propriedade" | "prop..." | 
Documentação https://www.typescriptlang.org/docs/handbook/2/mapped-types.html*/

export type ValorPropriedade<T> = T [keyof T]
/* Recebe { propriedade: valor } Devolve Nome = "valor" | "prop..." | 
Documentação: https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html */

/* type World = "world";
type Greeting = `hello ${World}`; */
/* https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html */

/* Typos TiposObrigatorios >Partial<Type> */
export type Obrigatorio<T> = Required<T>
export type Opcional<T> = Partial<T>
