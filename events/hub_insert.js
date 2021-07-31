$(document).ready(function(){

  $("#modal-hub-insert-submit").click(function(){

    $.ajax({
      method: "POST",
      url: ECHIDNA_API + "hub/?user_token=" + $.cookie("user-token") + "&hub_name=" + $("#modal-hub-insert-hub-name").val(),
      dataType: 'json'

    }).done(function(msg) {

      if(ECHIDNA_DEBUG) {
        console.log(msg);
      }

      if(msg.success == 'true') {
        window.location.href = ECHIDNA_URL + '?page=hubs&offset=0';

      } else {
        // -- error --
        $("#modal-hub-insert-error").removeClass('d-none');
        $("#modal-hub-insert-error").addClass('d-block');
        $("#modal-hub-insert-error").text(msg.error);
      }

    });
  });
});
