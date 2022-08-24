import { Ivalidator, IvalidatorResponse } from "../../../shared/interface";
import { ModuleDomain } from "../module.domain";

export class AccountAdm extends ModuleDomain {

  async create(): Promise<Ivalidator> {

    try {
      /*  const data = this.req.data as {
     "name": string,
     const test = await this.testPermisionDomain()
     "email": string,
     "telephone": number,
     "acceptTerms": boolean
   } */
      // Test value

      // Create

      return await this.testPermisionDomain()

    } catch (error) {
      this.req.validator.error = error as any
      return this.req.validator
    }

  }

  /* async test(): Promise<IvalidatorResponse> {

    try {

      const local = new DataLocalDomain().getLocalModuleDomain(this.req.document)
      const test = new Test(
        local.permission,
        local.model,
        this.req.language,
        this.document).start()
      return test

    } catch (error) {
      return { error }
    }

  } */
  get async(): Promise<IvalidatorResponse> {
    throw new Error("Method not implemented.");
  }
  get sync(): IvalidatorResponse {
    throw new Error("Method not implemented.");
  }
}