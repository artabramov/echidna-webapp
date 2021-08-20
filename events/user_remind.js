$(document).ready(function(){

    $("#form-user-remind-submit").click(function(){

        // -- hide error, disable submit & show spinner --
        $("#form-user-remind-error").addClass('d-none');
        $('#form-user-remind-submit').prop('disabled', true);
        $("#form-user-remind-spinner").removeClass('d-none');

        $.ajax({
            method: "GET",
            url: ECHIDNA_URL + "pass/?user_email=" + $("#form-user-remind-email").val(),
            dataType: 'json'

        }).done(function(msg) {

            if(APP_DEBUG) {
                console.log(msg);
            }

            if(msg.success == 'true') {

                // -- toggle forms--
                $('#form-user-signin-email').val($('#form-user-remind-email').val());
                $('#form-user-remind').offcanvas('hide');
                $('#form-user-signin').offcanvas('show');

                // -- clear form, enable submit & hide spinner --
                $('#form-user-remind-email').val('');
                $('#form-user-remind-submit').prop('disabled', false);
                $("#form-user-remind-spinner").addClass('d-none');

            } else {

                // -- show error, enable submit & hide spinner --
                $("#form-user-remind-error").text(I18N['errors'][msg.error.code]);
                $("#form-user-remind-error").removeClass('d-none');
                $('#form-user-remind-submit').prop('disabled', false);
                $("#form-user-remind-spinner").addClass('d-none');
            }

        });

    });
});
