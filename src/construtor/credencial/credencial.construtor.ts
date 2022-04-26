
import { Nome_Dados} from '../dados/dados.interface';
import { Credencial, CredencialOpcional } from '../interface/interface';

export class ConstrutorCredencial {

  static modelo(
    moduloNome: Nome_Dados['modulo'], acao: Nome_Dados['acao'], id: string, credencial? : CredencialOpcional): Credencial {

    const item = (acao == 'criar' || acao == 'set') ? 'semIDcontrutor' : id
    const itemCriar = (acao == 'criar' || acao == 'set') ? id : false

    return {
      usuario: {
        id_adm: credencial?.usuario?.id_adm || 'semIdAdm',
        id_revenda: credencial?.usuario?.id_revenda || 'semIdRevenda',
        id_cliente: credencial?.usuario?.id_cliente || 'semIdCliente',
        id_usuario: credencial?.usuario?.id_usuario || 'semIdUsuario',
        tipoAcesso: credencial?.usuario?.tipoAcesso || 'usuario',
        nome: credencial?.usuario?.nome || 'Usuario sem Nome',
        email: credencial?.usuario?.email || 'semEmail@ememail.com',
        telefone: credencial?.usuario?.telefone || '00-0000-0000',
        senha: credencial?.usuario?.senha || '123456',
      },
      modulo: {
        id: `${moduloNome}`,
        nome: credencial?.modulo?.nome || `Modulo: ${moduloNome}`,
        url: credencial?.modulo?.url || `url ${moduloNome}`,
        servico: credencial?.modulo?.servico || false,
        tipoModulo: credencial?.modulo?.tipoModulo || 'adm'
      },
      requisicao: {
        ambiente: credencial?.requisicao?.ambiente || "ambienteTesteV8",
        acao,
        item,
        itemCriar,
        dominio: credencial?.requisicao?.dominio || "localhost",
        dataUpdate: new Date(),
        dataCriacao: new Date(),
        funcao: credencial?.requisicao?.funcao || 'semFuncao'
      }
    }
  }
}