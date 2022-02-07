//Escrever um algoritmo que leia dois valores inteiros distintos e informe qual deles é o maior.

const num1 = Number(prompt("Digite um número: "));

const num2 = Number(prompt("Digite um número: "));

if (num1 > num2) {
  console.log("O " + num1 + " é maior que " + num2);
} else {
  console.log("O " + num2 + " é maior que " + num1);
}
