import { Iaction, Idomain, Ienvironment, Ilanguage, ImoduleId, Ipage } from "../../shared/interface"

export interface IrequestDomain {
  language: Ilanguage | null
  , environment: Ienvironment | null
  , page: Ipage | null
  , moduleId: ImoduleId | null
  , itemId: "sem item" | null
  , action: Iaction | null
  , domain: Idomain| null
  , date: Date | null
  , function?: "criarAutenticacao" | null
  , dateUpdate?: Date | null
  , dateCreate?: Date | null
}