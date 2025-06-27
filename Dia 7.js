/*

#7DaysOfCode - Lógica JS 5/7: Arrays e coleções

Modificações feitas por Gabriel Lima Dantas, para o desafio.

*/

const soma = (x, y) => `${x} + ${y} = ${x + y}`;

const subtracao = (x, y) => `${x} - ${y} = ${x - y}`;

const multiplicacao = (x, y) => `${x} * ${y} = ${x * y}`;

const divisao = (x, y) => {
  if (y == 0) return "Divisão por zero, erro!!";
  else return `${x} / ${y} = ${x / y}`;
};

let op;
let i = 0;
let j = 0;

do {
  op = prompt("\nSelecione uma das operações da lista\n1 - Soma;\n2 - Subtração\n3 - Multiplicação;\n4 - Divisão;\n0 - Fechar programa.");

  switch (op) {
    case "1":
      i = parseFloat(prompt("Digite o primeiro valor:"));
      j = parseFloat(prompt("Digite o segundo valor:"));
      alert(soma(i, j));
      break;
    case "2":
      i = parseFloat(prompt("Digite o primeiro valor:"));
      j = parseFloat(prompt("Digite o segundo valor:"));
      alert(subtracao(i, j));
      break;
    case "3":
      i = parseFloat(prompt("Digite o primeiro valor:"));
      j = parseFloat(prompt("Digite o segundo valor:"));
      alert(multiplicacao(i, j));
      break;
    case "4":
      i = parseFloat(prompt("Digite o primeiro valor:"));
      j = parseFloat(prompt("Digite o segundo valor:"));
      alert(divisao(i, j));
      break;
    case "0":
      alert("Até a próxima!");
      op = 0;
      break;
  }
} while (op != 0);