$(document).ready(function(){

  $("#modal-user-register-submit").click(function(){

    $.ajax({
      method: "POST",
      url: ECHIDNA_API + "user/?user_email=" + $("#modal-user-register-user-email").val() + "&user_name=" + $("#modal-user-register-user-name").val() + "&user_phone=" + $("#modal-user-register-user-phone").val(),
      dataType: 'json'

    }).done(function(msg) {

      if(ECHIDNA_DEBUG) {
        console.log(msg);
      }

      if(msg.success == 'true') {
        // -- clear error --
        $("#modal-user-register-error").removeClass('d-block');
        $("#modal-user-register-error").addClass('d-none');
        $("#modal-user-register-error").text("");

        // -- modals --
        $('#modal-user-register').modal('hide');
        $('#modal-user-register-done').modal('show');

      } else {
        // -- error --
        $("#modal-user-register-error").removeClass('d-none');
        $("#modal-user-register-error").addClass('d-block');
        $("#modal-user-register-error").text(msg.error);
      }

    });
  });
});
