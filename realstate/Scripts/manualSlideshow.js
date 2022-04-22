var slideNumber = 1;
MSlideshow(slideNumber);

function plusSlide(n)
{
    MSlideshow(slideNumber += n);
}


function current(n)
{

    MSlideshow(slideNumber = n);
}


function MSlideshow(n)
{
let i ; 
let slides = document.querySelectorAll('.Slides');
if(n > slides.length){
    slideNumber = 1;
}
if(n < 1 ){
    slideNumber = slides.length ;
}

for(i = 0 ; i < slides.length ; i ++){
    slides[i].style.display = 'none';
}
slides[slideNumber-1].style.display = 'block';

}