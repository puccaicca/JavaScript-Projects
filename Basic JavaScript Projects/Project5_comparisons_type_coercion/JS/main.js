document.write(typeof "Word"); // will display that its a type of string

// will show NaN (not a number) if its not a number
function isthatanumber() {
    document.getElementById("yesornoNumber").innerHTML = 0/0;
}

// true is not a number
function yesNumber() {
    document.getElementById("trueNumber").innerHTML = isNaN('This is a string');
}

// false is a number
function noNumber() {
    document.getElementById("falseNumber").innerHTML = isNaN('007');
}

// Infinity (higher than max floating number)
document.write(" ");
document.write(2E310); // E is exponent. the power which number is multplied

// Negative Infinity
document.write(" ");
document.write(-3E310); // E is exponent. the power which number is multplied

// Boolean Logic

    // true
    document.write(" ");
    document.write(10 > 2); // 10 is greater than 2

    // false
    document.write(" ");
    document.write(10 < 2); // 10 is not less than 2

// Console Log method - used developer tools in chrome/inspect element
    //only able to see output in dev tools
console.log(2 +2);

// Type Coericion
    // when the operands and operator are different data types such as string and number
   // it converts the value (and adds together) to the type it chooses
document.write(" ");
document.write("10" + 5);

// Display false in console log using boolean logic challenge

console.log(10 > 100); // 10 is not greater than 100
 
// Double Equal Signs
 // comparison to check whether the data on the left side is equal to the right side

    // true
    document.write(" ");
    document.write(10 == 10);

    // false
    document.write(" ");
    document.write(3 == 11);

// Triple Equal Signs
    // comparison to check whether the data on left side equal to the right and is the same type of data on the right

    // true
        //same data type and value
        X = 10;
        Y = 10;
        document.write(" ");
        document.write(X === Y);

    // false

        // diff data type but same value
        X = 82;
        Y = "82";
        document.write(" ");
        document.write(X === Y);

        //diff data type and diff value
        X = "Sandy";
        Y = 22;
        document.write(" ");
        document.write(X === Y);

        // same data type but diff value
        X = 33;
        Y = 77;
        document.write(" ");
        document.write(X === Y);

// Logical Operators

    // AND Operator
        // checks that both values and variables are true

        // true
        document.write(" ");
        document.write(5 > 2 && 10 > 4);

        // false
        document.write(" ");
        document.write(5 > 10 && 10 > 4);

    // OR Operator
        // checks that either one of them is true 

        // true
        document.write(" ");
        document.write(5 > 10 || 10 > 4);

        // false 
        document.write(" ");
        document.write(5 > 10 || 10 > 20);

    // NOT Operator
        // checks whether or not something is true

        // false
        function not_Function() {
            document.getElementById("Not").innerHTML = !(20 > 10);
        }

        // Double Negative
        function dblNeg_Function() {
            document.getElementById("DoubleNegative").innerHTML = !(5 > 10);
        }


        
