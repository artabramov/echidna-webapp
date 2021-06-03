$(document).ready(function(){

  $("#modal-signin-submit").click(function() {

    if(ECHIDNA_DEBUG) {
      console.log('signin');
    }

    $.ajax({
      method: "POST",
      url: ECHIDNA_URL + "/pass?user_email=" + $("#modal-signin-user-email").val() + "&user_pass=" + $("#modal-signin-user-pass").val(),
      dataType: 'json'

    }).done(function( msg ) {

      if(ECHIDNA_DEBUG) {
        console.log(msg);
      }

      if(msg.success == "true") {

        // signin
        $.cookie("user-token", msg.user.user_token);
        window.location.href = ECHIDNA_URL + '/';

      } else {

        // error
        $("#modal-signin-error").removeClass('d-none');
        $("#modal-signin-error").addClass('d-block');
        $("#modal-signin-error").text(msg.error);

      }
    });

  });

});