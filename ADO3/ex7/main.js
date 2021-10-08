//getting our selector input.
const input = document.querySelector('input');
//defining our vowels to calculte with our function.
const vowel = ['a', 'e', 'i', 'o', 'u'];

//function with the text parameter
function vowels (text) {
    //text receives input as a string.
    text = input.value;
    input.value = '';
    //variable to calculate our vowels inside uor loop.
    let count = 0;
    //if there isnt nothing inside of our input,
    if(text != '') {
        //will loop the text length and
        for(let i = 0; i < text.length; i++) {
            //check if includes vowels inside and count them
            if(vowel.includes(text[i])) {
                count++;
            }
        }
        //alert the number of volwes
        alert('o número de vogais é: ' + count);
        console.log('o número de vogais é: ' + count);
    }
    else {
        //alert that's no possible calculate 
        alert('não é possível calcular as vogais com nenhuma frase');
    }
}