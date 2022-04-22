let SA = function(){ 
    
    
    $(document).ready(function(){
    $(window).scroll(function(){
        $("#a").fadeIn(3000);
        $("#b").fadeIn(5000);
        $("#c").fadeIn(6000);
        $(".arrow").fadeOut(3000);
    });
});

}





if($(window).scrollTop() <100 ) SA();
    

/*
  $("#b").fadeIn(4000);
        $("#c").fadeIn(5000);
const $a = $('#a');
const $b = $('#a');
const $c = $('#a');



$wind.on('scroll', function(){


let top = $wind.scrollTop() / 10 ; 
$a.css('fadeIn('+ top + ' deg)');
$("#b").fadeIn("slow");
$("#c").fadeIn(3000);


})*/