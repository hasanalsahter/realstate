var slideNumber = 1;
Slideshow();




function Slideshow(){

let i ; 
let slides = document.querySelectorAll('.Slides');
const time = 4000


for (i = 0 ; i < slides.length ; i++){
    slides[i].style.display = 'none' ; 

}
slideNumber ++ ; 
if(slideNumber > slides.length) {slideNumber = 1}
slides[slideNumber-1].style.display = 'block' ; 
setTimeout(Slideshow , time);




}