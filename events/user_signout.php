<script>
  $(document).ready(function(){

    $("#signout-navbar").click(function() {
        $.ajax({
            method: "PUT",
            url: ECHIDNA_URL + "/token?user_token=" + $.cookie("user-token"),
            dataType: 'json'

        }).done(function( msg ) {
          if(ECHIDNA_DEBUG) {
            console.log(msg);
        }

          if(msg.success == 'true') {
              user_token = $.cookie("user-token", '');
              window.location.href = ECHIDNA_URL + '/';
          }
        });
    });


  });
</script>