/**
 * Insert you task implementation here.
 */

$(function() {
    var students = $.ajax('source/students.json');
        // $.ajax({
        // method: 'GET',
        // url: 'source/students.json',
        // dataType: 'json'
    // });

    var header = $.ajax('templates/header.hbs');
    var userCard = $.ajax('templates/user-card.hbs');
    var modalPane = $.ajax('templates/modal.hbs');

    $.when(students, userCard, modalPane, header)
        .done(function(jsonObject, userTemplate) {
            var $body = $('body');
            $body.prepend(header.responseText);

            $.when(students)
            .done(function(jsonObject, userTemplate){

                var compiled = Handlebars.compile(userCard.responseText);
                var contentHtml = compiled(jsonObject);
                $body.append(contentHtml);

                $.when(students)
                    .done(function(jsonObject, userTemplate){
                        var compiled = Handlebars.compile(modalPane.responseText);
                        var contentHtml = compiled(jsonObject);
                        $body.append(contentHtml);
                    });

            });


            // $body.prepend(userCard.responseText);

            // Register partials
            // Handlebars.registerPartial('modalPane', modalPane.responseText);
            //
            // var compiled = Handlebars.compile(userTemplate[0]);
            // var contentHtml = compiled(jsonObject[0]);
            //
            // $(contentHtml).appendTo('main');

            /**
             * Modal open event listener
             */
            $body.on('click', '.btn-modal', function(e) {
                var modalId = $(this).data('modal-index');
                $(modalId).modal('show');
            });
        });
});






