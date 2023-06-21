
export class ModelPendency {
    constructor(
      public firstContact: string,
      public proposalFast : string,
      public proposalComplete : string,
      public document: string,
      public signature: string,
      public payment: string,
      public inspection: string,
    ) {}
  }