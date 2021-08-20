$(document).ready(function() {

    const ECHIDNA_URL = 'http://project.local/';
    const APP_DEBUG = true;
    const APP_LANGS = ['ru', 'en'];

    // -- User token --
    const USER_TOKEN = !$.cookie('user-token') ? null : $.cookie('user-token');
    $.cookie('user-token', USER_TOKEN);

    // -- User language --
    var lang = !$.cookie('user-lang') ? navigator.language.split('-')[0] || navigator.userLanguage.split('-')[0] : $.cookie('user-lang');
    const USER_LANG = APP_LANGS.includes(lang) ? lang : 'en';
    $.cookie('user-lang', USER_LANG);

    // -- i18n --
    var app_i18n = [];
    $.getJSON(ECHIDNA_URL + 'webapp/i18n/' + USER_LANG + '.json', function(data) {
        $.each(data, function(key, value) {
            app_i18n[key] = value;
        });
    }).done(function() {
        console.log('done');
        const APP_I18N = app_i18n;
        console.log(APP_I18N['sizes'][2]);
    });

});






