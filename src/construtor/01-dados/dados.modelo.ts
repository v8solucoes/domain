import { Construtor_Dados as Criar } from "./dados.construtor";
import { Req_Dados } from "./dados.interface";

export class ModeloDados {

  static modulo: Req_Dados['dados'] = [
    Criar.objeto({
      id: "adm", _grupo: [
        Criar.objeto({
          id: 'conta', '_grupo': [
            Criar.valor({ id: 'nome', valor: 'José', nome: ' Nome', tipoCampo: 'string'}),
            Criar.valor({ id: 'email', valor: 'teste@v8teste.com', nome: 'E-mail', tipoCampo: 'string'}),
            Criar.valor({ id: 'senha', valor: '123456', nome: 'Senha', tipoCampo: 'string' }),
            Criar.valor({ id: 'telefone', valor: '11-98123-1970', nome: 'Telefone', tipoCampo: 'string'}),
            Criar.valor({ id: 'cpf', valor: '283110418', nome: 'CPF', tipoCampo: 'string'}),
          ]
        }),
   /*      Criar.objeto({
          id: "credencial", _grupo: [
            Criar.objeto({
              id: "usuario", _grupo: [
                Criar.valor({ id: "id_usuario", nome: 'Usuário', valor: 'ZEjRkWCDc1PkuIaFyaWnYqmJY4q1', tipoCampo: new TipoCampo()['string'] }),
                Criar.valor({ id: "id_revenda", nome: 'Revenda', valor: 'C0JrcUWVqTQR3sPt8Qqo', tipoCampo: new TipoCampo()['string'] }),
                Criar.valor({ id: "id_cliente", nome: 'Cliente', valor: 'gfFyiX5IU4OaoXm4BDzX', tipoCampo: new TipoCampo()['string'] }),
                Criar.valor({ id: "tipoAcesso", nome: 'Tipo de Acesso', valor: 'adm', tipoCampo: new TipoCampo()['tipoAcesso'] }),
              ],
            }),
 
            Criar.objeto({
              id: "requisicao", _grupo: [
                Criar.valor({ id: "ambiente", nome: 'Ambiente', valor: 'ambienteTesteV8', tipoCampo: new TipoCampo()['ambiente'] }),
                Criar.valor({ id: "idModulo", nome: 'Modulo Id', valor: 'usuario-adm', tipoCampo: `Nome_Dados['moduloId']` }),
                Criar.valor({ id: "idItem", nome: 'Item', valor: 'sem item', tipoCampo: `Nome_Dados['stringOuBoolean']` }),
                Criar.valor({ id: "acao", nome: 'Ação', valor: 'set', tipoCampo: `Nome_Dados['acao']` }),
                Criar.valor({ id: "funcao", nome: 'Funcao', valor: 'criarAutenticacao', tipoCampo: `Nome_Dados['funcao']` }),
                Criar.valor({ id: "dominio", nome: 'Domínio', valor: 'localhost', tipoCampo: 'string' }),
                Criar.valor({ id: "dataUpdate", nome: 'Data Update', valor: null, tipoCampo: 'Date | string' }),
                Criar.valor({ id: "dataCriacao", nome: 'Data Criacao', valor: null, tipoCampo: 'Date | string' }),
              ],
            }),
          ],
        }), */
   /*      Criar.objeto({
          id: "design", _grupo: [
            Criar.valor({ id: "iniciarMenuFixo", nome: 'Iniciar Menu Fixo', valor: true, tipoCampo: 'boolean' }),
            Criar.valor({ id: "tema", nome: 'Tema', valor: 'pad-tema-black', tipoCampo: `Nome_Dados['tema']` }),
            Criar.valor({ id: "temaFonte", nome: 'Tema Fonte', valor: 0, tipoCampo: 'string' }),
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
                        Criar.valor({ id: 'moduloNome', valor: 'usuario', nome: ' Usuário', tipoCampo: `string` }),
                        Criar.valor({ id: "idModulo", nome: 'Modulo Id', valor: 'usuario-adm', tipoCampo: `Nome_Dados['moduloId']` }),
                        Criar.valor({ id: "idItem", nome: 'Item', valor: 'sem item', tipoCampo: 'string' }),
                        Criar.valor({ id: 'tipo', valor: 'adm', nome: 'Tipo', tipoCampo: `Nome_Dados['tipoAcesso']` }),
                        Criar.valor({ id: 'acao', valor: 'lerColecao', nome: 'Ação', tipoCampo: `Nome_Dados['acao']` }),
                        Criar.valor({ id: 'item', valor: 'ffffff', nome: 'Item', tipoCampo: 'string' }),
                        Criar.valor({ id: 'icone', valor: 'home', nome: 'Icone', tipoCampo: 'string' }),
                        Criar.lista({
                          id: 'grupo', '_grupo': [
                            Criar.objeto({
                              id: 'menuAdm', '_grupo': [
                                Criar.valor({ id: 'moduloNome', valor: 'usuario', nome: ' Usuário', interface: `string` }),
                                Criar.valor({ id: "idModulo", nome: 'Modulo Id', valor: 'usuario-adm', interface: `Nome_Dados['moduloId']` }),
                                Criar.valor({ id: "idItem", nome: 'Item', valor: 'sem item', interface: `Nome_Dados['stringOuBoolean']` }),
                                Criar.valor({ id: 'tipo', valor: 'adm', nome: 'Tipo', interface: `Nome_Dados['tipoAcesso']` }),
                                Criar.valor({ id: 'acao', valor: 'lerColecao', nome: 'Ação', interface: `Nome_Dados['acao']` }),
                                Criar.valor({ id: 'item', valor: 'ffffff', nome: 'Item', interface: 'string' }),
                                Criar.valor({ id: 'icone', valor: 'home', nome: 'Icone', interface: 'string' }),
                              ]
                            }),

                          ]
                        }),
                      ]
                    }),
                  ]
                })
              ]
            })
          ],
        }),
        Criar.objeto({
          id: "modulo", _grupo: [
            Criar.objeto({
              id: 'contaAdm', '_grupo': [
                Criar.valor({ id: 'nome', valor: 'José', nome: ' Nome', interface: `string` }),
                Criar.valor({ id: 'email', valor: 'teste@v8teste.com', nome: 'E-mail', interface: `string` }),
                Criar.valor({ id: 'senha', valor: '123456', nome: 'Senha', interface: `string` }),
                Criar.valor({ id: 'telefone', valor: '11-98123-1970', nome: 'Telefone', interface: `string` }),
                Criar.valor({ id: 'cpf', valor: '283110418', nome: 'CPF', interface: `string` }),
              ]
            })
          ],
        }), */
      ],
    }),
  ]
}
