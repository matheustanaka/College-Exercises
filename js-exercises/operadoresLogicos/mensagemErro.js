//Escreva um programa que solicite um número inteiro. Exiba uma mensagem de erro se o número informado estiver entre 15 e 25 ou entre 45 e 50 (inclusive)

const number = Number(prompt("Digite um número inteiro: "));

if(number >= 15 && number <= 25 || number >= 45 && number <= 50) {
  console.log("ERRO FUDEU")
} else {
  console.log("Este número não faz parte do erro")
}