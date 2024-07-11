export abstract class Produto {
  private _numeroSerie: number;
  private _nome: string;

  constructor(numeroSerie: number, nome: string) {
    this._numeroSerie = numeroSerie;
    this._nome = nome;
  }

  public get numeroSerie(): number {
    return this._numeroSerie;
  }

  public get nome(): string {
    return this._nome;
  }

  public set numeroSerie(value: number) {
    this._numeroSerie = value;
  }

  public set nome(value: string) {
    this._nome = value;
  }

  public visualizar(): void {
    console.log("*****************************************************");
    console.log("Informações do Produto:");
    console.log("*****************************************************");
    console.log(`Número de Série: ${this._numeroSerie}`);
    console.log(`Nome: ${this._nome}`);
  }
}
