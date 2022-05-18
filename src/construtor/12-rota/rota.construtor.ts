import { Nome_Dados } from "../01-dados/dados.interface";
import { ConstrutorFirebase as Firebase } from "../16-export/firebase.export";
import { nomeModulo } from "../00-modulo/modulo.nome";
import { Req_Rota, Resposta_Rota } from "./rota.interface";

export class Construtor_Rota {

    criarRotaModulo(req: Req_Rota['credencial']): Resposta_Rota['criar'] {

        const modulo = nomeModulo[req.requisicao.idModulo]
        const rota = this.rota(req)[modulo.tipoAcesso]
        const id = this.id(req)

        return {
            ...modulo,
            rota,
            id,
        }

    }

    criarRotaUsuario(req: Req_Rota['credencial']): Resposta_Rota['criar']  {
        const modulo = nomeModulo[req.requisicao.idModulo]
        const rota = this.rota(req)[modulo.tipoAcesso]
        const id = this.id(req)
   /*      const modulo = nomeModulo[`usuario-${req.usuario.tipoAcesso}`]
        const rota = this.rota(req)[modulo.tipoAcesso]
        const id = req.usuario.id_usuario */

        return {
            ...modulo,
           rota,
            id,
        }

    }

    rota(req: Req_Rota['credencial']): Resposta_Rota['rotaTipoAcesso'] {

        const ambiente = req.requisicao.ambiente;
        const id_usuario = req.usuario;
        const id_modulo = req.requisicao.idModulo

        return {
            adm: `${ambiente}/${id_modulo}`,
            revenda: `${ambiente}/_revenda/${id_usuario.id_revenda}/${id_modulo}`,
            cliente: `${ambiente}/_revenda/${id_usuario.id_revenda}/_cliente/${id_usuario.id_cliente}/${id_modulo}`,
        }

    }

    id(req: Req_Rota['credencial']): string | boolean{
        return (req.requisicao.idItem == false) ? req.requisicao.idItem = Firebase.db.bundle().bundleId : req.requisicao.idItem;
    }

    rotaFirebase(tipo: 'usuario' | 'modulo', req: Req_Rota['credencial']) {

        const rota = tipo == 'modulo' ? this.criarRotaModulo(req) : this.criarRotaUsuario(req)
        const id = rota.id as string

        const dbColecao = (nomeModuloPasta: Nome_Dados['moduloPasta']) => Firebase.db.collection(rota.rota + nomeModuloPasta)
        const dbDocumento = () => Firebase.db.doc(`${rota.rota}`)

        return {
            get colecaoLista() { return dbColecao('/lista') },
            get colecaoHistorico() { return dbColecao('/historico') },
            get colecaoDeletar() { return dbColecao('/deletar') },
            get documento() { return dbDocumento() },
            get documentoLista() { return this.colecaoLista.doc(id) },
            get documentoHistorico() { return this.colecaoHistorico.doc(id) },
            get documentoRelatorio() { return this.documento },
            get documentoDeletar() { return this.colecaoDeletar.doc(id) },
            get id() { return id }
        }
    }
}