"use strict"; 
window.onload = () => { 

    const btngoogle = document.getElementById("btngoogle"); 
    const btnw3schools = document.getElementById("btnw3schools"); 
    const btnimages = document.getElementById("btnimages"); 

    btngoogle.onclick = onbtngoogle; 
    btnw3schools.onclick = onbtnw3schools; 
    btnimages.onclick = onbtnimages; 
};

function onbtngoogle(){
window.open("https://www.google.com/"); 
    console.log("google")


}
function onbtnw3schools(){
console.log(w3schools)

}
function onbtnimages(){
    window.open("NewTabs\images.html"); 
    console.log("images page")


}