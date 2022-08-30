import { Irequest, IresponseValidatorCompose } from "../../shared/interface";
import { responseValidatorCompose, responseValidatorUnit } from "../validators/validators-response";
import { DocumentDomain } from "./document.domain";


export class AccountAdm extends DocumentDomain {

  constructor(req: Irequest) {
    super(req)
  }

  async create(): Promise<IresponseValidatorCompose | null> {

    try {
      
      // Test Document
      const testAprovated = (await this.testDocument.permisionDomain())

      // Create

      if (testAprovated == null) {

        return null
        
      } else {

        return testAprovated

      }

    } catch (error) {
      const reprovated = responseValidatorUnit(false, {error: error as string})
   
      return responseValidatorCompose(reprovated,this.req)
    }
 

  }

}