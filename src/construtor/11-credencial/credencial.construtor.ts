import { Credencial, RequisicaoDados } from './credencial.interface';

export class Credencial_Construtor {

  credencial(req: Credencial): Credencial {
    return {
      usuario: this.usuario(req.usuario),
      requisicao: this.requisicao(req.requisicao)
    }
  }

  usuario(req: Credencial['usuario']): Credencial['usuario'] {
    return req
  }

  requisicao(req: Credencial['requisicao']): Credencial['requisicao'] {
    return req
  }

  requisicaoDados(credencial: Credencial, dados: any): RequisicaoDados {
    return {
      credencial,
      dados
    }
  }
}