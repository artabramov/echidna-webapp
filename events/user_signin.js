$(document).ready(function(){

    $("#form-user-signin-submit").click(function(){

        // -- hide error, disable submit & show spinner --
        $("#form-user-signin-error").addClass('d-none');
        $('#form-user-signin-submit').prop('disabled', true);
        $("#form-user-signin-spinner").removeClass('d-none');

        $.ajax({
            method: "POST",
            url: ECHIDNA_URL + "pass/?user_email=" + $("#form-user-signin-email").val() + "&user_pass=" + $("#form-user-signin-pass").val(),
            dataType: 'json'

        }).done(function(msg) {

            if(APP_DEBUG) {
                console.log(msg);
            }

            if(msg.success == 'true') {
                $.cookie('user-token', msg.user.user_token);
                USER_TOKEN = msg.user.user_token;
                var USER_TIMEZONE = msg.user.user_terms.user_timezone;

                // -- clear & hide form --
                $('#form-user-signin').offcanvas('hide');
                $('#form-user-signin-email').val('');
                $('#form-user-signin-pass').val('');
                $('#form-user-signin-submit').prop('disabled', false);
                $("#form-user-signin-spinner").addClass('d-none');

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
                    $("#form-user-update-timezone").append(new Option(value, value));
                });
                $("#form-user-update-timezone").val(USER_TIMEZONE).change();

            } else {

                // -- show error, enable submit & hide spinner --
                $("#form-user-signin-error").text(I18N['errors'][msg.error.code]);
                $("#form-user-signin-error").removeClass('d-none');
                $('#form-user-signin-submit').prop('disabled', false);
                $("#form-user-signin-spinner").addClass('d-none');
            }

        });

    });
});
