/*

#7DaysOfCode - Lógica JS 3/7: Fluxo de decisão

Modificações feitas por Gabriel Lima Dantas, para o desafio.

*/

// Variáveis para armazenar os resultados em difernetes escopos
let op = 1;
let a;
let linguagem;

do {
  
const area = prompt("Qual área deseja seguir? Digite 1 - Front-End ou 2 - Back-End)")

if (area == 1) {
  
  a = "Front-End"
  
  const l= prompt("Qual linguagem quer aprender? Digite 1 - React ou 2 - Vue")
  
    if (l ==  1)
      linguagem = "React"
    else 
      linguagem = "Vue"
  
  op = 0
}
else if (area == 2) {
  
  a = "Back-End"
  
  linguagem = prompt("Qual linguagem quer aprender? Digite 1 - C# ou 2 - Java")
  
    if (l ==  1)
      linguagem = "C#"
    else 
      linguagem = "Java"
  
  op = 0
}
else
  
  prompt("Digite uma opção válida!")
  
} while (op != 0);

const especializacao = prompt("Deseja continuar se especializando na área ou se tornar desenvolvedor fullstack? Digite 1 - Área ou 2 - Fullstack")

if (especializacao == 1)
  alert(`Parabéns, continue seus estudos na área de ${a}! Fez uma ótima escolha preferindo a linguagem ${linguagem}.`)
if (especializacao == 2)
  alert("Ótima escolha, desejo um caminho longo e frutuoso na carreira fullstack!")

// Declaração do vetor para armazenar todas as tecnologias que o usuário desejar informar.
var tecnologias = [];

do {
  tecn = prompt("Tem mais alguma tecnologia que você gostaria de aprender?");
  tecnologias.push(tecn);
} while (tecn != null && ""); // Enquanto o uruário apertar em ok e digitar algo, serão registradas suas respostas.

alert(`Que legal que você quer aprender as tecnologias ${tecnologias}.`)