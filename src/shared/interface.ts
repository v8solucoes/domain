import { Idados as Idata} from "../construtor/04-dist/dadosApp/dadosApp.dados";
import { Resposta } from "../construtor/14-resposta/resposta.interface";

export { Idata }
export type Icredential = Idata['adm']['credential']
export type Iuser = Idata['adm']['credential']['user']
export type Iresponse<data> = Resposta<data>
export type Irequest = Idata['adm']['credential']['request']
export type IrequestData = { credential: Icredential, dados:any }