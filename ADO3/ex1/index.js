//const to get our form.
const form = document.getElementById('form');
//adding a event listener when our submit is clicked.
form.addEventListener('submit', handleSubmit);
//a function to handle submit passing a event as parameter.
function handleSubmit (event) {
    //if our event does not get explicitly handled, its default action should not be taken as it normally would be.
    event.preventDefault();
    //getting temp and result inside of our form
    const temp = getInputNumberValue('temp');
    const result = document.getElementById('result');

    //calculate degress
    const farenheit = (temp * (1.8)) + 32;
    //creating a layout with our result
    const layout = `

    <h1>Aqui está o Resultado</h1>
    <p>A temperatura em Farenheit é ${farenheit} </p>

    `;
    result.innerHTML = layout;

}
//adding a function to get a number inside our input and passing an id as parameter and return an id with a value.
function getInputNumberValue(id) {
    return Number(document.getElementById(id).value);
}