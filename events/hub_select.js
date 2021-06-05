function hub_select(hub_id) {

  $.ajax({
    method: "GET",
    url: ECHIDNA_URL + "/hub/" + hub_id + "?user_token=" + $.cookie("user-token"),
    dataType: 'json'

  }).done(function( msg ) {

    if(ECHIDNA_DEBUG) {
      console.log(msg);
    }

    if(msg.success == "true") {
      $("#page-hub-select-title").text(msg.hub.hub_name);
    } else {
    }

  });


}