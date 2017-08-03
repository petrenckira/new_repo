/* first section */
$("div").each(function (i, elem) {  if($(elem).children().length==0) $(elem).replaceWith("")});


/* second section */

$("div").each(function (i, elem) {  if($(elem).find("span").length==0) $(elem).replaceWith("")});

/* third section */


$("div").each(function (i, elem) {  if(!$(elem).is(":has(span)")) $(elem).remove()});
    
