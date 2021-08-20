$(document).ready(function(){
  
  $("#form-user-update-submit").click(function(){

    // -- hide error, disable submit & show spinner --
    $("#form-user-update-error").addClass('d-none');
    $('#form-user-update-submit').prop('disabled', true);
    $("#form-user-update-spinner").removeClass('d-none');

    // -- update user --
    $.ajax({
      method: "PUT",
      url: ECHIDNA_API + "user/?user_token=" + USER_TOKEN + "&user_name=" + $("#form-user-update-name-input").val(),
      dataType: 'json'

    }).done(function(msg) {

      if(ECHIDNA_DEBUG) {
        console.log(msg);
      }

      if(msg.success == 'true') {

        // -- update timezone --
        $.ajax({
          method: "PUT",
          url: ECHIDNA_API + "timezone/?user_token=" + USER_TOKEN + "&user_timezone=" + $("#form-user-update-timezone-select").val(),
          dataType: 'json'

        }).done(function(msg) {

          if(ECHIDNA_DEBUG) {
            console.log(msg);
          }

          if(msg.success == 'true') {
            window.location.href = ECHIDNA_URL + '?page=hello';
    
          } else {

            // -- show error, enable submit & hide spinner --
            $("#form-user-update-error").text(ECHIDNA_ERRORS[msg.error.code]);
            $("#form-user-update-error").removeClass('d-none');
            $('#form-user-update-submit').prop('disabled', false);
            $("#form-user-update-spinner").addClass('d-none');
          }
        });

      } else {

        // -- show error, enable submit & hide spinner --
        $("#form-user-update-error").text(ECHIDNA_ERRORS[msg.error.code]);
        $("#form-user-update-error").removeClass('d-none');
        $('#form-user-update-submit').prop('disabled', false);
        $("#form-user-update-spinner").addClass('d-none');
      }


    });

  });
});
