//var
let count = 0;

function play(){
 
  //On count of 1 start player
  count = 1;
  audio.play();
  player.style.display = "none";
  pauser.style.display = "block";  
  console.log('Audio playing')
 } 
 function pause(){
  
  audio.pause();
  pauser.style.display = "none";
  player.style.display = "block";
  console.log('Audio paused')
 }