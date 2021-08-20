$(document).ready(function(){
  
  $("#form-signin-submit").click(function(){

    // -- clear error --
    $("#form-signin-error").addClass('d-none');
    $("#form-signin-error").text("");

    // -- show spinner --
    $('#form-signin-submit').prop('disabled', true);
    $("#form-signin-spinner").removeClass('d-none');

    $.ajax({
      method: "POST",
      url: ECHIDNA_API + "pass/?user_email=" + $("#form-signin-email-input").val() + "&user_pass=" + $("#form-signin-pass-input").val(),
      dataType: 'json'

    }).done(function(msg) {

      if(ECHIDNA_DEBUG) {
        console.log(msg);
      }

      // -- hide spinner --
      $('#form-signin-submit').prop('disabled', false);
      $("#form-signin-spinner").addClass('d-none');

      if(msg.success == 'true') {

        $.cookie("user-token", msg.user.user_token);
        window.location.href = ECHIDNA_URL + '?page=hello';

      } else {
        // -- show error --
        $("#form-signin-error").text(ECHIDNA_ERRORS[msg.error.code]);
        $("#form-signin-error").removeClass('d-none');
      }

    });

  });
});
