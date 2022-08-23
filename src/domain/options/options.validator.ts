
import { OptionsMethod } from "./options.method";

export class OptionsValidator {
  get language() { return new OptionsMethod('en') }
  get page() { return new OptionsMethod('account') }
  get document() { return new OptionsMethod('account-adm') }
  get moduleId() { return new OptionsMethod('account-adm') }
  get action() { return new OptionsMethod('create') }
  get environment() { return new OptionsMethod('test','prod') }
  get domain() { return new OptionsMethod('localhost') }
}