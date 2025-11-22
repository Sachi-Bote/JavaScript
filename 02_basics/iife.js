//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();

// used to avoid the global variable pollution 

//Arrow function
//Named IIFE
( function coffee() {
    console.log(`DB CONNECTED 2`)
}) ();


//Unnamed IIFE
( (name) => {
    console.log(`DB CONNECTED ${name}`)
}) ("Hriday");