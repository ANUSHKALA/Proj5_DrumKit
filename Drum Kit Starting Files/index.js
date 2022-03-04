var n = document.querySelectorAll(".drum").length;
for (let i = 0;i<n;i++){
    document.querySelectorAll(".drum")[i].addEventListener('click',handleClick)
}

function handleClick() {
    this.style.color = "yellow";
}






// var audio = new Audio("../Drum Kit Starting Files/sounds/tom-1.mp3");
// function playSound(){
//     audio.play();
// }