export const permissao = {
  usuarioAdm: {
    formulario: [{ id: "usuarioAdm", visualizar: true, editar: true }],
    titulo: [{ id: "usuarioAdm", visualizar: true, editar: true }],
    subTitulo: [{ id: "usuarioAdm", visualizar: true, editar: true }],

    _grupo: [
      {
        design: [
          { tema: "Permissao_Dados" },
          { temaFonte: "Permissao_Dados" },
          { iniciarMenuFixo: "Permissao_Dados" },
        ],
      },
      {
        credencial: [
          { usuario: "Permissao_Dados" },
          { modulo: "Permissao_Dados" },
          { requisicao: "Permissao_Dados" },
          {
            grupoModelo: [
              { teste: "Permissao_Dados" },
              { ok: "Permissao_Dados" },
              { pensando: "Permissao_Dados" },
            ],
          },
        ],
      },
      { Testestring: "Permissao_Dados" },
    ],
  },
  string: {
    formulario: [{ id: "string", visualizar: true, editar: true }],
    titulo: [{ id: "string", visualizar: true, editar: true }],
    subTitulo: [{ id: "string", visualizar: true, editar: true }],
  },
};
