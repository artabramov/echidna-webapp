$(document).ready(function(){
    $('#form-user-register-submit').click(function(){

        // Hide error, disable submit & show spinner
        $('#form-user-register-error').addClass('d-none');
        $('#form-user-register-submit').prop('disabled', true);
        $('#form-user-register-spinner').removeClass('d-none');

        $.ajax({
            method: 'POST',
            url: ECHIDNA_URL + 'user/?user_email=' + $('#form-user-register-email').val() + '&user_name=' + $('#form-user-register-name').val(),
            dataType: 'json'
        }).done(function(msg) {

            if(APP_DEBUG) {
                console.log(msg);
            }

            if(msg.success == 'true') {

                var user_email = $('#form-user-register-email').val();
                hideforms();
                clearforms();
                $('#form-user-signin').offcanvas('show');
                $('#form-user-signin-email').val(user_email);

            } else {
                
                // Show error, enable submit & hide spinner
                $('#form-user-register-error').text(I18N['errors'][msg.error.code]);
                $('#form-user-register-error').removeClass('d-none');
                $('#form-user-register-submit').prop('disabled', false);
                $('#form-user-register-spinner').addClass('d-none');
            }
        });
    });
});
