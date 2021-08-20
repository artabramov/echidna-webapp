$(document).ready(function(){
  
  $("#form-remind-submit").click(function(){

    // -- clear error --
    $("#form-remind-error").addClass('d-none');
    $("#form-remind-error").text("");

    // -- show spinner --
    $('#form-remind-submit').prop('disabled', true);
    $("#form-remind-spinner").removeClass('d-none');

    $.ajax({
      method: "GET",
      url: ECHIDNA_API + "pass/?user_email=" + $("#form-remind-email-input").val(),
      dataType: 'json'

    }).done(function(msg) {

      if(ECHIDNA_DEBUG) {
        console.log(msg);
      }

      // -- hide spinner --
      $('#form-remind-submit').prop('disabled', false);
      $("#form-remind-spinner").addClass('d-none');

      if(msg.success == 'true') {

        // -- new form data --
        $("#form-signin-email-input").val( $("#form-remind-email-input").val() );

        // -- forms toggle --
        $('#form-remind').offcanvas('hide');
        $('#form-signin').offcanvas('show');

        // -- clear error --
        $("#form-remind-error").addClass('d-none');
        $("#form-remind-error").text("");

        // -- reset form --
        $("#form-remind-email-input").val("");
        $('#form-remind-submit').prop('disabled', false);

      } else {
        // -- show error --
        $("#form-remind-error").text(ECHIDNA_ERRORS[msg.error.code]);
        $("#form-remind-error").removeClass('d-none');
      }

    });

  });
});
