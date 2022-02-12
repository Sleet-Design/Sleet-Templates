// Nav script
$(document).ready(function(){

    $(".container").click(function(){
        $(".nav").toggle();
        $(".container").toggleClass("change");
    });

    $('nav a').click(function(){
        $(".nav").toggle();
        $(".container").toggleClass("change");
    });
    
    });