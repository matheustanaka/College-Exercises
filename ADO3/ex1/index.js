const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit (event) {
    event.preventDefault();

    const temp = getInputNumberValue('temp');
    const result = document.getElementById('result');


    const farenheit = (temp * (1.8)) + 32;

    const layout = `

    <h1>Aqui está o Resultado</h1>
    <p>A temperatura em Farenheit é ${farenheit} </p>

    `;
    result.innerHTML = layout;

}

function getInputNumberValue(id) {
    return Number(document.getElementById(id).value);
}