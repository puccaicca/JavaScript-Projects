function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("SubMath").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication() {
    var multiply = 6 * 8;
    document.getElementById("MulMath").innerHTML = "6 x 8 = " + multiply;
}

function division() {
    var divide = 48 / 6;
    document.getElementById("DivMath").innerHTML = "48 / 6 = " + divide;
}

// Multiple Operations

function more_Math() {
    var multiOp = (1+2) * 10 / 2 - 5;
    document.getElementById("MultiOperations").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + multiOp;
}

// Remainder Operator 

function modulus_Operator() {
    var remainder = 25 % 6;
    document.getElementById("RemainderMath").innerHTML = "When you divide 25 by 6 you have a remainder of: " + remainder;
}

// Unary Operator - aka the opposite or negative form of something

function negation_Operator() {
    var x = 10;
    document.getElementById("UnaryOperator").innerHTML = -x;
}

// Increment Operator

var I = 5;
I++;
document.write("Increment ");
document.write(I);

//  Decrement Operator 

var D = 5.25;
D--;
document.write(" Decrement ");
document.write(D);

// Random Number Operator

window.alert(Math.random());
window.alert(Math.random() * 100);

function randomNumba() {
    var random = Math.random();
    document.getElementById("RandomNumber").innerHTML = "Shows a random generated number = "  + random;
}

// Square root operator

document.write(" The square root of 64 is ")
document.write(Math.sqrt(64));
