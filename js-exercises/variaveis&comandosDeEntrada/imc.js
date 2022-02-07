//Um programa que solicite valores de peso e altura para uma pessoa e calcule o seu IMC

const peso = Number(prompt("digite o seu peso: "));

const altura = Number(prompt("digite sua altura: "));

const imc = peso / (altura*altura);

console.log(imc)