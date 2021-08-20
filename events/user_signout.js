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
                //window.location.href = ECHIDNA_URL + '?page=hello';
            }

        });

    });

});