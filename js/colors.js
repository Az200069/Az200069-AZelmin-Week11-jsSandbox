const myButton = document.querySelector('button');
const myBox = document. querySelector('.box')
const colors = ["red", "green", "blue", "yellow"]



myButton.addEventListener('click', changeColor);

function changeColor() {
    let randomindex = Math.floor(Math.random() * colors.length);
    console.log(randomindex);
    myBox.style.backgroundColor = colors[randomindex];




}