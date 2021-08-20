$(document).ready(function(){
  
  $("#form-repo-insert-submit").click(function(){

    // -- hide error, disable submit & show spinner --
    $("#form-repo-insert-error").addClass('d-none');
    $('#form-repo-insert-submit').prop('disabled', true);
    $("#form-repo-insert-spinner").removeClass('d-none');

    $.ajax({
      method: "POST",
      url: ECHIDNA_API + "repo/?user_token=" + USER_TOKEN + "&repo_name=" + $("#form-repo-insert-name-input").val(),
      dataType: 'json'

    }).done(function(msg) {

      if(ECHIDNA_DEBUG) {
        console.log(msg);
      }

      if(msg.success == 'true') {
        window.location.href = ECHIDNA_URL + '?page=repos&offset=0';

      } else {
        // -- show error, enable submit & hide spinner --
        $("#form-repo-insert-error").text(ECHIDNA_ERRORS[msg.error.code]);
        $("#form-repo-insert-error").removeClass('d-none');
        $('#form-repo-insert-submit').prop('disabled', false);
        $("#form-repo-insert-spinner").addClass('d-none');
      }

    });

  });
});
