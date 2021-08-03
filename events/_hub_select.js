function hub_select(hub_id) {

  $.ajax({
      method: "GET",
      url: ECHIDNA_API + "hub/" + hub_id + "?user_token=" + $.cookie("user-token"),
      dataType: 'json'

  }).done(function( msg ) {
    
    if(ECHIDNA_DEBUG) {
      console.log(msg);
    }

    if(msg.success == 'true') {
      $("#page-posts-title").text(msg.hub.hub_name);
      $("#page-posts-todo-count").text(msg.hub.todo_count);
      $("#page-posts-doing-count").text(msg.hub.doing_count);
      $("#page-posts-done-count").text(msg.hub.done_count);
    }

  });

}
