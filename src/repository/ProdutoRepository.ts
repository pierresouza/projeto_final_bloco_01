import { Produto } from "../model/Produto";

export interface ProdutoRepository {
  listarProdutoPeloId(id: number): void;
  listarProdutos(): void;
  cadastrarProduto(produto: Produto): void;
  atualizarProduto(produto: Produto): void;
  deletarProduto(id: number): void;
}
