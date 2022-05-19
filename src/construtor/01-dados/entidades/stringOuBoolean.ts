import { Testar } from "../metodos/testar/testar.interface"
import { Testar_Modelo } from "../metodos/testar/testar.modelo"

export class StringOuBoolean {

    interface = `string | boolean`

    testar(campo:string): boolean {

        const testar = new Testar_Modelo()
        return testar.tipoStringOuBoolean({'input': campo, 'objeto': null, 'config':null})
    }
}