import { ModeloDados } from "../dados/dados.modelo";
import { Req_Doc, Resposta_Doc } from "./documento.interface";

export class DocumentoConstrutor {

  modulo = ModeloDados.modulo;

  constructor() {
    console.log(this.start())
  }

  start() {

    return `
    import { Modelo_Dados, Nome_Dados, Permissao_Dados } from "../dados/dados.interface";
    ${this.criarDocumento({ dados: ModeloDados.modulo, nomeDocumento: 'dados_Dados' })}
    ${this.criarDocumento({ dados: ModeloDados.modulo, nomeDocumento: 'dados_Interface' })}
    ${this.criarDocumento({ dados: ModeloDados.modulo, nomeDocumento: 'permissao_Dados' })}
    ${this.criarDocumento({ dados: ModeloDados.modulo, nomeDocumento: 'permissao_Interface' })}
    ${this.criarDocumento({ dados: ModeloDados.modulo, nomeDocumento: 'modelo_Dados' })}
    ${this.criarDocumento({ dados: ModeloDados.modulo, nomeDocumento: 'modelo_Interface' })}
    `
  }

  criarDocumento(req: Req_Doc["criarDocumento"]) {

    let requisicaoGrupo: Req_Doc["criarGrupo"]

    let _grupo = [] as any;

    req.dados.forEach((dados) => {

      requisicaoGrupo = {
        dados: dados,
        pai: dados.tipo,
        filho: dados.tipo,
        nomeDocumento: req.nomeDocumento
      }
      let documento = this.tipoDocumento(requisicaoGrupo)[req.nomeDocumento]

      _grupo.push(`${documento.cabecalho(`${documento[dados.tipo]}`)}`);
    })

    return `${_grupo}`;
  }

  criarGrupo(req: Req_Doc["criarGrupo"]) {

    let _grupo = [] as any;

    /*     console.log('PAI' + '>' + req.pai + ' > ') */

    req.dados._grupo.forEach((dados, index) => {

      const documento = this.tipoDocumento(
        {
          pai: (index === 0 ? req.dados.tipo : req.pai),
          filho: req.dados.tipo,
          dados: dados as Req_Doc['criarGrupo']['dados'],
          nomeDocumento: req.nomeDocumento,
        })[req.nomeDocumento];

      /*   console.log( '>' + req.pai + ' > ' + req.dados.tipo +' > ' +  dados.id) */

      _grupo.push(`${documento[dados.tipo]}\n`);

    });
    return `${_grupo}`;
  }

  tipoDocumento(req: Req_Doc["criarGrupo"]): Resposta_Doc["documentoTipo"] {

    const grupo = () => { return this.criarGrupo(req) }

    const cabecalho_Dados = (nomeInterface: string, documento: string) => ` export const ${req.nomeDocumento} : ${nomeInterface}  = ${documento} `
    const cabecalho_Interface = (documento: string) => ` export interface ${req.nomeDocumento} ${documento} `

    const dados = {
      cabecalhoDados: (nomeInterface: string, documento: string) => cabecalho_Dados(nomeInterface, ` { ${documento} } `),
      cabecalhoInterface: (documento: string) => cabecalho_Interface(` { ${documento} } `),
      objeto: () => (req.pai == 'objeto') ? ` ${req.dados.id} : { ${grupo()} } ` : ` { ${grupo()} }  `,
      lista: () => (req.pai == 'objeto') ? ` ${req.dados.id} : [ ${grupo()} ] ` : ` [ ${grupo()} ] `,
      valor: (dados: string) => (req.filho == 'objeto') ? ` ${req.dados.id} : ${dados} ` : ` ${dados} `
    }

    const permissao = {
      cabecalhoDados: (nomeInterface: string, documento: string) => cabecalho_Dados(`${nomeInterface}[]`, ` [ ${documento} ] `),
      cabecalhoInterface: (documento: string) => cabecalho_Interface(`${documento}`),
      objeto: (dados: string) => ` { ${dados} \n _grupo: [ ${grupo()} ] } `,
      lista: (dados: string) => ` { ${dados} \n _grupo: [ ${grupo()} ] } `,
      valor: (objeto: boolean, dados: string) => objeto ? ` { ${dados} } ` : ` ${dados} `
    }

    const modelo = {
      cabecalhoDados: (nomeInterface: string, documento: string) => cabecalho_Dados(nomeInterface, ` { ${documento} } `),
      cabecalhoInterface: (documento: string) => cabecalho_Interface(` { ${documento} } `),
      objeto: () => ` ${req.dados.id} : { ${grupo()} } `,
      lista: () => ` ${req.dados.id} : { ${grupo()} } `,
      valor: (dados: string) => `${req.dados.id} : ${dados}`
    }

    return {

      /* DADOS - Dados */
      get dados_Dados() {
        return {
          cabecalho(documento: string) { return dados.cabecalhoDados('dados_Interface', documento) },
          get objeto() { return dados.objeto() },
          get lista() { return dados.lista() },
          get valor() { return dados.valor(`${JSON.stringify(req.dados.valor)}`) },
        };
      },
      /* DADOS - Interface */
      get dados_Interface() {
        return {
          cabecalho(documento: string) { return dados.cabecalhoInterface(documento) },
          get objeto() { return dados.objeto() },
          get lista() { return dados.lista() },
          get valor() { return dados.valor(`${req.dados.interface}`) },
        }
      },
      /* PERMISSÃO - Dados */
      get permissao_Dados() {
        return {
          cabecalho(documento: string) { return permissao.cabecalhoDados('permissao_Interface', documento) },
          get objeto() { return permissao.objeto(permissao.valor(false, this.modelo)) },
          get lista() { return permissao.lista(permissao.valor(false, this.modelo)) },
          get valor() { return permissao.valor(true, this.modelo) },
          get modelo() {
            return `
          id: "${req.dados.id}",
          tipo: "${req.dados.tipo}",
          exibir: ${JSON.stringify(req.dados.permissao)},`
          }
        };
      },
      /* PERMISSÃO - Interface */
      get permissao_Interface() {
        return {
          cabecalho(documento: string) { return permissao.cabecalhoInterface(documento) },
          get objeto() { return permissao.objeto(permissao.valor(false, this.modelo)) },
          get lista() { return permissao.lista(permissao.valor(false, this.modelo)) },
          get valor() { return permissao.valor(true, this.modelo) },
          get modelo() {
            return `
          id: "${req.dados.id}";
          tipo: Nome_Dados['tipoDados'];
          exibir: Partial<Permissao_Dados>
          `},
        };
      },
      /* MODELO - Dados */
      get modelo_Dados() {
        return {
          cabecalho(documento: string) { return modelo.cabecalhoDados('modelo_Interface', documento) },
          get objeto() { return modelo.objeto() },
          get lista() { return modelo.lista() },
          get valor() { return modelo.valor(this.modelo) },
          get modelo() { return JSON.stringify(req.dados.modelo) },
        };
      },
      /* MODELO - Interface */
      get modelo_Interface() {
        return {
          cabecalho(documento: string) { return dados.cabecalhoInterface(documento) },
          get objeto() { return modelo.objeto() },
          get lista() { return modelo.lista() },
          get valor() { return modelo.valor(this.modelo) },
          get modelo() { return `Modelo_Dados` },
        };
      },
    }
  }

}
new DocumentoConstrutor().start()