//Soliciete que o usuario digite um numero e informe então se este número é impar ou par

const userAsk = Number(prompt("Digite um número: "));

if (userAsk % 2 == 0) {
  console.log(userAsk + " Par");
} else {
  console.log(userAsk + " Impar");
}
