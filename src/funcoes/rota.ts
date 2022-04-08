import { CredenciaisDados, Rota, TipoRota } from "../_interface/interfaces-imports";

export function pergarRotaDatabase( credenciais: CredenciaisDados): TipoRota {
  const pasta = 'lista'
  const rotas: Rota = {
    adm: {
      lista: `${credenciais.ambiente}/${credenciais.moduloId}/${pasta}`,
      documento: `${credenciais.ambiente}/${credenciais.moduloId}/`
    },
    revenda: {
      lista: `${credenciais.ambiente}/${credenciais.idRevenda}/${credenciais.moduloId}/`,
      documento: `${credenciais.ambiente}/${credenciais.idRevenda}/${credenciais.moduloId}/${pasta}`
    },
    cliente: {
      lista: `${credenciais.ambiente}/${credenciais.idRevenda}/${credenciais.idCliente}/${credenciais.moduloId}/`,
      documento: `${credenciais.ambiente}/${credenciais.idRevenda}/${credenciais.idCliente}/${credenciais.moduloId}/${pasta}`
    },
  };

  return rotas[credenciais.moduloRota] as TipoRota ;
}
