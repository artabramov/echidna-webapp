/**
 * Format bytes as human-readable text.
 * 
 * @param bytes Number of bytes.
 * @param dp Number of decimal places to display.
 * 
 * @return Formatted string.
 */
function filesize(bytes, thresh=1024, dp=1) {

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
