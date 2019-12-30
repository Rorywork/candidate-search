const title = document.getElementById(`title`); // div from HTML 
const headline = `CANDIDATE SEARCH`.split(``); // every character of your text stored in array

headline.forEach((char, index) => {

    const node = document.createElement(`span`); // create new span element                
    const textnode = document.createTextNode(char); // create character as text node for span element

    node.appendChild(textnode); // add text to span


    node.style.color = index % 2 === 0 ? `white` : `darkred`; // change color
    node.style.fontWeight = index % 2 !== 0 ? 500 : 1; // change font weight

    title.appendChild(node); // add span (character) to the div element in HTML
});