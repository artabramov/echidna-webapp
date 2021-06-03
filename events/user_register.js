$(document).ready(function(){

  $("#modal-register-submit").click(function(){

    if(ECHIDNA_DEBUG) {
      console.log('register');
    }

    $.ajax({
      method: "POST",
      url: ECHIDNA_URL + "/user?user_email=" + $("#modal-register-user-email").val() + "&user_name=" + $("#modal-register-user-name").val(),
      dataType: 'json'

    }).done(function( msg ) {

      if(ECHIDNA_DEBUG) {
        console.log(msg);
      }

      if(msg.success == "true") {

        // switch modals
        $('#modal-register').modal('hide');
        $('#modal-registered').modal('show');

        // hide error
        $("#modal-register-error").removeClass('d-block');
        $("#modal-register-error").addClass('d-none');
        $("#modal-register-error").text("");

        // update signin input
        $("#modal-signin-user-email").val( $("#modal-register-user-email").val() );

        // clear register inputs
        $("#modal-register-user-email").val("");
        $("#modal-register-user-name").val("");

        } else {

          // show error
          $("#modal-register-error").removeClass('d-none');
          $("#modal-register-error").addClass('d-block');
          $("#modal-register-error").text(msg.error);

        }
    });
});

});