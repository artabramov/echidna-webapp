$(document).ready(function(){

  $.ajax({
    method: "GET",
    url: ECHIDNA_URL + "/user?user_token=" + $.cookie("user-token"),
    dataType: 'json'

  }).done(function( msg ) {

    if(ECHIDNA_DEBUG) {
      console.log(msg);
    }

    if(msg.success == 'true') {
      user_token = msg.user.user_token;

      // update cookie
      $.cookie("user-token", msg.user.user_token);

      // hubs
      $("#navbar-hubs").removeClass('d-none');
      $("#navbar-hubs").addClass('d-inline');

      // posts
      $("#navbar-posts").removeClass('d-none');
      $("#navbar-posts").addClass('d-inline');

      // post add
      $("#navbar-post-add").removeClass('d-none');
      $("#navbar-post-add").addClass('d-inline');

      // post search
      $("#navbar-post-search").removeClass('d-none');
      $("#navbar-post-search").addClass('d-inline');

      // user data
      $("#navbar-user-name").text(msg.user.user_name);
      $("#navbar-user-id").attr("href", ECHIDNA_URL + "/?page=user&user_id=" + msg.user.id);

      // user
      $("#navbar-user").removeClass('d-none');
      $("#navbar-user").addClass('d-inline');

      // signout
      $("#navbar-signout").removeClass('d-none');
      $("#navbar-signout").addClass('d-inline');

    } else {
      $.cookie("user-token", "");
      
      // register
      $("#navbar-register").removeClass('d-none');
      $("#navbar-register").addClass('d-inline');

      // signin
      $("#navbar-signin").removeClass('d-none');
      $("#navbar-signin").addClass('d-inline');
    }

  });

});
