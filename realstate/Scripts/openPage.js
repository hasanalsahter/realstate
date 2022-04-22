/*let button = document.querySelectorAll(".button");
window.onclick= openPage();*/


let button = document.querySelectorAll(".button");
let sinpas = document.querySelectorAll(".buy_house_cards:nth-child(1)");
let Zorlu = document.querySelectorAll(".buy_house_cards:nth-child(2)");


let x ; 
function clickinner(x) { // Target refers to the clicked element
  
    if(x == Zorlu){
        location.href='../Pages/Listing_1.html';
    }else if(x == sinpas){
        location.href='../Pages/Listing_2.html';
    }else {
        location.href='../Pages/Listing.html';
        
};

};