$(document).ready(function(){
    $('#form-user-remind-submit').click(function(){

        // Hide error, disable submit & show spinner
        $('#form-user-remind-error').addClass('d-none');
        $('#form-user-remind-submit').prop('disabled', true);
        $('#form-user-remind-spinner').removeClass('d-none');

        $.ajax({
            method: 'GET',
            url: ECHIDNA_URL + 'pass/?user_email=' + $('#form-user-remind-email').val(),
            dataType: 'json'

        }).done(function(msg) {

            if(APP_DEBUG) {
                console.log(msg);
            }

            if(msg.success == 'true') {

                var user_email = $('#form-user-remind-email').val();
                hideforms();
                clearforms();
                $('#form-user-signin').offcanvas('show');
                $('#form-user-signin-email').val(user_email);

            } else {

                // Show error, enable submit & hide spinner
                $('#form-user-remind-error').text(I18N['errors'][msg.error.code]);
                $('#form-user-remind-error').removeClass('d-none');
                $('#form-user-remind-submit').prop('disabled', false);
                $('#form-user-remind-spinner').addClass('d-none');
            }
        });
    });
});
