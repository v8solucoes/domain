import { RespostaTeste } from "../../14-resposta/resposta.interface"
import { Testar_Modelo } from "../testar/testar.modelo"

export class TipoAcesso {

    opcoes = ['adm', 'revenda', 'cliente']

    get interface() {
        return `"'${this.opcoes.join(`' | '`)}'"`
    }
    testar(campo: string): RespostaTeste {
        return new Testar_Modelo().campoNaLista({
            input: campo, objeto: this.opcoes, config: null
        })
    }
}