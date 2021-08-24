$(document).ready(function(){

    $("#form-user-update-file").change(function(){

        // -- hide error, disable submit & show spinner --
        $("#form-user-update-error").addClass('d-none');
        $('#form-user-update-submit').prop('disabled', true);
        $("#form-user-update-spinner").removeClass('d-none');

        var formData = new FormData();
        formData.append("file", $("#form-user-update-file")[0].files[0]);

        $.ajax({
            type: 'POST',
            url: ECHIDNA_URL + "thumb/?user_token=" + USER_TOKEN,
            data: formData,
            dataType: 'json',
            cache: false,
            processData: false, 
            contentType: false

        }).done(function(msg) {

            if(APP_DEBUG) {
                console.log(msg);
            }

            if(msg.success == 'true') {

                // -- user thumb --
                $("#form-user-update-file").val('');
                $("#form-user-update-thumb").prop('src', msg.user_term.thumb_file);
                $("#form-user-update-thumb").removeClass('d-none');

                // -- hide error --
                $("#form-user-update-error").addClass('d-none');
                $('#form-user-update-submit').prop('disabled', false);
                $("#form-user-update-spinner").addClass('d-none');

            } else {
                // -- show error, enable submit & hide spinner --
                $('#form-user-update-error').text(I18N['errors'][msg.error.code]);
                $('#form-user-update-error').removeClass('d-none');
                $('#form-user-update-submit').prop('disabled', false);
                $('#form-user-update-spinner').addClass('d-none');
            }
        });
    });

});
