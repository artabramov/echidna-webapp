$(document).ready(function(){

  // -- pause --
  var search, timer;
  $('#modal-role-insert-user-email').on('keyup', function () {

    search = $('#modal-role-insert-user-email').val();
    if(search.length > 2){

      clearTimeout(timer);
      timer =	setTimeout(function () {

        $.ajax({
          method: "GET",
          url: ECHIDNA_API + "search/user/" + search + "?user_token=" + $.cookie("user-token"),
          dataType: 'json'
    
        }).done(function(msg) {
    
          if(ECHIDNA_DEBUG) {
            console.log(msg);
          }

          if(msg.success == 'true') {
            $("#modal-role-insert-user-search").empty();
            
            msg.users.forEach(function(row) {
              $("#modal-role-insert-user-search").append($("<option>").attr('value', row.user_email).text(row.user_name));
            });
              }
        });
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
        window.location.href = ECHIDNA_URL + '?page=roles&hub_id=' + $("#modal-role-insert-hub-id").val() + '&offset=0';

      } else {
        // -- error --
        $("#modal-role-insert-error").removeClass('d-none');
        $("#modal-role-insert-error").addClass('d-block');
        $("#modal-role-insert-error").text(msg.error);
      }

    });
  });
});
