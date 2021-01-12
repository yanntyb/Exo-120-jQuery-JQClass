$("button").click(function (){
    $("div").not(".global").not("#matrice").not(".ligne").toggleClass("plein");
})

$(".circle").click(function (){
    $(this).toggleClass("plein");
})

$("div").not(".global").not("#matrice").not(".ligne").not(".circle").click(function (){
    $(this).toggleClass("plein");
    console.log($(this).attr("class"));
    Array.from($(this).parent().children().not(":not('.circle')")).forEach(elem => {
        if($(this).attr("class") !== ""){
            if(!elem.className.includes("plein")){
                elem.className += " plein";
            }
        }
        else{
            elem.classList.remove("plein")
        }
    });
})