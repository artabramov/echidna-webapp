// self user
var user_token = '';

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
      //user = msg.user;
      user_token = msg.user.user_token;

      // update cookie
      $.cookie("user-token", msg.user.user_token);
      $.cookie("user-id", msg.user.id);

      // hubs
      $("#navbar-hubs").removeClass('d-none');
      $("#navbar-hubs").addClass('d-inline');

      // posts
      $("#navbar-posts").removeClass('d-none');
      $("#navbar-posts").addClass('d-inline');

      // post add
      $("#navbar-post-add").removeClass('d-none');
      $("#navbar-post-add").addClass('d-inline');

      // user
      $("#navbar-user").removeClass('d-none');
      $("#navbar-user").addClass('d-inline');

      // signout
      $("#navbar-signout").removeClass('d-none');
      $("#navbar-signout").addClass('d-inline');
      
      // register
      $("#navbar-register").removeClass('d-inline');
      $("#navbar-register").addClass('d-none');

      // signin
      $("#navbar-signin").removeClass('d-inline');
      $("#navbar-signin").addClass('d-none');

      // user name
      $("#navbar-user-name").text(msg.user.user_name);

      //page switch
      page('posts');

    } else {
      //var user = {};
      $.cookie("user-token", "");
      $.cookie("user-id", 0);

      // hubs
      $("#navbar-hubs").removeClass('d-inline');
      $("#navbar-hubs").addClass('d-none');
      
      // posts
      $("#navbar-posts").removeClass('d-inline');
      $("#navbar-posts").addClass('d-none');

      // post add
      $("#navbar-post-add").removeClass('d-inline');
      $("#navbar-post-add").addClass('d-none');

      // user
      $("#navbar-user").removeClass('d-inline');
      $("#navbar-user").addClass('d-none');

      // signout
      $("#navbar-signout").removeClass('d-inline');
      $("#navbar-signout").addClass('d-none');
      
      // register
      $("#navbar-register").removeClass('d-none');
      $("#navbar-register").addClass('d-inline');

      // signin
      $("#navbar-signin").removeClass('d-none');
      $("#navbar-signin").addClass('d-inline');

      // user name and id
      $("#user-name-navbar").text('');

      //page switch
      page('hello');
    }

  });

  //console.log(user);

});
