function user_select(id) {

  $.ajax({
    method: "GET",
    url: ECHIDNA_URL + "/user/" + id + "?user_token=" + user_token,
    dataType: 'json'

  }).done(function( msg ) {

    if(ECHIDNA_DEBUG) {
      console.log(msg);
    }

    if(msg.success == "true") {
      $("#page-user-title").text(msg.user.user_name + " #" + msg.user.id);
      $("#page-user-create-date").text(msg.user.create_date);

    } else {
    }

  });


}