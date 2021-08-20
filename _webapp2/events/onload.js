// -- User token --
const USER_TOKEN = $.cookie('user-token');

// -- User language --
if($.cookie('user-lang')) {
  var lang = $.cookie('user-lang');
} else {
  var lang = navigator.language || navigator.userLanguage;
  lang = lang.split('-')[0];
  $.cookie('user-lang', lang);
}
const USER_LANG = ECHIDNA_LANGUAGES.includes(lang) ? lang : 'en';

// -- Errors, months & filesizes --
var errors = [];
var filesizes = [];
var months = [];
$.getJSON(ECHIDNA_URL + 'webapp/i18n/' + USER_LANG + '.json', function(data) {
    $.each(data, function(key, value) {

        if(key == 'errors') {
          $.each(value, function(error_key, error_value) {
            errors[error_key] = error_value;
          });
        }

        if(key == 'filesizes') {
          $.each(value, function(_, filesize) {
            filesizes.push(filesize);
          });
        }

        if(key == 'months') {
          $.each(value, function(_, month) {
            months.push(month);
          });
        }

    });
    
});
const ECHIDNA_FILESIZES = filesizes;
const ECHIDNA_ERRORS = errors;
const ECHIDNA_MONTHS = months;

// -- Timezones --
const ECHIDNA_TIMEZONES = [
  'Europe/London', 'Europe/Malta', 'Europe/Helsinki', 'Europe/Moscow',
  'Indian/Maldives'
];

// -- Translate page --
$(document).ready(function() {
    $.getJSON(ECHIDNA_URL + 'webapp/i18n/' + USER_LANG + '.json', function(data) {
        $.each(data, function(key, value) {
            if(key.split('-')[0] != 'error') {
                $('#' + key).text(value);
            }
        });
    });
});
