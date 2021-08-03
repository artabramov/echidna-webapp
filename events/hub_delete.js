$(document).ready(function(){

  $("#modal-hub-edit-submit-delete").click(function(){

    $.ajax({
      method: "DELETE",
      url: ECHIDNA_API + "hub/" + $("#modal-hub-edit-hub-id").val() + "/?user_token=" + $.cookie("user-token"),
      dataType: 'json'

    }).done(function(msg) {

      if(ECHIDNA_DEBUG) {
        console.log(msg);
      }

      if(msg.success == 'true') {
        window.location.href = ECHIDNA_URL + '?page=hubs&offset=0';

      } else {
        // -- error --
        $("#modal-hub-edit-error").removeClass('d-none');
        $("#modal-hub-edit-error").addClass('d-block');
        $("#modal-hub-edit-error").text(msg.error);
      }

    });
  });
});
