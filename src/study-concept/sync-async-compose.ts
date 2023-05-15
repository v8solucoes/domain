export class SyncAsyncCompose {
  listP = [this.p(2500),this.p(1),this.p(2200)]
  listN = [null,null,null]


  constructor() {
    console.log('start')
    console.log(this.promiseSyncAll())
  }
  async promiseSyncRecursive(data:any, next:boolean): Promise<any> {

    try {

    const test = await Promise.all<any[]>(this.listP).then(test => {
      console.log('test')
      console.log(test)
        const errorTest = test.filter(result => result !== null)

        if (!errorTest.length) { return null } else {
          console.log(test)
          throw Object.assign({}, errorTest)
        }

      })
      return test
    } catch(error) {

      console.log('TEST ERROR CATCH ======================================')
      console.log(error)

      return error
    }
  }

  async promiseSyncAll(): Promise<any> {

      try {

      const test = await Promise.all<any[]>(this.listP).then(test => {
        console.log('test')
        console.log(test)
          const errorTest = test.filter(result => result !== null)

          if (!errorTest.length) { return null } else {
            console.log(test)
            throw Object.assign({}, errorTest)
          }

        })
        return test
      } catch(error) {

        console.log('TEST ERROR CATCH ======================================')
        console.log(error)

        return error
      }
    }
  p(time:number) {    
    return new Promise((resolve, reject) => {
    
      if ('resolvido' == 'resolvido') {
  
            setTimeout(() => {
              resolve(`${time}`)
      }, time)
        
      } else { reject({ error:'Test Reprovado'}) }
    })
}


  /* functions() {
    this.compose(this.funcSync01, this.funcSync02)
    return {}
  } */
  async compose(...functions: any) {

    try {
      const validators = await this.composeTest()
      const sucess = !Object.keys(validators).length
      console.log(validators)
      if (sucess) {
        return { email: 'invalido email' }
      } else {
        console.log('INVALIDO')
      
        throw new Error(`${JSON.stringify(validators)}`);

      }
    } catch (error) {
      console.log('catherror')
      return { xxx: 'errrorrr' }
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

  /* async exe(
    language: Irequest['language'],
    req: Irequest,
    permissions: IpermissionFormControl,
    model: ImodelRecursive,
    document: any

  ): Promise<IresponseValidatorCompose> {

    try {

      req.validator!.typeExecute = 'back'

      this.registerTest(language, req, permissions, model, document)

      return Promise.all<IresponseValidatorCompose[]>(this.listTest).then(test => {

        const errorTest = test.filter(result => result !== null)

        if (!errorTest.length) { return null } else {

          throw Object.assign({}, errorTest)
        }

      })

    } catch (error) {

      console.log('TEST ERROR CATCH ======================================')
      console.log(error)

      return responseValidatorError(error, this.req)
    }
  } */

}


const start = new SyncAsyncCompose()
