/*

#7DaysOfCode - Lógica JS 5/7: Arrays e coleções

Modificações feitas por Gabriel Lima Dantas, para o desafio.

Atualmente, em 25/06/2025, estou cursando estrutura de dados. Ao ler o problema, pensei na solução pensada usando lista encadeada no mesmo instante.

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
      return;
    } else {
        // Encadeia e atualiza fim
        cabeca.fim.proxNo = novoNo;
        cabeca.fim = novoNo;
       return;
    }
}

function exibeLista() {
    let atual = cabeca.inicio;
    while (atual != null) {
        alert(`Lista de compras:\nProduto: ${atual.nome} - Seção: ${atual.secao}`);
        atual = atual.proxNo;
    }
  return;
}

function excluiItem() {
    let nomeRemover = prompt("Qual o nome do produto a remover?");
    
    if (cabeca.inicio === null) {
        alert("Lista vazia, insira algo antes de excluir!");
        return;
    }

    let atual = cabeca.inicio;
    let anterior = null;

    while (atual !== null) {
        if (atual.nome === nomeRemover) {
            // Se for o primeiro nó
            if (anterior === null) {
                cabeca.inicio = atual.proxNo;
                // Se era o único nó, atualiza o fim também
                if (cabeca.inicio === null) {
                    cabeca.fim = null;
                }
            } else {
                anterior.proxNo = atual.proxNo;
                // Se for o último nó
                if (atual === cabeca.fim) {
                    cabeca.fim = anterior;
                }
            }
            alert(`Produto "${nomeRemover}" removido com sucesso!`);
            return;
        }
        anterior = atual;
        atual = atual.proxNo;
    }

    alert(`Produto "${nomeRemover}" não encontrado na lista.`);
}


do {
  
  op = prompt("\nSelecione uma das opções da lista\n1 - Inserir alimento na lista;\n2 - Exibir lista\n3 - Remover item da lista;\nFechar programa.");
  
  switch (op){
    case "1":
      insereLista();
    break;
    case "2":
      exibeLista();
    break;
    case "3":
      excluiItem();
      break;
    case "0":
      op = 0;
    break;  
  }

} while (op != 0);