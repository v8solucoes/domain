export const debugar ={
    autenticar: true,
    logar: true
}
export class Debugar  {
 public debugar: boolean
    constructor(debugar: boolean, nome:string, agrupado: boolean) {
        this.debugar = debugar
        if(debugar) agrupado? console.group(nome) : console.groupCollapsed(nome);
    }
    bug(propriedadade: string, valor:any) {
     this.debugar ? console.log(propriedadade) : ''
     this.debugar ? console.log(valor) : ''
     return
    }
   fechar(){
      this.debugar ? console.groupEnd() : ''
      
      return
    }
}
