<h1>Pals</h1>

<script>
    $(document).ready(function(){

        $(document).ready(function(){
    function user_auth() {

      $.ajax({
          method: "GET",
          url: ECHIDNA_URL + "/pals?user_token=" + $.cookie("user-token"),
          dataType: 'json'

      }).done(function( msg ) {
        if(ECHIDNA_DEBUG) {
          console.log(msg);
        }

        if(msg.success == 'true') {
        } else {
        }
          
      });


    }


    user_auth();
  });



        /*
        $("#signin-submit").click(function(){

            $.ajax({
                method: "POST",
                url: ECHIDNA_URL + "/pass?user_email=" + $("#signin-user-email").val() + "&user_pass=" + $("#signin-user-pass").val(),
                dataType: 'json'

            }).done(function( msg ) {
                if(ECHIDNA_DEBUG) {
                    console.log(msg);
                }

                if(msg.success == "false") {
                    $("#signin-error").removeClass('d-none');
                    $("#signin-error").addClass('d-block');
                    $("#signin-error").text(msg.error);

                } else {
                    $.cookie("user-token", msg.user.user_token);
                    window.location.href = ECHIDNA_URL + '/?page=hello';
                }
            });
        });
        */
    });
</script>