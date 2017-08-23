/**
 * Created by Iryna_Petrenko1 on 8/23/2017.
 */
(function ($) {


  function getElem(dataAtr, value) {
    return $(`[${dataAtr}=${value}]`);
  }

  function changeState(e) {
    let links=$("[data-link]");
    let target=$("[data-target]");

    let current = e.target.dataset.link;

    links.each( (i, el)=> {
      $(el).removeClass("active");
    });
    getElem("data-link", current).addClass("active");
    target.each((i, el)=>{
      $(el).addClass("hidden");
    });
    target.each((i, el)=>{

      if($(el).attr("data-target")== current){
        $(el).removeClass("hidden");
      }
    });
  }

  $.fn.tabs = function () {
    this.find("[data-link]").each((i, el)=>{
      $(el).on("click",((e)=>{
        e.preventDefault();
        changeState(e);
      }));
    });
  };
})(jQuery);
