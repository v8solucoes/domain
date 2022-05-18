import * as fs from "fs";
import * as path from "path";

export class ConstrutorArquivo {
  static novo(diretorio: string, nomeArquivo: string, arquivo: any) {
    const caminhoArquivo = `${diretorio}/${nomeArquivo}`;
    const sucesso = `Arquivo criado: ${path.join(__dirname, caminhoArquivo)}`;

    this.existe(diretorio) ? "" : this.criarDiretorio(diretorio);
    this.existe(caminhoArquivo) ? this.deletarArquivo(caminhoArquivo) : "";
    this.criarArquivo(caminhoArquivo, arquivo);

    console.log(sucesso);
    return sucesso;
  }

  static existe(diretorio: string): boolean {
    return fs.existsSync(path.join(__dirname, diretorio)) ? true : false;
  }

  static deletarArquivo(diretorio: string) {
    const caminho = path.join(__dirname, diretorio);
    try {
      fs.unlinkSync(caminho);
    } catch (error) {}

    return "Deletado: " + caminho;
  }

  static criarDiretorio(diretorio: string) {
    fs.mkdirSync(path.join(__dirname, diretorio), { recursive: true });
    return "Pasta Criada " + diretorio;
  }

  static criarArquivo(diretorio: string, arquivo: any) {
    fs.appendFileSync(path.join(__dirname, diretorio), arquivo);
    return "Criado " + diretorio;
  }

  static lerArquivo(diretorio: string): any {
    try {
      const data = fs.readFileSync(path.join(__dirname, diretorio), "utf8");
      return data;
    } catch (err) {
      console.error(err);
    }
  }
}
