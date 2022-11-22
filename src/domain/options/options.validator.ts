
import { OptionsMethod } from "./options.method";

export class OptionsValidator {
  get language() { return new OptionsMethod('en') }
  get page() { return new OptionsMethod('account','login','app') }
  get document() { return new OptionsMethod('account-adm','interface','sign-in', 'null', 'user-adm') }
  get action() { return new OptionsMethod('create', 'get', 'update', 'set', 'null') }
  get environment() { return new OptionsMethod('test','prod') }
  get domain() { return new OptionsMethod('localhost','127.0.0.1', 'v8app-888cd.firebaseapp.com', 'v8app-888cd.web.app' ) }
}