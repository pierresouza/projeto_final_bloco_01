import { Produto } from "./Produto";

export class ProdutoHardware extends Produto {
  private _marca: string;

  constructor(nome: string, numeroSerie: number, marca: string) {
    super(numeroSerie, nome);
    this._marca = marca;
  }

  public get marca(): string {
    return this._marca;
  }

  public set marca(value: string) {
    this._marca = value;
  }
}
