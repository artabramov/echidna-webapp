/**
 * Clear inputs, hide errors, enable submits & hide spinners
 */
function clearforms() {

    // User register
    $('#form-user-register-email').val('');
    $('#form-user-register-name').val('');
    $('#form-user-register-offer').prop('checked', false)
    $('#form-user-register-error').text('');
    $('#form-user-register-error').addClass('d-none');
    $('#form-user-register-submit').prop('disabled', true);
    $('#form-user-register-spinner').addClass('d-none');

    // User remind
    $('#form-user-remind-email').val('');
    $('#form-user-remind-error').text('');
    $('#form-user-remind-error').addClass('d-none');
    $('#form-user-remind-submit').prop('disabled', false);
    $('#form-user-remind-spinner').addClass('d-none');

    // User signin
    $('#form-user-signin-email').val('');
    $('#form-user-signin-pass').val('');
    $('#form-user-signin-error').text('');
    $('#form-user-signin-error').addClass('d-none');
    $('#form-user-signin-submit').prop('disabled', false);
    $('#form-user-signin-spinner').addClass('d-none');

    // Repo insert
    $('#form-repo-insert-name').val('');
    $('#form-repo-insert-error').text('');
    $('#form-repo-insert-error').addClass('d-none');
    $('#form-repo-insert-submit').prop('disabled', false);
    $('#form-repo-insert-spinner').addClass('d-none');

    // Post insert
    $('#form-post-insert-post-title').val('');
    $('input[name="form-post-insert-status"]').prop('checked', false);
    $('#form-post-insert-error').text('');
    $('#form-post-insert-error').addClass('d-none');
    $('#form-post-insert-submit').prop('disabled', false);
    $('#form-post-insert-spinner').addClass('d-none');

    // Comment insert
    $('#form-comment-insert-content').val('');
    $('#form-comment-insert-error').text('');
    $('#form-comment-insert-error').addClass('d-none');
    $('#form-comment-insert-submit').prop('disabled', false);
    $('#form-comment-insert-spinner').addClass('d-none');

}
