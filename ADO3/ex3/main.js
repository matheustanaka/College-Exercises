const select = document.querySelector('select');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = function () {
    let newCar = input.value;

    input.value = '';

    const optionCar = document.createElement('option')
    const listText = document.createElement('span')

    optionCar.appendChild(listText);
    optionCar.textContent = newCar;
    select.appendChild(optionCar);

    input.focus();
}