function hub_query(offset) {

  $.ajax({
      method: "GET",
      url: ECHIDNA_API + "hubs/?user_token=" + $.cookie("user-token") + "&offset=" + offset,
      dataType: 'json'

  }).done(function( msg ) {
    
    if(ECHIDNA_DEBUG) {
      console.log(msg);
    }

    if(msg.success == 'true') {

      msg.hubs.forEach(function(row) {
        posts_count = row.todo_count + row.doing_count + row.done_count;
        $('#page-hubs-table').find('tbody').append('<tr><th scope="row">' + row.id + '</th><td>' + row.create_date + '</td><td><a href="' + ECHIDNA_URL + '?page=posts&hub_id=' + row.id + '&post_status=doing&offset=0">' + row.hub_name + '</a></td><td>' + row.roles_count + '</td><td>' + posts_count + '</td></tr>');
      });

      pagination(offset, msg.hubs_limit, msg.hubs_count, ECHIDNA_URL + '?page=hubs&offset=');

    }

  });

}
