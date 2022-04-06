import * as fs from "fs";
import * as path from "path";

export class Compor<T> {

  constructor(){

  }
  criarArquivo(diretorio: string, arquivo: any) {
    fs.appendFileSync(path.join(__dirname, diretorio), arquivo)
    return "Criado " + diretorio;
  }
  start(...funcoes:any) {

    return (valor:T) => {
      return funcoes.reduce((acumulador: T, funcao:any) => {
        return funcao(acumulador) as T 
      }, valor)
    }

  }
 async startAsync(...funcoes:any) {

    return (valor:T) => {
      return funcoes.reduce((acumulador: T, funcao:any) => {
        return funcao(acumulador) as T
      }, valor)
    }

  }

}
function fun1(valor: string){
  setTimeout((o) => {
    console.log('tempo 200')
   }, 2000)

  return `${valor}/ um` }
function fun2(valor: string){

  setTimeout((o) => {
    console.log('tempo 1000')
   }, 1000)

  return `${valor}/ dois` } 

/* const teste = new Compor<Promise<any>().startAsync(fun1,fun2)

console.log( teste({'teste':'ola'})) */


export class Testar {

 /*  invocarCompor =  this.compor(this.promoessaAsync, this.fun1, this.fun2, this.fun3 ) */
/*   invocarCompor = this.compor(this.fun1, this.fun2, this.fun3, this.promessa) */
  
  constructor(){

   /*  console.log(this.invocarCompor('GALERA')) */
   this.comporAsync(this.promoessaAsync, this.promoessaAsync).then(o=>{ console.log(o)})
  }

  fun1(valor: string){ console.log('1'); return `${valor}/ um` }
  fun2(valor: string){ console.log('2'); return `${valor}/ dois`}
  fun3(valor: string){ console.log('3');return `${valor}/ tres`}

  async promoessaAsync() {

    try {

      const teste = await this.promessa()
      return await teste

    } catch (error) {
      console.log(error)
    }
  
  }

  promessa<T>(){
    let valor = `PROMESSAss`
    let tempo = 1000
    return new Promise((Resolvido:any, Rejeitado) => {

      let x = 0;
      setTimeout((o) => {
        if (x == 0) {
          
          return Resolvido({valor, tempo});
        } else {
          Rejeitado("Error");
        }
       }, tempo)
       return Resolvido({valor, tempo});
    })
  
  }

  compor(...funcoes:any){

    return (valor:any) => {
      return funcoes.reduce((acumulador: any, funcao:any) => {
        return funcao(acumulador) 
      }, valor)
    }

  }
  async comporPromisse(...funcoes:any): Promise<any>{

    return (valor:any): Promise<any> => {
      return funcoes.reduce((acumulador: any, funcao:any) => {
         funcao(acumulador) 
        return funcao(acumulador) 
      }, valor)
    }

  }
  async comporAsync(...funcoes:any): Promise<any>{

    return (valor:any) => {
      return funcoes.reduce( (acumulador: any, funcao:any) => {
        return funcao(acumulador) 
      }, valor)
    }

  }
}

new Testar()

export class Funcoes {

  static rapida(valor:string){ return valor}

 static promessa<T>(valor:T,tempo:number){

    return new Promise((Resolvido:any, Rejeitado) => {

      let x = 0;
      setTimeout((o) => {
        if (x == 0) {
          Resolvido({valor, tempo});
        } else {
          Rejeitado("Error");
        }
       }, tempo)
    
    });
  
  }

  constructor(){}

  static async teste(){
    console.log(await Funcoes.promessa({testes:'op 1'},3000))
    console.log( Funcoes.rapida('rp 1'))
    console.log(await Funcoes.promessa({testes:'op 1'},2000))
    console.log( Funcoes.rapida('rp 2'))
    console.log(await Funcoes.promessa({testes:'op 1'},1000))
    console.log( Funcoes.rapida('rp 3'))

  }
}

/* const start = new Testar().func('olá meu nome'); */
/* const start = new Funcoes()
Funcoes.teste() */

