// assign 2 variables to change text and font on button
function My_First_Function() {
    var str = "This text is green";
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result;
}

// += operator to concatenate a string
function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}