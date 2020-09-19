"use strict";

alert("JavaScript here.");

// declaring variables (can do multiple at once, like below):
let user = 'John', age = 25, message = 'Hello';

// but multiline is easier to read:
let user1 = 'John';
let age1 = 25;
let message1 = 'Hello';

// can use $ and _ in variable names:
let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"
alert($ + _); // 3

// incorrect names:
  /*
  let 1a; // cannot start with a digit
  let my-name; // hyphens '-' aren't allowed in the name
*/

// non-Latin characters are allowed, but not recommended:
/* let имя = '...';
let 我 = '...';
actually it didn't run on Chrome when I tried it*/

// constants (can't be reassigned):
const myBirthday = '24.03.2001';
// capital-named constants are only used as aliases for “hard-coded” values
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// JavaScript is dynamically typed; variables aren't bound to data types
// no error
let message2 = "hello";
message2 = 123456;


// in backticks (not in other quotations) expression inside ${…} is evaluated and the result becomes a part of the string
let name = "John"
alert( `Hello, ${name}!` ); // Hello, John!
// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3

/* Normally, one uses null to assign an “empty” or “unknown” value to a variable,
while undefined is reserved as a default initial value for unassigned things. */

// The call to typeof x returns a string with the type name:
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
/* The result of typeof null is "object". That’s an officially recognized error in typeof behavior,
coming from the early days of JavaScript and kept for compatibility. Definitely, null is not an object.
It is a special value with a separate type of its own. */
typeof alert // "function"  (3)

// prompt(title, [default]);
let age2 = prompt('How old are you?', 100);
alert(`You are ${age2} years old!`); // You are 100 years old!


// break/continue; labels
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, '');
    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)
    // do something with the value...
  }
}
alert('Done!');
/* In the code above, break outer looks upwards for the label named outer and breaks out of that loop.
So the control goes straight from (*) to alert('Done!'). */

// The continue directive can also be used with a label. In this case, code execution jumps to the next iteration of the labeled loop.


// switch/case
let a = 2 + 2;
switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}
// If there is no break then the execution continues with the next case without any checks.

// Grouping of "case":
let b = 3;

switch (b) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;
/* Now both 3 and 5 show the same message.
The ability to “group” cases is a side-effect of how switch/case works without break.
Here the execution of case 3 starts from the line (*) and goes through case 5, because there’s no break. */

  default:
    alert('The result is strange. Really.');
}


// function declarations
function sayHiD() {
  alert( "Hello" );
}
// available everywhere, even before this segment of code
/* but in strict mode, when a Function Declaration is within a code block,
it’s visible everywhere inside that block. But not outside of it. */

// function expressions
let sayHiE = function() {
  alert( "Hello" );
};
// only available after it's been declared


// arrow functions: let func = (arg1, arg2, ...argN) => expression
/* is shorter ver of:
    let func = function(arg1, arg2, ...argN) {
      return expression;
}; */
let sum = (a, b) => a + b;
// If we have only one argument, then parentheses around parameters can be omitted:
let double = n => n * 2;
// If there are no arguments, parentheses will be empty (but they should be present):
let sayHi = () => alert("Hello!");

// multiline arrow functions:
let addTwoThings = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};


