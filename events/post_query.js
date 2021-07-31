function post_query(hub_id, post_status, offset) {

  $("#modal-post-insert-hub-id").val(hub_id);
  $("#modal-role-insert-hub-id").val(hub_id);
  $("#modal-hub-delete-hub-id").val(hub_id);

  $.ajax({
      method: "GET",
      url: ECHIDNA_API + "posts/?user_token=" + $.cookie("user-token") + "&hub_id=" + hub_id + "&post_status=" + post_status + "&offset=" + offset,
      dataType: 'json'

  }).done(function( msg ) {
    
    if(ECHIDNA_DEBUG) {
      console.log(msg);
    }

    if(msg.success == 'true') {

      msg.posts.forEach(function(row) {
        $('#page-posts-table').find('tbody').append('<tr><th scope="row">' + row.id + '</th><td>' + row.create_date + '</td><td>' + row.user_name + '</td><td>' + row.hub_name + '</td><td>' + row.post_status + '</td><td>' + row.post_title + '</td><td>' + row.comments_count + '</td></tr>');
      });

      pagination(offset, msg.posts_limit, msg.posts_count, ECHIDNA_URL + '?page=posts&hub_id=' + hub_id + '&post_status=' + post_status + '&offset=');

    }

  });

}
