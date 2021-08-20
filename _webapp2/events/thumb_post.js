$(document).ready(function(){

  $("#form-user-update-file-input").change(function(){

    // -- hide error, disable submit & show spinner --
    $("#form-user-update-error").addClass('d-none');
    $('#form-user-update-submit').prop('disabled', true);
    $("#form-user-update-spinner").removeClass('d-none');

    var formData = new FormData();
    formData.append("file", $("#form-user-update-file-input")[0].files[0]);

    $.ajax({
      type: 'POST',
      url: ECHIDNA_API + "thumb/?user_token=" + USER_TOKEN,
      data: formData,
      dataType: 'json',
      cache: false,
      processData: false, 
      contentType: false
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
  });

  /*
  $("#form-user-update-submit").click(function(){

    // -- update thumb --
    if($("#form-user-update-file-input")[0].files.length > 0) {
      var formData = new FormData();
      formData.append("file", $("#form-user-update-file-input")[0].files[0]);

      $.ajax({
        type: 'POST',
        url: ECHIDNA_API + "thumb/?user_token=" + USER_TOKEN,
        data: formData,
        dataType: 'json',
        cache: false,
        processData: false, 
        contentType: false
      }).done(function(msg) {

        if(ECHIDNA_DEBUG) {
          console.log(msg);
        }
  
        if(msg.success == 'true') {
          //window.location.href = ECHIDNA_URL + '?page=hello';
  
        } else {
          // -- show error --
        }
      });
    }


  });
  */

});
