$(document).ready(function(){

  $("#modal-post-insert-submit").click(function(){

    $.ajax({
      method: "POST",
      url: ECHIDNA_API + "post/?user_token=" + $.cookie("user-token") + "&hub_id=" + $("#modal-post-insert-hub-id").val() + "&post_title=" + $("#modal-post-insert-post-title").val() + "&post_tags=" + $("#modal-post-insert-post-tags").val() + "&post_status=" + $("input[name='modal-post-insert-post-status']:checked").val(),
      dataType: 'json'

    }).done(function(msg) {

      if(ECHIDNA_DEBUG) {
        console.log(msg);
      }

      if(msg.success == 'true') {
        window.location.href = ECHIDNA_URL + '?page=posts&hub_id=' + $("#modal-post-insert-hub-id").val() + '&post_status=' + $("input[name='modal-post-insert-post-status']:checked").val() + '&offset=0';

      } else {
        // -- error --
        $("#modal-post-insert-error").removeClass('d-none');
        $("#modal-post-insert-error").addClass('d-block');
        $("#modal-post-insert-error").text(msg.error);
      }

    });
  });
});
