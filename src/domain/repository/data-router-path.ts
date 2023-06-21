import { Irequest, IrouterPathColection } from '../../shared/interface';


export const _router = (environment: Irequest['environment'], domain: Irequest['domain']):IrouterPathColection => {
  
  return {

    // Adm
    [`send-message`]: {level: 'adm', root: `${domain}/${environment}/adm/user-adm`},
    [`pendency`]: {level: 'adm', root: `${domain}/${environment}/adm/user-adm`},
    [`user-adm`]: {level: 'adm', root: `${domain}/${environment}/adm/user-adm`},
    [`client-adm`]: {level: 'adm', root: `${domain}/${environment}/adm/user-adm`},
    [`developing-one`]: {level: 'adm', root: `${domain}/${environment}/adm/user-adm`},
    [`developing-two`]: { level: 'adm', root: `${domain}/${environment}/adm/user-adm` },
    // Partner
    [`partner-developing-one`]: {level: 'partner', root: `${domain}/${environment}/adm/user-adm`},
    [`partner-developing-two`]: { level: 'partner', root: `${domain}/${environment}/adm/user-adm` },
    [`partner-developing-three`]: { level: 'partner', root: `${domain}/${environment}/adm/user-adm` },
    // Client
    [`client-developing-one`]: {level: 'client', root: `${domain}/${environment}/adm/user-adm`},
    [`client-developing-two`]: { level: 'client', root: `${domain}/${environment}/adm/user-adm` },
    [`client-developing-three`]: { level: 'client', root: `${domain}/${environment}/adm/user-adm` },
    // System
    [`account-adm-new`]: {level: 'system', root: `${domain}/${environment}/adm/user-adm`},
    [`sign-in`]: {level: 'system', root: `${domain}/${environment}/adm/user-adm`},
    [`recursive`]: {level: 'system', root: `${domain}/${environment}/adm/user-adm`},
    [`dashboard`]: {level: 'adm', root: `${domain}/${environment}/adm/user-adm`},
    [`null`]: {level: 'system', root: `${domain}/${environment}/adm/user-adm`},
  }
}