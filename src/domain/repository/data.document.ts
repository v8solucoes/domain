import { _randomName } from './data-random-names';
import { Idoc } from "../../shared/interface";

const randon = {
  name: Math.floor(Math.random() * 100),
  tel: Math.floor(Math.random() * 999)
}
const name = _randomName[randon.name]
export const _document: Idoc = {
  [`developing-one`]: {
    "name": "Emerson Felix",
    "phone": "11981231970",
    "email": "contato@v8sites.com.br"
  },
  [`developing-two`]: {
    "name": "Emerson Felix",
    "phone": "11981231970",
    "email": "contato@v8sites.com.br"
  },
  [`partner-developing-one`]: {
    "name": "Emerson Felix",
    "phone": "11981231970",
    "email": "contato@v8sites.com.br"
  },
  [`partner-developing-two`]: {
    "name": "Emerson Felix",
    "phone": "11981231970",
    "email": "contato@v8sites.com.br"
  },
  [`partner-developing-three`]: {
    "name": "Emerson Felix",
    "phone": "11981231970",
    "email": "contato@v8sites.com.br"
  },
  [`client-developing-one`]: {
    "name": "Emerson Felix",
    "phone": "11981231970",
    "email": "contato@v8sites.com.br"
  },
  [`client-developing-two`]: {
    "name": "Emerson Felix",
    "phone": "11981231970",
    "email": "contato@v8sites.com.br"
  },
  [`client-developing-three`]: {
    "name": "Emerson Felix",
    "phone": "11981231970",
    "email": "contato@v8sites.com.br"
  },
  [`user-adm`]: {
    "emailVerified": false,
    "password": "123456",
    "multiFactor": false,
    "name": "Emerson Felix",
    "acceptTerms": true,
    "phone": "11981231970",
    "nivel": "adm",
    "userId": "mvP0YpF2NIm0EFf50gfTR7EnBNUz",
    "email": "contato@v8sites.com.br"
  },
  [`account-adm-new`]: {
    name: `${name}`,
    email: 'contato@v8sites.com.br',
    phone: '11981231970',
    password: '123456',
    acceptTerms: true
  },
  [`sign-in`]: {
    email: 'contato@v8sites.com.br',
    password: '123456',
  },
  [`recursive`]: {
    any: 'any',
  },
  [`null`]: {
    any: 'any',
  },
  [`dashboard`]: {
    any: 'any',
  },
}