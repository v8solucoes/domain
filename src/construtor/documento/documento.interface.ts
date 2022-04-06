import { InterfaceDados } from "../dados/dados.interface";

/* FUNÇÕES */
export type NomePropriedades<T> = { [K in keyof T]: K }[keyof T];

// CONTRUTOR DOCUMENTOS
export interface TipoDocumento { 
  cabecalho: 'interface' | 'dados';
  modelo: 'dados' | 'dadosInterface' | 'modelo' | 'modeloInterface' | 'permissao' | 'permissaoInterface';
  nome: 'dados' | 'modelo' | 'permissao';
 }
export type Formata = {
  cabecalho: string;
  modelo(propriedade: any, valor: Required<InterfaceDados>): string;
  objeto(
    propriedade: any,
    valor: Required<InterfaceDados>,
    valorRecursivo: string
  ): string;
  objetoRecursivo(
    propriedade: any,
    valor: Required<InterfaceDados>,
    valorRecursivo: string
  ): string;
  string(propriedade: any, valor: Required<InterfaceDados>): string;
};
