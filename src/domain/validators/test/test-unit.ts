import { IvalidatorResponse, IvalidatorError, Irequest, IvalidatorResponseCompose } from "../../../shared/interface";
import { ReplaceCompose } from "../replace/replace-compose";

export class TestUnit {

  req: Irequest
  replace = new ReplaceCompose()

  constructor(req: Irequest) { this.req = req }

  minCharacter(min: number): IvalidatorResponse {
    const req = this.req.validator!
    const value = req.value
    const sucess = value.length >= min ? true : false;
    const error: IvalidatorError = {
      en: {
        [`minChater--${value}`]: `Mínimo ${min} caracteres atual ${value.length} `,
      },
    };

    return this.reponseValidator(sucess, error[req!.language]);
  }

  maxCharacter(max: number): IvalidatorResponse {
    const req = this.req.validator!
    const value = req.value
    const sucess = value.length <= max ? true : false;
    const error: IvalidatorError = {
      en: {
        [`maxChater--${value}`]: `Máximo ${max} caracteres atual ${value.length} `,
      },
    };

    return this.reponseValidator(sucess, error[req!.language]);
  }

  maxWord(max: number): IvalidatorResponse {
    const req = this.req.validator!
    const value = req.value.split(' ').length
    const sucess = value <= max ? true : false;
    const error: IvalidatorError = {
      en: {
        [`maxWord--${value}`]: `Máximo ${max} palavras atual ${value}`,
      },
    };

    return this.reponseValidator(sucess, error[req.language]);
  }

  minWord(min: number): IvalidatorResponse {
    const req = this.req.validator!
    const value = req.value.trim().split(' ').length
    const sucess = value >= min ? true : false;
    const error: IvalidatorError = {
      en: {
        [`minWord--${value}`]: `Minímo ${min} palavras atual ${value}`,
      },
    };

    return this.reponseValidator(sucess, error[req.language]);
  }

  get checkValueIsTrue(): IvalidatorResponse {
    const req = this.req.validator!
    const value = req.value as boolean;
    const sucess = value == true ? true : false;
    const error: IvalidatorError = {
      en: {
        [`typeBoolean--${value}`]: `" ${typeof value} " deve ser tipo: 'Boolean`,
      },
    };

    return this.reponseValidator(sucess, error[req.language]);
  }
  // not used yet

  get typeNumber(): IvalidatorResponse {

    const req = this.req.validator!
    const value = req!.value
    const sucess = typeof value === 'number' ? true : false;
    const error: IvalidatorError = {
      en: {
        [`typeNumber--${value}`]: `" ${typeof value} " deve ser tipo: 'Number`,
      },
    };

    return this.reponseValidator(sucess, error[req.language]);
  }

  get typeString(): IvalidatorResponse {
    const req = this.req.validator!
    const value = req.value as string;
    const sucess = typeof value === "string" ? true : false;
    const error: IvalidatorError = {
      en: {
        [`typeString > ${value}`]: `" ${typeof value} " deve ser tipo: 'STRING`,
      },
    };

    return this.reponseValidator(sucess, error[req.language]);
  }

  get typeBoolean(): IvalidatorResponse {
    const req = this.req.validator!
    const value = req.value as string;
    const sucess = typeof value === "boolean" ? true : false;
    const error: IvalidatorError = {
      en: {
        [`typeBoolean--${value}`]: `" ${typeof value} " deve ser tipo: 'Boolean`,
      },
    };

    return this.reponseValidator(sucess, error[req.language]);
  }

  get emailValidFormat(): IvalidatorResponse {
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

    return this.reponseValidator(sucess, error[req.language]);
  }

  valueInObject(object: any): IvalidatorResponse {
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

    return this.reponseValidator(sucess, error[req.language]);
  }

  existValueInArray(value: string, array: any[]): IvalidatorResponse {
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
    return this.reponseValidator(sucess, error[req.language]);
  }
  existStringInArray(array: any[]): IvalidatorResponse {
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
    return this.reponseValidator(sucess, error[req.language]);
  }
  existObjectInArray(array: any[]): IvalidatorResponse {
    const req = this.req.validator!
    const value = req.value;
    const sucess = array.includes(value);
    const error: IvalidatorError = {
      en: {
        existObjectInArray: `" ${value} "não existe na Objeto: ${JSON.stringify(array)}`
      },
    };

    return this.reponseValidator(sucess, error[req.language]);
  }
  valueInaArray(array: string[]): IvalidatorResponse {
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

    return this.reponseValidator(sucess, error[req.language]);
  }

  maxLength(max: number): IvalidatorResponse {
    const req = this.req.validator!
    const value = req.value;

    const sucess = value.length <= max ? true : false;
    const error: IvalidatorError = {
      en: {
        maxLength: `Caracteres exedeu máximo ${value.length} / ${max}`,
      },
    };

    return this.reponseValidator(sucess, error[req.language]);
  }

  minName(min: number): IvalidatorResponse {
    const req = this.req.validator!
    const value = req.value as string

    const sucess = value.split('').length <= min ? true : false;
    const error: IvalidatorError = {
      en: {
        maxName: `Mínimo  nome/s ${value.length} / ${min}`,
      },
    };

    return this.reponseValidator(sucess, error[req.language]);
  }

  reponseValidatorCompose(test: IvalidatorResponse, req: Irequest): IvalidatorResponseCompose {

    return test == null ? null : {
      validator: req.validator,
      error: test,
      label: req.validator!.label
    }

  }

  reponseValidator(sucess: boolean, errorLanguage: { [key: string]: string }): IvalidatorResponse {
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

  compose(...funcoes: any): IvalidatorResponse {
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
  async composeAsync(...funcoes: any): Promise<IvalidatorResponse> {

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