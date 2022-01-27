//Escreva um programa que pede duas dimensões de um retangulo e imprime o perimetro e a área desse retangulo.

const base = Number(prompt("Digite o valor da base do retangulo"));

const altura = Number(prompt("Digite o valor da altura do retangulo"));

const area = base*altura;

const perimetro = 2 * (base + altura);

console.log("Area:" + area + " Perimetro: " + perimetro);