$(document).ready(function(){

    $("#form-user-register-submit").click(function(){

        // -- hide error, disable submit & show spinner --
        $("#form-user-register-error").addClass('d-none');
        $('#form-user-register-submit').prop('disabled', true);
        $("#form-user-register-spinner").removeClass('d-none');

        $.ajax({
            method: "POST",
            url: ECHIDNA_URL + "user/?user_email=" + $("#form-user-register-email").val() + "&user_name=" + $("#form-user-register-name").val(),
            dataType: 'json'
        }).done(function(msg) {

            if(APP_DEBUG) {
                console.log(msg);
            }

            if(msg.success == 'true') {

                // -- toggle forms--
                $('#form-user-signin-email').val($('#form-user-register-email').val());
                $('#form-user-register').offcanvas('hide');
                $('#form-user-signin').offcanvas('show');

                // -- clear form, enable submit & hide spinner --
                $('#form-user-register-email').val('');
                $('#form-user-register-name').val('');
                $('#form-user-register-offer').prop('checked', false)
                $('#form-user-register-submit').prop('disabled', true);
                $("#form-user-register-spinner").addClass('d-none');

            } else {
                
                // -- show error, enable submit & hide spinner --
                $("#form-user-register-error").text(I18N['errors'][msg.error.code]);
                $("#form-user-register-error").removeClass('d-none');
                $('#form-user-register-submit').prop('disabled', false);
                $("#form-user-register-spinner").addClass('d-none');
            }

        });

    });
});
