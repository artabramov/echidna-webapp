$(document).ready(function(){

    $('#navbar-user-signout').click(function() {

        $.ajax({
            method: 'PUT',
            url: ECHIDNA_URL + 'token?user_token=' + USER_TOKEN,
            dataType: 'json'

        }).done(function(msg) {

            if(APP_DEBUG) {
                console.log(msg);
            }

            if(msg.success == 'true') {
                $.cookie('user-token', '', { expires: -1 });
                USER_TOKEN = null;

                // -- hide navbar links --
                $('#navbar-users').addClass('d-none');
                $('#navbar-repos').addClass('d-none');
                $('#navbar-uploads').addClass('d-none');
                $('#navbar-search').addClass('d-none');
                $('#navbar-user').addClass('d-none');
                $('#navbar-user').text('');
                $('#navbar-remind').removeClass('d-none');

                // -- clear user data --
                $("#form-user-update-thumb").prop('src', '');
                $("#form-user-update-thumb").addClass('d-none');
                $('#form-user-update-email').text('');
                $('#form-user-update-name').val('');
                $('#form-user-update-bio').val('');
                $('#form-user-update-create-date').text('');

                // -- clear timezones --
                $('#form-user-update-timezone').empty();
            }

        });

    });

});