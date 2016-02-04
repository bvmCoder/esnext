// Variable Hoisting:
// var and let are different

// compiler automatically hoist your vairables
// compiler reformats your code

var a = undefined; // compiler hoisted this
var b = undefined; // compiler hoisted this
function outer() {
    a = 0;
    inner();

    function inner() {
        b = 2;
    }
}

outer();


Pre - ES6 variables are
function scoped
Function Hoisting
// Function declaration
function foo() {

}

// Function Expression
var bar = function bar() {

}
