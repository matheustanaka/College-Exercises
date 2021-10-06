function setNewParagraph() {

    //get element p 
    const paragraph = document.getElementById('content');
    //cloning the paragraph
    const clone = paragraph.cloneNode(true);
    
    //append the paragraph
    document.getElementById('content').appendChild(clone);
}

//Reference: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_clonenode