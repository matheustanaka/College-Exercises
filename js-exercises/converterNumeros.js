//Escreva um programa que pede para o usuario digitar um inteiro e imprime o inverso desse interio. 


const inteiro = Number(prompt("digite um inteiro:"))

if(inteiro > 0) {
  return console.log(inteiro * (-1));
}
else if(inteiro < 0) {
  return console.log(inteiro - inteiro * 2);
}