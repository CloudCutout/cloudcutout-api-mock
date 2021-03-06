var path = require("path");

/**
 * GET /cloudcutout-workflow-job-service/rest/jobs/ddc71bdb-7018-4e2f-88cc-c561f19bf12d?cloudfront=false&token=239b5a37-b4b0-4d24-b7fc-85494a72e31d
 *
 * host: api2.cloudcutout.com
 * connection: keep-alive
 * accept: * / *
 * origin: http://localhost:9000
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36
 * content-type: application/json
 * referer: http://localhost:9000/
 * accept-encoding: gzip, deflate, sdch
 * accept-language: en-US,en;q=0.8,da;q=0.6
 * cookie: AWSELB=192F5B25149066DC84746F35692CB34D10DD7B6BA20919B71FFEA654F566B4C302DDB42EDD45DC338A891349AF2EA61BF204979AC9017EC16A538BD32DF74F76E7A9652E7F; _gat=1; _ga=GA1.1.583733367.1463916964
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("access-control-allow-credentials", "true");
  res.setHeader("access-control-allow-methods", "GET, POST, DELETE, PUT");
  res.setHeader("access-control-allow-origin", "http://localhost:9000");
  res.setHeader("content-type", "application/json");
  res.setHeader("date", "Thu, 26 May 2016 06:50:04 GMT");
  res.setHeader("hostname", "ip-10-101-182-80");
  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("content-length", "3944");
  res.setHeader("connection", "keep-alive");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJpZCI6ImRkYzcxYmRiLTcwMTgtNGUyZi04OGNjLWM1NjFmMTliZjEyZCIsInVzZXJuYW1lIjoidGVzdEN1c3RvbWVyIiwib3JpZ2luYWxGaWxlbmFtZSI6IkdSRUVOU0NSRUVOLzIwMTYwNTI1XzE3MDAvMzM3ODI1LTItMzA4NC1CTVctMTIyLkpQRyIsImR1ZURhdGUiOjE0NjQxODg2ODY0NzAsImxvY2tTdGF0dXMiOjEsInN0YXR1cyI6MSwiUUFTdGF0dXMiOiJjYyIsInJlZ2lzdGVyZWREYXRlIjoxNDY0MTg4Njg2NDcwLCJkZWxpdmVyeURhdGUiOjAsInF1ZXVlSWQiOiJHUkVFTlNDUkVFTiIsIm9yaWdpbmFsVVJMIjoiaHR0cHM6Ly9jbG91ZGN1dG91dC13b3JrZmxvdy5zMy5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24tam9icy9kZGM3MWJkYi03MDE4LTRlMmYtODhjYy1jNTYxZjE5YmYxMmQvZGRjNzFiZGItNzAxOC00ZTJmLTg4Y2MtYzU2MWYxOWJmMTJkX2hpZ2hyZXMuMS5wbmc/QVdTQWNjZXNzS2V5SWQ9QUtJQUpSQlFWTEZQVVlPQVlUUEEmRXhwaXJlcz0xNDY0ODUwMjA0JlNpZ25hdHVyZT15dk5LTWxjSUkxU2NmQSUyQmM2QkFRJTJGYVpGbjlNJTNEIiwidGh1bWJuYWlscyI6eyJzbWFsbCI6Imh0dHBzOi8vY2xvdWRjdXRvdXQtd29ya2Zsb3cuczMuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uLWpvYnMvZGRjNzFiZGItNzAxOC00ZTJmLTg4Y2MtYzU2MWYxOWJmMTJkL2RkYzcxYmRiLTcwMTgtNGUyZi04OGNjLWM1NjFmMTliZjEyZF9pY29uLjEucG5nP0FXU0FjY2Vzc0tleUlkPUFLSUFKUkJRVkxGUFVZT0FZVFBBJkV4cGlyZXM9MTQ2NDg1MDIwNCZTaWduYXR1cmU9b3dKMGdvUzZrVk4ycCUyQjR1YkNEMWVmWEZEVlUlM0QiLCJsYXJnZSI6Imh0dHBzOi8vY2xvdWRjdXRvdXQtd29ya2Zsb3cuczMuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uLWpvYnMvZGRjNzFiZGItNzAxOC00ZTJmLTg4Y2MtYzU2MWYxOWJmMTJkL2RkYzcxYmRiLTcwMTgtNGUyZi04OGNjLWM1NjFmMTliZjEyZF9sb3dyZXMuMS5wbmc/QVdTQWNjZXNzS2V5SWQ9QUtJQUpSQlFWTEZQVVlPQVlUUEEmRXhwaXJlcz0xNDY0ODUwMjA0JlNpZ25hdHVyZT0xNTRPSjRodzFzeTV3emJHWFJkQ21jVUlnZmclM0QiLCJtZWRpdW0iOiJodHRwczovL2Nsb3VkY3V0b3V0LXdvcmtmbG93LnMzLmFtYXpvbmF3cy5jb20vcHJvZHVjdGlvbi1qb2JzL2RkYzcxYmRiLTcwMTgtNGUyZi04OGNjLWM1NjFmMTliZjEyZC9kZGM3MWJkYi03MDE4LTRlMmYtODhjYy1jNTYxZjE5YmYxMmRfcHJldmlldy4xLnBuZz9BV1NBY2Nlc3NLZXlJZD1BS0lBSlJCUVZMRlBVWU9BWVRQQSZFeHBpcmVzPTE0NjQ4NTAyMDQmU2lnbmF0dXJlPWV3bzRFQ0gzN2Zuam9TRDNYUlFZUGlmSFprZyUzRCJ9LCJjdXRvdXRzIjp7IjEiOiJodHRwczovL2Nsb3VkY3V0b3V0LXdvcmtmbG93LnMzLmFtYXpvbmF3cy5jb20vcHJvZHVjdGlvbi1qb2JzL2RkYzcxYmRiLTcwMTgtNGUyZi04OGNjLWM1NjFmMTliZjEyZC9kZGM3MWJkYi03MDE4LTRlMmYtODhjYy1jNTYxZjE5YmYxMmRfY3V0b3V0LjEucG5nP0FXU0FjY2Vzc0tleUlkPUFLSUFKUkJRVkxGUFVZT0FZVFBBJkV4cGlyZXM9MTQ2NDg1MDIwNCZTaWduYXR1cmU9aW5lc05ENEpFZzFoQnUwc05nTU5sNTdOZjl3JTNEIn0sInJlc291cmNlcyI6eyJjdXRvdXRzIjpbeyJVUkwiOiJodHRwczovL2Nsb3VkY3V0b3V0LXdvcmtmbG93LnMzLmFtYXpvbmF3cy5jb20vcHJvZHVjdGlvbi1qb2JzL2RkYzcxYmRiLTcwMTgtNGUyZi04OGNjLWM1NjFmMTliZjEyZC9kZGM3MWJkYi03MDE4LTRlMmYtODhjYy1jNTYxZjE5YmYxMmRfY3V0b3V0LjEucG5nP0FXU0FjY2Vzc0tleUlkPUFLSUFKUkJRVkxGUFVZT0FZVFBBJkV4cGlyZXM9MTQ2NDg1MDIwNCZTaWduYXR1cmU9aW5lc05ENEpFZzFoQnUwc05nTU5sNTdOZjl3JTNEIiwic21hbGwiOiJodHRwczovL2Nsb3VkY3V0b3V0LXdvcmtmbG93LnMzLmFtYXpvbmF3cy5jb20vcHJvZHVjdGlvbi1qb2JzL2RkYzcxYmRiLTcwMTgtNGUyZi04OGNjLWM1NjFmMTliZjEyZC9kZGM3MWJkYi03MDE4LTRlMmYtODhjYy1jNTYxZjE5YmYxMmRfY3V0b3V0aWNvbi4xLnBuZz9BV1NBY2Nlc3NLZXlJZD1BS0lBSlJCUVZMRlBVWU9BWVRQQSZFeHBpcmVzPTE0NjQ4NTAyMDQmU2lnbmF0dXJlPUVjVnBFaDdFV0hGS2wlMkJ4NkJnejVERUhZeUdvJTNEIiwibWVkaXVtIjoiaHR0cHM6Ly9jbG91ZGN1dG91dC13b3JrZmxvdy5zMy5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24tam9icy9kZGM3MWJkYi03MDE4LTRlMmYtODhjYy1jNTYxZjE5YmYxMmQvZGRjNzFiZGItNzAxOC00ZTJmLTg4Y2MtYzU2MWYxOWJmMTJkX2N1dG91dGxvd3Jlcy4xLnBuZz9BV1NBY2Nlc3NLZXlJZD1BS0lBSlJCUVZMRlBVWU9BWVRQQSZFeHBpcmVzPTE0NjQ4NTAyMDQmU2lnbmF0dXJlPTczbnNic095NU11WWlZUE5GYWpHZ2E2ZW1ycyUzRCIsImxhcmdlIjoiaHR0cHM6Ly9jbG91ZGN1dG91dC13b3JrZmxvdy5zMy5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24tam9icy9kZGM3MWJkYi03MDE4LTRlMmYtODhjYy1jNTYxZjE5YmYxMmQvZGRjNzFiZGItNzAxOC00ZTJmLTg4Y2MtYzU2MWYxOWJmMTJkX2N1dG91dGxvd3Jlcy4xLnBuZz9BV1NBY2Nlc3NLZXlJZD1BS0lBSlJCUVZMRlBVWU9BWVRQQSZFeHBpcmVzPTE0NjQ4NTAyMDQmU2lnbmF0dXJlPTczbnNic095NU11WWlZUE5GYWpHZ2E2ZW1ycyUzRCIsImFscGhhIjp7InNtYWxsIjoiaHR0cHM6Ly9jbG91ZGN1dG91dC13b3JrZmxvdy5zMy5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24tam9icy9kZGM3MWJkYi03MDE4LTRlMmYtODhjYy1jNTYxZjE5YmYxMmQvZGRjNzFiZGItNzAxOC00ZTJmLTg4Y2MtYzU2MWYxOWJmMTJkX2FscGhhaWNvbi4xLnBuZz9BV1NBY2Nlc3NLZXlJZD1BS0lBSlJCUVZMRlBVWU9BWVRQQSZFeHBpcmVzPTE0NjQ4NTAyMDQmU2lnbmF0dXJlPUhXOXIlMkY2S3MwVnBNN1ZZVVg5VUJnaFJFTmVrJTNEIiwibWVkaXVtIjoiaHR0cHM6Ly9jbG91ZGN1dG91dC13b3JrZmxvdy5zMy5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24tam9icy9kZGM3MWJkYi03MDE4LTRlMmYtODhjYy1jNTYxZjE5YmYxMmQvZGRjNzFiZGItNzAxOC00ZTJmLTg4Y2MtYzU2MWYxOWJmMTJkX2FscGhhcHJldmlldy4xLnBuZz9BV1NBY2Nlc3NLZXlJZD1BS0lBSlJCUVZMRlBVWU9BWVRQQSZFeHBpcmVzPTE0NjQ4NTAyMDQmU2lnbmF0dXJlPTN5OGRXbGJ1UEdpWVJSaVVMaWFlR3BNRjNkOCUzRCIsImxhcmdlIjoiaHR0cHM6Ly9jbG91ZGN1dG91dC13b3JrZmxvdy5zMy5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24tam9icy9kZGM3MWJkYi03MDE4LTRlMmYtODhjYy1jNTYxZjE5YmYxMmQvZGRjNzFiZGItNzAxOC00ZTJmLTg4Y2MtYzU2MWYxOWJmMTJkX2FscGhhbG93cmVzLjEucG5nP0FXU0FjY2Vzc0tleUlkPUFLSUFKUkJRVkxGUFVZT0FZVFBBJkV4cGlyZXM9MTQ2NDg1MDIwNCZTaWduYXR1cmU9WHZvZ3FGcHFhJTJCZDhsSlFJVGhLOVJ6UXdQdVUlM0QifX1dfSwiYWN0aW9ucyI6W3siaWQiOiJtYXR0aW5nIiwibmFtZSI6Ik1hdHRpbmcgY29sb3IgW3Rlc3RdIiwidGVtcGxhdGVVUkwiOiIvY2xvdWRjdXRvdXQtd29ya2Zsb3ctbWF0dGluZy1zZXJ2aWNlL21hdHRpbmcuaHRtbD9waG90b3Nob3A9MSYiLCJkZXNjcmlwdGlvbiI6Ik1hcmsgdGhlIGltYWdlIHdpdGggZm9yZWdyb3VuZCBhbmQgYmFja2dyb3VuZCBhbm5vdGF0aW9ucy4iLCJyZXNvdXJjZXMiOlt7ImlkIjoicm9pIiwiZmlsZW5hbWUiOiJyb2kucG5nIn1dfSx7ImlkIjoic3BpbGwiLCJuYW1lIjoiU3BpbGwgY29sb3IgW3Rlc3RdIiwidGVtcGxhdGVVUkwiOiIvY2xvdWRjdXRvdXQtd29ya2Zsb3ctam9iLXNlcnZpY2UvYWN0aW9ucy9zcGlsbC9zcGlsbC5odG1sP3Bob3Rvc2hvcD0xJiIsImRlc2NyaXB0aW9uIjoiQ29ycmVjdCBzcGlsbCBjb2xvcnMuIiwicmVzb3VyY2VzIjpbeyJpZCI6InJvaSIsImZpbGVuYW1lIjoicm9pLnBuZyJ9XX1dLCJyZW1hcmtzIjpbXX0=", "base64"));
  res.end();

  return __filename;
};
