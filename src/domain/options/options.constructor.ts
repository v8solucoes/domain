import { Ilanguage, Irequest, IresponseValidatorUnit } from "../../shared/interface";
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

  test(value: string, language: Ilanguage = 'en'): IresponseValidatorUnit {
    // request not efect
    const requestGeneric: Irequest = {
      language,
      page: "account",
      domain: 'localchost',
      environment: 'prod',
      action: "create",
      document: "account-adm",
      dateTime: new Date(),
      colection: `null`,
      validator: {
        id: "notId",
        name: 'namePersonal',
        label: "notId",
        value,
        language: "en",
        typeExecute: "front",
        error: null
      },
      key: null,
      data: null
    }

    return new TestCompose(requestGeneric).existStringInArray(this.array)
  }
}