$("ul").on("click", "li", function(){
    $(this).toggleClass("done");
})

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
    event.stopPropagation();
});


$("input").keypress(function(e){
    if(e.which === 13){
        var text = $(this).val()
        $("ul").append("<li><span>X </span>" + text + "</li>");
        $(this).val("");
}
});

$(".fa-plus").click(function(){
    $("input").fadeToggle();
});
