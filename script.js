$("button").click(function (){
    $("div").not(".global").not("#matrice").toggleClass("plein");
})

$(".circle").click(function (){
    $(this).toggleClass("plein");
})