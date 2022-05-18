import { Resposta, RespostaModelo } from "./resposta.interface"

export class Modelo_Resposta {

    public req: any

    constructor(req: Resposta<any>['data']) {
        this.req = req
    }

    get mensagem(): RespostaModelo {
        const req = this.req
        const erro = `Erro: `
        const sucesso = `Sucesso: `
        return {
            semCodigo: {
                sucesso: `${sucesso} Sem Código ${req}`,
                erro: `${erro} Sem Código ${req}`
            },
            autenticacaoSucesso: {
                sucesso: `${sucesso} Autenticado com Sucesso ${req}`,
                erro: `${erro} Autenticado com Sucesso ${req}`
            },
            ['auth/email-already-in-use']: {
                sucesso: `${sucesso} `,
                erro: `${erro} Email já Existe: ${req}`
            },
            ['auth/network-request-failed']: {
                sucesso: `${sucesso} `,
                erro: `${erro} Conexão Falhou: ${req}`,
            },
            'gravarLote': {
                sucesso: `${sucesso} Gravar Lote. ${req}`,
                erro: `${erro}  Gravar Lote. ${req}`
            },
            'lerColecao': {
                sucesso: `${sucesso} Ler Coleção. ${req}`,
                erro: `${erro}  Ler Colecao. ${req}`
            },
            'lerDocumento': {
                sucesso: `${sucesso} Ler Documento itemId: ${req}`,
                erro: `${erro} Ler Documento itemId: ${req}`
            },
            'mesagemSemCodigo': {
                sucesso: `${sucesso} Mensagem sem Código. ${req}`,
                erro: `${erro} Erro sem código`,
            },
            'idUsuario': {
                sucesso: `${sucesso} Parabéns conta criada com Sucesso. ${req}`,
                erro: `${erro} Erro na Criação da conta`,
            },
            'funcoesAsync': {
                sucesso: `${sucesso} Funções Executadas com Sucesso ${req}`,
                erro: `${erro} Erro na Execução das Funções`,
            }
        }
    }
}