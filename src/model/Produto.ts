export abstract class Produto {
  private _numeroID: number;
  private _nome: string;
  private _id: number;

  constructor(numeroID: number, nome: string, id: number) {
    this._numeroID = numeroID;
    this._nome = nome;
    this._id = id;
  }

  public get numeroID(): number {
    return this._numeroID;
  }

  public get nome(): string {
    return this._nome;
  }

  public get id(): number {
    return this._id;
  }

  public set numeroID(value: number) {
    this._numeroID = value;
  }

  public set nome(value: string) {
    this._nome = value;
  }

  public set id(value: number) {
    this._id = value;
  }

  public visualizar(): void {
    console.log("*****************************************************");
    console.log("Informações do Produto:");
    console.log("*****************************************************");
    console.log(`Número de Série: ${this._numeroID}`);
    console.log(`Nome: ${this._nome}`);
  }
}
