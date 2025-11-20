// const a = "a";
// const b = "b";
// if (a < b) {
//   // true
//   console.log(`${a} is less than ${b}`);
// } else if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} and ${b} are equal.`);
// }      

// const strPrim = "foo"; // A literal is a string primitive
// const strPrim2 = String(1); // Coerced into the string primitive "1"
// const strPrim3 = String(true); // Coerced into the string primitive "true"
// const strObj = new String(strPrim); // String with new returns a string wrapper object.

// console.log(typeof strPrim); // "string"
// console.log(typeof strPrim2); // "string"
// console.log(typeof strPrim3); // "string"
// console.log(typeof strObj); // "object"

const no = 10
console.log(no)
console.log(typeof no)

//conversion to string 
text = no.toString()
console.log(text)
console.log(typeof text)

//charAt()
const sentence = "The quick brown fox jumps over the lazy dog.";
const index = 4;
console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// Expected output: "The character at index 4 is q"

//codePointat
const icons = "☃★♲";
console.log(icons.codePointAt(1));
// Expected output: "9733"


//concat
const hello = "Hello, ";
console.log(hello.concat("Kevin", ". Have a nice day."));
// Hello, Kevin. Have a nice day.
const greetList = ["Hello", " ", "Venkat", "!"];
"".concat(...greetList); // "Hello Venkat!"

"".concat({}); // "[object Object]"
"".concat([]); // ""
"".concat(null); // "null"


//endsWith
const str1 = "Cats are the best!";
console.log(str1.endsWith("best!"));
// Expected output: true
console.log(str1.endsWith("best", 17));
// Expected output: true
const str2 = "Is this a question?";
console.log(str2.endsWith("question"));
// Expected output: false


