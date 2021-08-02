function role_query(hub_id, offset) {

  $("#modal-role-insert-hub-id").val(hub_id);
  $("#modal-role-update-hub-id").val(hub_id);

  $.ajax({
      method: "GET",
      url: ECHIDNA_API + "roles/?user_token=" + $.cookie("user-token") + "&hub_id=" + hub_id + "&offset=" + offset,
      dataType: 'json'

  }).done(function( msg ) {
    
    if(ECHIDNA_DEBUG) {
      console.log(msg);
    }

    if(msg.success == 'true') {

      msg.roles.forEach(function(row) {
        $('#page-roles-table').find('tbody').append('<tr><th scope="row">' + row.id + '</th><td>' + row.create_date + '</td><td>' + row.user_id + '</td><td>' + row.user_name + '</td><td>' + row.hub_id + '</td><td>' + row.hub_name + '</td><td><a href="#" class="user-role-onclick" onclick="modal_role_update_user_role_click(\'' + row.user_id + '\', \'' + row.role_status + '\');" data-toggle="modal" data-target="#modal-role-update" user_id="' + row.user_id + '" user_role="' + row.user_role + '">' + row.role_status + '</a></td></tr>');
      });

      pagination(offset, msg.roles_limit, msg.roles_count, ECHIDNA_URL + '?page=roles&hub_id=' + hub_id + '&offset=');

    }

  });

}
