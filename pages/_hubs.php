<h1>Hubs</h1>


<a href="<?php echo ECHIDNA_URL; ?>/?page=hubs&hub_status=custom&offset=0" class="btn <?php echo $_GET['hub_status'] == 'custom' ? 'btn-primary' : 'btn-link'; ?>">Custom</a>

<a href="<?php echo ECHIDNA_URL; ?>/?page=hubs&hub_status=trash&offset=0" class="btn <?php echo $_GET['hub_status'] == 'trash' ? 'btn-primary' : 'btn-link'; ?>">Trash</a>

<button href="#" data-toggle="modal" data-target="#hub-add-modal" class="btn btn-outline-primary">Add hub</button>

<table id="hubs-table" class="table">
  <thead>
    <tr>
      <th scope="col">hub_id</th>
      <th scope="col">hub_status</th>
      <th scope="col">hub_name</th>
      <th scope="col">roles_count</th>
      <th scope="col">posts_count</th>
    </tr>
  </thead>
  <tbody>
  <!--
  <tr>
      <th scope="row">1</th>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
  -->
  </tbody>
</table>


<script>
    $(document).ready(function(){

        //var page = getUrlParameter('page');
        //console.log(page);

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
