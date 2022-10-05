// Tenary Operators - made up of 3 parts
// Operates on 3 values. It can be used to assign a value to a variable
// based on a condition. Also referred as a conditional operator

function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// Challenge 8
// If user is old enough to vote

function voteAge_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to" : "You can";
    document.getElementById("Vote").innerHTML = Can_vote + " vote.";

}

// Object Oriented Programming
// a constructor is a special part of a class (a template for defining an object [item with state and behaviour])
// Keywords
// "new" , used to create new objects
// "this" , indicates the object that is the owner of the code.
// when used within an object, the value of 'this' is the object.
// when used within a function, that value of 'this' is the object that posseses the function.

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinoto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}
function newFunction() {
    document.getElementById("New_and_This").innerHTML = 
    "Jack drives a " + Jack.Vehicle_Color + "-colored " + Jack.Vehicle_Model +
    " manufactured in " + Jack.Vehicle_Year;
}

// Challenge 9 
// assign a variable a reserved word
// write an object constructor function

// constructor function for person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Create person object
var Karen = new Person("Karen", "Tan", 28, "Brown");

// Display age
function ageFunction() {
document.getElementById("age").innerHTML =
"My sister, " + Karen.firstName + " , is "  + Karen.age + ".";
}


// Nested Functions
// a function under another function that is connected somehow

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

