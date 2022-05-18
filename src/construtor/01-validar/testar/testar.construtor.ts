import { RespostaMascaraConstrutor } from "../../14-resposta/reposta.export"
import { RespostaTeste } from "../../14-resposta/resposta.interface"

export class Testar_Construtor {

    campoNaLista(req: RespostaTeste['data']): RespostaTeste{

        const campo = req.input
        const lista = req.objeto
        const aprovado = lista.includes(campo)
        const resposta = new RespostaMascaraConstrutor()

        try {
            if (aprovado) {
                return resposta.sucesso({
                    codigo: 'semCodigo',
                    data: req,
                    mensagem: 'Aprovado'
                })
            } else {

                throw new Error(`Campo: > ${campo} < não existe na Lista`)
            }
        } catch (error) {

            return resposta.erro({
                codigo: 'semCodigo',
                data: req,
                mensagem: error as string
            })
        }
    }
    maiorQue(req: RespostaTeste['data']): RespostaTeste {

        const texto = req.input as string
        const maximo = req.objeto as number

        const aprovado = texto.length > maximo ? true : false
        const resposta = new RespostaMascaraConstrutor()

        try {
            if (aprovado) {
                return resposta.sucesso({
                    codigo: 'semCodigo',
                    data: req,
                    mensagem: 'Aprovado'
                })
            } else {

                throw new Error(`Reprovado: Campo > ${texto.length} < / Máximo: ${maximo}`)
            }
        } catch (error) {

            return resposta.erro({
                codigo: 'semCodigo',
                data: req,
                mensagem: error as string
            })
        }
    }
    menorQue(req: RespostaTeste['data']): RespostaTeste {

        const texto = req.input as string
        const minimo = req.config as number

        const aprovado = texto.length < minimo ? true : false
        const resposta = new RespostaMascaraConstrutor()

        try {
            if (aprovado) {
                return resposta.sucesso({
                    codigo: 'semCodigo',
                    data: req,
                    mensagem: 'Aprovado'
                })
            } else {

                throw new Error(`Reprovado: Campo > ${texto.length} < / Máximo: ${minimo}`)
            }
        } catch (error) {

            return resposta.erro({
                codigo: 'semCodigo',
                data: req,
                mensagem: error as string
            })
        }
    }

}