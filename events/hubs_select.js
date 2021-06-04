function hubs_select(hub_status) {

  console.log("AAA");

  $.ajax({
    method: "GET",
    url: ECHIDNA_URL + "/hub?user_token=" + user_token + "&hub_status=" + hub_status,
    dataType: 'json'

  }).done(function( msg ) {

    if(ECHIDNA_DEBUG) {
      console.log(msg);
    }

    if(msg.success == "true") {
    } else {
    }

  });


}