$(document).ready(function(){

  // -- pause --

  /*
  var search, timer;
  $('#search1').on('keyup', function () {
      search = $('#search1').val();
      $('#result').html('Min 3 characters');
      if(search.length > 2){ //min char number 3
    clearTimeout(timer);
          $('#result').html('loading..');
    timer =	setTimeout(function () {
            $('#result').html(search);
    }, 2000); // time to wait before executing, 2000 milli seconds here
     }
  });
  */

  var search, timer;
  $('#modal-role-insert-user-email').on('keyup', function () {
    search = $('#modal-role-insert-user-email').val();
    if(search.length > 2){
      clearTimeout(timer);
      

      timer =	setTimeout(function () {
        console.log(search);
      }, 1000);

    }
  });

  

  // -- submit --
  $("#modal-role-insert-submit").click(function(){

    $.ajax({
      method: "POST",
      url: ECHIDNA_API + "role/?user_token=" + $.cookie("user-token") + "&hub_id=" + $("#modal-role-insert-hub-id").val() + "&user_email=" + $("#modal-role-insert-user-email").val() + "&role_status=" + $("input[name='modal-role-insert-role-status']:checked").val(),
      dataType: 'json'

    }).done(function(msg) {

      if(ECHIDNA_DEBUG) {
        console.log(msg);
      }

      if(msg.success == 'true') {
        //window.location.href = ECHIDNA_URL + '?page=posts&hub_id=' + msg.hub_id + '&post_status=todo&offset=0';

      } else {
        // -- error --
        $("#modal-role-insert-error").removeClass('d-none');
        $("#modal-role-insert-error").addClass('d-block');
        $("#modal-role-insert-error").text(msg.error);
      }

    });
  });
});
