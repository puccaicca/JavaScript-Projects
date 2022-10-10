// Excute a while Loop
// This counts 1 to 10

function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

// Challenge 13
// String length property

function strLength() {
    var sentence = "Lilian";
    var section = sentence.length;
    document.getElementById("Length").innerHTML = section;
}

// For Loop
// Will list the instruments

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Array and Objects

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + 
        Cat_Picture[3] + ".";
}

// Constant Function

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$700";
    Musical_Instrument.material = "wood";
    document.getElementById("Constant").innerHTML = "The cost of the " + 
        Musical_Instrument.material + " " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

// Let Keyword
// declares variables that can have a block scope - refers to blocks of code
// contained in curly brackets - commonly loops
// cannot be accessed outside the block

var X = 82;
console.log(X);
{
    let X = 33;
    console.log(X);
}
console.log(X);


// Challenge 14
// return statement

function myFunction() {
    return Math.PI;
}
document.getElementById("Return").innerHTML = myFunction();

// Assignment 55
// Create an object using the let keyword

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

// Challenge 15

// Break statment with a loop

let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("Break").innerHTML = text;

// Continue statement with a loop
// will skip the step where i = 3

let text2 = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text2 += "The number is " + i + "<br>";
}
document.getElementById("Continue").innerHTML = text2;