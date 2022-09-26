import { Inivel, Irequest } from "../../shared/interface";

export class DocumentPath {
  
  constructor(public req: Irequest) { }
  
  get [`account-adm`]() {
    const nivel: Inivel = 'adm'
    const path = `${this.req.environment}/${this.req.domain}/${nivel}/user-adm`
   return { nivel, path } 
  }
}