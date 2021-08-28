function comment_list(post_id, offset) {

    // Hide forms & toggle tables
    hideforms();
    hidepages();
    $('#page-comments').removeClass('d-none');
    $('#page-comments-list').empty();
    $('#form-comment-insert-post-id').val(post_id);
    
    //$('#page-comments-pagination > ul').empty();

    



    $.ajax({
        method: 'GET',
        url: ECHIDNA_URL + 'comments/?user_token=' + USER_TOKEN + '&post_id=' + post_id + '&offset=' + offset,
        dataType: 'json'

    }).done(function( msg ) {

        if(APP_DEBUG) {
            console.log(msg);
        }

        
        if(msg.success == 'true') {


            msg.comments.forEach(function(comment) {

                $('#page-comments-list').append(
                    '<div>' +
                    comment.id + '<br>' +
                    comment.comment_content + '<br><br>' + 
                    '</div>'
                );

                /*
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
                */
            });

            //console.log(msg.posts_limit);
            //pagination('page-posts-pagination', 'post_list', offset, msg.posts_limit, msg.posts_count);

            /*
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
            */


            
        }
        
    });
}
