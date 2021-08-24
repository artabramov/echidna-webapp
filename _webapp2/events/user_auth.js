$(document).ready(function(){

  $.ajax({
    method: "POST",
    url: ECHIDNA_API + "token/?user_token=" + USER_TOKEN,
    dataType: 'json'

  }).done(function(msg) {

    if(ECHIDNA_DEBUG) {
      console.log(msg);
    }

    if(msg.success == 'true') {
      $.cookie("user-token", msg.user.user_token);
      const USER_TIMEZONE = msg.user.user_terms.user_timezone;

      /*
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
      */

      // -- user --
      $("#navbar-user-name").text(msg.user.user_name);
      $("#form-user-update-email").text(msg.user.user_email);
      $("#form-user-update-name-input").val(msg.user.user_name);
      $("#form-user-update-create-date").text( getDatetime(msg.user.create_date, USER_TIMEZONE) );
      
      // -- progress --
      var uploads_sum = typeof msg.user.user_terms.uploads_sum == 'undefined' ? 0 : parseInt(msg.user.user_terms.uploads_sum);
      var volume_size = parseInt(msg.user.user_terms.volume_size);
      var uploads_percents = uploads_sum / (volume_size / 100);

      $("#form-user-volume-progress").css("width", parseInt(uploads_percents) + "%");
      $("#form-user-volume-progress").attr("aria-valuenow", parseInt(uploads_percents));
      $("#form-user-volume-progress-valuenow").text(getFilesize(uploads_sum));
      $("#form-user-volume-progress-valuemax").text(getFilesize(volume_size));

      // -- timezones select --
      $.each(ECHIDNA_TIMEZONES, function(_, timezone) {
        $("#form-user-update-timezone-select").append(new Option(timezone, timezone));
      });
      $("#form-user-update-timezone-select").val(msg.user.user_terms.user_timezone).change();

      // -- volume expires --
      var expires = getInterval(msg.user.user_terms.volume_expires);
      if(expires < 367) {
        $("#form-user-volume-days").text(expires);
        $("#form-user-volume-expires").removeClass('d-none');
      }
      

      //$("#selectList").append(new Option("option text", "value"));
      //form-user-update-timezone-select

      // -- progress valuemax --
      //form-user-volume-progress-valuemax
      //var 

      //$("#form-user-volume-progress").text(uploads_percents.toFixed(1) + "%");

      
      
      //form-user-volume-progress-percents
      //var tmp = parseInt(msg.user.user_terms.);
      

      // -- user image --
      if(typeof msg.user.user_terms.thumb_file != 'undefined') {
        $("#form-user-update-thumb-img").attr('src', msg.user.user_terms.thumb_file);
        $("#form-user-update-thumb").removeClass('d-none');
      }
      
      // -- navbar --
      $("#navbar-users").removeClass('d-none');
      $("#navbar-repos").removeClass('d-none');
      $("#navbar-user").removeClass('d-none');
      //$("#navbar-user-select").attr("href", ECHIDNA_URL + "?page=user&user_id=" + msg.user.id);

    } else {
      $.cookie("user-token", "");
      //$.cookie('user-timezone', "Europe/Moscow");

      // -- navbar --
      $("#navbar-auth").removeClass('d-none');

      /*
      // -- register --
      $("#navbar-user-register").removeClass('d-none');
      $("#navbar-user-register").addClass('d-inline');

      // -- remind --
      $("#navbar-user-remind").removeClass('d-none');
      $("#navbar-user-remind").addClass('d-inline');

      // -- signin --
      $("#navbar-user-signin").removeClass('d-none');
      $("#navbar-user-signin").addClass('d-inline');
      */
    }

  });

});
