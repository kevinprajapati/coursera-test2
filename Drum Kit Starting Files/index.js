var numberOfDrum = document.querySelectorAll(".drum").length;

for(var i = 0;i<numberOfDrum;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",handler);
    
    
}
function handler(){
    var buttonPressed = this.innerHTML;
    makeSound(buttonPressed);
    buttonAnimation(buttonPressed);
   
}


document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})





function makeSound(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;     
        case "d":
            var audio  = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;   
        default:
            alert("not in the system.")                    
    }
}
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed"),100
    })
}