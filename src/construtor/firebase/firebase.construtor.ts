// FIREBASE NUNCA REMOVER IMPORT DO TOPO
import * as admin from "firebase-admin";
if (admin.apps.length === 0) { admin.initializeApp() }
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";

/* SE PRECISAR EXECUTE ESSE COMANDO PARA GRAVAR AS CREDENCIAIS
 export GOOGLE_APPLICATION_CREDENTIALS="/home/v8/meu-apresentador/construtor/src/v8app-888cd-a6f93a11cbe1.json"
*/
export class ConstrutorFirebase {

  static db = getFirestore();
  static lote = this.db.batch();
  static fieldValue = FieldValue;
  static auth = getAuth()
 
}