$(document).ready(function(){

  $("#modal-hub-edit-submit-update").click(function(){

    $.ajax({
      method: "PUT",
      url: ECHIDNA_API + "hub/" + $("#modal-hub-edit-hub-id").val() + "/?user_token=" + $.cookie("user-token") + "&hub_name=" + $("#modal-hub-edit-hub-name").val(),
      dataType: 'json'

    }).done(function(msg) {

      if(ECHIDNA_DEBUG) {
        console.log(msg);
      }

      if(msg.success == 'true') {
        //window.location.href = ECHIDNA_URL + '?page=hubs&offset=0';
        window.location.href = ECHIDNA_URL + '?page=posts&hub_id=' + $("#modal-hub-edit-hub-id").val() + '&post_status=doing&offset=0';

      } else {
        // -- error --
        $("#modal-hub-edit-error").removeClass('d-none');
        $("#modal-hub-edit-error").addClass('d-block');
        $("#modal-hub-edit-error").text(msg.error);
      }

    });
  });
});
