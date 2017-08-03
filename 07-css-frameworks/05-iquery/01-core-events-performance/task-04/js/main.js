(function () {
    $(document).ready(function(){
        tooltip("[data-tooltip]","tooltip");
    });
    function tooltip(items, name){
        $(items).each(function(i, element){
            $("body").append("<div class='"+name+"' id='"+name+i+"'><p>"+$(this).attr('data-tooltip')+"</p></div>");
            var my_tooltip = $("#"+name+i);
            $(this).mouseover(function(){
                my_tooltip.css({ display:"none"}).fadeIn(400);
            }).mousemove(function(kmouse){
                my_tooltip.css({left:kmouse.pageX+15, top:kmouse.pageY+15});
            }).mouseout(function(){
                my_tooltip.fadeOut(400);
            });
        });
    }
})($);