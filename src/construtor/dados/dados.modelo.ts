import { Construtor_Dados as Criar } from "./dados.construtor";
import { Req_Dados } from "./dados.interface";

export class ModeloDados {

  static modulo: Req_Dados['dados'] = [
    Criar.objeto({
      id: "usuarioAdm", _grupo: [
        Criar.objeto({
          id: "credencial", _grupo: [
            Criar.objeto({
              id: "usuario", _grupo: [
                Criar.valor({ id: "id_adm", nome: 'Administrador', valor: 'v8888asdfasdf', interface: 'string' }),
                Criar.valor({ id: "id_usuario", nome: 'Usuário', valor: 'ZEjRkWCDc1PkuIaFyaWnYqmJY4q1', interface: 'string' }),
                Criar.valor({ id: "id_revenda", nome: 'Revenda', valor: 'C0JrcUWVqTQR3sPt8Qqo', interface: 'string' }),
                Criar.valor({ id: "id_cliente", nome: 'Cliente', valor: 'gfFyiX5IU4OaoXm4BDzX', interface: 'string' }),
                Criar.valor({ id: "tipoAcesso", nome: 'Tipo de Acesso', valor: 'adm', interface: `Nome_Dados['tipoAcesso']` }),
                Criar.valor({ id: "nome", nome: 'Nome', valor: 'Emerson', interface: 'string' }),
                Criar.valor({ id: "email", nome: 'E-mail', valor: 'teste@v8sites.com.br', interface: 'string' }),
                Criar.valor({ id: "telefone", nome: 'Telefone:', valor: '11-0000-0000', interface: 'string' }),
                Criar.valor({ id: "senha", nome: 'Senha:', valor: '123456', interface: 'string' }),
              ],
            }),
            Criar.objeto({
              id: "modulo", _grupo: [
                Criar.valor({ id: "id", nome: 'Id', valor: 'usuario_adm', interface: `Nome_Dados['modulo']` }),
                Criar.valor({ id: "nome", nome: 'Nome', valor: 'Usuario Adm', interface: 'string' }),
                Criar.valor({ id: "url", nome: 'Url', valor: 'usuario-adm', interface: 'string' }),
                Criar.valor({ id: "servico", nome: 'Serviço', valor: true, interface: 'boolean' }),
                Criar.valor({ id: "tipoModulo", nome: 'tipoModulo', valor: 'adm', interface: `Nome_Dados['tipoAcesso']` }),
              ],
            }),
            Criar.objeto({
              id: "requisicao", _grupo: [
                Criar.valor({ id: "ambiente", nome: 'Ambiente', valor: 'ambienteTesteV8', interface: `Nome_Dados['ambiente']` }),
                Criar.valor({ id: "funcao", nome: 'Funcao', valor: 'semFuncao', interface: `Nome_Dados['funcao']` }),
                Criar.valor({ id: "acao", nome: 'Ação', valor: 'set', interface: `Nome_Dados['acao']` }),
                Criar.valor({ id: "item", nome: 'Item', valor: 'sem item', interface: 'string' }),
                Criar.valor({ id: "itemCriar", nome: 'Item Criar', valor: false, interface: `Nome_Dados['stringOuBoolean']` }),
                Criar.valor({ id: "dominio", nome: 'Domínio', valor: 'localhost', interface: 'string' }),
                Criar.valor({ id: "dataUpdate", nome: 'Data Update', valor: null, interface: 'Date | string' }),
                Criar.valor({ id: "dataCriacao", nome: 'Data Criacao', valor: null, interface: 'Date | string' }),
              ],
            }),
          ],
        }),
        Criar.objeto({
          id: "design", _grupo: [
            Criar.valor({ id: "iniciarMenuFixo", nome: 'Iniciar Menu Fixo', valor: true, interface: 'boolean' }),
            Criar.valor({ id: "tema", nome: 'Tema', valor: 'pad-tema-black', interface: `Nome_Dados['tema']` }),
            Criar.valor({ id: "temaFonte", nome: 'Tema Fonte', valor: 0, interface: 'string' }),
          ],
        }),
        Criar.objeto({
          id: "menu", _grupo: [
            Criar.objeto({
              id: 'adm', '_grupo': [
                Criar.lista({
                  id: 'principal', _grupo: [
                    Criar.objeto({
                      id: 'usuarioAdm', '_grupo': [
                        Criar.valor({ id: 'moduloNome', valor: 'usuario', nome: ' Usuário', interface: `string` }),
                        Criar.valor({ id: 'url', valor: 'usuario-adm', nome: '', interface: `Nome_Dados['moduloUrl']` }),
                        Criar.valor({ id: 'tipo', valor: 'adm', nome: 'Tipo', interface: `Nome_Dados['tipoAcesso']` }),
                        Criar.valor({ id: 'acao', valor: 'lerColecao', nome: 'Ação', interface: `Nome_Dados['acao']` }),
                        Criar.valor({ id: 'item', valor: 'ffffff', nome: 'Item', interface: 'string' }),
                        Criar.valor({ id: 'icone', valor: 'home', nome: 'Icone', interface: 'string' }),
                      ]
                    }),
                  ]
                })
              ]
            })
          ],
        }),
      ],
    }),
  ]
}
