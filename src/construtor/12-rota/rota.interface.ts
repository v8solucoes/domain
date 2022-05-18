import { Construtor_Modulo } from "../00-modulo/modulo.interface";
import { Nome_Dados } from "../01-dados/dados.interface";
import { dados_Interface } from "../04-dist/dadosApp/-dadosApp.dados";

export type Construtor_Rota = {

    modulo: Construtor_Modulo;
    rota: string;
    id: Nome_Dados['stringOuBoolean']
} 

export type Req_Rota = {
    credencial: dados_Interface['adm']['credencial']
}
export type Resposta_Rota = {
    criar: Construtor_Modulo
    rotaTipoAcesso: Record<Nome_Dados['tipoAcesso'], string>
}