import { Resposta_Padrao_Construtor, Resposta_Mascara_Construtor} from "../14-resposta/resposta.construtor"
import { Resposta, RespostaMascara, RespostaTeste } from "../14-resposta/resposta.interface"

export class Funcao_Testar_Construtor {

  compor(...funcoes: any) {

    return (req: RespostaTeste['data']) => {
     /*  return funcoes.map((funcao:any)=>{ return funcao(req) }) */
     return funcoes.reduce((acumulador: any, funcao: any) => {
      return funcao(req)
    }, req)
    }

  }

}
export class Funcao_Mascara_Construtor {

  resposta = new Resposta_Mascara_Construtor()

  mascara(...funcoes: any) {

    return (valor: any) => {
      return funcoes.reduce((acumulador: any, funcao: any) => {
        return funcao(acumulador)
      }, valor)
    }

  }

  async mascaraAsync(...funcoes: any): Promise<RespostaMascara<any>> {

    try {
      const data = await this.mascara(funcoes)({ data: 'teste' })
      console.log(data)
      return this.resposta.sucesso({
        data: data,
        codigo: 'funcoesAsync',
        mensagem: `Gerou Funçoes: ${data}`
      })

    } catch (error) {

      return this.resposta.erro({
        data: error,
        codigo: 'funcoesAsync',
        mensagem: `Erro na Execução da Função`
      })
    }
  }

}
export class Funcao_Construtor {

  respostaPadrao = new Resposta_Padrao_Construtor()

  validar(...funcoes: any) {

    return (valor: any) => {
      return funcoes.reduce((acumulador: any, funcao: any) => {
        return funcao(valor)
      }, valor)
    }

  }

  compor(...funcoes: any) {

    return (valor: any) => {
      return funcoes.reduce((acumulador: any, funcao: any) => {
        return funcao(valor)
      }, valor)
    }

  }

  async async(...funcoes: any): Promise<Resposta<any>> {

    try {
      const data = await this.compor(funcoes)({ data: 'teste' })
      console.log(data)
      return this.respostaPadrao.sucesso({
        data: data,
        codigo: 'funcoesAsync',
        mensagem: `Gerou Funçoes: ${data}`,
        credencial: null
      })

    } catch (error) {

      return this.respostaPadrao.erro({
        data: error,
        codigo: 'funcoesAsync',
        mensagem: `Erro na Execução da Função`,
        credencial: null
      })
    }
  }

}