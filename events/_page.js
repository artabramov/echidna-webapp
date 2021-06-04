function page(page) {

  $("#page-hello").removeClass('d-inline');
  $("#page-hello").addClass('d-none');

  $("#page-posts").removeClass('d-inline');
  $("#page-posts").addClass('d-none');

  $("#page-hubs").removeClass('d-inline');
  $("#page-hubs").addClass('d-none');

  $("#page-user").removeClass('d-inline');
  $("#page-user").addClass('d-none');

  $("#page-" + page).removeClass('d-none');
  $("#page-" + page).addClass('d-inline');
}

/*
// posts
$(document).ready(function(){
  $("#navbar-posts").click(function(){
    page("posts");
  });
});

// hubs
$(document).ready(function(){
  $("#navbar-hubs").click(function(){
    //hubs_select('custom');
    page("hubs");
  });
});

// user
$(document).ready(function(){
  //$("#navbar-user-select").click({id: $("#navbar-user-select").attr("user-id")}, function(id){
  $("#navbar-user-select").click(function(){

    //console.log(user);

    user_select(1);
    page("user");

  });
});
*/
