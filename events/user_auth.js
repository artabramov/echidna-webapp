$(document).ready(function(){

    if(USER_TOKEN) {
        $.ajax({
            method: 'POST',
            url: ECHIDNA_URL + 'token/?user_token=' + USER_TOKEN,
            dataType: 'json'

            }).done(function(msg) {

                if(APP_DEBUG) {
                    console.log(msg);
                }

                if(msg.success == 'true') {
                    var USER_TIMEZONE = msg.user.user_terms.user_timezone;

                    // -- show navbar links --
                    $('#navbar-users').removeClass('d-none');
                    $('#navbar-repos').removeClass('d-none');
                    $('#navbar-uploads').removeClass('d-none');
                    $('#navbar-search').removeClass('d-none');
                    $('#navbar-user').removeClass('d-none');
                    $('#navbar-user').text(msg.user.user_name);
                    $('#navbar-remind').addClass('d-none');

                    // -- show user data --
                    if(typeof msg.user.user_terms.thumb_file != 'undefined') {
                        $("#form-user-update-thumb").prop('src', msg.user.user_terms.thumb_file);
                        $("#form-user-update-thumb").removeClass('d-none');
                    }                    
                    $('#form-user-update-email').text(msg.user.user_email);
                    $('#form-user-update-name').val(msg.user.user_name);
                    $('#form-user-update-bio').val(msg.user.user_terms.user_bio);
                    $('#form-user-update-create-date').text(datetime(msg.user.create_date, USER_TIMEZONE));

                    // -- timezones --
                    $.each(APP_TIMEZONES, function(key, value) {
                        $('#form-user-update-timezone').append(new Option(value, value));
                    });
                    $('#form-user-update-timezone').val(USER_TIMEZONE).change();

            } else {
                $('#navbar-remind').removeClass('d-none');
            }
        });

    } else {
        $('#navbar-remind').removeClass('d-none');
    }
});
