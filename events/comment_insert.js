$(document).ready(function(){
    $('#form-comment-insert-submit').click(function(){

        // Hide error, disable submit & show spinner
        $('#form-comment-insert-error').addClass('d-none');
        $('#form-comment-insert-submit').prop('disabled', true);
        $('#form-comment-insert-spinner').removeClass('d-none');

        $.ajax({
            method: 'POST',
            url: ECHIDNA_URL + 'comment/?user_token=' + USER_TOKEN + '&post_id=' + $('#form-comment-insert-post-id').val() + '&comment_content=' + $('#form-comment-insert-content').val(),
            dataType: 'json'

        }).done(function(msg) {

            if(APP_DEBUG) {
                console.log(msg);
            }

            if(msg.success == 'true') {

                // Clear form
                $('#page-comment-list').empty();
                //$('#page-comments-pagination > ul').empty();
                comment_list($('#form-comment-insert-post-id').val(), 0);
                hideforms();
                clearforms();

            } else {
                // Show error, enable submit & hide spinner
                $('#form-comment-insert-error').text(I18N['errors'][msg.error.code]);
                $('#form-comment-insert-error').removeClass('d-none');
                $('#form-comment-insert-submit').prop('disabled', false);
                $('#form-comment-insert-spinner').addClass('d-none');
            }

        });
    });
});
