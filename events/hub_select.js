function hub_select(hub_id, offset) {

  $.ajax({
    method: "GET",
    url: ECHIDNA_URL + "/hub/" + hub_id + "?user_token=" + $.cookie("user-token") + "&offset=" + offset,
    dataType: 'json'

  }).done(function( msg ) {

    if(ECHIDNA_DEBUG) {
      console.log(msg);
    }

    if(msg.success == "true") {

      // hub name
      $("#page-hub-title").text(msg.hub.hub_name);

      // roles
      $("#page-hub-table-roles tbody").empty();
      msg.roles.forEach(function(row) {
          $('#page-hub-table-roles').find('tbody').append('<tr><td>' + row.create_date + '</td><td>' + row.user_id + '</td><td><a href="#" class="modal-role-update link" data-toggle="modal" data-target="#modal-role-update" data-hub-id="' + msg.hub.id + '" data-user-id="' + row.user_id + '" data-user-role="' + row.user_role + '">' + row.user_role + '</a></td></tr>');
      });

      // pagination
      pagination(offset, ECHIDNA_ROWS_ON_PAGE, msg.roles_count, ECHIDNA_URL + '/?page=hub&hub_id=' + hub_id + '&offset=');

    } else {
    }

  });


}