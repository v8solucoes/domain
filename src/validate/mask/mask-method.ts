import { Mask_Constructor } from "./mask-constructor";

export class Mask_Model extends Mask_Constructor {
  modelUrl(text: string) {
    return this.composeMask(
      this.removeEmptySpace,
      this.replaceEmptytoHyphen,
      this.removeMultiplesHypensStartEnd,
      this.removeAccent,
      this.toLowerCase
    )(text);
  }
  modelNamePersonal(text: string) {
    return this.composeMask(
      this.removeEmptySpace,
    )(text);
  }
}
