/*
-The spread operator essentially pulls out all elements of an array and gives them to you as a standalone list of elements
-denoted by ...
*/
​
const fullName = ["Donovan", "Triplett"];
// const elements = ...fullName;
// const elements = "Donovan", "Triplett"
​
const copiedFullName = [...fullName];
console.log(copiedFullName);
​
const prices = [10.99, 5.99, 3.99, 6.59];
console.log(Math.min(...prices));
​
// const persons = [{name: "Donovan", age: 25}, {name: "Zach", age: 27}];
// const copiedPersons = [...persons];
​
// persons.push({name: "Anna", age: 29});
// console.log(persons, copiedPersons);
​
let x = 10;
let y = "abc";
​
let a = x;
let b = y;
​
//our variable of a takes on the value of what x was, but the two variables are not related.
​
console.log(x, y, a, b);
​
let arr = [];
arr.push(1);
​
let reference = [1];
let refCopy = reference;
​
reference.push(2);
console.log(reference, refCopy);
​
const persons = [{name: "Donovan", age: 25}, {name: "Zach", age: 27}];
const copiedPersons = [...persons];
​
persons.push({name: "Anna", age: 29});
​
copiedPersons[0].name = "Don";
persons[0].name = "Michael";
console.log(persons, copiedPersons);
