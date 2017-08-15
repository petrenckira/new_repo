'use strict';

const body = $('html>body');
const checkbox = $('#details_block');

(function () {
    function openDetailsFunction () {
        const temporary = $(body).find('.form-holderArea .formMain #details_block');
        temporary.after('<div class="details" id="details"><p><textarea style=width:493px; id="txtArea"></textarea></p></div>');
        $(body).find('.form-holderArea .formMain #txtArea').css('width: 420px');
        $('#txtArea').height('80px')
            .css('max-height', '100px')
            .css('max-width', '493px')
            .css('min-width', '493px');
    }

    checkbox.checked = false;

    function isCheckboxClicked () {
        if ($('#details_block').is(':checked')) {
            openDetailsFunction();
        } else {
            const k = $('.details');
            $(k).remove();
        }
    }

    $('#name').on('change', () => {
        if (this.val().length < 3) {
            this.addClass('error');
        } else {
            this.removeClass('error');
        }
    });

    $('#second_name').on('change', () => {
        if (this.val().length < 3) {
            this.addClass('error');
        } else {
            this.removeClass('error');
        }
    });


    $('.SubmitButton').click((e) => {
        e.preventDefault();
        const name = $('#name');
        const secondName = $('#second_name');

        if (name.val().length < 3) {
            name.addClass('error');
        } else {
            name.removeClass('error');
        }

        if (secondName.val().length < 3) {
            secondName.addClass('error');
        } else {
            secondName.removeClass('error');
        }

        if (name.val().length >= 3 && secondName.val().length >= 3) {
            body.append('<div class="success-PopUpOverlay" id="success-PopUpOverlay"></div><div class="successHolder"><span></span>thanks for your request!</div>');
            body.find('.successHolder').append('<button>Close</button>');
            body.find('.successHolder > span').html(name.val() + ',<br><br>');


            initializeCloseButton();
            const cssProperties = { width: '200px', position: 'absolute', height: '100px', background: 'white'}

            $('.successHolder').css(cssProperties);
        }
    });

    function initializeCloseButton () {
        $('html body .successHolder button').click(() => {
            $('#success-PopUpOverlay').remove();
            $('.successHolder').remove();
        });
    }

    $('#details_block').on('click', isCheckboxClicked);

})($);