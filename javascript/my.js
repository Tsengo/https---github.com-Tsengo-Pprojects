$( ".target2" ).mouseenter(function() {
    $(this).prev() .addClass("border");
});
    
$( ".target2" ).mouseleave(function() {
    $(this).prev().removeClass("border");
});