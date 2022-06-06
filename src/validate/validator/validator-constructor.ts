import { ValidatorReponse, ValidatorError, ValidatorRequest } from "../../shared/interface";

export class ValidatorConstructor {
  req: ValidatorRequest
  constructor(req: ValidatorRequest) {
    this.req = req
  }
  
 valueInObject(object: any): ValidatorReponse {
    const req = this.req
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

 existStringInArray(array:any[]): ValidatorReponse {
    const req = this.req
    const value = req.value;
    const sucess = array.includes(value);
    const error: ValidatorError = {
      en: {
        valueInaArray: `" ${value} "não existe na Lista: ${JSON.stringify(
          array
        )}`
      },
    };
    console.log('function')
    return this.reponseValidator(sucess, error[req.language]);
 }
 existObjectInArray(array:any[]): ValidatorReponse {
  const req = this.req
  const value = req.value;
  const sucess = array.includes(value);
  const error: ValidatorError = {
    en: {
      existObjectInArray: `" ${value} "não existe na Objeto: ${JSON.stringify(
        array
      )}`
    },
  };
  console.log('function')
  return this.reponseValidator(sucess, error[req.language]);
}
  valueInaArray(array: string[]): ValidatorReponse {
    const req = this.req
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

   maxLength(max:number): ValidatorReponse {
    const req = this.req
    const value = req.value;

    const sucess = value.length <= max ? true : false;
    const error: ValidatorError = {
      en: {
        maxLength: `Caracteres exedeu máximo ${value.length} / ${max}`,
      },
    };

    return this.reponseValidator(sucess, error[req.language]);
  }

   minLength(min:number): ValidatorReponse {
    const req = this.req
    const value = req.value;

    const sucess = value.length < min ? true : false;
    const error: ValidatorError = {
      en: {
        maxLength: `Caracteres mínimo ${value.length} / ${min}`,
      },
    };

    return this.reponseValidator(sucess, error[req.language]);
  }

  get typeString(): ValidatorReponse {
    const req = this.req
    const value = req.value as string;
    const sucess = typeof value === "string" ? true : false;
    const error: ValidatorError = {
      en: {
        typeString: `" ${typeof value} " deve ser tipo: 'STRING`,
      },
    };

    return this.reponseValidator(sucess, error[req.language]);
  }

  get typeBoolean(): ValidatorReponse {
    const req = this.req
    const value = req.value as string;
    const sucess = typeof value === "boolean" ? true : false;
    const error: ValidatorError = {
      en: {
        typeBoolean: `" ${typeof value} " deve ser tipo: 'Boolean`,
      },
    };

    return this.reponseValidator(sucess, error[req.language]);
  }

  reponseValidator(sucess: boolean, errorLanguage: { [key: string]: string }): ValidatorReponse {
    try {
      if (sucess) {
        return null;
      } else {
        throw new Error(`${JSON.stringify(errorLanguage)}`);
      }
    } catch (error) {
      return errorLanguage;
    }
  }

  compose(...funcoes: any):ValidatorReponse {
    console.log('compose')
    const validators = funcoes.reduce(
      (accumulator:any, current:any) => {
        return { ...accumulator, ...current };
      },
      {}, // 👈️ initial value
    );
  
    if (!!Object.keys(validators).length) {
      console.log(validators)
      return validators
    } else {
      console.log('objeto')
      return null
    }  

  }
}
