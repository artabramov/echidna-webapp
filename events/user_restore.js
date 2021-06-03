$(document).ready(function(){

  $("#modal-restore-submit").click(function(){

    if(ECHIDNA_DEBUG) {
      console.log('signout');
    }

      $.ajax({
        method: "GET",
        url: ECHIDNA_URL + "/pass?user_email=" + $("#modal-restore-user-email").val(),
        dataType: 'json'

      }).done(function( msg ) {

        if(ECHIDNA_DEBUG) {
          console.log(msg);
        }

          if(msg.success == "true") {

            // switch errors
            $('#modal-restore').modal('hide');
            $('#modal-restored').modal('show');

            // clear error
            $("#modal-restore-error").removeClass('d-block');
            $("#modal-restore-error").addClass('d-none');
            $("#modal-restore-error").text("");

            // update signin email
            $("#modal-signin-user-email").val( $("#restore-user-email").val() );

            // clear input
            $("#modal-restore-user-email").val("");

          } else {

            // show error
            $("#modal-restore-error").removeClass('d-none');
            $("#modal-restore-error").addClass('d-block');
            $("#modal-restore-error").text(msg.error);
          }
      });
  });
});