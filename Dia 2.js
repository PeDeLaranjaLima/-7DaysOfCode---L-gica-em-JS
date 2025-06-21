/*

#7DaysOfCode - Lógica JS 2/7: Variáveis

Modificações feitas por Gabriel Lima Dantas, para o desafio. 

*/

// Declaração da função para retornar a menagem
const mensagem = (n, i, l) => `Olá ${n}, você tem ${i} anos e já está aprendendo ${l}!`

// Declaração das variáveis e recepção dos seus valores
const nome = prompt("Qual o seu nome?")
const idade = prompt("Quantos anos você tem?")
const linguagem = prompt("Qual linguagem de programação você está estudando?")

// Aplicação da função
const mens = mensagem(nome, idade, linguagem)

//  Apresentação do resultado em um alerta
alert(mens)