const text = document.getElementById('text');
const output = document.getElementById('output');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

btn1.onclick = function() {
    let newParagraph = text.value;

    text.value = '';

    const paragraph = document.createElement('p');

    paragraph.textContent = newParagraph;

    output.appendChild(paragraph);

}

btn2.onclick = function () {
    let newHeader = text.value;

    text.value = '';

    const header = document.createElement('h1');

    header.textContent = newHeader;

    output.appendChild(header);
}
