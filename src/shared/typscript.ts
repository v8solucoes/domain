export { ModelUser as AccountAdm} from "../domain/model/users";

export type NameProperty<T> = { [K in keyof T]: K }[keyof T];
export type NameValue<T> = T[keyof T]



//Prova de conceito
export class Teste {
  nome = 'felix' || 'teste'
  objeto = { casa: 'casa', teste: 'as' }
  lista = ['ricado','teste']
}


/* const nomeValue: NameValue<Teste['nome']> = 'asasd'
const nomeProperty: NameProperty<Teste['nome']> = 'asdfaf'
const objetoValue: NameValue<Teste['objeto']> = 'as'
const objetoProperty: NameProperty<Teste['objeto']> = 'casa'
const listaValue: NameValue<Teste['lista']> = 'ricado' */
/* const listaProperty: NameProperty<Teste['lista']> = '0' > Necessita as const em lista*/

/* const nome: Teste['nome'] = 'teste' || 'asdf'
const objeto: Teste['objeto'] = {'casa':'casa', 'teste':'as'}
const lista: Teste['lista'] = ['ricado', 'teste'] */