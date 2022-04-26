import { Nome_Dados, Permissao_Dados } from "../dados/dados.interface";

export const permissao_Dados: permissao_Interface[] = [{
    id: "usuarioAdm",
    tipo: "objeto",
    exibir: { "formulario": true, "titulo": false, "subTitulo": false },
    _grupo: [{
        id: "menu",
        tipo: "objeto",
        exibir: { "formulario": true, "titulo": false, "subTitulo": false },
        _grupo: [{
            id: "adm",
            tipo: "objeto",
            exibir: { "formulario": true, "titulo": false, "subTitulo": false },
            _grupo: [{
                id: "principal",
                tipo: "lista",
                exibir: { "formulario": true, "titulo": false, "subTitulo": false },
                _grupo: [{
                    id: "moduloNome",
                    tipo: "valor",
                    exibir: { "formulario": true, "titulo": false, "subTitulo": false },
                }
                    , {
                    id: "url",
                    tipo: "valor",
                    exibir: { "formulario": true, "titulo": false, "subTitulo": false },
                }
                    , {
                    id: "tipo",
                    tipo: "valor",
                    exibir: { "formulario": true, "titulo": false, "subTitulo": false },
                }
                    , {
                    id: "acao",
                    tipo: "valor",
                    exibir: { "formulario": true, "titulo": false, "subTitulo": false },
                }
                    , {
                    id: "item",
                    tipo: "valor",
                    exibir: { "formulario": true, "titulo": false, "subTitulo": false },
                }
                    , {
                    id: "icone",
                    tipo: "valor",
                    exibir: { "formulario": true, "titulo": false, "subTitulo": false },
                }

                ]
            }
            ]
        }
        ]
    }
    ]
}]
export interface permissao_Interface {
    id: "usuarioAdm";
    tipo: Nome_Dados['tipoDados'];
    exibir: Partial<Permissao_Dados>

    _grupo: [{
        id: "menu";
        tipo: Nome_Dados['tipoDados'];
        exibir: Partial<Permissao_Dados>

        _grupo: [{
            id: "adm";
            tipo: Nome_Dados['tipoDados'];
            exibir: Partial<Permissao_Dados>

            _grupo: [{
                id: "principal";
                tipo: Nome_Dados['tipoDados'];
                exibir: Partial<Permissao_Dados>

                _grupo: [{
                    id: "moduloNome";
                    tipo: Nome_Dados['tipoDados'];
                    exibir: Partial<Permissao_Dados>
                }
                    , {
                        id: "url";
                        tipo: Nome_Dados['tipoDados'];
                        exibir: Partial<Permissao_Dados>
                    }
                    , {
                        id: "tipo";
                        tipo: Nome_Dados['tipoDados'];
                        exibir: Partial<Permissao_Dados>
                    }
                    , {
                        id: "acao";
                        tipo: Nome_Dados['tipoDados'];
                        exibir: Partial<Permissao_Dados>
                    }
                    , {
                        id: "item";
                        tipo: Nome_Dados['tipoDados'];
                        exibir: Partial<Permissao_Dados>
                    }
                    , {
                        id: "icone";
                        tipo: Nome_Dados['tipoDados'];
                        exibir: Partial<Permissao_Dados>
                    }

                ]
            }
            ]
        }
        ]
    }
    ]
}