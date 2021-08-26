function post_list(repo_id, post_status, offset) {

    // -- hide forms & toggle tables --
    hideforms();
    hidepages();
    $('#page-posts').removeClass('d-none');
    $("#page-posts-table > tbody").empty();
    $("#page-posts-pagination > ul").empty();

    console.log(repo_id);

    /*
    $("#form-post-insert-repo-id-input").val(repo_id);

    $("#page-posts-nav-" + post_status).addClass('active');
    $("#page-posts-nav-todo").prop("href", ECHIDNA_URL + '?page=posts&repo_id=' + repo_id + '&post_status=todo&offset=0');
    $("#page-posts-nav-doing").prop("href", ECHIDNA_URL + '?page=posts&repo_id=' + repo_id + '&post_status=doing&offset=0');
    $("#page-posts-nav-done").prop("href", ECHIDNA_URL + '?page=posts&repo_id=' + repo_id + '&post_status=done&offset=0');
    */


    $.ajax({
        method: "GET",
        url: ECHIDNA_URL + "posts/?user_token=" + USER_TOKEN + "&repo_id=" + repo_id + "&post_status=" + post_status + "&offset=" + offset,
        dataType: 'json'

    }).done(function( msg ) {

        if(APP_DEBUG) {
            console.log(msg);
        }

        if(msg.success == 'true') {
            //$('#page-posts-title').text(msg.repo.repo_name);

            /*
            msg.posts.forEach(function(post) {

                var post_alerts = 'TODO';
                var post_tags = 'TODO';
                var comments_count = typeof post.post_terms.comments_count != 'undefined' ? parseInt(post.post_terms.comments_count) : 0;
                var uploads_count = typeof post.post_terms.uploads_count != 'undefined' ? parseInt(post.post_terms.uploads_count) : 0;
                var uploads_sum = typeof post.post_terms.uploads_sum != 'undefined' ? parseInt(post.post_terms.uploads_sum) : 0;

                $('#page-posts-table').find('tbody').append(
                    '<tr>' +
                    '<th scope="row">' + post.id + '</th>' +
                    '<td>' + post.create_date + '</td>' +
                    '<td>' + post.post_status + '</td>' +
                    '<td><a href="' + ECHIDNA_URL + '?page=comments&post_id=' + post.id + '&offset=0">' + post.post_title + '</a></td>' +
                    '<td>' + post_alerts + '</td>' +
                    '<td>' + post_tags + '</td>' +
                    '<td>' + comments_count + '</td>' +
                    '<td>' + uploads_count + '</td>' +
                    '<td>' + uploads_sum + '</td>' +
                    '</tr>'
                );
            });

            getPagination(offset, msg.posts_limit, msg.posts_count, ECHIDNA_URL + '?page=posts&repo_id=' + repo_id + '&post_status=' + post_status + '&offset=');
            */
        }

    });
    

}
