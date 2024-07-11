import readlinesync from "readline-sync";

export function main() {
  let opcao: number;
  while (true) {
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log(" Futurama - as melhores peças de computador de país  ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("            1 - Listar Todos os Produtos             ");
    console.log("            2 - Listar Produto Pelo Id               ");
    console.log("            3 - Cadastrar Produto                    ");
    console.log("            4 - Atualizar Produto                    ");
    console.log("            5 - Deletar Produto                      ");
    console.log("            6 - Sair                                 ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");

    console.log("Entre com a opção desejada: ");
    opcao = readlinesync.questionInt("");

    if (opcao == 6) {
      console.log("\nFuturama  - as melhores peças de computador de país!");
      sobre();
      process.exit(0);
    }

    switch (opcao) {
      case 1:
        console.log("\n\nListar Todos os Produtos:\n\n");
        keyPress();
        break;
      case 2:
        console.log("\n\nListar Produtos Pelo ID:\n\n");
        keyPress();
        break;
      case 3:
        console.log("\n\nCadastar Produto\n\n");
        keyPress();
        break;
      case 4:
        console.log("\n\nAtualizar Produto\n\n");
        keyPress();
        break;
      case 5:
        console.log("\n\nDeletarProduto\n\n");
        keyPress();
        break;
      case 6:
        console.log("\n\nSair\n\n");
        keyPress();
        break;
      default:
        console.log("\nOpção Inválida!\n");
        keyPress();
        break;
    }
  }
}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
  console.log("\n*****************************************************");
  console.log("Projeto Desenvolvido por: 3,14R");
  console.log("Generation Brasil - generation@generation.org");
  console.log("github.com/conteudoGeneration");
  console.log("*****************************************************");
}

function keyPress(): void {
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}

main();
