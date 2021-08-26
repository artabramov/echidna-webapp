/**
 * Hide navbar links for non-logged user.
 */
function hidenav() {

    // Toggle navbar links
    $('#navbar-users').addClass('d-none');
    $('#navbar-repos').addClass('d-none');
    $('#navbar-uploads').addClass('d-none');
    $('#navbar-search').addClass('d-none');
    $('#navbar-user').addClass('d-none');
    $('#navbar-user').text('');
    $('#navbar-remind').removeClass('d-none');

    // Clear user data
    $('#form-user-update-thumb').prop('src', '');
    $('#form-user-update-thumb').addClass('d-none');
    $('#form-user-update-email').text('');
    $('#form-user-update-name').val('');
    $('#form-user-update-bio').val('');
    $('#form-user-update-create-date').text('');
    $('#form-user-update-timezone').empty();

}
