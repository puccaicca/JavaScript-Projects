// Scope - the functions, variables, and objects you have access to.
// Scope can be limited. Can be either accessed by one, more than one,
// or all functions in a program. 
// Scope can either be local or global.
// global variable can be accessed from any function within the program, 
// local variable only accessed by the function it is assigned to.

// GLOBAL VARIABLE
var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();

// LOCAL VARIABLE 
function Add_numbers_1v() {
    var Y = 10;
    document.write(20 + Y + "<br>");
    console.log(15 + Y);
}
function Add_numbers_2v() { // this one doesn't show up because var Y is only defined in add_numbers_1v and not in add_numbers_2v
    document.write(Y + 100 + "<br>");
    console.log(Y + 100); // undefined in console log, helps figure out why it didn't work
}
Add_numbers_1v(); 
Add_numbers_2v();

// IF and ELSE STATEMENTS - to be executed if the condition is true

function get_Date() { // if executed before 6pm it'll say the if statement 
    if (new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
    }
    else { // after 6pm this will show
    document.getElementById("Greeting").innerHTML = "Goodnight";
    }
}

function my_If() {
    if (1 < 2) {
        document.getElementById("myIf_function").innerHTML = "1 is less than 2";
    }
    else {
        document.getElementById("myIf_function").innerHTML = "No";
    }
}

