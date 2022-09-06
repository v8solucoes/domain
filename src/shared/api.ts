// FIREBASE NUNCA REMOVER IMPORT DO TOPO
import * as admin from "firebase-admin";
if (admin.apps.length === 0) { admin.initializeApp({
  
}) }
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";
import { UserRecord } from "../../node_modules/firebase-admin/lib/auth/user-record"
import { CreateRequest } from "../../node_modules/firebase-admin/lib/auth/auth-config"

/* SE PRECISAR EXECUTE ESSE COMANDO PARA GRAVAR AS CREDENCIAIS
 export GOOGLE_APPLICATION_CREDENTIALS="/home/v8/meu-apresentador/domain/environments/v8.json"
*/
export class FirebaseAPI {

  static db = getFirestore();
  static lote = FirebaseAPI.db.batch();
  static fieldValue = FieldValue;
  static auth = getAuth()
 
}
export { FirebaseCrud } from "../domain/api/firebase-crud";
export interface FirebaseUserRecord extends UserRecord {}
export interface FirebaseCreateRequest extends CreateRequest {}