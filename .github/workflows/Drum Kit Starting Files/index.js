var event = document.querySelectorAll(".drum").length;
var i=0;
while(i< event){
  document.querySelectorAll("button")[i].addEventListener("click",function () {
 var sounding = "sounds/tom-"+(Math.floor(Math.random()*4)+1)+".mp3"
  var audio = new Audio(sounding);
  audio.play();
  });
i++;
}
