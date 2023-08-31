/**
 * Global theme functions
 */

$(document).ready(function(){
	$(".redes").on("click", function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
        }else{
            $(this).addClass("active");
        }
    });
    $(document).on("click", function(event){
        let elemento = $(".redes");
        if (!elemento.is(event.target) && !elemento.has(event.target).length) {
            elemento.removeClass("active");
        }
    });
    $(".conteudos a").on("click", function(){
        $(".content."+$(this).attr("content")).addClass("active");
    });
    $(".back-to-page").on("click", function(){
        $(".content.active").removeClass("active");
    });
})

