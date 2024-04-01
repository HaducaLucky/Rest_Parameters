//! rest parameters = (...rest) allow a funtion work with a variable
//!                   number of arguments by bundling them into an   array

//?                   spread = expands an array into seperate elements
//?                   rest = bundles seperate elements into an array


// function openFridge(...foods){
//     console.log(...foods);
// }
// function getFood(...foods){
//     return foods;
// }

// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "sushi";
// const food5 = "ramen"

// // openFridge(food1, food2, food3, food4, food5);

// const foods = getFood(food1, food2, food3, food4, food5);

// console.log(foods);

//* another example

// function sum(...numbers){

//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result;
// }

// const total = sum(1, 2, 10, 23, 87);

// console.log(`Your totat is $${total}`);




//* function to get the average

// function getAve(...numbers){

//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result / numbers.length;
// }

// const total = getAve(88, 82, 90, 92, 90);

// console.log(total);

//* example 3 

function combineString(...strings){
    return strings.join(" ");
}

const fullName = combineString("Mr.", "Spongebob", "Squarepants", "III");

console.log(fullName);