//Getting the elements inside of HTML
const text = document.getElementById('text');
const output = document.getElementById('output');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');


//When you click in btn1, the function will return a paragraph inside of div 2.
btn1.onclick = function() {
    //new paragraph that receives a value.
    let newParagraph = text.value;
    //string value.
    text.value = '';
    //the const paragraph will create a new Paragraph
    const paragraph = document.createElement('p');

    //the text content inside of paragraph will receive a new paragraph.
    paragraph.textContent = newParagraph;

    //the div 2 also called as output will return our paragraph with new content.
    output.appendChild(paragraph);

}

//Here will do the same thing above but the function will return a header.
btn2.onclick = function () {
    //new header will receive a value, the text is our input.
    let newHeader = text.value;
    //the input receive a string.
    text.value = '';
    //header will create a h1.
    const header = document.createElement('h1');
    //the text content of our header will receive a new header.
    header.textContent = newHeader;
    //adding our header inside of our output, also called as the second div.
    output.appendChild(header);
}
