function user_select(user_id) {

  console.log(user_id);

  $.ajax({
    method: "GET",
    url: ECHIDNA_URL + "/user/" + user_id + "?user_token=" + $.cookie("user-token"),
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