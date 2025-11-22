//falsy Values: false, 0, -0, BigInt 0n, "", null, undefined, NaN
//TRUTHY VALUES: "0", "false", " ", [], {}, function(){}

const userEmail = "Hriday@gmail.com"
if(userEmail){
    console.log("Got the email")
}else {
    console.log("Don't have user email")
}

if(userEmail.lenght === 0){
    console.log("Array is empty")
}

const empobj ={}

if(Object.keys(empobj).length === 0){
    console.log("Object is empty")
}