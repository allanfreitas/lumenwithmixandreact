/**
 * Kui Base File
 * KodeUi
 * Allan Freitas allankode@gmail.com
 * https://github.com/allanfreitas
 */
import ErrorsHelper from './ErrorsHelper'

class Kui {
  constructor() {
    this.version = '0.0.1-beta';
  }
}

function formatBytes(bytes, decimals) {
  if (bytes === 0) return '0 Byte';
  //

  const k = 1000; // or 1024 for binary
  const dm = decimals + 1 || 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const expoe = (k ** i).toFixed(dm);
  const value = parseFloat(bytes / expoe);

  return `${value} ${sizes[i]}`;
}

Kui.formatBytes = formatBytes;

export { formatBytes };
export { ErrorsHelper}
export default Kui;
