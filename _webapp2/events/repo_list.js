function repo_list(offset) {

  $.ajax({
      method: "GET",
      url: ECHIDNA_API + "repos/?user_token=" + USER_TOKEN + "&offset=" + offset,
      dataType: 'json'

  }).done(function( msg ) {
    
    if(ECHIDNA_DEBUG) {
      console.log(msg);
    }

    if(msg.success == 'true') {

      msg.repos.forEach(function(repo) {

        var todo_count = typeof repo.repo_terms.todo_count != 'undefined' ? parseInt(repo.repo_terms.todo_count) : 0;
        var doing_count = typeof repo.repo_terms.doing_count != 'undefined' ? parseInt(repo.repo_terms.doing_count) : 0;
        var done_count = typeof repo.repo_terms.done_count != 'undefined' ? parseInt(repo.repo_terms.done_count) : 0;
        posts_count = todo_count + doing_count + done_count;

        var uploads_count = typeof repo.repo_terms.uploads_count != 'undefined' ? repo.repo_terms.uploads_count : 0;
        var uploads_sum = typeof repo.repo_terms.uploads_sum != 'undefined' ? repo.repo_terms.uploads_sum : 0;

        $('#page-repos-table').find('tbody').append(
          '<tr>' +
          '<th scope="row">' + repo.id + '</th>' +
          '<td>' + repo.create_date + '</td>' +
          '<td><a href="' + ECHIDNA_URL + '?page=posts&repo_id=' + repo.id + '&post_status=doing&offset=0">' + repo.repo_name + '</a></td>' +
          '<td>' + repo.repo_terms.roles_count + '</td>' +
          '<td>' + posts_count + '</td>' +
          '<td>' + uploads_count + '</td>' +
          '<td>' + uploads_sum + '</td>' +
          '<td>' + repo.user_role.role_status + '</td>' +
          '</tr>'
        );
      });

      getPagination(offset, msg.repos_limit, msg.repos_count, ECHIDNA_URL + '?page=repos&offset=');

    }

  });

}
