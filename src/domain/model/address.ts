import { Ilevel } from './../../shared/interface';

export class ModelClient {
  constructor(
    public street: string,
    public reference: string,
    public number: string,
    public state: boolean,
    public city: Ilevel,
    public zip: Ilevel,
  ) {}
}