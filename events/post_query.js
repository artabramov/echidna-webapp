function post_query(hub_id, post_status, offset) {

  $.ajax({
      method: "GET",
      url: ECHIDNA_API + "posts/?user_token=" + $.cookie("user-token") + "&hub_id=" + hub_id + "&post_status=" + post_status + "&offset=" + offset,
      dataType: 'json'

  }).done(function( msg ) {
    
    if(ECHIDNA_DEBUG) {
      console.log(msg);
    }

    if(msg.success == 'true') {

      // modals elements
      $("#modal-post-insert-hub-id").val(hub_id);
      $("#modal-hub-edit-hub-id").val(hub_id);
      $("#modal-hub-edit-hub-name").val(msg.hub.hub_name);
      $("#modal-hub-leave-hub-id").val(hub_id);

      // page elements
      $("#page-posts-title").text(msg.hub.hub_name);
      $("#page-posts-todo-count").text(msg.hub.todo_count);
      $("#page-posts-doing-count").text(msg.hub.doing_count);
      $("#page-posts-done-count").text(msg.hub.done_count);

      if(msg.role.role_status == 'admin') {
        $("#page-posts-hub-edit").removeClass('d-none');
        $("#page-posts-hub-edit").addClass('d-inline');

        $("#page-posts-roles").removeClass('d-none');
        $("#page-posts-roles").addClass('d-inline');
      }

      if(msg.role.role_status == 'admin' || msg.role.role_status == 'editor') {
        $("#page-posts-post-insert").removeClass('d-none');
        $("#page-posts-post-insert").addClass('d-inline');
      }

      if(msg.hub.user_id != msg.role.user_id) {
        $("#page-posts-hub-leave").removeClass('d-none');
        $("#page-posts-hub-leave").addClass('d-inline');
      }

      // posts table
      msg.posts.forEach(function(row) {
        $('#page-posts-table').find('tbody').append('<tr><th scope="row">' + row.id + '</th><td>' + row.create_date + '</td><td>' + row.user_name + '</td><td>' + row.hub_name + '</td><td>' + row.post_status + '</td><td>' + row.post_title + '</td><td>' + row.post_tags + '</td><td>' + row.comments_count + '</td></tr>');
      });

      pagination(offset, msg.posts_limit, msg.posts_count, ECHIDNA_URL + '?page=posts&hub_id=' + hub_id + '&post_status=' + post_status + '&offset=');

    }

  });

}
