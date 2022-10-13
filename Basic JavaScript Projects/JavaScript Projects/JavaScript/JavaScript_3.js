// HTML Data Attributes
// will output a clickable list that states which universe the 
// character exists in

function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is in the " + character.innerHTML + " universe!");
}