function comment_list(post_id, offset) {

    // Hide forms & toggle tables
    hideforms();
    hidepages();
    $('#page-comments').removeClass('d-none');
    //$('#page-posts-table > tbody').empty();
    $('#page-comments-pagination > ul').empty();

    //$('#form-post-insert-repo-id').val(repo_id);



    $.ajax({
        method: 'GET',
        url: ECHIDNA_URL + 'comments/?user_token=' + USER_TOKEN + '&post_id=' + post_id + '&offset=' + offset,
        dataType: 'json'

    }).done(function( msg ) {

        if(APP_DEBUG) {
            console.log(msg);
        }

        /*
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
                    '<td><a href="#">' + post.post_title + '</a></td>' +
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
        */
    });
}
