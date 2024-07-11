import { Produto } from "./Produto";

export class ProdutoHardware extends Produto {
  private _marca: string;

  constructor(numeroID: number, nome: string, id: number, marca: string) {
    super(numeroID, nome, id);
    this._marca = marca;
  }

  public get marca(): string {
    return this._marca;
  }

  public set marca(value: string) {
    this._marca = value;
  }
}
