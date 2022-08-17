import { ReplaceUnit } from "./replace-unit";

export class ReplaceCompose extends ReplaceUnit {
  modelUrl(text: string) {
    return this.composeMask(
      this.replaceEmptytoHyphen,
      this.removeEspecialCharactersName,
      this.removeMultiplesHypensStartEnd,
      this.removeAccent,
      this.toLowerCase,
    )(text);
  }
}
