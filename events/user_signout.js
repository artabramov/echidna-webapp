$(document).ready(function(){

  $("#navbar-user-signout").click(function() {

    var user_token = $.cookie("user-token");

    $.removeCookie('user-token', { path: '/' });
    $.removeCookie('user-id', { path: '/' });
    $.removeCookie('user-name', { path: '/' });

    $.ajax({
        method: "PUT",
        url: ECHIDNA_API + "token?user_token=" + user_token,
        dataType: 'json'

    }).done(function( msg ) {
      
      if(ECHIDNA_DEBUG) {
        console.log(msg);
      }



      window.location.href = ECHIDNA_URL + '?page=hello';

    });

  });

});