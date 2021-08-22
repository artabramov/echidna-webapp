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

                // -- clear & hide form --
                $('#form-user-signin').offcanvas('hide');
                $('#form-user-signin-email').val('');
                $('#form-user-signin-pass').val('');
                $('#form-user-signin-submit').prop('disabled', false);
                $("#form-user-signin-spinner").addClass('d-none');

                // -- show navbar links --
                $('#navbar-users').removeClass('d-none');
                $('#navbar-repos').removeClass('d-none');
                $('#navbar-remind').addClass('d-none');

                // -- show navbar user --
                $('#navbar-user').text(msg.user.user_name);
                $('#navbar-user').removeClass('d-none');

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
