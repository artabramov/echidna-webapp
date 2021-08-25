function page(page) {

    console.log(page);

    // Title

    $('#page-title').text(I18N['page'][page]['title']);
    $('#page-title').removeClass('d-none');

    // Hide forms
    $('#form-user-remind').offcanvas('hide');
    $('#form-user-register').offcanvas('hide');
    $('#form-user-signin').offcanvas('hide');
    $('#form-user-update').offcanvas('hide');

}
