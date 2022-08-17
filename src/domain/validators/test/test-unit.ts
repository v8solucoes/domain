import { ValidatorResponse, ValidatorError, Irequest } from "../../../shared/interface";
import { ReplaceCompose } from "../replace/replace-compose";

export class TestUnit {

  req: Irequest
  replace = new ReplaceCompose()

  constructor(req: Irequest) { this.req = req }

  minCharacter(min: number): ValidatorResponse {
    const req = this.req.validator!
    const value = req.value
    const sucess = value.length >= min ? true : false;
    const error: ValidatorError = {
      en: {
        [`minChater--${value}`]: `Mínimo ${min} caracteres atual ${value.length} `,
      },
    };

    return this.reponseValidator(sucess, error[req!.language]);
  }

  maxCharacter(max: number): ValidatorResponse {
    const req = this.req.validator!
    const value = req.value
    const sucess = value.length <= max ? true : false;
    const error: ValidatorError = {
      en: {
        [`maxChater--${value}`]: `Máximo ${max} caracteres atual ${value.length} `,
      },
    };

    return this.reponseValidator(sucess, error[req!.language]);
  }

  maxWord(max: number): ValidatorResponse {
    const req = this.req.validator!
    const value = req.value.split(' ').length
    const sucess = value <= max ? true : false;
    const error: ValidatorError = {
      en: {
        [`maxWord--${value}`]: `Máximo ${max} palavras atual ${value}`,
      },
    };

    return this.reponseValidator(sucess, error[req.language]);
  }

  minWord(min: number): ValidatorResponse {
    const req = this.req.validator!
    const value = req.value.trim().split(' ').length
    const sucess = value >= min ? true : false;
    const error: ValidatorError = {
      en: {
        [`minWord--${value}`]: `Minímo ${min} palavras atual ${value}`,
      },
    };

    return this.reponseValidator(sucess, error[req.language]);
  }

  get typeNumber(): ValidatorResponse {

    const req = this.req.validator!
    const value = req!.value
    const sucess = typeof value === 'number' ? true : false;
    const error: ValidatorError = {
      en: {
        [`typeNumber--${value}`]: `" ${typeof value} " deve ser tipo: 'Number`,
      },
    };

    return this.reponseValidator(sucess, error[req.language]);
  }

  get typeString(): ValidatorResponse {
    const req = this.req.validator!
    const value = req.value as string;
    const sucess = typeof value === "string" ? true : false;
    const error: ValidatorError = {
      en: {
        [`typeString > ${value}`]: `" ${typeof value} " deve ser tipo: 'STRING`,
      },
    };

    return this.reponseValidator(sucess, error[req.language]);
  }

  get typeBoolean(): ValidatorResponse {
    const req = this.req.validator!
    const value = req.value as string;
    const sucess = typeof value === "boolean" ? true : false;
    const error: ValidatorError = {
      en: {
        [`typeBoolean--${value}`]: `" ${typeof value} " deve ser tipo: 'Boolean`,
      },
    };

    return this.reponseValidator(sucess, error[req.language]);
  }

  get emailValidFormat(): ValidatorResponse {
    const req = this.req.validator!
    const value = req.value;
    const caracter = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const sucess = caracter.test(value)
    const erroProp = value
    const error: ValidatorError = {
      en: {
        [`emailFormat--${erroProp}`]: `(${value}) E-mail inválido.`,
      },
    };

    return this.reponseValidator(sucess, error[req.language]);
  }

  valueInObject(object: any): ValidatorResponse {
    const req = this.req.validator!
    const value = req.value;
    const sucess = object[value] ? true : false;
    const error: ValidatorError = {
      en: {
        valueInObject: `" ${value} "não existe no objeto: ${JSON.stringify(
          object
        )}`,
      },
    };

    return this.reponseValidator(sucess, error[req.language]);
  }

  existStringInArray(array: any[]): ValidatorResponse {
    const req = this.req.validator!
    const value = req.value;
    const sucess = array.includes(value);
    const error: ValidatorError = {
      en: {
        valueInaArray: `" ${value} " não existe na Lista: ${JSON.stringify(
          array
        )}`
      },
    };
    /*    console.log(sucess)
       console.log(value) */
    return this.reponseValidator(sucess, error[req.language]);
  }
  existObjectInArray(array: any[]): ValidatorResponse {
    const req = this.req.validator!
    const value = req.value;
    const sucess = array.includes(value);
    const error: ValidatorError = {
      en: {
        existObjectInArray: `" ${value} "não existe na Objeto: ${JSON.stringify(array)}`
      },
    };

    return this.reponseValidator(sucess, error[req.language]);
  }
  valueInaArray(array: string[]): ValidatorResponse {
    const req = this.req.validator!
    const value = req.value;
    const sucess = array.includes(value);
    const error: ValidatorError = {
      en: {
        valueInaArray: `" ${value} "não existe na Lista: ${JSON.stringify(
          array
        )}`
      },
    };

    return this.reponseValidator(sucess, error[req.language]);
  }

  maxLength(max: number): ValidatorResponse {
    const req = this.req.validator!
    const value = req.value;

    const sucess = value.length <= max ? true : false;
    const error: ValidatorError = {
      en: {
        maxLength: `Caracteres exedeu máximo ${value.length} / ${max}`,
      },
    };

    return this.reponseValidator(sucess, error[req.language]);
  }

  minName(min: number): ValidatorResponse {
    const req = this.req.validator!
    const value = req.value as string

    const sucess = value.split('').length <= min ? true : false;
    const error: ValidatorError = {
      en: {
        maxName: `Mínimo  nome/s ${value.length} / ${min}`,
      },
    };

    return this.reponseValidator(sucess, error[req.language]);
  }

  reponseValidator(sucess: boolean, errorLanguage: { [key: string]: string }): ValidatorResponse {
/*    console.log(sucess)
   console.log(errorLanguage) */
    try {
      if (sucess) {
        return null;
      } else {
        throw new Error(`${JSON.stringify(errorLanguage)}`);
      }
    } catch (error) {
      /*       console.log(errorLanguage) */
      return errorLanguage;
    }
  }

  compose(...funcoes: any): ValidatorResponse {
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
  async composeAsync(...funcoes: any): Promise<ValidatorResponse> {

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