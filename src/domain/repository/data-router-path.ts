import { IrouterPath } from "../../shared/interface"

export const _router = (environment: string, domain: string): IrouterPath => {
  
  return {

    [`dashboard`]: {
     
      frontAnd: {
        root: ``,
        level: 'system'
      },
      backAnd: {
        root: `${environment}/${domain}/adm/user-adm`,
        level: 'adm'
      }
    },
    [`account-adm-new`]: {
      frontAnd: {
        root: ``,
        level: 'system'
      },
      backAnd: {
        root: `${environment}/${domain}/adm/user-adm`,
        level: 'adm'
      }
    },
    [`user-adm`]: {
      frontAnd: {
        root: ``,
        level: 'adm'
      },
      backAnd: {
        root: `${environment}/${domain}/adm/user-adm`,
        level: 'adm'
      }
    },
    [`sign-in`]: {
      frontAnd: {
        root: ``,
        level: 'system'
      },
      backAnd: {
        root: `${environment}/${domain}/adm/user-adm`,
        level: 'adm'
      }
    },
    [`recursive`]: {
      frontAnd: {
        root: ``,
        level: 'system'
      },
      backAnd: {
        root: `${environment}/${domain}/adm/any`,
        level: 'adm'
      }
    },
    [`null`]: {
      frontAnd: {
        root: ``,
        level: 'system'
      },
      backAnd: {
        root: `${environment}/${domain}/adm/any`,
        level: 'adm'
      }
    },
  }
}