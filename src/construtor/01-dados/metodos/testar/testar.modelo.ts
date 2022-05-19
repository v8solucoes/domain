import { Funcao_Testar_Construtor } from "../../../15-funcao/funcao.construtor";
import { Testar_Construtor } from "./testar.construtor";
import { Testar } from "./testar.interface";

export class Testar_Modelo extends Testar_Construtor {

    minimoEmaximo(req: Testar): boolean | any {

        const testar = new Testar_Construtor();
        const funcao = new Funcao_Testar_Construtor();

        return funcao.compor(
            testar.maiorQue,
            testar.menorQue
        )(req)
    }
    tipoStringOuBoolean(req: Testar): boolean | any {

        const tipo = req.input
        const testar = new Testar_Construtor();
        let sucesso: boolean = false
        const erro = `" ${typeof tipo} " deve ser STRING ou BOOLEAN.`

        switch (typeof tipo) {

            case 'string':
                sucesso = testar.tipoString(req)
                return sucesso
            case 'boolean':
                 sucesso = testar.tipoBoolean(req)
                return sucesso
            default:
                return new Testar_Modelo().resposta(sucesso,erro)
        }

    }
}