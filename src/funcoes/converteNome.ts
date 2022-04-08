export class ConverteNome {
    
  static paraURL(texto: string): string {
    return texto.trim().replace(/ /g, "-").toLowerCase();
  }

  static paraJSON(texto: string): string {
    const transforma = texto
      .trim()
      .replace(/(?:^|\s)\S/g, function (a) {
        return a.toUpperCase();
      })
      .replace(/ /g, "");

    return transforma.charAt(0).toLowerCase() + transforma.substr(1);
  }
  static paraClass(texto: string): string {
    const transforma = texto
      .trim()
      .replace(/(?:^|\s)\S/g, function (a) {
        return a.toUpperCase();
      })
      .replace(/ /g, "");

    return transforma.charAt(0).toUpperCase() + transforma.substr(1);
  }

  static converteURLpadraoJSON(texto: string): string {
    const transforma = texto.trim().replace(/-/g, " ");
    return this.paraJSON(transforma) as string;
  }
}
