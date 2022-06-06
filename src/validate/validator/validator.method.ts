import { ValidatorReponse, ValidatorRequest } from "../../shared/interface";
import { ValidatorConstructor } from "./validator-constructor";

export class ValidatorMethod extends ValidatorConstructor {
  constructor(req: ValidatorRequest) {
    super(req)
  }
  get namePersonal(): ValidatorReponse {
    console.log('cheguei')
    return this.compose(
      this.existStringInArray(['oi', 'teste']),
      this.existObjectInArray(['manos', 'caras'])
    )
    
  }
  
}