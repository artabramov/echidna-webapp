$(document).ready(function(){

  $("#modal-role-update-delete").click(function(){

    $.ajax({
      method: "DELETE",
      url: ECHIDNA_API + "role/?user_token=" + $.cookie("user-token") + "&hub_id=" + $("#modal-role-update-hub-id").val() + "&user_id=" + $("#modal-role-update-user-id").val(),
      dataType: 'json'

    }).done(function(msg) {

      if(ECHIDNA_DEBUG) {
        console.log(msg);
      }

      if(msg.success == 'true') {
        window.location.href = ECHIDNA_URL + '?page=roles&hub_id=' + $("#modal-role-update-hub-id").val() + '&offset=0';

      } else {
        // -- error --
        $("#modal-role-update-error").removeClass('d-none');
        $("#modal-role-update-error").addClass('d-block');
        $("#modal-role-update-error").text(msg.error);
      }

    });
  });
});
