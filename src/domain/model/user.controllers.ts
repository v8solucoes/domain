import { FirebaseCreateRequest } from "../../shared/api";
import { ModelUser } from "./users";

export class UserController {
  constructor(public user: ModelUser) { }

get firebaseCreate(): FirebaseCreateRequest {
    return {
      displayName: this.user.email,
      email: this.user.email,
     /*  phoneNumber: this.user.phone, */
      password: this.user.password
    }
  }
}