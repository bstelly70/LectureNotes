/*
​
    function hi() {
        console.log("HI");
    }
    (1)
    hi()
​
    1-This is where we call, or "invoke" our function
​
    Cris Matson-"writing the function body is like buying a VHS tape, but you can't watch it unless you play() it"
*/
​
​
​
// function hi() {
//     console.log("HI");
// }
​
// hi;
// hi(); //this is the correct way to invoke a function
// console.log(hi);
// console.log(hi());
​
//Create a function that, when invoked, lists out the numbers 1-10
function count() {
    for (let x = 1; x <= 10; x++){
        // console.log(x);
    }
}
​
count();
​
//Given the array, create a function that lists out the values individually.
let arr = ['This', 'is', 'really', 'cool'];
​
function cool() {
    for (word of arr) {
        console.log(word);
    }
}
​
cool();