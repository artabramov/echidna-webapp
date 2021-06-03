<script>
    $(document).ready(function(){
        $("#hub-add-submit").click(function(){

            $.ajax({
                method: "POST",
                url: ECHIDNA_URL + "/hub?user_token=" + $.cookie("user-token") + "&hub_name=" + $("#hub-add-name").val(),
                dataType: 'json'

            }).done(function( msg ) {
                if(ECHIDNA_DEBUG) {
                    console.log(msg);
                }

                if(msg.success == "true") {

                    // hide modal
                    $('#hub-add-modal').modal('hide');
                    $("#hub-add-name").val("");



                    $.ajax({
                        method: "GET",
                        url: ECHIDNA_URL + "/hub?user_token=" + $.cookie("user-token") + "&hub_status=<?php echo $hub_status; ?>",
                        dataType: 'json'
                    }).done(function( msg ) {
                        if(ECHIDNA_DEBUG) {
                        console.log(msg);
                        }
                        if(msg.success == 'true') {
                            $("#hubs-table tbody").empty();
                            msg.hubs.forEach(function(hub) {
                                $('#hubs-table').find('tbody').append('<tr><th scope="row">' + hub.id + '</th><td>' + hub.hub_status + '</td><td>' + hub.hub_name + '</td><td>' + hub.roles_count + '</td><td>' + hub.posts_count + '</td></tr>');
                            });
                        }
                    });
                }
                
            });
        });
    });
</script>
