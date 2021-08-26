/**
 * Format bytes as human-readable text.
 * 
 * @param bytes Number of bytes.
 * @param dp Number of decimal places to display.
 * 
 * @return Formatted string.
 */
function filesize(bytes, sizes) {

  const thresh=1024;
  const dp=1;

  if(bytes == 0) {
    return '0';
    
  } else if (Math.abs(bytes) < thresh) {
    return bytes + ' ' + sizes[0];
  }

  let u = 0;
  const r = 10**dp;

  do {
    bytes /= thresh;
    ++u;
  } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < sizes.length - 1);

  return bytes.toFixed(dp) + ' ' + sizes[u];
}
