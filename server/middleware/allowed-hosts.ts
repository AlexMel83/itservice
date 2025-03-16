import { defineEventHandler, getRequestHeader, setResponseStatus } from 'h3';

export default defineEventHandler((event) => {
  const allowedHosts = ['it.starkon.pp.ua', 'localhost'];
  const host = getRequestHeader(event, 'host')?.replace(/^https?:\/\//, ''); // Убираем http:// или https://

  if (!host || !allowedHosts.includes(host)) {
    setResponseStatus(event, 403);
    return 'Blocked request. This host is not allowed.';
  }
});
