//WHILE LOOP

// let index = 0
// while (index <=5) {
//     console.log(`Value of index is ${index}`);
//     index = index + 1;
// }

// let myArray = ['Flash', 'Batman', 'Superman']
// let arr = 0
// while (arr < myArray.length){
//     console.log(`${myArray[arr]}`);
//     arr = arr + 1
// }

// //DO WHILE 

// let score = 1
// do {
//     console.log(`Score is ${score}`);
//     score ++;
// } while (score <= 5);

//FOR OF

// ["", "", ""]
// [{}, {}, {}]

const array = [1, 2, 3, 4, 5]
for (const num of array) {
    //console.log(num);    
}

const name = "Hriday"
for (const letter of name) {
    //console.log(`Each letter is ${letter}`);
}

//MAPS

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')

//console.log(map);

for (const [key, value] of map) {
    //console.log(key, ':-', value);
}

//FOR IN
//OBJECTS  forof is not iterable on objects

const myObject = {
    game1: "Spiderman",
    game2: "GTA 6",
    game3: "Counter Strike",
    game4: "BGMI"
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
//}


for (const key in myObject) {
    //console.log(`${key} game is ${myObject[key]}`);
}

const language = ["javascript", "ruby", "python" ]
for (const key in language) {
    //console.log(language[key]);
}


const map1 = new Map()
map1.set('IN', 'India')
map1.set('USA', 'United States of America')
map1.set('FR', 'France')

//console.log(map1);

for (const key in map1) {
    //console.log(key);
}


