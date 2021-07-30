function user_select(user_id) {

  $.ajax({
      method: "GET",
      url: ECHIDNA_API + "user/" + user_id + "?user_token=" + $.cookie("user-token"),
      dataType: 'json'

  }).done(function( msg ) {
    
    if(ECHIDNA_DEBUG) {
      console.log(msg);
    }

    if(msg.success == 'true') {
      $("#page-user-title").text(msg.user.user_name);
    }

  });

}
