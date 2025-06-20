/*

#7DaysOfCode - Lógica JS 1/7: Operações Booleanas

Modificações feitas por Gabriel Lima Dantas, para o desafio. 

*/

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (numeroUm == stringUm && typeof numeroUm != typeof stringUm) { // Criação de uma condição para verificar se as variáveis tem o mesmo valor,
                                                                  // mas seus tipos são diferentes. 
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (numeroTrinta == stringTrinta && typeof numeroTrinta == typeof stringTrinta) { // Criação de uma condição para verificar se as variáveis tem o mesmo valor,
                                                                                  // mas seus tipos são iguais. 
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (numeroDez == stringDez && typeof numeroDez != typeof stringDez) { // Criação de uma condição para verificar se as variáveis tem o mesmo valor,
                                                                      // mas seus tipos são diferentes. 
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}