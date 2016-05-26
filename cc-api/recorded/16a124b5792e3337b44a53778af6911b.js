var path = require("path");

/**
 * OPTIONS /cloudcutout-workflow-job-service/rest/jobs/lock_assigned?count=1&token=884787ea-5f2e-4370-8813-d5e60dbe5780&{}
 *
 * host: api2.cloudcutout.com
 * connection: keep-alive
 * access-control-request-method: GET
 * origin: http://localhost:9000
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36
 * access-control-request-headers: accept, content-type
 * accept: * / *
 * referer: http://localhost:9000/
 * accept-encoding: gzip, deflate, sdch
 * accept-language: en-US,en;q=0.8,da;q=0.6
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("access-control-allow-credentials", "true");
  res.setHeader("access-control-allow-headers", "accept, content-type");
  res.setHeader("access-control-allow-methods", "GET, POST, DELETE, PUT");
  res.setHeader("access-control-allow-origin", "http://localhost:9000");
  res.setHeader("allow", "HEAD,GET,OPTIONS");
  res.setHeader("cache-control", "no-cache=\"set-cookie\"");
  res.setHeader("content-type", "application/vnd.sun.wadl+xml");
  res.setHeader("date", "Thu, 26 May 2016 07:12:51 GMT");
  res.setHeader("hostname", "ip-10-5-185-120");
  res.setHeader("last-modified", "Thu, 26 May 2016 07:12:51 UTC");
  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("set-cookie", ["AWSELB=192F5B25149066DC84746F35692CB34D10DD7B6BA29A1677CF43BBB673E9E728F2C7C181E429825577D3C389071AEAA04A755B1DF7504B3F7DD3A68E62CADEE064220BCB6D;PATH=/"]);
  res.setHeader("content-length", "1110");
  res.setHeader("connection", "keep-alive");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/Pgo8YXBwbGljYXRpb24geG1sbnM9Imh0dHA6Ly93YWRsLmRldi5qYXZhLm5ldC8yMDA5LzAyIj4KICAgIDxkb2MgeG1sbnM6amVyc2V5PSJodHRwOi8vamVyc2V5LmphdmEubmV0LyIgamVyc2V5OmdlbmVyYXRlZEJ5PSJKZXJzZXk6IDIuMTkgMjAxNS0wNi0yOSAxMzowMjo1OCIvPgogICAgPGdyYW1tYXJzPgogICAgICAgIDxpbmNsdWRlIGhyZWY9Imh0dHA6Ly9hcGkyLmNsb3VkY3V0b3V0LmNvbS9jbG91ZGN1dG91dC13b3JrZmxvdy1qb2Itc2VydmljZS9yZXN0L2FwcGxpY2F0aW9uLndhZGwveHNkMC54c2QiPgogICAgICAgICAgICA8ZG9jIHRpdGxlPSJHZW5lcmF0ZWQiIHhtbDpsYW5nPSJlbiIvPgogICAgICAgIDwvaW5jbHVkZT4KICAgIDwvZ3JhbW1hcnM+CiAgICA8cmVzb3VyY2VzIGJhc2U9Imh0dHA6Ly9hcGkyLmNsb3VkY3V0b3V0LmNvbS9jbG91ZGN1dG91dC13b3JrZmxvdy1qb2Itc2VydmljZS9yZXN0LyI+CiAgICAgICAgPHJlc291cmNlIHBhdGg9ImpvYnMvbG9ja19hc3NpZ25lZCI+CiAgICAgICAgICAgIDxtZXRob2QgaWQ9ImxvY2tBc3NpZ25lZCIgbmFtZT0iR0VUIj4KICAgICAgICAgICAgICAgIDxyZXF1ZXN0PgogICAgICAgICAgICAgICAgICAgIDxwYXJhbSB4bWxuczp4cz0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIG5hbWU9InRva2VuIiBzdHlsZT0icXVlcnkiIHR5cGU9InhzOnN0cmluZyIvPgogICAgICAgICAgICAgICAgICAgIDxwYXJhbSB4bWxuczp4cz0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIG5hbWU9ImNvdW50IiBzdHlsZT0icXVlcnkiIHR5cGU9InhzOmludCIgZGVmYXVsdD0iMSIvPgogICAgICAgICAgICAgICAgPC9yZXF1ZXN0PgogICAgICAgICAgICAgICAgPHJlc3BvbnNlPgogICAgICAgICAgICAgICAgICAgIDxyZXByZXNlbnRhdGlvbiBtZWRpYVR5cGU9ImFwcGxpY2F0aW9uL2pzb24iLz4KICAgICAgICAgICAgICAgIDwvcmVzcG9uc2U+CiAgICAgICAgICAgIDwvbWV0aG9kPgogICAgICAgIDwvcmVzb3VyY2U+CiAgICA8L3Jlc291cmNlcz4KPC9hcHBsaWNhdGlvbj4K", "base64"));
  res.end();

  return __filename;
};
