import { Irequest, Ivalidator } from "../../shared/interface";
import { DocumentDomain } from "./document.domain";


export class AccountAdm extends DocumentDomain {

  constructor(req: Irequest) {
    super(req)
  }

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

      return await this.testDocument.permisionDomain()

    } catch (error) {
      this.req.validator.error = error as any
      return this.req.validator
    }

  }

}