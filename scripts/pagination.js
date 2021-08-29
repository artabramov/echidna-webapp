function pagination(id, func, offset, rows_on_page, rows_count) {

    // pages
    pages_count = Math.ceil( rows_count / rows_on_page );
    page_active = Math.floor( offset / rows_on_page );
    page_start = page_active > 1 ? page_active - 2 : 0;
    page_end = page_active > pages_count - 3 ? pages_count - 1 : page_active + 2;

    // show pagination
    if( pages_count > 1 ) {
        $('#' + id).removeClass('d-none');
        $('#' + id).addClass('d-inline');
    }

    // prev
    disabled = page_active == 0 ? ' disabled' : '';
    $('#' + id).find('ul').append('<li class="page-item' + disabled + '"><a class="page-link" href="#" onClick="eval(\'' + func + '\')(' + ((page_active - 1) * rows_on_page) + ');">Prev</a></li>');

    // pages
    for( i = page_start; i<=page_end; i++ ) {
        active = i == page_active ? ' active' : '';
        $('#' + id).find('ul').append('<li class="page-item' + active + '"><a class="page-link" href="#" onClick="eval(\'' + func + '\')(' + (i * rows_on_page) + ');">' + i + '</a></li>');
    }

    // next
    disabled = page_active == page_end ? ' disabled' : '';
    $('#' + id).find('ul').append('<li class="page-item' + disabled + '"><a class="page-link" href="#" onClick="eval(\'' + func + '\')(' + ((page_active + 1) * rows_on_page) + ');">Next</a></li>');

}
