import { Irequest, Ivalidator, IvalidatorResponse } from "../../shared/interface"
import { DataLocalDomain } from "../repository/data-local";
import { Test } from "../validators/test/test-document";

export abstract class ModuleDomain {

  constructor(public req: Irequest) { }
  
  abstract create(): Promise<Ivalidator>

  async testPermisionDomain(): Promise<Ivalidator> {

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
      this.req.validator.error = error as any
      return this.req.validator
    }

  }

  abstract get async(): Promise<IvalidatorResponse>
  abstract get sync(): IvalidatorResponse

}