// const myNum = [1, 2, 3]

// const myTotal = myNum.reduce(function (acc, currVal){
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 0)

// console.log(myTotal)

// const Total = myNum.reduce( (acc, curr) => acc+curr, 0);
// console.log(Total);

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 299
    },
    {
        itemName: "Python Course",
        price: 499
    },
    {
        itemName: "DS Course",
        price: 999
    },
    {
        itemName: "AI Course",
        price: 1299
    }
]

const price = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(price);
