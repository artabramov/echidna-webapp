$(document).ready(function(){
    $("#hub-insert-submit").click(function(){

        $.ajax({
            method: "POST",
            url: ECHIDNA_URL + "/hub?user_token=" + $.cookie("user-token") + "&hub_name=" + $("#hub-insert-name").val(),
            dataType: 'json'

        }).done(function( msg ) {

            if(ECHIDNA_DEBUG) {
                console.log(msg);
            }

            if(msg.success == "true") {
              window.location.href = ECHIDNA_URL + '/?page=hubs&hub_status=custom&offset=0';
              
            } else {
              $("#hub-insert-error").removeClass('d-none');
              $("#hub-insert-error").addClass('d-block');
              $("#hub-insert-error").text(msg.error);
            }
           
        });
    });
});
