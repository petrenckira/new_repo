/**
 * Created by Iryna_Petrenko1 on 8/23/2017.
 */
(function ($) {
  $.fn.tooltip = function () {
    $("[data-tooltip]").each(function(i){
      $("body").append("<div class='tooltip' id='tooltip"+i+"'>"+$(this).attr('data-tooltip')+"</div>");
      let my_tooltip = $("#tooltip"+i);

      $(this).removeAttr("data-tooltip").mouseover(function(){
        my_tooltip.css({opacity:0.8, display:"none"}).fadeIn(400);
      }).mousemove(function(kmouse){
        my_tooltip.css({left:kmouse.pageX+15, top:kmouse.pageY+15});
      }).mouseout(function(){
        my_tooltip.fadeOut(400);
      });
    });
  }
})(jQuery);

