import { Ambiente } from "../01-validar/opcoes/ambiente";
import { String } from "../01-validar/opcoes/string";
import { TipoAcesso } from "../01-validar/opcoes/tipoAcesso";

export class TipoCampo {

  get string() { return new String() }
  get tipoAcesso() { return new TipoAcesso() }
  get ambiente() { return new Ambiente() }

}