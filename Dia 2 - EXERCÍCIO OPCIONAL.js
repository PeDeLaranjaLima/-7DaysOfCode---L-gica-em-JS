/*

#7DaysOfCode - Lógica JS 2/7: Variáveis - EXERCÍCIO OPCIONAL

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

// Apresentação do resultado em um alerta
alert(mens)

/********************** Desefio extra **********************/

// Declaração da variável e recepção da resposta
const pergunta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`)

// Verificação do valor de pergunta e apresentação do resultado da verificação em uma alerta
if (pergunta == 1)
    alert("Muito bom! Continue estudando e você terá muito sucesso.")
else
    alert("Ahh que pena... Já tentou aprender outras linguagens?")