import { ConstrutorDados as Criar } from "./dados.construtor";

export class ModeloDados {
  static grupo = {
    ...Criar.objeto({
      id: "usuario",
      _grupo: [
        Criar.string({ id: "id_adm", nome: 'Administrador', valor: 'v8888asdfasdf', interface: 'string' }),
        Criar.string({ id: "id_usuario", nome: 'Usuário', valor: 'ZEjRkWCDc1PkuIaFyaWnYqmJY4q1', interface: 'string' }),
        Criar.string({ id: "id_revenda", nome: 'Revenda', valor: 'C0JrcUWVqTQR3sPt8Qqo', interface: 'string' }),
        Criar.string({ id: "id_cliente", nome: 'Cliente', valor: 'gfFyiX5IU4OaoXm4BDzX', interface: 'string' }),
        Criar.string({ id: "tipoAcesso", nome: 'Tipo de Acesso', valor: 'adm', interface: 'nomePermissao' }),
        Criar.string({ id: "nome", nome: 'Nome', valor: 'Emerson', interface: 'string' }),
        Criar.string({ id: "email", nome: 'E-mail', valor: 'teste@v8sites.com.br', interface: 'string' }),
      ],
    }),
    ...Criar.objeto({
      id: "modulo",
      _grupo: [
        Criar.string({ id: "id", nome: 'Id', valor: 'usuario_adm', interface: 'nomeModulo' }),
        Criar.string({ id: "nome", nome: 'Nome', valor: 'Usuario Adm', interface: 'string' }),
        Criar.string({ id: "url", nome: 'Url', valor: 'usuario-adm', interface: 'string' }),
        Criar.string({ id: "servico", nome: 'Serviço', valor: true, interface: 'boolean' }),
        Criar.string({ id: "tipoModulo", nome: 'tipoModulo', valor: 'adm', interface: 'nomePermissao' }),
      ],
    }),
    ...Criar.objeto({
      id: "requisicao",
      _grupo: [
        Criar.string({ id: "ambiente", nome: 'Ambiente', valor: 'ambienteTesteV8', interface: 'nomeAmbiente' }),
        Criar.string({ id: "acao", nome: 'Ação', valor: 'set', interface: 'nomeAcao' }),
        Criar.string({ id: "item", nome: 'Item', valor: 'sem item', interface: 'string' }),
        Criar.string({ id: "itemCriar", nome: 'Item Criar', valor: false, interface: 'nomeStringOuBoolean' }),
        Criar.string({ id: "dominio", nome: 'Domínio', valor: 'localhost', interface: 'string' }),
        Criar.string({ id: "dataUpdate", nome: 'Data Update', valor: 'new Date()', interface: 'Date' }),
        Criar.string({ id: "dataCriacao", nome: 'Data Criacao', valor: 'new Date()', interface: 'Date' }),
      ],
    }),
    ...Criar.objeto({
      id: "design",
      _grupo: [
        Criar.string({ id: "iniciarMenuFixo", nome: 'Iniciar Menu Fixo', valor: true, interface: 'boolean' }),
        Criar.string({ id: "tema", nome: 'Tema', valor: 'pad-tema-black', interface: 'nomeTema' }),
        Criar.string({ id: "temaFonte", nome: 'Tema Fonte', valor: 0, interface: 'string' }),
      ],
    }),
  };
  static compartilhado = {
    ...Criar.objeto({
      id: "credencial",
      _grupo: [
        Criar.objeto({ id: "usuario", _grupo: ModeloDados.grupo.usuario._grupo }),
        Criar.objeto({ id: "modulo", _grupo: ModeloDados.grupo.modulo._grupo }),
        Criar.objeto({ id: "requisicao", _grupo: ModeloDados.grupo.requisicao._grupo }),
      ],
    }),
  };
  static modulo = {
    ...Criar.objeto({
      id: "usuarioAdm",
      _grupo: [
        Criar.objeto(ModeloDados.compartilhado.credencial),
        Criar.objeto(ModeloDados.grupo.design)
      ],
    }),
  };
}
