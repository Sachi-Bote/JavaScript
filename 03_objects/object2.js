const IBUser = new Object()

IBUser.id = "A12345"
IBUser.name = "Hriday"
IBUser.age = 20

//console.log(IBUser);

//Object in Object

const INUser = {
    email: "hriday@gmail.com",
    fullname: {
        userfullname: {
        firstname: "Hriday",
        lastname: "Dixit"
        }
    }
}

//console.log(INUser.fullname.userfullname.firstname);


// COMBINE / CONCAT OBJECTS
const obj1 ={
    1: "a",
    2: "b"
}

const obj2 ={
    3: "c",
    4: "d"
}

//const obj3 = {obj1, obj2}  //wrong method
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);