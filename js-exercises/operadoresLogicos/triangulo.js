//Escrever um algoritmo que leia através de valores inteiros e verifique se eles podem ser as medias dos lados de um trinagulo
//Propriedade: o comprimento de cada lado de um trinagulo é menor do que a soma dos comprimentos dos outros dois lados.

const num1 = Number(prompt("Digite um valor: "));
const num2 = Number(prompt("Digite um valor: "));
const num3 = Number(prompt("Digite um valor: "));

if(num1 + num2 > num3 || num2 + num3 > num1 || num1 + num3 > num2) {
  console.log("é um trinangulo")
}
