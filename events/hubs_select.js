function hubs_select(hub_status, offset) {

  //console.log(hub_status);

  $.ajax({
    method: "GET",
    url: ECHIDNA_URL + "/hub?user_token=" + $.cookie("user-token") + "&hub_status=" + hub_status + "&offset=" + offset,
    dataType: 'json'

  }).done(function( msg ) {

    if(ECHIDNA_DEBUG) {
      console.log(msg);
    }

    if(msg.success == "true") {

      $("#hubs-table tbody").empty();

      msg.hubs.forEach(function(hub) {
          $('#hubs-table').find('tbody').append('<tr><th scope="row">' + hub.id + '</th><td>' + hub.hub_status + '</td><td><a href="' + ECHIDNA_URL + '?page=hub_select&hub_id=' + hub.id + '">' + hub.hub_name + '</a></td><td>' + hub.roles_count + '</td><td>' + hub.posts_count + '</td></tr>');
      });

      pagination(offset, ECHIDNA_ROWS_ON_PAGE, msg.hubs_count, ECHIDNA_URL + '/?page=hubs&hub_status=custom&offset=');

    } else {
    }

  });


}