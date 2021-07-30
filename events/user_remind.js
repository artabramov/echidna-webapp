$(document).ready(function(){

  $("#modal-user-remind-submit").click(function(){

    $.ajax({
      method: "GET",
      url: ECHIDNA_API + "pass/?user_email=" + $("#modal-user-remind-user-email").val(),
      dataType: 'json'

    }).done(function(msg) {

      if(ECHIDNA_DEBUG) {
        console.log(msg);
      }

      if(msg.success == 'true') {
        // -- clear error --
        $("#modal-user-remind-error").removeClass('d-block');
        $("#modal-user-remind-error").addClass('d-none');
        $("#modal-user-remind-error").text("");

        // -- modals --
        $('#modal-user-remind').modal('hide');
        $('#modal-user-remind-done').modal('show');

      } else {
        // -- error --
        $("#modal-user-remind-error").removeClass('d-none');
        $("#modal-user-remind-error").addClass('d-block');
        $("#modal-user-remind-error").text(msg.error);
      }

    });
  });
});
