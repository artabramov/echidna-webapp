function role_rows(hub_id, offset) {

  $.ajax({
    method: "GET",
    url: ECHIDNA_URL + "/roles?user_token=" + $.cookie("user-token") + "&offset=" + offset,
    dataType: 'json'

  }).done(function( msg ) {

    if(ECHIDNA_DEBUG) {
      console.log(msg);
    }

    if(msg.success == "true") {

      /*
      $("#hubs-table tbody").empty();

      msg.rows.forEach(function(row) {
          $('#hubs-table').find('tbody').append('<tr><th scope="row">' + row.id + '</th><td>' + row.create_date + '</td><td><a href="' + ECHIDNA_URL + '?page=hub_select&hub_id=' + row.id + '">' + row.hub_name + '</a></td><td>' + row.roles_count + '</td><td>' + row.posts_count + '</td><td>' + row.user_role + '</td></tr>');
      });

      pagination(offset, ECHIDNA_ROWS_ON_PAGE, msg.roles_count, ECHIDNA_URL + '/?page=hub_rows&offset=');
      */

    } else {
    }

  });


}