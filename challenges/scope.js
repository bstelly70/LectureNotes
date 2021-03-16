/*
-Scope is how a computer keeps track of all the variables in a program
-Scopes can also be nested, where there is an outer scope(think global scope) that encloses an inner scope(think local scope)
    -Think about global scope as Planet Earth. Everything belongs to or is on Earth itself. WE live in Indianapolis, which could be considered our local scope.
*/
​
// let y = 12;
​
// function scope() {
//     let y = 33;
//     console.log("local:", y);
// }
// scope();
// console.log("global:", y);
​
/*
-With the introduction of ES6 came two more keywords to declare variables: const and let
-const is constant that cannot be changed
-var and let seem to operate the same. But while they have a lot of the same functionality, they behave a little differently.
    -let is scoped to the nearest ENCLOSING block, where var is scoped to the nearest FUNCTION block
*/
​
const x = 12;
​
function varTest() {
    const x = 33;
    if (true) {
        const x = 45;
        console.log("If Block:", x)
    }
    console.log("Function Block:", x)
}
varTest();
console.log("Global:", x);