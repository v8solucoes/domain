import { Irequest, ValidatorResponse } from "../../shared/interface"
import { DataLocalDomain } from "../repository/data-local";
import { Test } from "../test/test";
export abstract class ModuleDomain {
  req: Irequest
  document: any = {
    [`account-adm`]: {
      name: 'Em',
      email: 'contato@v8sites.com.br',
      telephone: '11981231970',
      acceptTerms: true
    },
  }
  constructor(req: Irequest) {
    this.req = req
  }
  abstract create(): Promise<ValidatorResponse>

  async testPermisionDomain(): Promise<ValidatorResponse> {

    try {

      const local = new DataLocalDomain().getModule(this.req.document)
      const test = new Test(
        this.req,
        local.permission,
        local.model,
        this.req.language,
        this.document).start()
      return test

    } catch (error) {
      return { error }
    }

  }

  abstract get async(): Promise<ValidatorResponse>
  abstract get sync(): ValidatorResponse

}