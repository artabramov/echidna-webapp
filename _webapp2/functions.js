/**
 * Format bytes as human-readable text.
 * 
 * @param bytes Number of bytes.
 * @param dp Number of decimal places to display.
 * 
 * @return Formatted string.
 */
function getFilesize(bytes, thresh=1024, dp=1) {

  if (Math.abs(bytes) < thresh) {
    return bytes + ' ' + ECHIDNA_FILESIZES[0];
  }

  let u = 0;
  const r = 10**dp;

  do {
    bytes /= thresh;
    ++u;
  } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < ECHIDNA_FILESIZES.length - 1);

  return bytes.toFixed(dp) + ' ' + ECHIDNA_FILESIZES[u];
}

function getDatetime(datetime, timezone) {

  var currentDate = new Date();
  var currentDay = currentDate.getUTCDate();
  var currentMonth = currentDate.getUTCMonth() + 1; //months from 1-12
  var currentYear = currentDate.getUTCFullYear();
  
  var dt = new Date(datetime + '.000+00:00');
  var dt2 = dt.toLocaleString('en-GB', { timeZone: timezone })
  var match = dt2.match(/([0-9]+)/g);

  var localDay = parseInt(match[0]);
  var localMonth = parseInt(match[1]);
  var localYear = parseInt(match[2]);
  var localHours = parseInt(match[3]);
  var localMinutes = parseInt(match[4]);

  if(localYear == currentYear && localMonth == currentMonth && localDay == currentDay) {
    return 'Today at ' + ('0' + localHours).slice(-2) + ':' + ('0' + localMinutes).slice(-2);

  } else if(localYear == currentYear) {
    return localDay + ' ' + ECHIDNA_MONTHS[localMonth - 1] + ', ' + ('0' + localHours).slice(-2) + ':' + ('0' + localMinutes).slice(-2);

  } else {
    return localDay + ' ' + ECHIDNA_MONTHS[localMonth - 1] + ' ' + localYear + ', ' + ('0' + localHours).slice(-2) + ':' + ('0' + localMinutes).slice(-2);
  }

}

/**
 * Get days number from current date to target date.
 */
function getInterval(datetime) {
  var date1 = new Date();
  var date2 = new Date(datetime);
  var diffTime = Math.abs(date2 - date1);
  var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  return diffDays;
}


function getPagination(offset, rows_on_page, rows_count, url) {

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
