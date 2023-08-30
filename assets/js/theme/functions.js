/**
 * Global theme functions
 */

$(document).ready(function(){
	$(".lSNext, .lSPrev").each(function(){
			$(this).attr("href", "#")
	});
	/**
	 * Contact form 7 alerts
	 */
	const form = document.querySelector('.wpcf7')
	if (form) {
		form.addEventListener('wpcf7mailsent', () => {
			Swal.fire({
				icon: 'success',
				title: 'Sucesso!',
				text: 'Mensagem enviada!',
			})
		})

		form.addEventListener('wpcf7mailfailed', () => {
			Swal.fire({
				icon: 'error',
				title: 'Ocorreu um erro!',
				text: 'Se o erro persistir, favor contatar o suporte.',
			})
		})
	}
	if(document.querySelector("#copy")){
		document.querySelector("#copy").addEventListener("click", ()=>{
			var TextToCopy = document.querySelector("#copy").attributes.link.value;
			var TempText = document.createElement("input");
			TempText.value = TextToCopy;

			document.body.appendChild(TempText);
			TempText.select();

			document.execCommand("copy");
			document.body.removeChild(TempText);
			Swal.fire({
				icon: 'sucess',
				title: 'Texto copiado com sucesso',
			})
		});
	}
	$('#produtos-home').lightSlider({
		adaptiveHeight:true,
		item:4,
		slideMove: 4,
		slideMargin:0,
		loop:true,
		pager: false,
		prevHtml: '<i class="fa-solid fa-arrow-left"></i>',
		nextHtml: '<i class="fa-solid fa-arrow-right"></i>',
        responsive : [
            {
                breakpoint:1160,
                settings: {
                    item:3,
                    slideMove:3,
                  }
            },
            {
                breakpoint:930,
                settings: {
                    item:2,
                    slideMove:2,
                  }
            },
            {
                breakpoint:630,
                settings: {
                    item:1,
                    slideMove:1,
                  }
            }
        ]
	});
	$(".galleria img").each(function(){
    $(this).on("click", function(){
        var popup = document.createElement("div");
        popup.classList.add("popupProduto");
        var fechar = document.createElement("div");
        fechar.classList.add("fechar");
        var imagem = document.createElement("img");
        imagem.src=$(this).attr("src");
        popup.append(imagem);
        popup.append(fechar);
				popup.onclick=function(event){
					if (event.target.nodeType == 1 && event.target.classList.contains('popupProduto')) {
						event.stopPropagation();
						$(event.target).remove();
					}
				}
        fechar.onclick=function(event){
            $(".popupProduto").each(function(){
                $(this).remove()
            })
        }
        document.body.append(popup);
    })
	});
	$(".tamanhos img").each(function(){
    $(this).on("click", function(){
        var popup = document.createElement("div");
        popup.classList.add("popupProduto");
        var fechar = document.createElement("div");
        fechar.classList.add("fechar");
        var imagem = document.createElement("img");
        imagem.src=$(this).attr("src");
        popup.append(imagem);
        popup.append(fechar);
				popup.onclick=function(event){
					if (event.target.nodeType == 1 && event.target.classList.contains('popupProduto')) {
						event.stopPropagation();
						$(event.target).remove();
					}
				}
        fechar.onclick=function(event){
            $(".popupProduto").each(function(){
                $(this).remove()
            })
        }
        document.body.append(popup);
    })
	});
	$(".camiseta area").each(function(){
    $(this).on("click", function(){
        var url ="camiseta-modelo.png"
        if($(this).attr("alvo")=="manga-direita"){
            url = "camiseta-modelo-manga-direita.png";
            document.getElementById("manga-direita").scrollIntoView(false);
            document.querySelector(".camiseta .row:has(#manga-direita)").style.scale=1.1;
            setTimeout(function(){
                document.querySelector(".camiseta .row:has(#manga-direita)").style.scale=1;
            }, 300);
						document.querySelector(".camiseta .row:has(#manga-direita)").classList.add("show");
        }
        if($(this).attr("alvo")=="manga-esquerda"){
            url = "camiseta-modelo-manga-esquerda.png";
            document.getElementById("manga-esquerda").scrollIntoView(false);
            document.querySelector(".camiseta .row:has(#manga-esquerda)").style.scale=1.1;
            setTimeout(function(){
                document.querySelector(".camiseta .row:has(#manga-esquerda)").style.scale=1;
            }, 300);
						document.querySelector(".camiseta .row:has(#manga-esquerda)").classList.add("show");
        }
				//add costas e frente
        $(".imagemDestaque").remove();
        var img = document.createElement("img");
        img.classList.add("imagemDestaque");
        img.useMap = "#modelo-camiseta-frente";
        img.src="http://192.168.0.39/renova/wp-content/themes/area-structure/assets/images/"+url;
        document.querySelector(".camiseta .image").append(img);
    });
	});
	$(".row *").on("mouseover", function(){
    var url ="camiseta-modelo.png"
    if($(this).parent().attr("alvo")=="manga-direita"){
        url = "camiseta-modelo-manga-direita.png";
    }
    if($(this).parent().attr("alvo")=="manga-esquerda"){
        url = "camiseta-modelo-manga-esquerda.png";
    }
    $(".imagemDestaque").remove();
    var img = document.createElement("img");
    img.classList.add("imagemDestaque");
    img.useMap = "#modelo-camiseta-frente";
    img.src="http://192.168.0.39/renova/wp-content/themes/area-structure/assets/images/"+url;
    document.querySelector(".camiseta .image").append(img);
	});
	$(".row textarea").on("input propertychange", function(){
		$("div.texto-" + ($(this).parent().attr("alvo"))).html($(this).val());
	});
	$(".row *").on("mouseout", function(){
		$(".imagemDestaque").remove();
	});
	$(".row input[type=color]").on("input propertychange", function(){
    $("div.texto-" + ($(this).parent().attr("alvo"))).html("<p> <i class='circle'></i>"+$(this).val()+"</p>");
    $("div.texto-" + ($(this).parent().attr("alvo")) + " .circle").css("background-color", $(this).val());
	});
	$(".remove-value").on("click", function(){
		$("#"+$(this).attr("alvo")).val("");
    $("div.texto-" + ($(this).attr("alvo"))).html("");
	});
	$(".title span").each(function(){
		$(this).on("click", function(){
				if($(this).parent().parent().parent().hasClass("show")){
						$(this).parent().parent().parent().removeClass("show");
				}else{
						$(this).parent().parent().parent().addClass("show");
				}
		});
	});
	$("#telefone input").mask("(00) 00000-0000")
})

