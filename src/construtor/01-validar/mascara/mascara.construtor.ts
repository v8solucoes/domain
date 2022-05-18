export class Mascara_Construtor {

    removerEspacoVazio(texto: string): string {
        return texto.trim().replace(/( )+/g, " ")
    }
    removerAcento(texto: string):string  {
        return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    }
    trocarEspacoPorTraco(texto: string):string  {
        return texto.replace(/ /g, '-')
    }
    converterMaiscula(texto: string):string  {
        return texto.toUpperCase()
    }
    converterMinuscula(texto: string):string  {
        return texto.toLowerCase()
    }
    converterMaiusculaSoPrimeira(texto: string):string  {
        return texto.toLowerCase().charAt(0).toUpperCase() + texto.substr(1)
    }
    converterMaiusculaTodasPrimeira(texto: string):string {
        return texto.toLowerCase().replace(/(?:^|\s)\S/g, (a) => a.toUpperCase())
    }

    substituirEspacoEcaracterPor(texto: string, caracter: string):string {
        return texto.replace(/([^\w]+|\s+)/g, `${caracter}`)
    }
    substituirMultiploesEcaracterPor(texto: string, caracter: string):string {
        return texto.replace(/\-\-+/g, `${caracter}`)	// Substitui multiplos hífens por um único hífen
    }
    substituirMultiplosIfensInicioFinal(texto:string):string{
        return  texto.replace(/\-\-+/g, '-').replace(/(^-+|-+$)/, '')
    }
 
    removerCarcterEspecial(texto: string) {

        return this.converterMaiusculaTodasPrimeira(texto).normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Remove acentos
            .replace(/([^\w]+|\s+)/g, '-') // Substitui espaço e outros caracteres por hífen
            .replace(/\-\-+/g, '-')	// Substitui multiplos hífens por um único hífen
            .replace(/(^-+|-+$)/, ''); // Remove hífens extras do final ou do inicio da string
    }
}