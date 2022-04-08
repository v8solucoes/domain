export const debugar = {
    criarDados: true,
    autenticar: true,
    interfaceService: true
}

export class Debugar {
  constructor(ativo: boolean, nome:string, propriedade:string, valor: any) {
    if (ativo == true) {
      console.group(nome + ": " + propriedade);
      console.log(valor);
      console.groupEnd();
    }
  }
}
