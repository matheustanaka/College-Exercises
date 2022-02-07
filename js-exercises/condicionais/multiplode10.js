//Verifique se o número é multiplo de 10

//função: m = n.k

const resultado = (multiplo, numero) => {
  numero = 10;
  multiplo = Number(prompt("Digite um número: "));
  if (multiplo % numero == 0) {
    console.log("Este número é múltiplo de 10");
  } else {
    console.log("este numero NÃO é multiplo de 10");
  }
};

resultado();
