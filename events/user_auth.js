$(document).ready(function(){

    $.ajax({
        method: 'POST',
        url: ECHIDNA_URL + 'token/?user_token=' + USER_TOKEN,
        dataType: 'json'

        }).done(function(msg) {

            if(APP_DEBUG) {
                console.log(msg);
            }

            if(msg.success == 'true') {
                $.cookie('user-token', msg.user.user_token);
                var USER_TIMEZONE = msg.user.user_terms.user_timezone;

                // -- show navbar links --
                $('#navbar-users').removeClass('d-none');
                $('#navbar-repos').removeClass('d-none');
                $('#navbar-remind').addClass('d-none');

                // -- user thumb --
                if(typeof msg.user.user_terms.thumb_path != 'undefined') {
                    $("#form-user-update-thumb").prop('src', msg.user.user_terms.thumb_path);
                    $("#form-user-update-thumb").removeClass('d-none');
                }

                // -- show navbar user --
                $('#navbar-user').text(msg.user.user_name);
                $('#navbar-user').removeClass('d-none');

                $('#form-user-update-email').text(msg.user.user_email);
                $('#form-user-update-name').val(msg.user.user_name);
                $('#form-user-update-bio').val(msg.user.user_terms.user_bio);
                $('#form-user-update-create-date').text(datetime(msg.user.create_date, USER_TIMEZONE));

                // -- timezones --
                $.each(APP_TIMEZONES, function(key, value) {
                    $("#form-user-update-timezone").append(new Option(value, value));
                });
                $("#form-user-update-timezone").val(USER_TIMEZONE).change();


                

                /*
                // -- user --
                $("#navbar-user-name").text(msg.user.user_name);
                $("#form-user-update-email").text(msg.user.user_email);
                $("#form-user-update-name-input").val(msg.user.user_name);
                $("#form-user-update-create-date").text( getDatetime(msg.user.create_date, USER_TIMEZONE) );

                // -- progress --
                var uploads_sum = typeof msg.user.user_terms.uploads_sum == 'undefined' ? 0 : parseInt(msg.user.user_terms.uploads_sum);
                var volume_size = parseInt(msg.user.user_terms.volume_size);
                var uploads_percents = uploads_sum / (volume_size / 100);

                $("#form-user-volume-progress").css("width", parseInt(uploads_percents) + "%");
                $("#form-user-volume-progress").attr("aria-valuenow", parseInt(uploads_percents));
                $("#form-user-volume-progress-valuenow").text(getFilesize(uploads_sum));
                $("#form-user-volume-progress-valuemax").text(getFilesize(volume_size));

                // -- timezones select --
                $.each(ECHIDNA_TIMEZONES, function(_, timezone) {
                $("#form-user-update-timezone-select").append(new Option(timezone, timezone));
                });
                $("#form-user-update-timezone-select").val(msg.user.user_terms.user_timezone).change();

                // -- volume expires --
                var expires = getInterval(msg.user.user_terms.volume_expires);
                if(expires < 367) {
                $("#form-user-volume-days").text(expires);
                $("#form-user-volume-expires").removeClass('d-none');
                }


                // -- user image --
                if(typeof msg.user.user_terms.thumb_path != 'undefined') {
                $("#form-user-update-thumb-img").attr('src', msg.user.user_terms.thumb_path);
                $("#form-user-update-thumb").removeClass('d-none');
                }

                // -- navbar --
                $("#navbar-users").removeClass('d-none');
                $("#navbar-repos").removeClass('d-none');
                $("#navbar-user").removeClass('d-none');
                */

        } else {
            $.cookie('user-token', '');
            $('#navbar-remind').removeClass('d-none');
        }

    });

});
