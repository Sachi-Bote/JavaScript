//symbols
const mySym = Symbol("mykey1")

//object literals
const JsUser = {
    name: "Sachi",
    lastname: "Bote",
    [mySym]: "mykey1",
    age: 21,
    location: "Pune",
    email: "sachibote11@gmail.com"
}

//accessing the objects

//console.log(JsUser);
console.log(JsUser["name"]);
console.log(JsUser[mySym]); //accessing the symbols

//change the values of object

JsUser.email = "sachibote1127@gmail.com"
Object.freeze(JsUser);
JsUser.email = "sachibote1127@google.com"
console.log(JsUser);

