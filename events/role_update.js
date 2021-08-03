$(document).ready(function(){

  $("#modal-role-update-submit").click(function(){

    $.ajax({
      method: "PUT",
      url: ECHIDNA_API + "role/?user_token=" + $.cookie("user-token") + "&hub_id=" + $("#modal-role-update-hub-id").val() + "&user_id=" + $("#modal-role-update-user-id").val() + "&role_status=" + $("input[name='modal-role-update-role-status']:checked").val(),
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
