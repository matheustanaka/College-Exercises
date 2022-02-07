//Escreva um programa que pede dois inteiros e imprime o quociente e o resto da divisão desses inteiros

const num1 = Number(prompt("Digite um número: "));

const num2 = Number(prompt("Digite um número: "));

const quociente = num1/num2;
const resto = num1%num2;

console.log("Quociente: " + quociente);
console.log("Resto: "+ resto);