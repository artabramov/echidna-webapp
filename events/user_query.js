function user_query(offset) {

  $.ajax({
      method: "GET",
      url: ECHIDNA_API + "users/?user_token=" + $.cookie("user-token") + "&offset=" + offset,
      dataType: 'json'

  }).done(function( msg ) {
    
    if(ECHIDNA_DEBUG) {
      console.log(msg);
    }

    if(msg.success == 'true') {

      msg.users.forEach(function(row) {
        $('#page-users-table').find('tbody').append('<tr><th scope="row">' + row.id + '</th><td>' + row.create_date + '</td><td>' + row.auth_date + '</td><td>' + row.user_status + '</td><td>' + row.user_email + '</td><td><a href="' + ECHIDNA_URL + '?page=user&user_id=' + row.id + '">' + row.user_name + '</a></td></tr>');
      });

      pagination(offset, msg.users_limit, msg.users_count, ECHIDNA_URL + '?page=hubs&offset=');
    }

  });

}
