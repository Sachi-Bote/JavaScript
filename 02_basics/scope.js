//SCOPE
// let a = 20
// const b = 20
// //var c = 30

// if(true){
//     let a = 10
//     const b = 20
//     console.log("INNER: ", a)
// }
// console.log("OUTER: ", a)

function one(){
    const username = "Hriday"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}
//one()

if (true){
    const username = "Hriday"
    if(username === "Hriday"){
        const lastname = " Dixit"
        //console.log(username + lastname);
    }
    //console.log(lastname);
}
//console.log(username);

//++++++++++ something new ++++++++++++++

console.log(addone(5))
function addone(num){
    return num + 1
}

//hoisting  cannot call the function before if we store the value in the variable

addTwo(5)
const addTwo = function(num){
    return num + 2
}