const navSlide = () => {
    const lines = document.querySelector('.lines');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
//toggle nav
    lines.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

//animate limks
        navLinks.forEach((link , index) =>{
            if(link.style.animation){
                link.style.animation = ''
            }else{
                link.style.animation = `navlinkfade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
       
        
        });

    });

    
  
}


  
navSlide();
















