import { ValidatorResponse } from "./shared/interface";
import { NameProperty, NameValue } from "./shared/typscript";



export class Start {
  constructor() {

/*     this.start() */
 /*    this.compose({ id: 1 }, null, { salary: 100 }) */
  }
  compose(...funcoes: any):ValidatorResponse {
    
    const validators = funcoes.reduce(
      (accumulator:any, current:any) => {
        return { ...accumulator, ...current };
      },
      {},
    );
  console.log('compose')
  console.log(validators)
    if(!!Object.keys(validators).length){
       return null
    } else {
       return validators
    }  

  }
  async start() {

    const teste ={}

    const texto = 'EmersonFEl ixasdfasdf asd(){}f_asd fasdfasdf'
    const caracterStartEnd = /(^ + | +$)/i
    const caracterGlobal = /([^\w]+|\s+)/g
    const caracter = /(?<err>[-+=*&;%/()<>()\\{\\}$#@!_])/g
    // Conceito
    // Testar Variável se tem caracter não permitidos adfasd
    console.log('Testar')
    console.log(caracter.test(texto))
    console.log(texto.match(caracter))
    console.log(caracter.exec(texto))
    // Substituir
    console.log('Substituir' )
    console.log(texto.replace(caracterGlobal, ''))

    try {
      return "sucesso";
    } catch (error) {
      console.log(error);

      return error;
    }
  }
}

const start = new Start();
