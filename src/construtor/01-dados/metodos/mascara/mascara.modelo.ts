import { Funcao_Mascara_Construtor } from "../../../15-funcao/funcao.construtor";
import { Mascara_Construtor } from "./mascara.construtor";

export class Mascara_Modelo extends Mascara_Construtor {

    mascara = new Mascara_Construtor();
    funcao = new Funcao_Mascara_Construtor();

    converterTextoPadraoURL(texto: string) {

        const m = this.mascara
        const f = this.funcao

        return f.mascara(
            m.removerEspacoVazio,
            m.trocarEspacoPorTraco,
            m.removerAcento,
            m.converterMinuscula,
        )(texto)

    }
}