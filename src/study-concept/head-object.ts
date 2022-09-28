
export class ReadObject {
  constructor() {
    console.clear()
    console.log('start coisa feia manoas')
 console.log(this.start({
  title: 'nome',
  description: 'id',
  sub: ''
}, { nome: 'emerson', id:['teste'], email: 'sou eu' }))
    

  }
  start(colection: { title: string, sub: string, description: string }, object: any) {
    
    var result = {
      title: null,
      sub: null,
      description: null
    }

    for (const key in object) {
      const element = object[key];
      
/*       if(typeof element === 'object') */

      if (Object.prototype.hasOwnProperty.call(object, key)) {

      
        (colection.title == key) ? result.title = element : '';
        (colection.sub == key) ? result.sub = element : '';
        (colection.description == key) ? result.description = element : '';
        
      }
    }

 
  return result;
  
}
}



const start = new ReadObject();
