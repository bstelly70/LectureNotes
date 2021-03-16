/*
-Loops offer us a quick and easy way to do something repeatedly, or loop over something.
-There are many kinds of loops, but they all roughly do the same thing.
    -It will repeat until a specified condition evaluates to true
        -for statement
        -do while statement
        -while statement
        -labeled statement
        -break statement
        -for in statement
        -for of statement
​
Note: there is a danger of infinite loops. There are three main parts to a loop:
    -initial expression
    -condition
    -increment expression
*/
​
for (let i = 0; i < 10; i++) {
//    console.log(i);
}
​
​
//Challenge: using a for loop, count to 20, by 2's
for (let i = 0; i <= 20; i += 2){
    // console.log(i);
}
​
//Challenge: using a for loop, count from 10 to 0, going down by 1
for (let i = 10; i >= 0; i -= 1){
    // console.log(i);
}
​
//Challenge: using a for loop, count from 0, going down by 2's to -24
for (let i = 0; i >= -24; i -= 2) {
    // console.log(i);
}
​
// Challenge: using a for loop, go through a name and display each letter individually
let friendName = "Kenn";
let count = friendName.length;
​
for (let l = 0; l < count; l++){
    console.log(friendName[l]);
}
​