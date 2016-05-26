var path = require("path");

/**
 * GET /cloudcutout-workflow-job-service/rest/jobs/de2303f8-9dc5-474e-adb1-b0426f2a4f37?cloudfront=false&token=884787ea-5f2e-4370-8813-d5e60dbe5780
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
 * cookie: AWSELB=192F5B25149066DC84746F35692CB34D10DD7B6BA20919B71FFEA654F566B4C302DDB42EDD45DC338A891349AF2EA61BF204979AC9017EC16A538BD32DF74F76E7A9652E7F; _ga=GA1.1.583733367.1463916964; _gat=1
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("access-control-allow-credentials", "true");
  res.setHeader("access-control-allow-methods", "GET, POST, DELETE, PUT");
  res.setHeader("access-control-allow-origin", "http://localhost:9000");
  res.setHeader("content-type", "application/json");
  res.setHeader("date", "Thu, 26 May 2016 07:12:52 GMT");
  res.setHeader("hostname", "ip-10-101-182-80");
  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("content-length", "3942");
  res.setHeader("connection", "keep-alive");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJpZCI6ImRlMjMwM2Y4LTlkYzUtNDc0ZS1hZGIxLWIwNDI2ZjJhNGYzNyIsInVzZXJuYW1lIjoidGVzdEN1c3RvbWVyIiwib3JpZ2luYWxGaWxlbmFtZSI6IkdSRUVOU0NSRUVOLzIwMTYwNTI1XzIwMDAvMzM3ODI1LTItMzA4MS1DU1ctMjExLkpQRyIsImR1ZURhdGUiOjE0NjQxOTk0OTIzNTgsImxvY2tTdGF0dXMiOjEsInN0YXR1cyI6MSwiUUFTdGF0dXMiOiJjYyIsInJlZ2lzdGVyZWREYXRlIjoxNDY0MTk5NDkyMzU4LCJkZWxpdmVyeURhdGUiOjAsInF1ZXVlSWQiOiJHUkVFTlNDUkVFTiIsIm9yaWdpbmFsVVJMIjoiaHR0cHM6Ly9jbG91ZGN1dG91dC13b3JrZmxvdy5zMy5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24tam9icy9kZTIzMDNmOC05ZGM1LTQ3NGUtYWRiMS1iMDQyNmYyYTRmMzcvZGUyMzAzZjgtOWRjNS00NzRlLWFkYjEtYjA0MjZmMmE0ZjM3X2hpZ2hyZXMuMS5wbmc/QVdTQWNjZXNzS2V5SWQ9QUtJQUpSQlFWTEZQVVlPQVlUUEEmRXhwaXJlcz0xNDY0ODUxNTczJlNpZ25hdHVyZT1YOHJVOHElMkJnM1ZoNGtLT3pJZEZhc1g0RXRFayUzRCIsInRodW1ibmFpbHMiOnsic21hbGwiOiJodHRwczovL2Nsb3VkY3V0b3V0LXdvcmtmbG93LnMzLmFtYXpvbmF3cy5jb20vcHJvZHVjdGlvbi1qb2JzL2RlMjMwM2Y4LTlkYzUtNDc0ZS1hZGIxLWIwNDI2ZjJhNGYzNy9kZTIzMDNmOC05ZGM1LTQ3NGUtYWRiMS1iMDQyNmYyYTRmMzdfaWNvbi4xLnBuZz9BV1NBY2Nlc3NLZXlJZD1BS0lBSlJCUVZMRlBVWU9BWVRQQSZFeHBpcmVzPTE0NjQ4NTE1NzMmU2lnbmF0dXJlPWRJYjNmVXNVRUNUWW8xbUlWY2F0aURKT2c3QSUzRCIsImxhcmdlIjoiaHR0cHM6Ly9jbG91ZGN1dG91dC13b3JrZmxvdy5zMy5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24tam9icy9kZTIzMDNmOC05ZGM1LTQ3NGUtYWRiMS1iMDQyNmYyYTRmMzcvZGUyMzAzZjgtOWRjNS00NzRlLWFkYjEtYjA0MjZmMmE0ZjM3X2xvd3Jlcy4xLnBuZz9BV1NBY2Nlc3NLZXlJZD1BS0lBSlJCUVZMRlBVWU9BWVRQQSZFeHBpcmVzPTE0NjQ4NTE1NzMmU2lnbmF0dXJlPUVzdlFpWFhPVGljUnlodmJ3OVQlMkY5dzMxMW1vJTNEIiwibWVkaXVtIjoiaHR0cHM6Ly9jbG91ZGN1dG91dC13b3JrZmxvdy5zMy5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24tam9icy9kZTIzMDNmOC05ZGM1LTQ3NGUtYWRiMS1iMDQyNmYyYTRmMzcvZGUyMzAzZjgtOWRjNS00NzRlLWFkYjEtYjA0MjZmMmE0ZjM3X3ByZXZpZXcuMS5wbmc/QVdTQWNjZXNzS2V5SWQ9QUtJQUpSQlFWTEZQVVlPQVlUUEEmRXhwaXJlcz0xNDY0ODUxNTczJlNpZ25hdHVyZT0yMjRpc1VVVTFvUHdqMzF5OHlpcjFVc0QxN1ElM0QifSwiY3V0b3V0cyI6eyIxIjoiaHR0cHM6Ly9jbG91ZGN1dG91dC13b3JrZmxvdy5zMy5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24tam9icy9kZTIzMDNmOC05ZGM1LTQ3NGUtYWRiMS1iMDQyNmYyYTRmMzcvZGUyMzAzZjgtOWRjNS00NzRlLWFkYjEtYjA0MjZmMmE0ZjM3X2N1dG91dC4xLnBuZz9BV1NBY2Nlc3NLZXlJZD1BS0lBSlJCUVZMRlBVWU9BWVRQQSZFeHBpcmVzPTE0NjQ4NTE1NzMmU2lnbmF0dXJlPTNIMXM1OXZLR1F1ZzVlOXV1WG1vaHlhNmNxRSUzRCJ9LCJyZXNvdXJjZXMiOnsiY3V0b3V0cyI6W3siVVJMIjoiaHR0cHM6Ly9jbG91ZGN1dG91dC13b3JrZmxvdy5zMy5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24tam9icy9kZTIzMDNmOC05ZGM1LTQ3NGUtYWRiMS1iMDQyNmYyYTRmMzcvZGUyMzAzZjgtOWRjNS00NzRlLWFkYjEtYjA0MjZmMmE0ZjM3X2N1dG91dC4xLnBuZz9BV1NBY2Nlc3NLZXlJZD1BS0lBSlJCUVZMRlBVWU9BWVRQQSZFeHBpcmVzPTE0NjQ4NTE1NzMmU2lnbmF0dXJlPTNIMXM1OXZLR1F1ZzVlOXV1WG1vaHlhNmNxRSUzRCIsInNtYWxsIjoiaHR0cHM6Ly9jbG91ZGN1dG91dC13b3JrZmxvdy5zMy5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24tam9icy9kZTIzMDNmOC05ZGM1LTQ3NGUtYWRiMS1iMDQyNmYyYTRmMzcvZGUyMzAzZjgtOWRjNS00NzRlLWFkYjEtYjA0MjZmMmE0ZjM3X2N1dG91dGljb24uMS5wbmc/QVdTQWNjZXNzS2V5SWQ9QUtJQUpSQlFWTEZQVVlPQVlUUEEmRXhwaXJlcz0xNDY0ODUxNTczJlNpZ25hdHVyZT1iVUF3QlJ6V0JmZHFkR3VuNkZPbDJyNmclMkZaQSUzRCIsIm1lZGl1bSI6Imh0dHBzOi8vY2xvdWRjdXRvdXQtd29ya2Zsb3cuczMuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uLWpvYnMvZGUyMzAzZjgtOWRjNS00NzRlLWFkYjEtYjA0MjZmMmE0ZjM3L2RlMjMwM2Y4LTlkYzUtNDc0ZS1hZGIxLWIwNDI2ZjJhNGYzN19jdXRvdXRsb3dyZXMuMS5wbmc/QVdTQWNjZXNzS2V5SWQ9QUtJQUpSQlFWTEZQVVlPQVlUUEEmRXhwaXJlcz0xNDY0ODUxNTczJlNpZ25hdHVyZT1heUxRdnIyRGJPamZaakk3bWhPM1NyVkpOMlUlM0QiLCJsYXJnZSI6Imh0dHBzOi8vY2xvdWRjdXRvdXQtd29ya2Zsb3cuczMuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uLWpvYnMvZGUyMzAzZjgtOWRjNS00NzRlLWFkYjEtYjA0MjZmMmE0ZjM3L2RlMjMwM2Y4LTlkYzUtNDc0ZS1hZGIxLWIwNDI2ZjJhNGYzN19jdXRvdXRsb3dyZXMuMS5wbmc/QVdTQWNjZXNzS2V5SWQ9QUtJQUpSQlFWTEZQVVlPQVlUUEEmRXhwaXJlcz0xNDY0ODUxNTczJlNpZ25hdHVyZT1heUxRdnIyRGJPamZaakk3bWhPM1NyVkpOMlUlM0QiLCJhbHBoYSI6eyJzbWFsbCI6Imh0dHBzOi8vY2xvdWRjdXRvdXQtd29ya2Zsb3cuczMuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uLWpvYnMvZGUyMzAzZjgtOWRjNS00NzRlLWFkYjEtYjA0MjZmMmE0ZjM3L2RlMjMwM2Y4LTlkYzUtNDc0ZS1hZGIxLWIwNDI2ZjJhNGYzN19hbHBoYWljb24uMS5wbmc/QVdTQWNjZXNzS2V5SWQ9QUtJQUpSQlFWTEZQVVlPQVlUUEEmRXhwaXJlcz0xNDY0ODUxNTczJlNpZ25hdHVyZT1uY2lEQkJzR3hoZXo2NE9ncTlSUFI5dkd1OEUlM0QiLCJtZWRpdW0iOiJodHRwczovL2Nsb3VkY3V0b3V0LXdvcmtmbG93LnMzLmFtYXpvbmF3cy5jb20vcHJvZHVjdGlvbi1qb2JzL2RlMjMwM2Y4LTlkYzUtNDc0ZS1hZGIxLWIwNDI2ZjJhNGYzNy9kZTIzMDNmOC05ZGM1LTQ3NGUtYWRiMS1iMDQyNmYyYTRmMzdfYWxwaGFwcmV2aWV3LjEucG5nP0FXU0FjY2Vzc0tleUlkPUFLSUFKUkJRVkxGUFVZT0FZVFBBJkV4cGlyZXM9MTQ2NDg1MTU3MyZTaWduYXR1cmU9JTJGZWVvWGdNb1pVbDJYQTFnb3ZINXk1Vno0dDQlM0QiLCJsYXJnZSI6Imh0dHBzOi8vY2xvdWRjdXRvdXQtd29ya2Zsb3cuczMuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uLWpvYnMvZGUyMzAzZjgtOWRjNS00NzRlLWFkYjEtYjA0MjZmMmE0ZjM3L2RlMjMwM2Y4LTlkYzUtNDc0ZS1hZGIxLWIwNDI2ZjJhNGYzN19hbHBoYWxvd3Jlcy4xLnBuZz9BV1NBY2Nlc3NLZXlJZD1BS0lBSlJCUVZMRlBVWU9BWVRQQSZFeHBpcmVzPTE0NjQ4NTE1NzMmU2lnbmF0dXJlPXFSRU05REhaMWk5OCUyQlNOTzhRNDBhSnJRTlA4JTNEIn19XX0sImFjdGlvbnMiOlt7ImlkIjoibWF0dGluZyIsIm5hbWUiOiJNYXR0aW5nIGNvbG9yIFt0ZXN0XSIsInRlbXBsYXRlVVJMIjoiL2Nsb3VkY3V0b3V0LXdvcmtmbG93LW1hdHRpbmctc2VydmljZS9tYXR0aW5nLmh0bWw/cGhvdG9zaG9wPTEmIiwiZGVzY3JpcHRpb24iOiJNYXJrIHRoZSBpbWFnZSB3aXRoIGZvcmVncm91bmQgYW5kIGJhY2tncm91bmQgYW5ub3RhdGlvbnMuIiwicmVzb3VyY2VzIjpbeyJpZCI6InJvaSIsImZpbGVuYW1lIjoicm9pLnBuZyJ9XX0seyJpZCI6InNwaWxsIiwibmFtZSI6IlNwaWxsIGNvbG9yIFt0ZXN0XSIsInRlbXBsYXRlVVJMIjoiL2Nsb3VkY3V0b3V0LXdvcmtmbG93LWpvYi1zZXJ2aWNlL2FjdGlvbnMvc3BpbGwvc3BpbGwuaHRtbD9waG90b3Nob3A9MSYiLCJkZXNjcmlwdGlvbiI6IkNvcnJlY3Qgc3BpbGwgY29sb3JzLiIsInJlc291cmNlcyI6W3siaWQiOiJyb2kiLCJmaWxlbmFtZSI6InJvaS5wbmcifV19XSwicmVtYXJrcyI6W119", "base64"));
  res.end();

  return __filename;
};
