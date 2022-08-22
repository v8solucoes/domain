import { Irequest, ValidatorResponse } from "../../shared/interface"
import { DataLocalDomain } from "../repository/data-local";
import { Test } from "../test/test";

export abstract class ModuleDomain {

  constructor(public req: Irequest) { }
  
  abstract create(): Promise<ValidatorResponse>

  async testPermisionDomain(): Promise<ValidatorResponse> {

    try {

      const local = new DataLocalDomain().getModule(this.req.document)
      const test = new Test(
        this.req.language,
        this.req,
        local.permission,
        local.model,
        this.req.data).exe()
      return test

    } catch (error) {
      return { error }
    }

  }

  abstract get async(): Promise<ValidatorResponse>
  abstract get sync(): ValidatorResponse

}