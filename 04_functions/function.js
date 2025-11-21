//FUNCTION 1
function sayMyName() {
    console.log("S");
    console.log("a");
    console.log("c");
    console.log("h");
    console.log("i");
}
//sayMyName()


//FUNCTION 2

// function addTwoNumbers (num1, num2){
//     console.log( num1 + num2);
// }

// function addTwoNumbers (num1, num2){
//     // let result = num1 + num2
//     // return result
//     return (num1 + num2)
// }
// const result = addTwoNumbers(1, 2);
// console.log(result);

//FUNCTION 3

// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// function loginUserMessage(username = "xyz"){
//     if (!username){
//         console.log("Please enter a user name")
//         return
//     }
//     return `${username} just logged in`
// }
//console.log(loginUserMessage("Hriday"));
//console.log(loginUserMessage());


//FUNCTION 4 
//... => rest operator
// function calculateCartPrice(...num1){
//     return num1
// }
//console.log(calculateCartPrice(200,300,400, 500, 600));


//OBJECT PASSING
// const user = {
//     username: "Hriday",
//     age: 20
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and his age is ${anyobject.age}`);
// }

// //handleObject(user);

// handleObject(
//     {
//         username: "Hriday",
//         age: 20
//     }
// )

//ARRAY PASSING

const myNewArray = [100, 200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[2];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 500, 100, 2000]));