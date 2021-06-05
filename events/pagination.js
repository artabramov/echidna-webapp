function pagination(offset, rows_on_page, rows_count, url) {

  // pages
  pages_count = Math.ceil( rows_count / rows_on_page );
  page_active = Math.floor( offset / rows_on_page );
  page_start = page_active > 1 ? page_active - 2 : 0;
  page_end = page_active > pages_count - 3 ? pages_count - 1 : page_active + 2;
  
  // show pagination
  if( pages_count > 1 ) {
    $("#pagination").removeClass('d-none');
    $("#pagination").addClass('d-inline');
  }

  // prev
  disabled = page_active == 0 ? ' disabled' : '';
  $('#pagination').find('ul').append('<li class="page-item' + disabled + '"><a class="page-link" href="' + url + (page_active - 1) * rows_on_page + '">Prev</a></li>');

  // pages
  for( i=page_start; i<=page_end; i++ ) {
    active = i == page_active ? ' active' : '';
    $('#pagination').find('ul').append('<li class="page-item' + active + '"><a class="page-link" href="' + url + i * rows_on_page + '">' + i + '</a></li>');
  }

  // next
  disabled = page_active == page_end ? ' disabled' : '';
  $('#pagination').find('ul').append('<li class="page-item' + disabled + '"><a class="page-link" href="' + url + (page_active + 1) * rows_on_page + '">Next</a></li>');

}
