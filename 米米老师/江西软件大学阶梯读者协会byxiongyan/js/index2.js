$(function() {
    $(".nav>li").mousemove(function() {
        $(this).children("ul").show();
    });
    $(".nav>li").mouseout(function() {
        $(this).children("ul").hide();
    })
})