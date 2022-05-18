import { RespostaTeste } from "../../14-resposta/resposta.interface"
import { Testar_Modelo } from "../testar/testar.modelo"

export class String {

    get interface() { return `string` }

    testar(req:RespostaTeste['data']): RespostaTeste {

        const testar = new Testar_Modelo()
        return testar.minimoEmaximo(req)
    }
}