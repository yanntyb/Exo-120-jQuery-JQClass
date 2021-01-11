$("button").click(function (){
    $("div").not(".global").not("#matrice").not(".ligne").toggleClass("plein");
})

$(".circle").click(function (){
    $(this).toggleClass("plein");
})

$("div").not(".global").not("#matrice").not(".ligne").not(".circle").click(function (){
    $(this).parent().children().addClass(this.className);
})