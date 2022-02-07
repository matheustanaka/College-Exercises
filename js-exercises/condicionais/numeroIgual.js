//Escrever um algoritmo que leia dois valores inteiros distintos e informe qual deles é o maior.
//Altere este exercicio de forma que ele veja se os numeros sao iguais

const num1 = Number(prompt("Digite um número: "));

const num2 = Number(prompt("Digite um número: "));

if (num1 == num2) {
  console.log("O " + num1 + " é igual ao " + num2);
} else {
  console.log("O " + num1 + " NÃO é igual ao " + num2);
}
