//FOR EACH

const language = ["javascript", "ruby", "python", "cpp", "java", "react"]

// language.forEach( function (item) {
//     console.log(item);
// })

// language.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// language.forEach(printMe)

// language.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languagename: "Javascript",
        languagefile: "js"
    },
    {
        languagename: "Java",
        languagefile: "java"
    },
    {
        languagename: "Python",
        languagefile: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languagename);
    console.log(item.languagefile);
})