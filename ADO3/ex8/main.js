//Creating our variable and transform in object
const listMarket = new Object();

listMarket.código = 1125;
listMarket.descrição = "Frutas Vermelhas";
listMarket.peso = "500g";
listMarket.valor = "R$ 15,00";
listMarket.validade = "02/10/2021";

function ReadJSON() {
    //creating a json string with our console.
    console.log(JSON.stringify(listMarket));
}
