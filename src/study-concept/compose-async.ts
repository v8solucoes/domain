import { IresponseValidatorCompose, IresponseValidatorUnit } from "../shared/interface"

export class Start {
  promise = (number: number, aprvated: 'resolvido' | 'reject'):Promise<any> => new Promise((resolve, reject) => {

    if (aprvated == 'resolvido') {
     /*  console.log(number) */
      resolve(null)
    } else {
  /*     console.log({ error: `Test Reject ${number}` }) */
      reject({ error: `Test Reject ${number}` })
    }
  })

  constructor() {
    this.composeAsyncDois(1)
  }

  async composeAsyncDois(sequence: number): Promise<IresponseValidatorUnit | null>  {

    const value = {
      uid: '',
      user: {},
      userAccount: {}
    }

    const process = {
      test: false,
      createUser: false,
      createAccountAdm: false,
      finally: false
    }

    const func = {
      test: () => this.promise(1, 'resolvido'),
      createUser: () => this.promise(2, 'resolvido') 
    }

    try {

      process.test = await func.test()
      process.createUser = !process.test

      if (process.createUser) {
       
        value.uid = await func.createUser()
        process.createAccountAdm = typeof value.uid === 'string' ? true: false

        if (process.createAccountAdm) {
          console.log('Process 2')
          value.user = await this.promise(3, 'resolvido')
          process.finally = !value.user

          if (process.finally) {
            console.log('Process 4')
            value.userAccount = await this.promise(4, 'resolvido')

          }

        }

      }
      console.log(process)

      return null

    } catch (error) {
      console.log('error')
      console.log(error)
      return {error}

    }


  }
  async composeAsync(sequence: number, func: { um: Promise<any>, dois: Promise<any>, tres: Promise<any>, quatro: Promise<any> }) {


    return func.um

      .then(o => func.dois)
      .catch(o => o)

      .then(o => func.tres)
      .catch(o => o)

      .then(o => func.quatro)
      .catch(o => o)

  }

}

const start = new Start()
/* start.then(o=>{ console.log(o)}) */
/* const start = new Start().exe();
start.then(o=>{ console.log(o)}) */
