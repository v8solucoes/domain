export class ModelUser{
  constructor(
    public name: string,
    public email: string,
    public phone: string,
    public password: string,
    public acceptTerms: boolean
  ) {}
}