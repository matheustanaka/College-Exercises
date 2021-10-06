//querying the selectors
const select = document.querySelector('select');
const input = document.querySelector('input');
const button = document.querySelector('button');

//adding a function on click that will add new options inside of select
button.onclick = function () {
    //the let newCar will receive a input value
    let newCar = input.value;

    //Input value will receive a string
    input.value = '';

    //Creating an option element
    const optionCar = document.createElement('option');

    //OptionCar receive a new Car 
    optionCar.textContent = newCar;
    //Adding new option inside of select
    select.appendChild(optionCar);

}

//Reference: https://www.w3schools.com/jsref/met_node_appendchild.asp