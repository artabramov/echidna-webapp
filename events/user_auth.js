$(document).ready(function(){

  $.ajax({
    method: "POST",
    url: ECHIDNA_API + "token/?user_token=" + $.cookie("user-token"),
    dataType: 'json'

  }).done(function(msg) {

    if(ECHIDNA_DEBUG) {
      console.log(msg);
    }

    if(msg.success == 'true') {
      $.cookie("user-token", msg.user.user_token);

      // -- users --
      $("#navbar-users").removeClass('d-none');
      $("#navbar-users").addClass('d-inline');

      // -- hubs --
      $("#navbar-hubs").removeClass('d-none');
      $("#navbar-hubs").addClass('d-inline');

      // -- posts --
      $("#navbar-posts").removeClass('d-none');
      $("#navbar-posts").addClass('d-inline');

      // -- search --
      $("#navbar-posts-search").removeClass('d-none');
      $("#navbar-posts-search").addClass('d-inline');

      // -- user --
      $("#navbar-user-user-name").text(msg.user.user_name);
      $("#navbar-user").removeClass('d-none');
      $("#navbar-user").addClass('d-inline');
      $("#navbar-user-select").attr("href", ECHIDNA_URL + "?page=user&user_id=" + msg.user.id);

    } else {
      $.cookie("user-token", "");
      
      // -- register --
      $("#navbar-user-register").removeClass('d-none');
      $("#navbar-user-register").addClass('d-inline');

      // -- remind --
      $("#navbar-user-remind").removeClass('d-none');
      $("#navbar-user-remind").addClass('d-inline');

      // -- signin --
      $("#navbar-user-signin").removeClass('d-none');
      $("#navbar-user-signin").addClass('d-inline');
    }

  });
});
