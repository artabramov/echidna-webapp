$(document).ready(function(){
    $("#role-insert-submit").click(function(){

        $.ajax({
            method: "POST",
            url: ECHIDNA_URL + "/role?user_token=" + $.cookie("user-token") + "&hub_id=" + $("#role-insert-hub-id").val() + "&user_email=" + $("#role-insert-user-email").val() + "&user_role=" + $("input[name='user-role']:checked").val(),
            dataType: 'json'

        }).done(function( msg ) {

            if(ECHIDNA_DEBUG) {
                console.log(msg);
            }

            if(msg.success == "true") {
              window.location.href = ECHIDNA_URL + '/?page=hub_select&hub_id=' + $("#role-insert-hub-id").val();
              
            } else {
              $("#role-insert-error").removeClass('d-none');
              $("#role-insert-error").addClass('d-block');
              $("#role-insert-error").text(msg.error);
            }
           
        });
    });
});
