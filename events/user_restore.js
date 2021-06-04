$(document).ready(function(){

  $("#modal-signin-restore").click(function(){

    $.ajax({
      method: "GET",
      url: ECHIDNA_URL + "/pass?user_email=" + $("#modal-signin-user-email").val(),
      dataType: 'json'

    }).done(function( msg ) {

      if(ECHIDNA_DEBUG) {
        console.log(msg);
      }

      if(msg.success == "true") {

        // clear error
        $("#modal-signin-error").removeClass('d-block');
        $("#modal-signin-error").addClass('d-none');
        $("#modal-signin-error").text("");

        // update form
        $("#modal-signin-user-pass-group").removeClass('d-none');
        $("#modal-signin-user-pass-group").addClass('d-block');
        $("#modal-signin-done").removeClass('d-none');
        $("#modal-signin-done").addClass('d-block');

      } else {

        // show error
        $("#modal-signin-error").removeClass('d-none');
        $("#modal-signin-error").addClass('d-block');
        $("#modal-signin-error").text(msg.error);
      }
    });
  });
});