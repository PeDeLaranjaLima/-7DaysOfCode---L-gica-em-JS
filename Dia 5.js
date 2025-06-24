/*

#7DaysOfCode - Lógica JS 5/7: Arrays e coleções

Modificações feitas por Gabriel Lima Dantas, para o desafio.

Atualmente, em 24/06/2025, estou cursando estrutura de dados. Ao ler o problema, pensei na solução pensada usando lista encadeada no mesmo instante.

*/

let cabeca = {
    inicio: null,  // aponta para o primeiro nó da lista
    fim: null      // aponta para o último nó da lista
};

function insereLista() {
    let novoNo = {
        nome: prompt("Qual o nome do produto?"),
        secao: prompt("Qual a seção do produto?"),
        proxNo: null
    };

    if (cabeca.inicio === null) {
        // Lista vazia
        cabeca.inicio = novoNo;
        cabeca.fim = novoNo;
    } else {
        // Encadeia e atualiza fim
        cabeca.fim.proxNo = novoNo;
        cabeca.fim = novoNo;
    }
}

function exibeLista() {
    let atual = cabeca.inicio;
    while (atual != null) {
        alert(`Lista de compras:\nProduto: ${atual.nome} - Seção: ${atual.secao}`);
        atual = atual.proxNo;
    }
}

do {
  
  op = prompt("\nSelecione uma das opções da lista\n1 - Inserir alimento na lista;\n2 - Exibir lista\nFechar programa.");
  
  switch (op){
    case "1":
      insereLista();
    break;
    case "2":
      exibeLista();
    break;
    case "0":
      op = 0;
    break;  
  }

} while (op != 0);