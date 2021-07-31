$(document).ready(function(){

  $("#modal-hub-delete-submit").click(function(){

    $.ajax({
      method: "DELETE",
      url: ECHIDNA_API + "hub/" + $("#modal-hub-delete-hub-id").val() + "/?user_token=" + $.cookie("user-token"),
      dataType: 'json'

    }).done(function(msg) {

      if(ECHIDNA_DEBUG) {
        console.log(msg);
      }

      if(msg.success == 'true') {
        window.location.href = ECHIDNA_URL + '?page=hubs&offset=0';

      } else {
        // -- error --
        $("#modal-hub-delete-error").removeClass('d-none');
        $("#modal-hub-delete-error").addClass('d-block');
        $("#modal-hub-delete-error").text(msg.error);
      }

    });
  });
});
