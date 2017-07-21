/**
 * Created by Iryna_Petrenko1 on 7/21/2017.
 */
(function() {
    // Register helpers
    Handlebars.registerHelper('toLowerCase', function(value) {
        if(value) {
            return new Handlebars.SafeString(value.toLowerCase());
        } else {
            return '';
        }
    });

    Handlebars.registerHelper('genderIcon', function(value) {
        var templateMale = ' <span class="uui-icon white gender-icon"><i class="fa fa-male yellow"></i></span>';
        var templateFemale = ' <span class="uui-icon white gender-icon"><i class="fa fa-female yellow"></i></span>';

        if(value === 'M') {
            return new Handlebars.SafeString(templateMale);
        } else if (value === 'F') {
            return new Handlebars.SafeString(templateFemale);
        }

        return '';
    });

    Handlebars.registerHelper('formatAddress', function(value) {
        if (typeof value === 'string') {
            return new Handlebars.SafeString(value.split(',').slice(2).join(',').trim());
        }

        return '';
    });


    window.partial = function(which, data) {
        var tmpl = $('#' + which + '-partial').html();
        return _.template(tmpl)(data);
    };
})();