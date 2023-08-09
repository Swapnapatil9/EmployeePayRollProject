$(document).ready(function(){
    var mainBorder =$(".main");
    function changeBorder(){
        mainBorder.css({'border':'3px solid green'});
    }
    $("#button").on("click",changeBorder);
});