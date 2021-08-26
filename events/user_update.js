$(document).ready(function(){
    $('#form-user-update-submit').click(function(){

        // Hide error, disable submit & show spinner
        $('#form-user-update-error').addClass('d-none');
        $('#form-user-update-submit').prop('disabled', true);
        $('#form-user-update-spinner').removeClass('d-none');

        // Update user
        $.ajax({
            method: 'PUT',
            url: ECHIDNA_URL + 'user/?user_token=' + USER_TOKEN + '&user_name=' + $('#form-user-update-name').val(),
            dataType: 'json'
        }).done(function(msg) {

            if(APP_DEBUG) {
                console.log(msg);
            }

            if(msg.success == 'true') {

                // Update timezone
                $.ajax({
                    method: 'PUT',
                    url: ECHIDNA_URL + 'timezone/?user_token=' + USER_TOKEN + '&user_timezone=' + $('#form-user-update-timezone').val(),
                    dataType: 'json'

                }).done(function(msg) {

                    if(APP_DEBUG) {
                        console.log(msg);
                    }

                    if(msg.success == 'true') {

                        // Update bio
                        $.ajax({
                            method: 'PUT',
                            url: ECHIDNA_URL + 'bio/?user_token=' + USER_TOKEN + '&user_bio=' + $('#form-user-update-bio').val(),
                            dataType: 'json'

                        }).done(function(msg) {

                            if(APP_DEBUG) {
                                console.log(msg);
                            }

                            if(msg.success == 'true') {

                                // Update user name & timezone
                                $('#navbar-user').text($('#form-user-update-name').val());
                                USER_TIMEZONE = $('#form-user-update-timezone').val();

                                // Hide error
                                $('#form-user-update-error').addClass('d-none');
                                $('#form-user-update-submit').prop('disabled', false);
                                $('#form-user-update-spinner').addClass('d-none');

                            } else {

                                // Show error, enable submit & hide spinner
                                $('#form-user-update-error').text(I18N['errors'][msg.error.code]);
                                $('#form-user-update-error').removeClass('d-none');
                                $('#form-user-update-submit').prop('disabled', false);
                                $('#form-user-update-spinner').addClass('d-none');
                            }
                        });

                    } else {

                        // Show error, enable submit & hide spinner
                        $('#form-user-update-error').text(I18N['errors'][msg.error.code]);
                        $('#form-user-update-error').removeClass('d-none');
                        $('#form-user-update-submit').prop('disabled', false);
                        $('#form-user-update-spinner').addClass('d-none');
                    }
                });

            } else {

                // Show error, enable submit & hide spinner
                $('#form-user-update-error').text(I18N['errors'][msg.error.code]);
                $('#form-user-update-error').removeClass('d-none');
                $('#form-user-update-submit').prop('disabled', false);
                $('#form-user-update-spinner').addClass('d-none');
            }

        });

    });
});
