//Display
console.log('Nothing is opened')

//ShowNav
function showNav(){
menuBtn.style.display = "none";
cancelBtn.style.display = "block";
//main Overide
popNav.style.display = "block";
//display
console.log('Nav is opened');
}
//hideNav
function hideNav(){
cancelBtn.style.display = "none";
menuBtn.style.display = "block";
//main Overide
popNav.style.display = "none";
//display
console.log('Nav is closed');
}