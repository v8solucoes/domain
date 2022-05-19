import { RespostaTesteConstrutor } from "../../14-resposta/resposta.construtor";

export class Opcoes {

    public objeto: any = {}
    public lista: string[] = []
    public interface: string;

    constructor(...opcoes: string[]) {

        opcoes.map((valor: string) => {
            this.objeto[valor] = valor
            this.lista.push(valor)
        })
        this.interface = `'${this.lista.join(`' | '`)}'`
    }

    testar(campo: string) {
        const lista = this.lista
        const sucesso = lista.includes(campo)
        const erro = `" ${campo} " não existe na lista: ${JSON.stringify(lista)}`

        return new RespostaTesteConstrutor().resposta(sucesso, erro);
    }
}

export const ambiente = new Opcoes('adm', 'revenda', 'cliente')
