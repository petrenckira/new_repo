(function () {
    $(document).ready(function () {
        checkForm("#form");

    });
    function checkForm(idForm) {
        var form = $(idForm);
        form.submit(function (e) {
            e.preventDefault();
            var inputs = $('input');
            var count = inputs.length;
            inputs.each(function (i, element) {
                var current = $(element);
                var attr = $(element).attr("data-validation") || "";
                var val = $(element).val();
                checkValue(current, attr, val);
            });
            var countValid = $('.valid').length;
            if (countValid >= count - 1) {
                if (form.hasClass("invalid")) {
                    form.removeClass("invalid");
                }
                form.addClass("valid");
            }
            else {
                if (form.hasClass("valid")) {
                    form.removeClass("valid");
                }
                form.addClass("invalid");
            }

            return false;
        });

    }

    function checkValue(current, attr, val) {
        var patternText = /^[a-zA-Z0-9]+$/;
        var patternNumber = /^[ 0-9]+$/;
        var parent = current.parent(".form-group");
        if ((attr == "text" && val != "" && patternText.test(val)) || (attr == "number" && val != "" && patternNumber.test(val)) || (attr == "") || (attr == "checkbox" && current.prop("checked") == "checked")) {
            if (parent.hasClass("has-error")) {
                parent.removeClass("has-error");
                parent.find("span.message").remove();

            }
            current.addClass("valid");
        }
        else {
            if (parent.find("span.message").length == 0) {
                parent.addClass("has-error").append('<span class="message">"Please complete this field correctly."</span>');
            }
        }

    }

})($);