import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {
  private produtos: Array<Produto> = new Array<Produto>();

  public id: number = 0;
  public numero: number = 0;

  listarProdutos(): void {
    for (let produto of this.produtos) {
      produto.visualizar();
    }
  }
  listarProdutoPeloId(id: number): void {
    let buscaProduto = this.buscarNoArray(id);
    if (buscaProduto !== null) {
      buscaProduto.visualizar();
    } else {
      console.log("Produto não encontrado!");
    }
  }
  cadastrarProduto(produto: Produto): void {
    this.produtos.push(produto);
    console.log("\nO Produto foi cadastrada com sucesso!");
  }
  atualizarProduto(produto: Produto): void {
    let buscarConta = this.buscarNoArray(produto.id);

    if (buscarConta !== null) {
      buscarConta.nome = produto.nome;
      buscarConta.numeroID = produto.numeroID;
      console.log("\nConta atualizada com sucesso!");
    } else {
      console.log("\nConta não encontrada!");
    }
  }

  deletarProduto(id: number): void {
    let buscarConta = this.buscarNoArray(id);

    if (buscarConta !== null) {
      this.produtos.splice(this.produtos.indexOf(buscarConta));
      console.log("\nConta excluída!");
    } else {
      console.log("\nConta não encontrada!");
    }
  }

  public gerarId(): number {
    return ++this.id;
  }
  public gerarNumero(): number {
    return ++this.numero;
  }

  public buscarNoArray(id: number): Produto | null {
    for (let produto of this.produtos) {
      if (produto.id === id) return produto;
    }

    return null;
  }
}
