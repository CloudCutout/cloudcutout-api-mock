var path = require("path");

/**
 * GET /cloudcutout-workflow-job-service/rest/jobs/de2303f8-9dc5-474e-adb1-b0426f2a4f37?cloudfront=false&token=239b5a37-b4b0-4d24-b7fc-85494a72e31d
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
  res.setHeader("date", "Thu, 26 May 2016 06:52:21 GMT");
  res.setHeader("hostname", "ip-10-101-182-80");
  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("content-length", "3940");
  res.setHeader("connection", "keep-alive");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJpZCI6ImRlMjMwM2Y4LTlkYzUtNDc0ZS1hZGIxLWIwNDI2ZjJhNGYzNyIsInVzZXJuYW1lIjoidGVzdEN1c3RvbWVyIiwib3JpZ2luYWxGaWxlbmFtZSI6IkdSRUVOU0NSRUVOLzIwMTYwNTI1XzIwMDAvMzM3ODI1LTItMzA4MS1DU1ctMjExLkpQRyIsImR1ZURhdGUiOjE0NjQxOTk0OTIzNTgsImxvY2tTdGF0dXMiOjEsInN0YXR1cyI6MSwiUUFTdGF0dXMiOiJjYyIsInJlZ2lzdGVyZWREYXRlIjoxNDY0MTk5NDkyMzU4LCJkZWxpdmVyeURhdGUiOjAsInF1ZXVlSWQiOiJHUkVFTlNDUkVFTiIsIm9yaWdpbmFsVVJMIjoiaHR0cHM6Ly9jbG91ZGN1dG91dC13b3JrZmxvdy5zMy5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24tam9icy9kZTIzMDNmOC05ZGM1LTQ3NGUtYWRiMS1iMDQyNmYyYTRmMzcvZGUyMzAzZjgtOWRjNS00NzRlLWFkYjEtYjA0MjZmMmE0ZjM3X2hpZ2hyZXMuMS5wbmc/QVdTQWNjZXNzS2V5SWQ9QUtJQUpSQlFWTEZQVVlPQVlUUEEmRXhwaXJlcz0xNDY0ODUwMzQxJlNpZ25hdHVyZT1mNXQzZ3NHV3FjbnV2T0R0Y3hMRkI4MUh0MzglM0QiLCJ0aHVtYm5haWxzIjp7InNtYWxsIjoiaHR0cHM6Ly9jbG91ZGN1dG91dC13b3JrZmxvdy5zMy5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24tam9icy9kZTIzMDNmOC05ZGM1LTQ3NGUtYWRiMS1iMDQyNmYyYTRmMzcvZGUyMzAzZjgtOWRjNS00NzRlLWFkYjEtYjA0MjZmMmE0ZjM3X2ljb24uMS5wbmc/QVdTQWNjZXNzS2V5SWQ9QUtJQUpSQlFWTEZQVVlPQVlUUEEmRXhwaXJlcz0xNDY0ODUwMzQxJlNpZ25hdHVyZT10V0tlZjJWRFM5UlZYem85d0VSSWp6alZ5MUklM0QiLCJsYXJnZSI6Imh0dHBzOi8vY2xvdWRjdXRvdXQtd29ya2Zsb3cuczMuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uLWpvYnMvZGUyMzAzZjgtOWRjNS00NzRlLWFkYjEtYjA0MjZmMmE0ZjM3L2RlMjMwM2Y4LTlkYzUtNDc0ZS1hZGIxLWIwNDI2ZjJhNGYzN19sb3dyZXMuMS5wbmc/QVdTQWNjZXNzS2V5SWQ9QUtJQUpSQlFWTEZQVVlPQVlUUEEmRXhwaXJlcz0xNDY0ODUwMzQxJlNpZ25hdHVyZT02NTBaSGM5VXJ0YWdHJTJCblhVY2p0anh4NTVkRSUzRCIsIm1lZGl1bSI6Imh0dHBzOi8vY2xvdWRjdXRvdXQtd29ya2Zsb3cuczMuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uLWpvYnMvZGUyMzAzZjgtOWRjNS00NzRlLWFkYjEtYjA0MjZmMmE0ZjM3L2RlMjMwM2Y4LTlkYzUtNDc0ZS1hZGIxLWIwNDI2ZjJhNGYzN19wcmV2aWV3LjEucG5nP0FXU0FjY2Vzc0tleUlkPUFLSUFKUkJRVkxGUFVZT0FZVFBBJkV4cGlyZXM9MTQ2NDg1MDM0MSZTaWduYXR1cmU9WGFldEw2OWFPSHJQMWFhREhvN1FIRFVYU2hrJTNEIn0sImN1dG91dHMiOnsiMSI6Imh0dHBzOi8vY2xvdWRjdXRvdXQtd29ya2Zsb3cuczMuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uLWpvYnMvZGUyMzAzZjgtOWRjNS00NzRlLWFkYjEtYjA0MjZmMmE0ZjM3L2RlMjMwM2Y4LTlkYzUtNDc0ZS1hZGIxLWIwNDI2ZjJhNGYzN19jdXRvdXQuMS5wbmc/QVdTQWNjZXNzS2V5SWQ9QUtJQUpSQlFWTEZQVVlPQVlUUEEmRXhwaXJlcz0xNDY0ODUwMzQxJlNpZ25hdHVyZT13SW93Sml1WXpyJTJGMEJOYkdvdGdJV3dRcXhsTSUzRCJ9LCJyZXNvdXJjZXMiOnsiY3V0b3V0cyI6W3siVVJMIjoiaHR0cHM6Ly9jbG91ZGN1dG91dC13b3JrZmxvdy5zMy5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24tam9icy9kZTIzMDNmOC05ZGM1LTQ3NGUtYWRiMS1iMDQyNmYyYTRmMzcvZGUyMzAzZjgtOWRjNS00NzRlLWFkYjEtYjA0MjZmMmE0ZjM3X2N1dG91dC4xLnBuZz9BV1NBY2Nlc3NLZXlJZD1BS0lBSlJCUVZMRlBVWU9BWVRQQSZFeHBpcmVzPTE0NjQ4NTAzNDEmU2lnbmF0dXJlPXdJb3dKaXVZenIlMkYwQk5iR290Z0lXd1FxeGxNJTNEIiwic21hbGwiOiJodHRwczovL2Nsb3VkY3V0b3V0LXdvcmtmbG93LnMzLmFtYXpvbmF3cy5jb20vcHJvZHVjdGlvbi1qb2JzL2RlMjMwM2Y4LTlkYzUtNDc0ZS1hZGIxLWIwNDI2ZjJhNGYzNy9kZTIzMDNmOC05ZGM1LTQ3NGUtYWRiMS1iMDQyNmYyYTRmMzdfY3V0b3V0aWNvbi4xLnBuZz9BV1NBY2Nlc3NLZXlJZD1BS0lBSlJCUVZMRlBVWU9BWVRQQSZFeHBpcmVzPTE0NjQ4NTAzNDEmU2lnbmF0dXJlPTltYWdTUVBpT2ZOTDgwRXZuaU9hRmpsR0VIRSUzRCIsIm1lZGl1bSI6Imh0dHBzOi8vY2xvdWRjdXRvdXQtd29ya2Zsb3cuczMuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uLWpvYnMvZGUyMzAzZjgtOWRjNS00NzRlLWFkYjEtYjA0MjZmMmE0ZjM3L2RlMjMwM2Y4LTlkYzUtNDc0ZS1hZGIxLWIwNDI2ZjJhNGYzN19jdXRvdXRsb3dyZXMuMS5wbmc/QVdTQWNjZXNzS2V5SWQ9QUtJQUpSQlFWTEZQVVlPQVlUUEEmRXhwaXJlcz0xNDY0ODUwMzQxJlNpZ25hdHVyZT1BdDN6b01VclFRV1RLRGF1enhydHhJdEh0b00lM0QiLCJsYXJnZSI6Imh0dHBzOi8vY2xvdWRjdXRvdXQtd29ya2Zsb3cuczMuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uLWpvYnMvZGUyMzAzZjgtOWRjNS00NzRlLWFkYjEtYjA0MjZmMmE0ZjM3L2RlMjMwM2Y4LTlkYzUtNDc0ZS1hZGIxLWIwNDI2ZjJhNGYzN19jdXRvdXRsb3dyZXMuMS5wbmc/QVdTQWNjZXNzS2V5SWQ9QUtJQUpSQlFWTEZQVVlPQVlUUEEmRXhwaXJlcz0xNDY0ODUwMzQxJlNpZ25hdHVyZT1BdDN6b01VclFRV1RLRGF1enhydHhJdEh0b00lM0QiLCJhbHBoYSI6eyJzbWFsbCI6Imh0dHBzOi8vY2xvdWRjdXRvdXQtd29ya2Zsb3cuczMuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uLWpvYnMvZGUyMzAzZjgtOWRjNS00NzRlLWFkYjEtYjA0MjZmMmE0ZjM3L2RlMjMwM2Y4LTlkYzUtNDc0ZS1hZGIxLWIwNDI2ZjJhNGYzN19hbHBoYWljb24uMS5wbmc/QVdTQWNjZXNzS2V5SWQ9QUtJQUpSQlFWTEZQVVlPQVlUUEEmRXhwaXJlcz0xNDY0ODUwMzQxJlNpZ25hdHVyZT1DYnA2cjhhM2duRUFpOWtQVm15N3I3dFZOU00lM0QiLCJtZWRpdW0iOiJodHRwczovL2Nsb3VkY3V0b3V0LXdvcmtmbG93LnMzLmFtYXpvbmF3cy5jb20vcHJvZHVjdGlvbi1qb2JzL2RlMjMwM2Y4LTlkYzUtNDc0ZS1hZGIxLWIwNDI2ZjJhNGYzNy9kZTIzMDNmOC05ZGM1LTQ3NGUtYWRiMS1iMDQyNmYyYTRmMzdfYWxwaGFwcmV2aWV3LjEucG5nP0FXU0FjY2Vzc0tleUlkPUFLSUFKUkJRVkxGUFVZT0FZVFBBJkV4cGlyZXM9MTQ2NDg1MDM0MSZTaWduYXR1cmU9JTJCYUI5ZkZJM0lOV25mZmZPd245RVdLMEtUY0klM0QiLCJsYXJnZSI6Imh0dHBzOi8vY2xvdWRjdXRvdXQtd29ya2Zsb3cuczMuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uLWpvYnMvZGUyMzAzZjgtOWRjNS00NzRlLWFkYjEtYjA0MjZmMmE0ZjM3L2RlMjMwM2Y4LTlkYzUtNDc0ZS1hZGIxLWIwNDI2ZjJhNGYzN19hbHBoYWxvd3Jlcy4xLnBuZz9BV1NBY2Nlc3NLZXlJZD1BS0lBSlJCUVZMRlBVWU9BWVRQQSZFeHBpcmVzPTE0NjQ4NTAzNDEmU2lnbmF0dXJlPXBzdDRCVDFwTHBCajMxYmg4RDN4T2V3a0pSWSUzRCJ9fV19LCJhY3Rpb25zIjpbeyJpZCI6Im1hdHRpbmciLCJuYW1lIjoiTWF0dGluZyBjb2xvciBbdGVzdF0iLCJ0ZW1wbGF0ZVVSTCI6Ii9jbG91ZGN1dG91dC13b3JrZmxvdy1tYXR0aW5nLXNlcnZpY2UvbWF0dGluZy5odG1sP3Bob3Rvc2hvcD0xJiIsImRlc2NyaXB0aW9uIjoiTWFyayB0aGUgaW1hZ2Ugd2l0aCBmb3JlZ3JvdW5kIGFuZCBiYWNrZ3JvdW5kIGFubm90YXRpb25zLiIsInJlc291cmNlcyI6W3siaWQiOiJyb2kiLCJmaWxlbmFtZSI6InJvaS5wbmcifV19LHsiaWQiOiJzcGlsbCIsIm5hbWUiOiJTcGlsbCBjb2xvciBbdGVzdF0iLCJ0ZW1wbGF0ZVVSTCI6Ii9jbG91ZGN1dG91dC13b3JrZmxvdy1qb2Itc2VydmljZS9hY3Rpb25zL3NwaWxsL3NwaWxsLmh0bWw/cGhvdG9zaG9wPTEmIiwiZGVzY3JpcHRpb24iOiJDb3JyZWN0IHNwaWxsIGNvbG9ycy4iLCJyZXNvdXJjZXMiOlt7ImlkIjoicm9pIiwiZmlsZW5hbWUiOiJyb2kucG5nIn1dfV0sInJlbWFya3MiOltdfQ==", "base64"));
  res.end();

  return __filename;
};
