//Creating two people objetcs with your respective attributes.
const people1 = new Object ();
    people1.name = "Matheus";
    people1.age = 19;
    people1.height = 185;
    people1.weight = 70 + "kgs",
    people1.sex = "masculine"
    
const people2 = new Object();
    people2.name = "Jorge";
    people2.age = 50;
    people2.height = 175 + "cm";
    people2.weight = 80 + "kgs";
    people2.sex = "masculine";
//function to set a CPF based in your age.
function setCPF () {
    if(people1.age && people2.age >= 18 ) {
        people1.cpf = 1112923001
        people2.cpf = 1152467891

    }
}
//function to transform our objects in JSON strings.
function readPeople() {
    console.log(JSON.stringify(people1))
    console.log(JSON.stringify(people2))
}