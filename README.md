


#### 1) What is the difference between var, let, and const?

answer: var can be accessed outside of loops or conditional blocks, which can lead to unintended behavior and bugs

1. var

Scope: Function-scoped (or globally scoped if declared outside a function).

Hoisting: Variables are hoisted and initialized with undefined.

Re-declaration: Can be re-declared and updated.


let and const are limited to the block 
let

Scope: Block-scoped (limited to {} where declared).

Hoisting: Variables are hoisted but not initialized (Temporal Dead Zone).

Re-declaration: Cannot be re-declared in the same scope, but can be updated

const variable can not be changed or reassigned.
const

Scope: Block-scoped.

Hoisting: Same as let.

Re-declaration / Update: Cannot be re-declared or reassigned.

Note: For objects/arrays, the reference cannot change, but the content can be modified.











#### 2) What is the difference between map(), forEach(), and filter()? 


✔ Transforms each element & returns a NEW array

map() is used when you want to transform or modify each element in an array and get a new array of the same size.

Example:
const numbers = [1, 2, 3];

const doubled = numbers.map(n => n * 2);

console.log(doubled);   // [2, 4, 6]


✔ Returns a NEW array
✔ Does not change the original array



✔ Loops through array but returns NOTHING

forEach() is used when you want to perform an action, not create a new array.

Example:
const numbers = [1, 2, 3];

numbers.forEach(n => console.log(n * 2));


✔ Does NOT return anything (returns undefined)
✔ Cannot chain after forEach()
✔ Often used for logging, updating UI, pushing to another array manually


 filter()
✔ Returns a NEW array with elements that pass a condition

filter() is used when you want to remove items or keep only certain items based on a condition.

Example:
const numbers = [1, 2, 3, 4];

const even = numbers.filter(n => n % 2 === 0);

console.log(even);  // [2, 4]


✔ Returns a NEW array
✔ Only keeps items where condition is true















#### 3) What are arrow functions in ES6?

Regular function:
function greet(name) {
  return "Hello " + name;
}


Arrow function:
const greet = name => `Hello ${name}`;













#### 4) How does destructuring assignment work in ES6?


ES6 destructuring assignment lets you extract values from arrays or objects and assign them to variables in a clean, compact way.

2. Object Destructuring
✔ Basic example
const user = {
  name: "Syed",
  age: 25,
  country: "USA"
};

const { name, age } = user;

console.log(name); // Syed
console.log(age);  // 25


Matching is by key, not order.










#### 5) Explain template literals in ES6. How are they different from string concatenation?


Template literals are strings wrapped in backticks:

``This is a template literal``


string concatenation:


let name = "Sam";
let msg = "Hello " + name + ", welcome!";


lemplate literal way:


let name = "Sam";
let msg = `Hello ${name}, welcome!`;



Template literals are better because:

They are more readable

Allow multi-line strings

Support embedded variables easily

Are ideal for DOM manipulation (creating HTML strings)

Reduce bugs due to messy concatenation
