

import { Irequest } from "../../shared/interface";

export class OptionsValidator {

  language: Irequest['language'][] = ['en','pt']
  page: Irequest['page'][] = ['account', 'login', 'app']
  action: Irequest['action'][] = ['create', 'update', 'null']
  document: Irequest['document'][] = ['account-adm-new','dashboard' ,'recursive', 'sign-in', 'user-adm', 'null']
  environment: Irequest['environment'][] = ['test', 'prod']
  domain: Irequest['domain'][] = ['localhost', '127.0.0.1', 'v8app-888cd.firebaseapp.com', 'v8app-888cd.web.app']
}