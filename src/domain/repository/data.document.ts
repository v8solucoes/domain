import { Idoc } from "../../shared/interface";
import { genericName, genericPhoneNumber } from "./data-random-names";

export const _document: Idoc = {
  [`send-message`]: {
    'title': 'Primeiro Contato',
    'message': 'Olá (NOME), tudo bem com você e sua família?',
  },
  [`pendency`]: {
    'document': genericName(),
    'firstContact': 'Paula Proteção',
    'inspection': 'Paula Careira',
    'payment': 'solucoesv8@gmail.com',
    'proposalComplete': 'contato@v8sites.com.br',
    'proposalFast': '11981231970',
    'signature': '4581231945',
  },
  [`client-adm`]: {
    'namePersonal':  genericName(),
    'nameFantasy': 'Paula Proteção',
    'nameCorporate': 'Paula Careira',
    'emailPrimary': 'solucoesv8@gmail.com',
    'emailSecundary': 'contato@v8sites.com.br',
    'phonePrimary': '11981231970',
    'phoneSecundary': '4581231945',
    'cpfCnpj': '25451010418'
  },
  [`developing-one`]: {
    "name":  genericName(),
    "phone": genericPhoneNumber(11981231970),
    "email": "contato@v8sites.com.br"
  },
  [`developing-two`]: {
    "name":  genericName(),
    "phone": genericPhoneNumber(11981231970),
    "email": "contato@v8sites.com.br"
  },
  [`partner-developing-one`]: {
    "name":  genericName(),
    "phone": genericPhoneNumber(11981231970),
    "email": "contato@v8sites.com.br"
  },
  [`partner-developing-two`]: {
    "name":  genericName(),
    "phone": genericPhoneNumber(11981231970),
    "email": "contato@v8sites.com.br"
  },
  [`partner-developing-three`]: {
    "name":  genericName(),
    "phone":genericPhoneNumber(11981231970),
    "email": "contato@v8sites.com.br"
  },
  [`client-developing-one`]: {
    "name": genericName(),
    "phone": genericPhoneNumber(11981231970),
    "email": "contato@v8sites.com.br"
  },
  [`client-developing-two`]: {
    "name":  genericName(),
    "phone": genericPhoneNumber(11981231970),
    "email": "contato@v8sites.com.br"
  },
  [`client-developing-three`]: {
    "name":  genericName(),
    "phone": "11981231970",
    "email": "contato@v8sites.com.br"
  },
  [`user-adm`]: {
    "emailVerified": false,
    "password": "123456",
    "multiFactor": false,
    "name":  genericName(),
    "acceptTerms": true,
    "phone": genericPhoneNumber(11981231970),
    "level": "adm",
    "userId": "mvP0YpF2NIm0EFf50gfTR7EnBNUz",
    "email": "contato@v8sites.com.br"
  },
  [`account-adm-new`]: {
    name: genericName(),
    email: 'contato@v8sites.com.br',
    phone: genericPhoneNumber(11981231970),
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