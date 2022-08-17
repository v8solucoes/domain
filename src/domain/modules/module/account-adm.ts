import { ValidatorResponse } from "../../../shared/interface";
import { ModuleDomain } from "../module.domain";

export class AccountAdm extends ModuleDomain {

  async create(): Promise<ValidatorResponse> {

    try {
      /*  const data = this.req.data as {
     "name": string,
     "email": string,
     "telephone": number,
     "acceptTerms": boolean
   } */
      // Test value


      // Create

      return await this.testPermisionDomain()

    } catch (error) {
      return { error }
    }

  }

  /* async test(): Promise<ValidatorResponse> {

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
  get async(): Promise<ValidatorResponse> {
    throw new Error("Method not implemented.");
  }
  get sync(): ValidatorResponse {
    throw new Error("Method not implemented.");
  }
}