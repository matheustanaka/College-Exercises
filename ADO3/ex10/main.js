//Creating two people objetcs with your respective attributes.
const carro = new Object ();
    carro.descriçao = "Gol Quadrado";
    carro.tamanho = "3.790 metros";
    carro.peso = "950 kgs";
    carro.velocidade = "170 km/h";
    carro.capacidade = "5 pessoas";
    carro.rodas = 4;

//function to transform our objects in JSON strings.
function readCar() {
    console.log(JSON.stringify(carro))
}

function setNewAttributes () {
    //Adding new Attributes
    carro.propulsao = "motor";
    carro.origem = {
        "pais": "Brasil",
        "ano": 1994
    }   
}