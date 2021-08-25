const ECHIDNA_URL = 'http://project.local/';
const APP_DEBUG = true;
const APP_LANGS = ['ru', 'en'];

// -- Timezones --
const APP_TIMEZONES = [
    'Europe/London', 'Europe/Malta', 'Europe/Helsinki', 'Europe/Moscow',
    'Indian/Maldives'
  ];

// -- Page --
var APP_PAGE = 'hello';

// -- User token --
var USER_TOKEN = !$.cookie('user-token') ? '' : $.cookie('user-token');
if(USER_TOKEN) {
    $.cookie('user-token', USER_TOKEN);
}

// -- User language --
var tmp = !$.cookie('user-lang') ? navigator.language.split('-')[0] || navigator.userLanguage.split('-')[0] : $.cookie('user-lang');
var USER_LANG = APP_LANGS.includes(tmp) ? tmp : 'en';
$.cookie('user-lang', USER_LANG);

// -- User timezone --
var USER_TIMEZONE = 'Europe/Moscow';

// -- Internationalization --
var I18N = {};
$(document).ready(function(){

    var tmp = {};
    $.getJSON(ECHIDNA_URL + 'webapp/i18n/' + USER_LANG + '.json', function(data) {
        $.each(data, function(key, value) {
            tmp[key] = value;
        });
    }).done(function() {
        I18N = tmp;

        // Navbar links
        $.each(I18N['navbar'], function(key, value) {
            $('#navbar-' + key).text(value);
        });

        // Navbar langs
        $("#navbar-lang").text(USER_LANG);
        for(i in APP_LANGS) {
            var li = $('<li>');
            var a = $('<a>').attr('class', 'dropdown-item').attr('href', '#').attr('id', 'navbar-lang-' + APP_LANGS[i]).text(APP_LANGS[i]);
            li.append(a);
            $('#navbar-langs').append(li);
            $('#navbar-lang-' + APP_LANGS[i]).click(function() {
                $.cookie('user-lang', $(this).attr('id').split('-')[2]);
                location.reload();
            });
        }

        // Navbar search
        $('#navbar-search').attr('placeholder', I18N['search']['placeholder']);

        // Forms
        $.each(I18N['form'], function(parent_key, value) {
            $.each(I18N['form'][parent_key], function(child_key, value) {
                $('#' + "form-" + parent_key + "-" + child_key).text(value);
            });
        });

        // Pages
        $.each(I18N['page'], function(parent_key, value) {
            $.each(I18N['page'][parent_key], function(child_key, value) {
                $('#' + "page-" + parent_key + "-" + child_key).text(value);
            });
        });

        // Footer
        $.each(I18N['footer'], function(key, value) {
            $('#footer-' + key).text(value);
        });

        // -- Links handlers --
        $('#navbar-logo').click(function() {
            //APP_PAGE = 'help';
            //page(APP_PAGE);
            console.log('hello');
        });

        $('#navbar-users').click(function() {
            //APP_PAGE = 'users';
            //page(APP_PAGE);
            console.log('users');
        });

        $('#navbar-uploads').click(function() {
            //APP_PAGE = 'uploads';
            //page(APP_PAGE);
            console.log('uploads');
        });

        $('#navbar-repos').click(function() {
            repo_list(0);
        });

        $('#form-user-register-offer-link').click(function() {
            //APP_PAGE = 'offer';
            //page(APP_PAGE);
            console.log('offer');
        });

        $('#footer-offer').click(function() {
            //APP_PAGE = 'offer';
            //page(APP_PAGE);
            console.log('offer');
        });

        $('#footer-hello').click(function() {
            //APP_PAGE = 'help';
            //page(APP_PAGE);
            console.log('hello');
        });

        // Show page
        //page(APP_PAGE);

    });
});
