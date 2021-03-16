//Functions expressions are functions stored within variables
//Function expressions DO NOT get hoisted
​
/*
      (1)
    let hey = function hi() {
        console.log("HI");
    }
​
    1- The variable hey is now representative of the function hi()
*/
​
​
let hey = function hi() {
    console.log("HI");
}
​
hey()