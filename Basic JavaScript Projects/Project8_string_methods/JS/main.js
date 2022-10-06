// concat() Method
// connects 2 or more strings
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

// slice() Method
// string method that extracts a section of a string and then returns 
// the extracted section in a new string.

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33); // numbers indicate which charcters in the string to be cut out and displayed
    document.getElementById("Slice").innerHTML = Section; // will display Johnny
}

// toUpperCase() method 
// converts a string to uppercase letters

function upCase_Method() {
    var Sentence = "how are you doing today?";
    var Section = Sentence.toUpperCase();
    document.getElementById("Capitalize").innerHTML = Section;
}

// search() Method
// searches a string for a value and returns the position of the first match
// it's case sensitive

function search_Method() {
    var Sentence = "I own an orange sweater and my favorite color is orange";
    var Section = Sentence.search("orange");
    document.getElementById("Search").innerHTML = Section;
}

// Number Methods / toString() method
// assist you in working with numbers. 
// returns number as a string type

function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

// toPrecision Method
// formats a number to a specified length

function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

// toFixed() method
// converts a number to a string, rounded to a specified number of decimals

function fixed_Method() {
    var X = 9.94899;
    document.getElementById("Fixed").innerHTML = X.toFixed(1);
}

// valueOf() method
// returns the primitive value of a string
// does not change the original string 
// can be used to convert a string object into a string

function valueOf_method() {
    var X = "9939834";
    document.getElementById("ValueOf").innerHTML = X.valueOf();
}