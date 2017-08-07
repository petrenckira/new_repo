(function () {
    $(document).ready(function () {
        $("#form").submit(function (e) {
            e.preventDefault();
            var $street = $("#street").val();
            var $city = $("#city").val();
            var $body = $("body");
            addImg($street, $city, $body);
            addNYTArt($city);
            addWLinks($city);
        });
    });
    function addImg($street, $city, $body) {
        if ($body.find(".bgimg").length == 0) {
            var $img = $('<img src="" alt="">');
            $img.addClass("bgimg");
            $body.append($img);
        }
        else {
            var $img = $(".bgimg");
        }
        $img.attr("src", "https://maps.googleapis.com/maps/api/streetview?size=600x400&location=" + $city + $street + "");
    }

    function addNYTArt($city) {
        var articlesList = $("#nytimesArticlesList");
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
                'api-key': "82287f6a19ef413b95ffd492c104548b",
                'q': $city
            });
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function (result) {
            $.each(result.response.docs, function (i, element) {
                articlesList.append($('<li><a href=' + element.web_url + '>' + element.headline.main + '</a> <p>' + element.snippet + '</p> </li>'));
            });
        }).fail(function (err) {
            articlesList.text = "";
            articlesList.text = "New York Times Articles Could Not Be Loaded";

        });
    }

    function addWLinks($city) {
        var wikiLinksList = $("#wikiLinksList");
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + $city + "&format=json";
        $.ajax({
            url: url,
            dataType: 'jsonp',
            type: 'POST',
            headers: { 'Api-User-Agent': 'Example/1.0' }
        }).done(function (result) {
            $.each(result[3], function (i, element) {
                wikiLinksList.append($('<li><a href=' + element + '>' + element+ '</a></li>'));
            });
            console.log(result);
        }).fail(function (err) {
            console.log('Wikipedia Articles Could Not Be Loaded');

        });
    }
})($);