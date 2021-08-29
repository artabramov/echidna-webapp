function comment_list(post_id, offset) {

    // Hide forms & toggle tables
    hideforms();
    hidepages();
    $('#page-comments').removeClass('d-none');
    $('#page-comments-list').empty();
    $('#form-comment-insert-post-id').val(post_id);
    
    $('#page-comments-pagination > ul').empty();

    



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

            });

            // -- Pagination --
            var pages_count = Math.ceil( msg.comments_count / msg.comments_limit );
            var page_active = Math.floor( offset / msg.comments_limit );
            var page_start = page_active > 1 ? page_active - 2 : 0;
            var page_end = page_active > pages_count - 3 ? pages_count - 1 : page_active + 2;

            // show pagination
            if( pages_count > 1 ) {
                $('#page-comments-pagination').removeClass('d-none');
                $('#page-comments-pagination').addClass('d-inline');
            }

            // prev
            disabled = page_active == 0 ? ' disabled' : '';
            $('#page-comments-pagination').find('ul').append('<li class="page-item' + disabled + '"><a class="page-link" href="#" onClick="comment_list(' + post_id + ', ' + ((page_active - 1) * msg.comments_limit) + ');">Prev</a></li>');

            // pages
            for( i = page_start; i<=page_end; i++ ) {
                active = i == page_active ? ' active' : '';
                $('#page-comments-pagination').find('ul').append('<li class="page-item' + active + '"><a class="page-link" href="#" onClick="comment_list(' + post_id + ', ' + (i * msg.comments_limit) + ');">' + i + '</a></li>');
            }

            // next
            disabled = page_active == page_end ? ' disabled' : '';
            $('#page-comments-pagination').find('ul').append('<li class="page-item' + disabled + '"><a class="page-link" href="#" onClick="comment_list(' + post_id + ', ' + ((page_active + 1) * msg.comments_limit) + ');">Next</a></li>');




            
        }
        
    });
}
