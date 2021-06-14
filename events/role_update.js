$(document).ready(function(){
    $("#role-update-submit").click(function(){

        //console.log( $("input[name='role-update-user-role']:checked").val() );

        $.ajax({
            method: "PUT",
            url: ECHIDNA_URL + "/role?user_token=" + $.cookie("user-token") + "&hub_id=" + $("#role-update-hub-id").val() + "&user_id=" + $("#role-update-user-id").val() + "&user_role=" + $("input[name='role-update-user-role']:checked").val(),
            dataType: 'json'

        }).done(function( msg ) {

            if(ECHIDNA_DEBUG) {
                console.log(msg);
            }

            if(msg.success == "true") {
              window.location.href = ECHIDNA_URL + '/?page=hub&hub_id=' + $("#role-update-hub-id").val() + '&offset=0';
              
            } else {
              $("#role-update-error").removeClass('d-none');
              $("#role-update-error").addClass('d-block');
              $("#role-update-error").text(msg.error);
            }
           
        });


    });
});
