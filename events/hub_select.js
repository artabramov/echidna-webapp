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
      $("#page-hub-select-title").text(msg.hub.hub_name);

      // roles
      $("#page-hub-select-roles-table tbody").empty();
      msg.roles.forEach(function(row) {
          $('#page-hub-select-roles-table').find('tbody').append('<tr><td>' + row.create_date + '</td><td>' + row.user_id + '</td><td>' + row.user_role + '</td></tr>');
      });

      // pagination
      pagination(offset, ECHIDNA_ROWS_ON_PAGE, msg.roles_count, ECHIDNA_URL + '/?page=hub_select&hub_id=' + hub_id + '&offset=');

    } else {
    }

  });


}