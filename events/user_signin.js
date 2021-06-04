$(document).ready(function(){

  $("#modal-signin-done").click(function() {

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