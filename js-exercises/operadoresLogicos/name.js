//Crie um programa que pergunte um numero para o usuario e exiba uma mensagem caso o nome seja cicero, praticio ou heitor.

const name = String(prompt("Digite um nome: "));

if(name === "cicero" || name === "patricio" || name === "heitor") {
  console.log(name);
}