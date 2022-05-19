import { Testar } from "./testar.interface"

export class Testar_Construtor {

    campoNoObjeto(req: Testar) {

        const campo = req.input
        const objeto = req.objeto
        const sucesso = objeto[campo] ? true : false
        const erro =  `" ${campo} " não existe no objeto: ${JSON.stringify(objeto)}`

        return this.resposta(sucesso, erro);

    }
    campoNaLista(req: Testar): boolean | any {

        const campo = req.input
        const lista = req.objeto
        const sucesso = lista.includes(campo)
        const erro =  `" ${campo} " não existe na lista: ${JSON.stringify(lista)}`

        return this.resposta(sucesso, erro);
    }
    maiorQue(req: Testar): boolean | any {

        const texto = req.input as string
        const maximo = req.objeto as number

        const sucesso = texto.length > maximo ? true : false
        const erro =  `" ${texto.length} " caracteres. Deve ser menor que: ${maximo}`

        return this.resposta(sucesso, erro)
    }

    menorQue(req: Testar): boolean | any {

        const texto = req.input as string
        const minimo = req.config as number

        const sucesso = texto.length < minimo ? true : false
        const erro =  `" ${texto.length} " caracteres. Deve ser maior que: ${minimo}`

        return this.resposta(sucesso, erro)
    }

    tipoString(req: Testar): boolean | any {

       const tipo = req.input as string
       const sucesso = typeof tipo === 'string' ? true : false
       const erro =  `" ${typeof tipo} " deve ser tipo: 'STRING`

    return this.resposta(sucesso, erro) as boolean
        
    }

    tipoBoolean(req: Testar): boolean {

       const tipo = req.input as string
       const sucesso = typeof tipo === 'string' ? true : false
       const erro =  `" ${typeof tipo} " deve ser tipo: 'BOOLEAN`

     return this.resposta(sucesso, erro)
    }

    resposta(sucesso: boolean, resposta: string): boolean | any  {

      try {
    
        if (sucesso) {
          return true
        } else {
           console.log('error')
           throw new Error(resposta);
         
        }
      } catch (error) {
  
        return error
      }
    }

}