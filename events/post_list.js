function post_list(repo_id, post_status, offset) {

    // Hide forms & toggle tables
    hideforms();
    hidepages();
    $('#page-posts').removeClass('d-none');
    $('#page-posts-table > tbody').empty();
    $('#page-posts-pagination > ul').empty();

    $('#form-post-insert-repo-id').val(repo_id);

    // Posts nav
    $('#page-posts-todo').removeClass('active');
    $('#page-posts-doing').removeClass('active');
    $('#page-posts-done').removeClass('active');
    $('#page-posts-' + post_status).addClass('active');

    //$('#page-posts-done').prop('onclick', "post_list(' + repo.id + ', \'todo\', 0);");
    //$element.prop("onclick", null);

    $('#page-posts-todo').prop('onclick', null).off('click');
    $('#page-posts-doing').prop('onclick', null).off('click');
    $('#page-posts-done').prop('onclick', null).off('click');

    $('#page-posts-todo').click(function() {post_list(repo_id, 'todo', 0);});
    $('#page-posts-doing').click(function() {post_list(repo_id, 'doing', 0);});
    $('#page-posts-done').click(function() {post_list(repo_id, 'done', 0);});

    //$('#page-posts-count').text(msg.repo.repo_terms.doing_count);

    /*
    $("#page-posts-nav-todo").prop("href", ECHIDNA_URL + '?page=posts&repo_id=' + repo_id + '&post_status=todo&offset=0');
    $("#page-posts-nav-doing").prop("href", ECHIDNA_URL + '?page=posts&repo_id=' + repo_id + '&post_status=doing&offset=0');
    
    */


    $.ajax({
        method: 'GET',
        url: ECHIDNA_URL + 'posts/?user_token=' + USER_TOKEN + '&repo_id=' + repo_id + '&post_status=' + post_status + '&offset=' + offset,
        dataType: 'json'

    }).done(function( msg ) {

        if(APP_DEBUG) {
            console.log(msg);
        }

        if(msg.success == 'true') {
            //$('#page-posts-title').text(msg.repo.repo_name);

            // nav
            $('#page-posts-todo-count').text(typeof msg.repo.repo_terms.todo_count != 'undefined' ? msg.repo.repo_terms.todo_count : '0');
            $('#page-posts-doing-count').text(typeof msg.repo.repo_terms.doing_count != 'undefined' ? msg.repo.repo_terms.doing_count : '0');
            $('#page-posts-done-count').text(typeof msg.repo.repo_terms.done_count != 'undefined' ? msg.repo.repo_terms.done_count : '0');

            msg.posts.forEach(function(post) {

                //var post_alerts = 'TODO';
                var post_tags = 'post tags';
                var comments_count = typeof post.post_terms.comments_count != 'undefined' ? parseInt(post.post_terms.comments_count) : 0;
                var uploads_count = typeof post.post_terms.uploads_count != 'undefined' ? parseInt(post.post_terms.uploads_count) : 0;
                var uploads_sum = typeof post.post_terms.uploads_sum != 'undefined' ? parseInt(post.post_terms.uploads_sum) : 0;

                $('#page-posts-table').find('tbody').append(
                    '<tr>' +
                    '<th scope="row">' + post.id + '</th>' +
                    '<td>' + post.create_date + '</td>' +
                    '<td>' + post.post_status + '</td>' +
                    '<td><a href="#" onClick="comment_list(' + post.id + ', 0);">' + post.post_title + '</a></td>' +
                    '<td>' + post_tags + '</td>' +
                    '<td>' + comments_count + '</td>' +
                    '<td>' + uploads_count + '</td>' +
                    '<td>' + uploads_sum + '</td>' +
                    '</tr>'
                );
            });

            //console.log(msg.posts_limit);
            //pagination('page-posts-pagination', 'post_list', offset, msg.posts_limit, msg.posts_count);

            // -- Pagination --
            var pages_count = Math.ceil( msg.posts_count / msg.posts_limit );
            var page_active = Math.floor( offset / msg.posts_limit );
            var page_start = page_active > 1 ? page_active - 2 : 0;
            var page_end = page_active > pages_count - 3 ? pages_count - 1 : page_active + 2;

            // show pagination
            if( pages_count > 1 ) {
                $('#page-posts-pagination').removeClass('d-none');
                $('#page-posts-pagination').addClass('d-inline');
            } else {
                $('#page-posts-pagination').removeClass('d-inline');
                $('#page-posts-pagination').addClass('d-none');
            }

            // prev
            disabled = page_active == 0 ? ' disabled' : '';
            $('#page-posts-pagination').find('ul').append('<li class="page-item' + disabled + '"><a class="page-link" href="#" onClick="post_list(' + repo_id + ', \'' + post_status + '\', ' + ((page_active - 1) * msg.posts_limit) + ');">Prev</a></li>');

            // pages
            for( i = page_start; i<=page_end; i++ ) {
                active = i == page_active ? ' active' : '';
                $('#page-posts-pagination').find('ul').append('<li class="page-item' + active + '"><a class="page-link" href="#" onClick="post_list(' + repo_id + ', \'' + post_status + '\', ' + (i * msg.posts_limit) + ');">' + i + '</a></li>');
            }

            // next
            disabled = page_active == page_end ? ' disabled' : '';
            $('#page-posts-pagination').find('ul').append('<li class="page-item' + disabled + '"><a class="page-link" href="#" onClick="post_list(' + repo_id + ', \'' + post_status + '\', ' + ((page_active + 1) * msg.posts_limit) + ');">Next</a></li>');



            
        }
    });
}
