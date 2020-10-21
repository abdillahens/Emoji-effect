document.getElementsByTagName("body")[0].addEventListener('mousemove',eyeball);
var eye=document.querySelectorAll('.eye');

  console.log(eye);
function eyeball(event){

    eye.forEach(function(eye){
        
        let x=(eye.getBoundingClientRect().left)+(eye.clientWidth / 2);
        let y=(eye.getBoundingClientRect().top)+(eye.clientHeight / 2);
        let radian=Math.atan2(event.pageX - x,event.pageY - y);
        let rot=(radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate("+rot+"deg)";
        
    })
} 
var audio = new Audio('audio3.wav');
document.getElementsByClassName("face")[0].addEventListener('mouseenter',playsound);
function playsound(){
  
audio.play();
}