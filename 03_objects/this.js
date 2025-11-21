//THIS

const user = {
    username: "Hriday",
    age: 20,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to the website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Vineet"
// user.welcomeMessage()

//console.log(this);  // here it refers to the empty object while in browser it will show window because window is global object

//THIS cannot be used in Functions
// function chai (){
//     let username = "Hriday"
//     console.log(this.username);
// }
// chai()


//ARROW FUNCTION

// const chai = () => {
//     let username = "Hriday"
//     console.log(this);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(1,2));


//IMPLICIT RETURN
const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(1,2));