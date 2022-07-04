
import { Modelo_Dados, Nome_Dados, Permissao_Dados } from "../../01-dados/dados.interface";
export const dados: Idados = {
    adm: {
        conta: {
            nome: "José"
            , email: "teste@v8teste.com"
            , senha: "123456"
            , telefone: "11-98123-1970"
            , cpf: "283110418"
        }
        , credential: {
            user: {
                userUid: "ZEjRkWCDc1PkuIaFyaWnYqmJY4q1"
                , agencyId: "C0JrcUWVqTQR3sPt8Qqo"
                , clientId: "gfFyiX5IU4OaoXm4BDzX"
                , accessType: "adm"
            }
            , request: {
                environment: "ambienteTesteV8"
                , moduleId: "conta-adm"
                , itemId: "sem item"
                , action: "set"
                , function: "criarAutenticacao"
                , domain: "localhost"
                , dateUpdate: "Sem Valor Inicial"
                , dateCreate: "Sem Valor Inicial"
            }
        }
    }
}
export interface Idados {
    adm: {
        conta: {
            nome: string
            , email: string
            , senha: string
            , telefone: string
            , cpf: string
        }
        , credential: {
            user: {
                userUid: string
                , agencyId: string
                , clientId: string
                , accessType: 'adm' | 'revenda' | 'cliente'
            }
            , request: {
                environment: 'ambienteTesteV8' | 'producao'
                , moduleId: 'conta-adm'
                , itemId: string | boolean
                , action: 'criar' | 'set' | 'deletar' | 'update' | 'lerColecao' | 'lerDocumento'
                , function: 'criarAutenticacao'
                , domain: string
                , dateUpdate: string | Date
                , dateCreate: string | Date
            }
        }
    }
}
export interface IdadosOpcional {
    adm: {
        conta: {
            nome?: string
            , email?: string
            , senha?: string
            , telefone?: string
            , cpf?: string
        }
        , credential: {
            user: {
                userUid?: string
                , agencyId?: string
                , clientId?: string
                , accessType?: 'adm' | 'revenda' | 'cliente'
            }
            , request: {
                environment?: 'ambienteTesteV8' | 'producao'
                , moduleId?: 'conta-adm'
                , itemId?: string | boolean
                , action?: 'criar' | 'set' | 'deletar' | 'update' | 'lerColecao' | 'lerDocumento'
                , function?: 'criarAutenticacao'
                , domain?: string
                , dateUpdate?: string | Date
                , dateCreate?: string | Date
            }
        }
    }
}
export const permissao: Ipermissao[] = [{
    id: "adm",
    tipo: "objeto",
    exibir: { "formulario": true, "titulo": false, "subTitulo": false },
    _grupo: [{
        id: "conta",
        tipo: "objeto",
        exibir: { "formulario": true, "titulo": false, "subTitulo": false },
        _grupo: [{
            id: "nome",
            tipo: "valor",
            exibir: { "formulario": true, "titulo": false, "subTitulo": false },
        }
            , {
            id: "email",
            tipo: "valor",
            exibir: { "formulario": true, "titulo": false, "subTitulo": false },
        }
            , {
            id: "senha",
            tipo: "valor",
            exibir: { "formulario": true, "titulo": false, "subTitulo": false },
        }
            , {
            id: "telefone",
            tipo: "valor",
            exibir: { "formulario": true, "titulo": false, "subTitulo": false },
        }
            , {
            id: "cpf",
            tipo: "valor",
            exibir: { "formulario": true, "titulo": false, "subTitulo": false },
        }
        ]
    }
        , {
        id: "credential",
        tipo: "objeto",
        exibir: { "formulario": true, "titulo": false, "subTitulo": false },
        _grupo: [{
            id: "user",
            tipo: "objeto",
            exibir: { "formulario": true, "titulo": false, "subTitulo": false },
            _grupo: [{
                id: "userUid",
                tipo: "valor",
                exibir: { "formulario": true, "titulo": false, "subTitulo": false },
            }
                , {
                id: "agencyId",
                tipo: "valor",
                exibir: { "formulario": true, "titulo": false, "subTitulo": false },
            }
                , {
                id: "clientId",
                tipo: "valor",
                exibir: { "formulario": true, "titulo": false, "subTitulo": false },
            }
                , {
                id: "accessType",
                tipo: "valor",
                exibir: { "formulario": true, "titulo": false, "subTitulo": false },
            }
            ]
        }
            , {
            id: "request",
            tipo: "objeto",
            exibir: { "formulario": true, "titulo": false, "subTitulo": false },
            _grupo: [{
                id: "environment",
                tipo: "valor",
                exibir: { "formulario": true, "titulo": false, "subTitulo": false },
            }
                , {
                id: "moduleId",
                tipo: "valor",
                exibir: { "formulario": true, "titulo": false, "subTitulo": false },
            }
                , {
                id: "itemId",
                tipo: "valor",
                exibir: { "formulario": true, "titulo": false, "subTitulo": false },
            }
                , {
                id: "action",
                tipo: "valor",
                exibir: { "formulario": true, "titulo": false, "subTitulo": false },
            }
                , {
                id: "function",
                tipo: "valor",
                exibir: { "formulario": true, "titulo": false, "subTitulo": false },
            }
                , {
                id: "domain",
                tipo: "valor",
                exibir: { "formulario": true, "titulo": false, "subTitulo": false },
            }
                , {
                id: "dateUpdate",
                tipo: "valor",
                exibir: { "formulario": true, "titulo": false, "subTitulo": false },
            }
                , {
                id: "dateCreate",
                tipo: "valor",
                exibir: { "formulario": true, "titulo": false, "subTitulo": false },
            }
            ]
        }
        ]
    }
    ]
}]
export interface Ipermissao {
    id: "adm";
    tipo: Nome_Dados['tipoDados'];
    exibir: Partial<Permissao_Dados>

    _grupo: [{
        id: "conta";
        tipo: Nome_Dados['tipoDados'];
        exibir: Partial<Permissao_Dados>

        _grupo: [{
            id: "nome";
            tipo: Nome_Dados['tipoDados'];
            exibir: Partial<Permissao_Dados>
        }
            , {
                id: "email";
                tipo: Nome_Dados['tipoDados'];
                exibir: Partial<Permissao_Dados>
            }
            , {
                id: "senha";
                tipo: Nome_Dados['tipoDados'];
                exibir: Partial<Permissao_Dados>
            }
            , {
                id: "telefone";
                tipo: Nome_Dados['tipoDados'];
                exibir: Partial<Permissao_Dados>
            }
            , {
                id: "cpf";
                tipo: Nome_Dados['tipoDados'];
                exibir: Partial<Permissao_Dados>
            }
        ]
    }
        , {
            id: "credential";
            tipo: Nome_Dados['tipoDados'];
            exibir: Partial<Permissao_Dados>

            _grupo: [{
                id: "user";
                tipo: Nome_Dados['tipoDados'];
                exibir: Partial<Permissao_Dados>

                _grupo: [{
                    id: "userUid";
                    tipo: Nome_Dados['tipoDados'];
                    exibir: Partial<Permissao_Dados>
                }
                    , {
                        id: "agencyId";
                        tipo: Nome_Dados['tipoDados'];
                        exibir: Partial<Permissao_Dados>
                    }
                    , {
                        id: "clientId";
                        tipo: Nome_Dados['tipoDados'];
                        exibir: Partial<Permissao_Dados>
                    }
                    , {
                        id: "accessType";
                        tipo: Nome_Dados['tipoDados'];
                        exibir: Partial<Permissao_Dados>
                    }
                ]
            }
                , {
                    id: "request";
                    tipo: Nome_Dados['tipoDados'];
                    exibir: Partial<Permissao_Dados>

                    _grupo: [{
                        id: "environment";
                        tipo: Nome_Dados['tipoDados'];
                        exibir: Partial<Permissao_Dados>
                    }
                        , {
                            id: "moduleId";
                            tipo: Nome_Dados['tipoDados'];
                            exibir: Partial<Permissao_Dados>
                        }
                        , {
                            id: "itemId";
                            tipo: Nome_Dados['tipoDados'];
                            exibir: Partial<Permissao_Dados>
                        }
                        , {
                            id: "action";
                            tipo: Nome_Dados['tipoDados'];
                            exibir: Partial<Permissao_Dados>
                        }
                        , {
                            id: "function";
                            tipo: Nome_Dados['tipoDados'];
                            exibir: Partial<Permissao_Dados>
                        }
                        , {
                            id: "domain";
                            tipo: Nome_Dados['tipoDados'];
                            exibir: Partial<Permissao_Dados>
                        }
                        , {
                            id: "dateUpdate";
                            tipo: Nome_Dados['tipoDados'];
                            exibir: Partial<Permissao_Dados>
                        }
                        , {
                            id: "dateCreate";
                            tipo: Nome_Dados['tipoDados'];
                            exibir: Partial<Permissao_Dados>
                        }
                    ]
                }
            ]
        }
    ]
}
export const modelo: Imodelo = {
    adm: {
        conta: {
            nome: { "design": "string;", "validarSincrono": false, "validarAssincrono": false, "colecao": { "lista": false, "objeto": false } }
            , email: { "design": "string;", "validarSincrono": false, "validarAssincrono": false, "colecao": { "lista": false, "objeto": false } }
            , senha: { "design": "string;", "validarSincrono": false, "validarAssincrono": false, "colecao": { "lista": false, "objeto": false } }
            , telefone: { "design": "string;", "validarSincrono": false, "validarAssincrono": false, "colecao": { "lista": false, "objeto": false } }
            , cpf: { "design": "string;", "validarSincrono": false, "validarAssincrono": false, "colecao": { "lista": false, "objeto": false } }
        }
        , credential: {
            user: {
                userUid: { "design": "string;", "validarSincrono": false, "validarAssincrono": false, "colecao": { "lista": false, "objeto": false } }
                , agencyId: { "design": "string;", "validarSincrono": false, "validarAssincrono": false, "colecao": { "lista": false, "objeto": false } }
                , clientId: { "design": "string;", "validarSincrono": false, "validarAssincrono": false, "colecao": { "lista": false, "objeto": false } }
                , accessType: { "design": "string;", "validarSincrono": false, "validarAssincrono": false, "colecao": { "lista": false, "objeto": false } }
            }
            , request: {
                environment: { "design": "string;", "validarSincrono": false, "validarAssincrono": false, "colecao": { "lista": false, "objeto": false } }
                , moduleId: { "design": "string;", "validarSincrono": false, "validarAssincrono": false, "colecao": { "lista": false, "objeto": false } }
                , itemId: { "design": "string;", "validarSincrono": false, "validarAssincrono": false, "colecao": { "lista": false, "objeto": false } }
                , action: { "design": "string;", "validarSincrono": false, "validarAssincrono": false, "colecao": { "lista": false, "objeto": false } }
                , function: { "design": "string;", "validarSincrono": false, "validarAssincrono": false, "colecao": { "lista": false, "objeto": false } }
                , domain: { "design": "string;", "validarSincrono": false, "validarAssincrono": false, "colecao": { "lista": false, "objeto": false } }
                , dateUpdate: { "design": "string;", "validarSincrono": false, "validarAssincrono": false, "colecao": { "lista": false, "objeto": false } }
                , dateCreate: { "design": "string;", "validarSincrono": false, "validarAssincrono": false, "colecao": { "lista": false, "objeto": false } }
            }
        }
    }
}
export interface Imodelo {
    adm: {
        conta: {
            nome: Modelo_Dados
            , email: Modelo_Dados
            , senha: Modelo_Dados
            , telefone: Modelo_Dados
            , cpf: Modelo_Dados
        }
        , credential: {
            user: {
                userUid: Modelo_Dados
                , agencyId: Modelo_Dados
                , clientId: Modelo_Dados
                , accessType: Modelo_Dados
            }
            , request: {
                environment: Modelo_Dados
                , moduleId: Modelo_Dados
                , itemId: Modelo_Dados
                , action: Modelo_Dados
                , function: Modelo_Dados
                , domain: Modelo_Dados
                , dateUpdate: Modelo_Dados
                , dateCreate: Modelo_Dados
            }
        }
    }
}
