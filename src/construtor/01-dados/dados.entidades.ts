import { String } from "./entidades/string";
import { StringOuBoolean } from "./entidades/stringOuBoolean";
import { Data } from "./entidades/data";
import { Opcoes } from "./entidades/opcoes";
import { StringOuData } from "./entidades/stringOuData";

export class DadosEntidades {

  get ambiente() { return new Opcoes('ambienteTesteV8','producao') }
  get acaoCrud() { return new Opcoes('criar', 'set', 'deletar', 'update', 'lerColecao', 'lerDocumento') }
  get funcao() { return new Opcoes('criarAutenticacao') }
  get moduloId() { return new Opcoes('conta-adm') }
  get tipoAcesso() { return new Opcoes('adm','revenda','cliente') }
  get data() { return new Data() }
  get string() { return new String() }
  get stringOuData() { return new StringOuData() }
  get stringOuBoolean() { return new StringOuBoolean() }
  }
