import { Irequest, IrouterPathColection } from '../../shared/interface';


export const _router = (environment: Irequest['environment'], domain: Irequest['domain']):IrouterPathColection => {
  
  return {

    // Adm
    [`user-adm`]: {level: 'adm', root: `${environment}/${domain}/adm/user-adm`},
    [`developing-one`]: {level: 'adm', root: `${environment}/${domain}/adm/user-adm`},
    [`developing-two`]: { level: 'adm', root: `${environment}/${domain}/adm/user-adm` },
    // Partner
    [`partner-developing-one`]: {level: 'partner', root: `${environment}/${domain}/adm/user-adm`},
    [`partner-developing-two`]: { level: 'partner', root: `${environment}/${domain}/adm/user-adm` },
    [`partner-developing-three`]: { level: 'partner', root: `${environment}/${domain}/adm/user-adm` },
    // Client
    [`client-developing-one`]: {level: 'client', root: `${environment}/${domain}/adm/user-adm`},
    [`client-developing-two`]: { level: 'client', root: `${environment}/${domain}/adm/user-adm` },
    [`client-developing-three`]: { level: 'client', root: `${environment}/${domain}/adm/user-adm` },
    // System
    [`account-adm-new`]: {level: 'system', root: `${environment}/${domain}/adm/user-adm`},
    [`sign-in`]: {level: 'system', root: `${environment}/${domain}/adm/user-adm`},
    [`recursive`]: {level: 'system', root: `${environment}/${domain}/adm/user-adm`},
    [`dashboard`]: {level: 'adm', root: `${environment}/${domain}/adm/user-adm`},
    [`null`]: {level: 'system', root: `${environment}/${domain}/adm/user-adm`},
  }
}