/*

#7DaysOfCode - Lógica JS 4/7: Mais loops e randomização

Modificações feitas por Gabriel Lima Dantas, para o desafio.

*/

let tentativas = 2; // Variáveis para armazenar o número de tentativas restantes
const num = Math.floor(Math.random() * (10 - 0 + 1) + 0); // variável para armazenar o número aleatório a ser advinhado

do {
  
  const palpite = prompt("Qual seu chute?");
  
  if (palpite == num){
    alert(`Parabéns! Você acertou, seu palpite foi ${palpite} e acertou que o número secreto era ${num}.`)
    tentativa = 0;
  } else {
    alert("Você errou, tente novamente.");
    tentativas--;
  }
} while (tentativas > 0);

alert(`Você perdeu, infelizmente suas chances acabaram. O número correto é ${num}, boa sorte na próxima.`)