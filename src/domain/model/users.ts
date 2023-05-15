import { Ilevel } from './../../shared/interface';

export class ModelUser {
  constructor(
    public userId: string,
    public name: string,
    public email: string,
    public phone: string,
    public level: Ilevel,
    public password: string,
    public acceptTerms: boolean,
    public emailVerified: boolean,
    public multiFactor: boolean
  ) {}
}