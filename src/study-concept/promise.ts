export class Start {
 
  createUser = Promise.resolve('id-xxxxxxx')
  createAccountAdm = null

  test = new Promise((resolve, reject) => {
    
    if ('resolvido' == 'resolvido') {
      resolve('w')
    } else { reject({ error:'Test Reprovado'}) }
  })
  rej = new Error('ERRO FORÇADO #############');

  constructor() { }
  async exe() {
    console.log('start promisses')
    
    try {
     return await this.test
       .then(test => {
         if(test == null) {return 'test'} console.log(test); throw test
       })
   /*      .catch(o => { console.log(o);  throw {test:"myException"}; }) */
   /*     .then(o => { console.log(o); throw {id:"id"}; }) */

    } catch (error) {
   
      return error;
    }
  }
}

const start = new Start().exe();
start.then(o=>{ console.log(o)})
