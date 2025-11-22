//IF
const isUserLoggedIn = true

// if( 2 == "2"){
//     console.log("executed");
// }

// IF - ELSE
// const score = 100
// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
// else{
//     power = "no power"
//     console.log(`User power: ${power}`);
// }

//SHORTHAND NOTATION
//const balance = 1000
// if(balance > 500) console.log("test"), console.log("test2");

//Nesting

// const balance = 1000

// if(balance < 500){
//     console.log("less than 500")
// }else if(balance < 750){
//     console.log("less than 750")
// }else if (balance< 900){
//     console.log("less than 900")
// }else {
//     console.log("less than 1200")
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allowed");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}


//Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
//val1 = null ?? 10 ?? 20  //first value will be assigned
// console.log(val1)

//TERNIARY OPERATOR

//condition ? true : false
const coffeePrice = 100
coffeePrice >= 80 ? console.log("More than 80") : console.log("less than 80")