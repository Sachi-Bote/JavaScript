const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let index = 0; index < 6; index++) {
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let intervalID;

const startChangingcolor = function(){
    if(!intervalID){
    intervalID = setInterval(changeBGColor, 1000)
    }
    function changeBGColor(){
    document.body.style.backgroundColor = randomColor();
    };
};
const stopChangingcolor = function(){
    clearInterval(intervalID);
    intervalID = null;
};

document.querySelector('#start').addEventListener('click', startChangingcolor);
document.querySelector('#stop').addEventListener('click', stopChangingcolor);
