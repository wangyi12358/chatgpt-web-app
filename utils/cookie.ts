
/**
 * get cookie
 * @param name
 */
export function getCookie(name: string) {
  const prefix = `${name}=`;
  const start = document.cookie.indexOf(prefix);

  if (start === -1) {
    return null;
  }

  let end = document.cookie.indexOf(';', start + prefix.length);
  if (end === -1) {
    end = document.cookie.length;
  }

  const value = document.cookie.substring(start + prefix.length, end);
  return decodeURIComponent(value);
}

/**
 * set cookie
 * @param name cookie key
 * @param value cookie value
 * @param day 过期时间 天为单位
 */
export function setCookie(name: string, value: string, day: number) {
  const exp = new Date();
  exp.setTime(exp.getTime() + day * 24 * 60 * 60 * 1000);
  const cookie = `${name}=${encodeURIComponent(value)};expires=${exp.toUTCString()};path=/`;
  document.cookie = cookie;
}

/**
 * clear all cookie
 */
export function clearAllCookie() {
  const keys = document.cookie.match(/[^ =;]+(?=\=)/g);
  if (keys) {
    for (let i = keys.length; i--;)
      document.cookie = `${keys[i]}='';expires=${new Date(0).toUTCString()};path=/`;
  }
}
