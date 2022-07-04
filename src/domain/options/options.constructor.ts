import { Ilanguage, ValidatorResponse } from "../../shared/interface";
import { TestCompose } from "../validators/test/test-compose";


export class OptionsConstructor {

  public object: any = {}
  public array: string[] = []
  public interface: string;

  constructor(...options: string[]) {

    options.map((valor: string) => {
      this.object[valor] = valor
      this.array.push(valor)
    })
    
    this.interface = `'${this.array.join(`' | '`)}'`
  
  }

  test(campo: string, language:Ilanguage = 'en'): ValidatorResponse {

    return new TestCompose({ language, 'value': campo, 'valueId':'', 'valueAll': null,'nameValidator':'emailValidate'}).existStringInArray(this.array)
  }
}