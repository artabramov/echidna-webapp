$(document).ready(function(){
  
  $("#form-user-volume-submit").click(function(){

    // -- hide error, disable submit & show spinner --
    $("#form-user-premium-error").addClass('d-none');
    $('#form-user-premium-submit').prop('disabled', true);
    $("#form-user-premium-spinner").removeClass('d-none');

    $.ajax({
      method: "GET",
      url: ECHIDNA_API + "premium/?user_token=" + USER_TOKEN + "&premium_code=" + $("#form-user-volume-premium-code-input").val(),
      dataType: 'json'

    }).done(function(msg) {

      if(ECHIDNA_DEBUG) {
        console.log(msg);
      }

      if(msg.success == 'true') {
        window.location.href = ECHIDNA_URL + '?page=hello';

      } else {

        // -- show error, enable submit & hide spinner --
        $("#form-user-volume-error").text(ECHIDNA_ERRORS[msg.error.code]);
        $("#form-user-volume-error").removeClass('d-none');
        $('#form-user-volume-submit').prop('disabled', false);
        $("#form-user-volume-spinner").addClass('d-none');
      }

    });

  });
});
