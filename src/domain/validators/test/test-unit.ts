import { IresponseValidatorUnit, IvalidatorError, Irequest } from "../../../shared/interface";
import { ReplaceCompose } from "../replace/replace-compose";
import { responseValidatorUnit } from "../validators-response";

export class TestUnit {

  req: Irequest
  replace = new ReplaceCompose()

  constructor(req: Irequest) { this.req = req }

  minCharacter(min: number): IresponseValidatorUnit {
    const req = this.req.validator!
    const value = req.value
    const sucess = value.length >= min ? true : false;
    const error: IvalidatorError = {
      en: {
        [`minChater--${value}`]: `Mínimo ${min} caracteres atual ${value.length} `,
      },
    };

    return responseValidatorUnit(sucess, error[req!.language]);
  }

  maxCharacter(max: number): IresponseValidatorUnit {
    const req = this.req.validator!
    const value = req.value
    const sucess = value.length <= max ? true : false;
    const error: IvalidatorError = {
      en: {
        [`maxChater--${value}`]: `Máximo ${max} caracteres atual ${value.length} `,
      },
    };

    return responseValidatorUnit(sucess, error[req!.language]);
  }

  maxWord(max: number): IresponseValidatorUnit {
    const req = this.req.validator!
    const value = req.value.split(' ').length
    const sucess = value <= max ? true : false;
    const error: IvalidatorError = {
      en: {
        [`maxWord--${value}`]: `Máximo ${max} palavras atual ${value}`,
      },
    };

    return responseValidatorUnit(sucess, error[req!.language]);
  }

  minWord(min: number): IresponseValidatorUnit {
    const req = this.req.validator!
    const value = req.value.trim().split(' ').length
    const sucess = value >= min ? true : false;
    const error: IvalidatorError = {
      en: {
        [`minWord--${value}`]: `Minímo ${min} palavras atual ${value}`,
      },
    };

    return responseValidatorUnit(sucess, error[req!.language]);
  }

  get checkValueIsTrue(): IresponseValidatorUnit {
    const req = this.req.validator!
    const value = req.value as boolean;
    const sucess = value == true ? true : false;
    const error: IvalidatorError = {
      en: {
        [`typeBoolean--${value}`]: `" ${typeof value} " deve ser tipo: 'Boolean`,
      },
    };

    return responseValidatorUnit(sucess, error[req!.language]);
  }
  // not used yet

  get typeNumber(): IresponseValidatorUnit {

    const req = this.req.validator!
    const value = req!.value
    const sucess = typeof value === 'number' ? true : false;
    const error: IvalidatorError = {
      en: {
        [`typeNumber--${value}`]: `" ${typeof value} " deve ser tipo: 'Number`,
      },
    };

    return responseValidatorUnit(sucess, error[req!.language]);
  }

  get typeString(): IresponseValidatorUnit {
    const req = this.req.validator!
    const value = req.value as string;
    const sucess = typeof value === "string" ? true : false;
    const error: IvalidatorError = {
      en: {
        [`typeString > ${value}`]: `" ${typeof value} " deve ser tipo: 'STRING`,
      },
    };

    return responseValidatorUnit(sucess, error[req!.language]);
  }

  get typeBoolean(): IresponseValidatorUnit {
    const req = this.req.validator!
    const value = req.value as string;
    const sucess = typeof value === "boolean" ? true : false;
    const error: IvalidatorError = {
      en: {
        [`typeBoolean--${value}`]: `" ${typeof value} " deve ser tipo: 'Boolean`,
      },
    };

    return responseValidatorUnit(sucess, error[req!.language]);
  }

  get emailValidFormat(): IresponseValidatorUnit {
    const req = this.req.validator!
    const value = req.value;
    const caracter = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const sucess = caracter.test(value)
    const erroProp = value
    const error: IvalidatorError = {
      en: {
        [`emailFormat--${erroProp}`]: `(${value}) E-mail inválido.`,
      },
    };

    return responseValidatorUnit(sucess, error[req!.language]);
  }

  valueInObject(object: any): IresponseValidatorUnit {
    const req = this.req.validator!
    const value = req.value;
    const sucess = object[value] ? true : false;
    const error: IvalidatorError = {
      en: {
        valueInObject: `" ${value} "não existe no objeto: ${JSON.stringify(
          object
        )}`,
      },
    };

    return responseValidatorUnit(sucess, error[req!.language]);
  }

  existValueInArray(value: string, array: any[]): IresponseValidatorUnit {
    const req = this.req
    const sucess = array.includes(value);
    const error: IvalidatorError = {
      en: {
        valueInaArray: `" ${value} " não existe na Lista: ${JSON.stringify(
          array
        )}`
      },
    };
    /*    console.log(sucess)
       console.log(value) */
       return responseValidatorUnit(sucess, error[req!.language]);
  }
  existStringInArray(array: any[]): IresponseValidatorUnit {
    const req = this.req.validator!
    const value = req.value;
    const sucess = array.includes(value);
    const error: IvalidatorError = {
      en: {
        valueInaArray: `" ${value} " não existe na Lista: ${JSON.stringify(
          array
        )}`
      },
    };
    /*    console.log(sucess)
       console.log(value) */
       return responseValidatorUnit(sucess, error[req!.language]);
  }
  existObjectInArray(array: any[]): IresponseValidatorUnit {
    const req = this.req.validator!
    const value = req.value;
    const sucess = array.includes(value);
    const error: IvalidatorError = {
      en: {
        existObjectInArray: `" ${value} "não existe na Objeto: ${JSON.stringify(array)}`
      },
    };

    return responseValidatorUnit(sucess, error[req!.language]);
  }
  valueInaArray(array: string[]): IresponseValidatorUnit {
    const req = this.req.validator!
    const value = req.value;
    const sucess = array.includes(value);
    const error: IvalidatorError = {
      en: {
        valueInaArray: `" ${value} "não existe na Lista: ${JSON.stringify(
          array
        )}`
      },
    };

    return responseValidatorUnit(sucess, error[req!.language]);
  }

  maxLength(max: number): IresponseValidatorUnit {
    const req = this.req.validator!
    const value = req.value;

    const sucess = value.length <= max ? true : false;
    const error: IvalidatorError = {
      en: {
        maxLength: `Caracteres exedeu máximo ${value.length} / ${max}`,
      },
    };

    return responseValidatorUnit(sucess, error[req!.language]);
  }

  minName(min: number): IresponseValidatorUnit {
    const req = this.req.validator!
    const value = req.value as string

    const sucess = value.split('').length <= min ? true : false;
    const error: IvalidatorError = {
      en: {
        maxName: `Mínimo  nome/s ${value.length} / ${min}`,
      },
    };

    return responseValidatorUnit(sucess, error[req!.language]);
  }

  compose(...funcoes: any): IresponseValidatorUnit {
    const validators = funcoes.reduce(
      (accumulator: any, current: any) => {
        return { ...accumulator, ...current };
      },
      {}, // 👈️ initial value
    );

    if (!!Object.keys(validators).length) {
      /*     console.log('reprovado')
          console.log(validators) */
      return { ...validators }
    } else {
      /*       console.log('Validator Aprovado') */
      return null
    }

  }
  composeTest(...funcoes: any) {
    const validators = funcoes.reduce(
      (accumulator: any, current: any) => {
        return { ...accumulator, ...current };
      },
      {}, // 👈️ initial value
    );

    if (!!Object.keys(validators).length) {
      /*     console.log('reprovado')
          console.log(validators) */
      return { ...validators }
    } else {
      /*       console.log('Validator Aprovado') */
      return null
    }

  }
  async composeAsync(...funcoes: any): Promise<IresponseValidatorUnit> {

    try {
      const validators = await this.composeTest(funcoes)
      const sucess = !Object.keys(validators).length
      console.log(validators)

      if (sucess) {
        return { email: 'invalido email' }
      } else {
        console.log('INVALIDO')
        /*  return {email:'invalido email'} */
        throw new Error(`${JSON.stringify(validators)}`);

      }
    } catch (error) {
      console.log('catherror')
      return { xxx: 'errrorrr' }
    }
  }
}