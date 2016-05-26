var path = require("path");

/**
 * OPTIONS /cloudcutout-workflow-job-service/rest/auth
 *
 * host: api2.cloudcutout.com
 * connection: keep-alive
 * access-control-request-method: POST
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
  res.setHeader("allow", "HEAD,POST,GET,OPTIONS");
  res.setHeader("cache-control", "no-cache=\"set-cookie\"");
  res.setHeader("content-type", "application/vnd.sun.wadl+xml");
  res.setHeader("date", "Thu, 26 May 2016 06:50:00 GMT");
  res.setHeader("hostname", "ip-10-5-185-120");
  res.setHeader("last-modified", "Thu, 26 May 2016 06:50:01 UTC");
  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("set-cookie", ["AWSELB=192F5B25149066DC84746F35692CB34D10DD7B6BA249F96A04BAD0773973EDDB8AA304ABBA29825577D3C389071AEAA04A755B1DF7504B3F7DD3A68E62CADEE064220BCB6D;PATH=/"]);
  res.setHeader("content-length", "1165");
  res.setHeader("connection", "keep-alive");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/Pgo8YXBwbGljYXRpb24geG1sbnM9Imh0dHA6Ly93YWRsLmRldi5qYXZhLm5ldC8yMDA5LzAyIj4KICAgIDxkb2MgeG1sbnM6amVyc2V5PSJodHRwOi8vamVyc2V5LmphdmEubmV0LyIgamVyc2V5OmdlbmVyYXRlZEJ5PSJKZXJzZXk6IDIuMTkgMjAxNS0wNi0yOSAxMzowMjo1OCIvPgogICAgPGdyYW1tYXJzPgogICAgICAgIDxpbmNsdWRlIGhyZWY9Imh0dHA6Ly9hcGkyLmNsb3VkY3V0b3V0LmNvbS9jbG91ZGN1dG91dC13b3JrZmxvdy1qb2Itc2VydmljZS9yZXN0L2FwcGxpY2F0aW9uLndhZGwveHNkMC54c2QiPgogICAgICAgICAgICA8ZG9jIHRpdGxlPSJHZW5lcmF0ZWQiIHhtbDpsYW5nPSJlbiIvPgogICAgICAgIDwvaW5jbHVkZT4KICAgIDwvZ3JhbW1hcnM+CiAgICA8cmVzb3VyY2VzIGJhc2U9Imh0dHA6Ly9hcGkyLmNsb3VkY3V0b3V0LmNvbS9jbG91ZGN1dG91dC13b3JrZmxvdy1qb2Itc2VydmljZS9yZXN0LyI+CiAgICAgICAgPHJlc291cmNlIHBhdGg9ImF1dGgiPgogICAgICAgICAgICA8bWV0aG9kIGlkPSJhdXRoZW50aWNhdGUiIG5hbWU9IkdFVCI+CiAgICAgICAgICAgICAgICA8cmVxdWVzdD4KICAgICAgICAgICAgICAgICAgICA8cGFyYW0geG1sbnM6eHM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hIiBuYW1lPSJ0b2tlbiIgc3R5bGU9InF1ZXJ5IiB0eXBlPSJ4czpzdHJpbmciLz4KICAgICAgICAgICAgICAgIDwvcmVxdWVzdD4KICAgICAgICAgICAgICAgIDxyZXNwb25zZT4KICAgICAgICAgICAgICAgICAgICA8cmVwcmVzZW50YXRpb24gbWVkaWFUeXBlPSJhcHBsaWNhdGlvbi9qc29uIi8+CiAgICAgICAgICAgICAgICA8L3Jlc3BvbnNlPgogICAgICAgICAgICA8L21ldGhvZD4KICAgICAgICAgICAgPG1ldGhvZCBpZD0iYXV0aGVudGljYXRlIiBuYW1lPSJQT1NUIj4KICAgICAgICAgICAgICAgIDxyZXNwb25zZT4KICAgICAgICAgICAgICAgICAgICA8cmVwcmVzZW50YXRpb24gbWVkaWFUeXBlPSJhcHBsaWNhdGlvbi9qc29uIi8+CiAgICAgICAgICAgICAgICA8L3Jlc3BvbnNlPgogICAgICAgICAgICA8L21ldGhvZD4KICAgICAgICA8L3Jlc291cmNlPgogICAgPC9yZXNvdXJjZXM+CjwvYXBwbGljYXRpb24+Cg==", "base64"));
  res.end();

  return __filename;
};
