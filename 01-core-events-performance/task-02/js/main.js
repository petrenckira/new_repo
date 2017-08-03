(function () {
    $("tr:nth-child(even)").addClass("even");
    $("tr:nth-child(odd)").addClass("odd");
    $("td").each(function (i, elem) {
        var item = $(elem);
        if (parseInt(item.text())<10) {item.addClass("colored");}
    });
})($);

