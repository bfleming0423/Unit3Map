//Beau Fleming


// Write a program that takes a single name at a time as user input and stores it in an array.

// Using a map go through the array and return an array with each word capitalized.

// Print out the original array and resulting array.


var names = [];

//called onclick of submit button to add an individual entry to names array from the text box
function getValue() {
    names.push(document.getElementById('userInput').value);
    document.getElementById('listNamesNew').innerHTML = names.join(' , ');
    return names;
};

// called on click form the done button to create new array with map() that capitalizes all indexes
function capNames() {
    var namesCap = names.map(name => name.toUpperCase());
    document.getElementById('h3_2').innerHTML = 'Names Capitalized';
    document.getElementById('namesCapitalized').innerHTML = namesCap.join(' , ');
};