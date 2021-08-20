$(document).ready(function(){

  
  $("#form-register-submit").click(function(){

    // -- clear error --
    $("#form-register-error").addClass('d-none');
    $("#form-register-error").text("");

    // -- show spinner --
    $('#form-register-submit').prop('disabled', true);
    $("#form-register-spinner").removeClass('d-none');

    $.ajax({
      method: "POST",
      url: ECHIDNA_API + "user/?user_email=" + $("#form-register-email-input").val() + "&user_name=" + $("#form-register-name-input").val(),
      dataType: 'json'

    }).done(function(msg) {

      if(ECHIDNA_DEBUG) {
        console.log(msg);
      }

      // -- hide spinner --
      $('#form-register-submit').prop('disabled', false);
      $("#form-register-spinner").addClass('d-none');

      if(msg.success == 'true') {

        // -- new form data --
        $("#form-signin-email-input").val( $("#form-register-email-input").val() );

        // -- forms toggle --
        $('#form-register').offcanvas('hide');
        $('#form-signin').offcanvas('show');

        // -- clear error --
        $("#form-register-error").addClass('d-none');
        $("#form-register-error").text("");

        // -- clear form --
        $("#form-register-email-input").val("");
        $("#form-register-name-input").val("");
        $("#form-register-offer-checkbox").prop('checked', false);
        $('#form-register-submit').prop('disabled', true);

      } else {
        // -- show error --
        $("#form-register-error").text(ECHIDNA_ERRORS[msg.error.code]);
        $("#form-register-error").removeClass('d-none');
      }

    });

  });
});
