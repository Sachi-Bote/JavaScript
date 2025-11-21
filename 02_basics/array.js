//array

const myArr = [0, 1, 2, 3, 4, 5]
const Fruits = ["Apple", "Banana"];

const myArr2 = new Array(1, 2, 3, 4, 5);

// console.log(myArr[1]);
// console.log(myArr[2]);
// console.log(Fruits);

// Fruits.push("Mango")
// console.log(Fruits);
// myArr2.pop()
// console.log(myArr2);

// myArr2.unshift(10);
// console.log(myArr2);

// myArr2.shift()
// console.log(myArr2);

// console.log(Fruits.includes("Watermelon"));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//SLICE AND SPLICE 

console.log("A ", myArr);

const  myn1 = myArr.slice(1,3);
console.log(myn1)
console.log("B ", myArr);

const  myn2 = myArr.splice(1,3);
console.log(myn2)
console.log("C ", myArr);