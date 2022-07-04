export class ReplaceUnit {

    removeEmptyStartEndMultiples(text: string): string {
        return text.trim().replace(/( )+/g, " ")
    }
    removeAllEmpty(text: string): string {
        return text.replace(/( )+/g, "")
    }
    removeEmptyMultiples(text: string): string {
        return text.replace(/( )+/g, " ")
    }
    removeEspecialCharactersName(text: string): string {
        return text.replace(/([^ a-z | A-Z | À-Ÿ | " " | .]) | ( )+/g, "")
    }
    removeEspecialCharactersEmail(text: string): string {
        return text.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        .replace(/([\s+])/g, '')// Remove acentos
    }
    removeNumber(text: string): string {
        return text.replace(/[0-9]/g, "")
    }
    removeEmptySpace(text: string): string {
        return text.trim().replace(/( )+/g, " ")
    }
    removeAccent(text: string): string {
        return text.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    }
    replaceEmptytoHyphen(texto: string): string {
        return texto.replace(/ /g, '-')
    }
    toUpperCase(texto: string): string {
        return texto.toUpperCase()
    }
    toLowerCase(texto: string): string {
        return texto.toLowerCase()
    }
    toUpperCaseFirst(texto: string): string {
        return texto.toLowerCase().charAt(0).toUpperCase() + texto.substr(1)
    }
    toUpperCaseFirstAll(text: string): string {
        return text.toLowerCase().replace(/(?:^|\s)\S/g, (a) => a.toUpperCase())
    }
   /*  email(text: string): string {
        return text.toLowerCase().replace(/\S+@\S+\.\S+/g, (a) => a.toUpperCase())
    } */
    replaceCharactersTo(texto: string, caracter: string): string {
        return texto.replace(/([^\w]+|\s+)/g, `${caracter}`)
    }
    replaceCharactersMultiplesTo(texto: string, caracter: string): string {
        return texto.replace(/\-\-+/g, `${caracter}`)	// Substitui multiplos hífens por um único hífen
    }
    removeMultiplesHypensStartEnd(texto: string): string {
        return texto.replace(/\-\-+/g, '-').replace(/(^-+|-+$)/, '')
    }
    removeSpecialCharacter(texto: string) {
        return this.toUpperCaseFirstAll(texto).normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Remove acentos
            .replace(/([^\w]+|\s+)/g, '-') // Substitui espaço e outros caracteres por hífen
            .replace(/\-\-+/g, '-')	// Substitui multiplos hífens por um único hífen
            .replace(/(^-+|-+$)/, ''); // Remove hífens extras do final ou do inicio da string
    }
    composeMask(...funcoes: any) {

        return (valor: any) => {
            return funcoes.reduce((acumulador: any, funcao: any) => {
                return funcao(acumulador)
            }, valor)
        }

    }
}