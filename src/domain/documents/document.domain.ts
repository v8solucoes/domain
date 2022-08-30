import { Irequest, IresponseValidatorCompose } from "../../shared/interface";
import { TestDocument } from "../validators/test/test-document";

export abstract class DocumentDomain {

  testDocument = new TestDocument(this.req)
 
  constructor(public req: Irequest) { }

 
  abstract create(): Promise<IresponseValidatorCompose | null> 
}