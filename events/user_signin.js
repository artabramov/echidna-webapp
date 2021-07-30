$(document).ready(function(){

  $("#modal-user-signin-submit").click(function(){

    $.ajax({
      method: "POST",
      url: ECHIDNA_API + "pass/?user_email=" + $("#modal-user-signin-user-email").val() + "&user_pass=" + $("#modal-user-signin-user-pass").val(),
      dataType: 'json'

    }).done(function(msg) {

      if(ECHIDNA_DEBUG) {
        console.log(msg);
      }

      if(msg.success == 'true') {
        $.cookie("user-token", msg.user.user_token);
        window.location.href = ECHIDNA_URL + '?page=hello';
      }

    });
  });
});
