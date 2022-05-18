import { RespostaTeste } from "../../14-resposta/resposta.interface";
import { Funcao_Testar_Construtor } from "../../15-funcao/funcao.construtor";
import { Testar_Construtor } from "./testar.construtor";

export class Testar_Modelo extends Testar_Construtor {

    minimoEmaximo(req: RespostaTeste['data']) {

        const t = new Testar_Construtor();
        const f = new Funcao_Testar_Construtor();

        return f.compor(
            t.maiorQue,
            t.menorQue
        )(req)
    }
}