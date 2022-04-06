import { Dados, Modelo, Exibir } from "./modelo/interface";

export interface DadosInterface {
  usuarioAdm: {
    tipo: "objeto";
    dados: Partial<Dados>;
    modelo: Partial<Modelo>;
    exibir: Partial<Exibir>;
    _grupo: [
      {
        design: {
          tipo: "objeto";
          dados: Partial<Dados>;
          modelo: Partial<Modelo>;
          exibir: Partial<Exibir>;
          _grupo: [
            {
              tema: {
                tipo: "string";
                dados: Partial<Dados>;
                modelo: Partial<Modelo>;
                exibir: Partial<Exibir>;
              };
            },
            {
              temaFonte: {
                tipo: "string";
                dados: Partial<Dados>;
                modelo: Partial<Modelo>;
                exibir: Partial<Exibir>;
              };
            },
            {
              iniciarMenuFixo: {
                tipo: "string";
                dados: Partial<Dados>;
                modelo: Partial<Modelo>;
                exibir: Partial<Exibir>;
              };
            }
          ];
        };
      },
      {
        credencial: {
          tipo: "objeto";
          dados: Partial<Dados>;
          modelo: Partial<Modelo>;
          exibir: Partial<Exibir>;
          _grupo: [
            {
              usuario: {
                tipo: "string";
                dados: Partial<Dados>;
                modelo: Partial<Modelo>;
                exibir: Partial<Exibir>;
              };
            },
            {
              modulo: {
                tipo: "string";
                dados: Partial<Dados>;
                modelo: Partial<Modelo>;
                exibir: Partial<Exibir>;
              };
            },
            {
              requisicao: {
                tipo: "string";
                dados: Partial<Dados>;
                modelo: Partial<Modelo>;
                exibir: Partial<Exibir>;
              };
            },
            {
              grupoModelo: {
                tipo: "objeto";
                dados: Partial<Dados>;
                modelo: Partial<Modelo>;
                exibir: Partial<Exibir>;
                _grupo: [
                  {
                    teste: {
                      tipo: "string";
                      dados: Partial<Dados>;
                      modelo: Partial<Modelo>;
                      exibir: Partial<Exibir>;
                    };
                  },
                  {
                    ok: {
                      tipo: "string";
                      dados: Partial<Dados>;
                      modelo: Partial<Modelo>;
                      exibir: Partial<Exibir>;
                    };
                  },
                  {
                    pensando: {
                      tipo: "string";
                      dados: Partial<Dados>;
                      modelo: Partial<Modelo>;
                      exibir: Partial<Exibir>;
                    };
                  }
                ];
              };
            }
          ];
        };
      },
      {
        Testestring: {
          tipo: "string";
          dados: Partial<Dados>;
          modelo: Partial<Modelo>;
          exibir: Partial<Exibir>;
        };
      }
    ];
  };
  string: {
    tipo: "string";
    dados: Partial<Dados>;
    modelo: Partial<Modelo>;
    exibir: Partial<Exibir>;
  };
}
