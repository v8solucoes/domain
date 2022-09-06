import { FirebaseAPI } from "../../shared/api";
import { Irequest } from "../../shared/interface";

export class FirebaseCrud {

static lote = FirebaseAPI.db.batch();
  api = new FirebaseAPI();
  constructor(
    public req: Irequest,
  ) {

  }

  document = () => FirebaseAPI.db.doc(`adm`)

/*   async create(id:string = FirebaseAPI.db.bundle().bundleId ) {
    console.log('ROTA ADM')
    console.log(this.rota)
    console.log(id)
    const nycRef = FirebaseAPI.db.collection(this.rota).doc(id);
    const rota = this.rotaFirebase(this.req)

    this.lote.create(nycRef, { testsse: 'xxx' });
    
   return  await this.lote.commit()
  } */

  rota(id:string = FirebaseAPI.db.bundle().bundleId) {

    const req = this.req;

    console.log ('this.reqxxx')
console.log (req.document)

  /*   const rota = {
      [`account-adm`]: {
        colection: FirebaseAPI.db.collection(`${req.domain}/adm/user`).doc(id),
        doc: FirebaseAPI.db.doc(`${req.domain}/adm/user`)
      }
    } */

    return FirebaseAPI.db.collection(`${req.domain}/adm/user`).doc(id)

  }
 /*  get rota() {

    const req = this.req;

    const rota = {
      [`account-adm`]: {
        root: `${req.domain}/adm/`
      }
    }

    return rota[req.document].root

  } */
  get rotaAdm() {

    const req = this.req;

    return `${req.environment}/${req.domain}/${req.document}`

  }
  rotaFirebase(req: Irequest) {

    const id = req.item as string

    const dbColecao = (nomeModuloPasta: string) => FirebaseAPI.db.collection('teste' + nomeModuloPasta)
    const dbDocumento = () => FirebaseAPI.db.doc(`teste`)

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