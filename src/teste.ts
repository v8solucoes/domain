export class Start {
  constructor() {
    console.log('start')
  }
    
  async start() {
    try {
      return "sucesso";
    } catch (error) {
      console.log(error);

      return error;
    }
  }
}

const start = new Start();
