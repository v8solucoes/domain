import { Inivel } from "../../shared/interface";

export class ModelUser {
  constructor(
    public userId: string,
    public name: string,
    public email: string,
    public phone: string,
    public nivel: Inivel,
    public password: string,
    public acceptTerms: boolean,
    public emailVerified: boolean,
    public multiFactor: boolean
  ) {}
}