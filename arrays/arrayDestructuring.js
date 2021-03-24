/*
-Array desutrucuring allows you to unpack values from arrays, or even properties from objects, into disctinct variables.
​
-Destructuring uses very similar syntax as array literals, but is instead on the left hand side of the assignment operator, which is where we define what values to unpack from the sources variable. 
​
-Great for pulling information our of an array/object and assigning that data to it's own variable
*/
​
const fullName = ["Donovan", "Triplett", "Mr", {month: 12, date: 18, year: 1992}];
// const firstName = fullName[0];
// const lastName = fullName[1];
​
const [firstName, lastName, ...otherInfo] = fullName;
console.log("First:", firstName);
console.log("Last:", lastName);
console.log(otherInfo);