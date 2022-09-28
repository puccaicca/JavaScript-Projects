// Pop up of hello world
window.alert("Hello, World!");

// Writes your input onto the page
document.write("Ni Hao. ");

// assigning variable string and color and outputting it
var A = "I'm speaking in chinese. <br>";
var A = A.fontcolor("blue");
document.write(A);

// assign variable with a popup of the string
var X = "I'm so hungry";
window.alert(X);

// output the text
document.write("Lisa told Bart, \"Knock it off, Bart! Or I'll tell dad!\" <br> \"Eat my shorts!\" Bart responded.");

// output the text with concatenating aka putting more than one string together
document.write("<br> \Be who you are and say what you feel,"
+ " because those who mind don\'t matter and those who matter don\'t mind.\""
+ "- Dr. Seuss");

// assign variable and concatenating them + change font color
var B = "<br> Concatenated" + " String";
var B = B.fontcolor("green");
document.write(B);

// assigning multiple variables
var Family = " The Arezzinis", Dad = " Jeremiah", Mom = " Hermione", Daughter = " Penny", Son = " Zorro";
var Dad = Dad.fontcolor("red");
document.write(Dad);

// expressions (written math problems)
document.write(3+3);

// click me button
function My_First_Function() { // Defining a function and naming it
    var str = "This text is green!"; // Defining a variable and giving it a string value
    var result = str.fontcolor("green"); // Using the fontcolor method on str variable
    document.getElementById("Green_Text").innerHTML = result; // putting the value of result into HTML element with "Green_Text" id
}
