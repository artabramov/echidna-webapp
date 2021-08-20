function datetime(datetime, timezone) {

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
    return localDay + ' ' + I18N['months'][localMonth] + ', ' + ('0' + localHours).slice(-2) + ':' + ('0' + localMinutes).slice(-2);

  } else {
    return localDay + ' ' + I18N['months'][localMonth] + ' ' + localYear + ', ' + ('0' + localHours).slice(-2) + ':' + ('0' + localMinutes).slice(-2);
  }

}
