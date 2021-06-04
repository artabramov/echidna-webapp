$(document).ready(function(){
  
  $("#modal-register-done").click(function(){
    user_email = $("#modal-register-user-email").val();
    user_name = $("#modal-register-user-name").val();

    $.ajax({
      method: "POST",
      url: ECHIDNA_URL + "/user?user_email=" + user_email + "&user_name=" + user_name,
      dataType: 'json'

    }).done(function( msg ) {

      if(ECHIDNA_DEBUG) {
        console.log(msg);
      }

      if(msg.success == "true") {
        modal('registered');

        // hide error
        $("#modal-register-error").removeClass('d-block');
        $("#modal-register-error").addClass('d-none');
        $("#modal-register-error").text("");

        // clear form
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