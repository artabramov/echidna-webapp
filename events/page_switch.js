function page_switch(page) {

  $("#page-hello").removeClass('d-inline');
  $("#page-hello").addClass('d-none');

  $("#page-posts").removeClass('d-inline');
  $("#page-posts").addClass('d-none');

  $("#page-hubs").removeClass('d-inline');
  $("#page-hubs").addClass('d-none');

  $("#page-" + page).removeClass('d-none');
  $("#page-" + page).addClass('d-inline');
}

// posts
$(document).ready(function(){
  $("#navbar-posts").click(function(){
    page_switch("posts");
  });
});

// hubs
$(document).ready(function(){
  $("#navbar-hubs").click(function(){
    page_switch("hubs");
  });
});
