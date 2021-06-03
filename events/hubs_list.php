<script>
    $(document).ready(function(){
        
        function output() {

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
                        //$('#hubs-table tr:last').after('<tr><th scope="row">' + hub.id + '</th><td>' + hub.hub_status + '</td><td>' + hub.hub_name + '</td><td>' + hub.roles_count + '</td><td>' + hub.posts_count + '</td></tr>');
                        $('#hubs-table').find('tbody').append('<tr><th scope="row">' + hub.id + '</th><td>' + hub.hub_status + '</td><td>' + hub.hub_name + '</td><td>' + hub.roles_count + '</td><td>' + hub.posts_count + '</td></tr>');
                    });

                    /*
                    foreach(msg.hubs as hub) {
                        $('#hubs-table tr:last').after('<tr><th scope="row">1</th><td>Mark</td><td>Otto</td><td>@mdo</td><td>@mdo</td></tr>');
                    }
                    */
                } else {
                }
          
        });


    }


    output();
  });

</script>