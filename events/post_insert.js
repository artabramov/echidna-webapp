$(document).ready(function(){
    $('#form-post-insert-submit').click(function(){

        // Hide error, disable submit & show spinner
        $('#form-post-insert-error').addClass('d-none');
        $('#form-post-insert-submit').prop('disabled', true);
        $('#form-post-insert-spinner').removeClass('d-none');

        $.ajax({
            method: 'POST',
            url: ECHIDNA_URL + 'post/?user_token=' + USER_TOKEN + '&repo_id=' + $('#form-post-insert-repo-id').val() + '&post_title=' + $('#form-post-insert-post-title').val() + '&post_status=' + $('input[name="form-post-insert-status"]:checked').val(),
            dataType: 'json'

        }).done(function(msg) {

            if(APP_DEBUG) {
                console.log(msg);
            }


            if(msg.success == 'true') {
                //window.location.href = ECHIDNA_URL + '?page=posts&repo_id=' + $("#form-post-insert-repo-id-input").val() + '&post_status=' + $("input[name='form-post-insert-status']:checked").val() + '&offset=0';

                // Clear table & update data
                $('#page-posts-table > tbody').empty();
                $('#page-posts-pagination > ul').empty();
                post_list($('#form-post-insert-repo-id').val(), $('input[name="form-post-insert-status"]:checked').val(), 0);
                hideforms();
                clearforms();

            } else {
                // Show error, enable submit & hide spinner
                $('#form-post-insert-error').text(I18N['errors'][msg.error.code]);
                $('#form-post-insert-error').removeClass('d-none');
                $('#form-post-insert-submit').prop('disabled', false);
                $('#form-post-insert-spinner').addClass('d-none');
            }
        });
    });
});
