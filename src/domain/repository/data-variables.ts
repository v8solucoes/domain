import { ImodelConfig } from "../../shared/interface"

export const inputModel: Record<ImodelConfig['typeModel'], ImodelConfig['typeModel']> = {
  array: 'array',
  object: 'object',
  value: 'value'
}
export const inputType: Record<ImodelConfig['typeInput'], ImodelConfig['typeInput']> = {
  acceptTerms: 'acceptTerms',
  booleanToggle: 'booleanToggle',
  generic: 'generic',
  group: 'group'
}
export const inputTypeHtml: Record<ImodelConfig['typeInputHtml'], ImodelConfig['typeInputHtml']> = {
  email: 'email',
  password: 'password',
  text:'text'
}

