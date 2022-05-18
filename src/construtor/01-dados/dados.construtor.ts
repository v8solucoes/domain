import { Req_Dados, Resposta_Dados, } from "./dados.interface";
import { TipoCampo } from "./dados.tipo";

export class Construtor_Dados {

  static objeto(req: Req_Dados['objeto']): Resposta_Dados['objeto'] {
    req.tipo = req.tipo || 'objeto'
    return {
      ...this.criarValor(req),
      '_grupo': req._grupo
    }
  }

  static lista(req: Req_Dados['lista']): Resposta_Dados['lista'] {
    req.tipo = req.tipo || 'lista'
    return {
      ...this.criarValor(req),
      '_grupo': req._grupo
    }
  }
  
  static valor(req: Req_Dados['valor']): Resposta_Dados['valor'] {
    req.tipo = req.tipo || 'valor'
    return this.criarValor(req);
  }

  static criarValor(req: Req_Dados['criarValor']): Resposta_Dados['criarValor'] {

    return {
      // Dados Atalhos
      id: req.id || "sem Id",
      nome: req.nome || "sem Nome",
      valor: req.valor || 'Sem Valor Inicial',
      tipo: req.tipo || 'valor',
      tipoCampo: req.tipoCampo || 'string',
      interface: new TipoCampo()[req.tipoCampo || 'string'].interface,
      modelo: this.criarModelo(req),
      permissao: this.criarPermissao(req)
    }
  }

  static criarModelo(req: Req_Dados['criarValor']): Resposta_Dados['modelo'] {
    // procura Modelo na sequencia > Atalho, Estruturado ou Default
    return {
      design: req.modelo?.design || `string;`,
      validarSincrono: req.modelo?.validarSincrono || false,
      validarAssincrono: req.modelo?.validarAssincrono || false,
      colecao: {
        lista: req.modelo?.colecao?.lista || false,
        objeto: req.modelo?.colecao?.objeto || false,
      },
    };
  }

  static criarPermissao(req: Req_Dados['criarValor']): Resposta_Dados['permissao'] {
    // procura Modelo na sequencia > Atalho, Estruturado ou Default
    return {
      formulario: req.permissao?.formulario || true,
      titulo: req.permissao?.formulario || false,
      subTitulo: req.permissao?.formulario || false,
    };
  }

  static criarTeste(req: Req_Dados['criarValor']): Resposta_Dados['permissao'] {
    // procura Modelo na sequencia > Atalho, Estruturado ou Default
    return {
      formulario: req.permissao?.formulario || true,
      titulo: req.permissao?.formulario || false,
      subTitulo: req.permissao?.formulario || false,
    };
  }
}