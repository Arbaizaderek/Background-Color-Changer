//Array with the values for the hex color
const hex = [0,1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F"];
//Calling of the HTML document element
const btn = document.getElementById("color-btn");
//Calling of the HTML document element
const span = document.getElementById("color-span");

//Event of the button & function for changing the color
btn.addEventListener("click", function(){
    let color = "#";
    for(let i=0; i<=5; i++){
        randomNumber = getRandomNumber();
        color = color + hex[randomNumber];
    }
    document.body.style.backgroundColor = color;
    span.textContent = color;
})

//Function witch generates a random integer number.
function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
}