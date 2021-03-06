var path = require("path");

/**
 * GET /cloudcutout-workflow-job-service/rest/jobs/a0ce24bf-6330-49aa-a650-6d14b366c40f?cloudfront=false&token=884787ea-5f2e-4370-8813-d5e60dbe5780
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
  res.setHeader("date", "Thu, 26 May 2016 07:11:50 GMT");
  res.setHeader("hostname", "ip-10-101-182-80");
  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("content-length", "3952");
  res.setHeader("connection", "keep-alive");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJpZCI6ImEwY2UyNGJmLTYzMzAtNDlhYS1hNjUwLTZkMTRiMzY2YzQwZiIsInVzZXJuYW1lIjoidGVzdEN1c3RvbWVyIiwib3JpZ2luYWxGaWxlbmFtZSI6IkdSRUVOU0NSRUVOLzIwMTYwNTI1XzE3MDAvMzM3ODI1LTItMzA4MS1DU1ctMTYzLkpQRyIsImR1ZURhdGUiOjE0NjQxODg2ODY0NzAsImxvY2tTdGF0dXMiOjEsInN0YXR1cyI6MSwiUUFTdGF0dXMiOiJjYyIsInJlZ2lzdGVyZWREYXRlIjoxNDY0MTg4Njg2NDcwLCJkZWxpdmVyeURhdGUiOjAsInF1ZXVlSWQiOiJHUkVFTlNDUkVFTiIsIm9yaWdpbmFsVVJMIjoiaHR0cHM6Ly9jbG91ZGN1dG91dC13b3JrZmxvdy5zMy5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24tam9icy9hMGNlMjRiZi02MzMwLTQ5YWEtYTY1MC02ZDE0YjM2NmM0MGYvYTBjZTI0YmYtNjMzMC00OWFhLWE2NTAtNmQxNGIzNjZjNDBmX2hpZ2hyZXMuMS5wbmc/QVdTQWNjZXNzS2V5SWQ9QUtJQUpSQlFWTEZQVVlPQVlUUEEmRXhwaXJlcz0xNDY0ODUxNTEwJlNpZ25hdHVyZT1ORWklMkJTYk9YS2ROTjRENlJnSmNxaVRZUVZoZyUzRCIsInRodW1ibmFpbHMiOnsic21hbGwiOiJodHRwczovL2Nsb3VkY3V0b3V0LXdvcmtmbG93LnMzLmFtYXpvbmF3cy5jb20vcHJvZHVjdGlvbi1qb2JzL2EwY2UyNGJmLTYzMzAtNDlhYS1hNjUwLTZkMTRiMzY2YzQwZi9hMGNlMjRiZi02MzMwLTQ5YWEtYTY1MC02ZDE0YjM2NmM0MGZfaWNvbi4xLnBuZz9BV1NBY2Nlc3NLZXlJZD1BS0lBSlJCUVZMRlBVWU9BWVRQQSZFeHBpcmVzPTE0NjQ4NTE1MTAmU2lnbmF0dXJlPVRmVFYyV2RnJTJGcWM1bGtyTkpCeThOSTAwb3FvJTNEIiwibGFyZ2UiOiJodHRwczovL2Nsb3VkY3V0b3V0LXdvcmtmbG93LnMzLmFtYXpvbmF3cy5jb20vcHJvZHVjdGlvbi1qb2JzL2EwY2UyNGJmLTYzMzAtNDlhYS1hNjUwLTZkMTRiMzY2YzQwZi9hMGNlMjRiZi02MzMwLTQ5YWEtYTY1MC02ZDE0YjM2NmM0MGZfbG93cmVzLjEucG5nP0FXU0FjY2Vzc0tleUlkPUFLSUFKUkJRVkxGUFVZT0FZVFBBJkV4cGlyZXM9MTQ2NDg1MTUxMCZTaWduYXR1cmU9eDZqbCUyRiUyRjF1b1RwSFUwc3UzNVpmNkVZNVJZcyUzRCIsIm1lZGl1bSI6Imh0dHBzOi8vY2xvdWRjdXRvdXQtd29ya2Zsb3cuczMuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uLWpvYnMvYTBjZTI0YmYtNjMzMC00OWFhLWE2NTAtNmQxNGIzNjZjNDBmL2EwY2UyNGJmLTYzMzAtNDlhYS1hNjUwLTZkMTRiMzY2YzQwZl9wcmV2aWV3LjEucG5nP0FXU0FjY2Vzc0tleUlkPUFLSUFKUkJRVkxGUFVZT0FZVFBBJkV4cGlyZXM9MTQ2NDg1MTUxMCZTaWduYXR1cmU9cVhTUSUyQnpGRnltRGVyS2tMZER0UGdqQ3RHN0UlM0QifSwiY3V0b3V0cyI6eyIxIjoiaHR0cHM6Ly9jbG91ZGN1dG91dC13b3JrZmxvdy5zMy5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24tam9icy9hMGNlMjRiZi02MzMwLTQ5YWEtYTY1MC02ZDE0YjM2NmM0MGYvYTBjZTI0YmYtNjMzMC00OWFhLWE2NTAtNmQxNGIzNjZjNDBmX2N1dG91dC4xLnBuZz9BV1NBY2Nlc3NLZXlJZD1BS0lBSlJCUVZMRlBVWU9BWVRQQSZFeHBpcmVzPTE0NjQ4NTE1MTAmU2lnbmF0dXJlPWtaajAzNFJUdXYzZUdqcWpjUXRqQWJIYkZsYyUzRCJ9LCJyZXNvdXJjZXMiOnsiY3V0b3V0cyI6W3siVVJMIjoiaHR0cHM6Ly9jbG91ZGN1dG91dC13b3JrZmxvdy5zMy5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24tam9icy9hMGNlMjRiZi02MzMwLTQ5YWEtYTY1MC02ZDE0YjM2NmM0MGYvYTBjZTI0YmYtNjMzMC00OWFhLWE2NTAtNmQxNGIzNjZjNDBmX2N1dG91dC4xLnBuZz9BV1NBY2Nlc3NLZXlJZD1BS0lBSlJCUVZMRlBVWU9BWVRQQSZFeHBpcmVzPTE0NjQ4NTE1MTAmU2lnbmF0dXJlPWtaajAzNFJUdXYzZUdqcWpjUXRqQWJIYkZsYyUzRCIsInNtYWxsIjoiaHR0cHM6Ly9jbG91ZGN1dG91dC13b3JrZmxvdy5zMy5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24tam9icy9hMGNlMjRiZi02MzMwLTQ5YWEtYTY1MC02ZDE0YjM2NmM0MGYvYTBjZTI0YmYtNjMzMC00OWFhLWE2NTAtNmQxNGIzNjZjNDBmX2N1dG91dGljb24uMS5wbmc/QVdTQWNjZXNzS2V5SWQ9QUtJQUpSQlFWTEZQVVlPQVlUUEEmRXhwaXJlcz0xNDY0ODUxNTEwJlNpZ25hdHVyZT1pbCUyRjNFWnc0Y3lzc1pranBzUEZVb0JHVlN2byUzRCIsIm1lZGl1bSI6Imh0dHBzOi8vY2xvdWRjdXRvdXQtd29ya2Zsb3cuczMuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uLWpvYnMvYTBjZTI0YmYtNjMzMC00OWFhLWE2NTAtNmQxNGIzNjZjNDBmL2EwY2UyNGJmLTYzMzAtNDlhYS1hNjUwLTZkMTRiMzY2YzQwZl9jdXRvdXRsb3dyZXMuMS5wbmc/QVdTQWNjZXNzS2V5SWQ9QUtJQUpSQlFWTEZQVVlPQVlUUEEmRXhwaXJlcz0xNDY0ODUxNTEwJlNpZ25hdHVyZT1uSkZ6aldMeXVzVWxmQ2ZSMWo5aEhUWlFaRWclM0QiLCJsYXJnZSI6Imh0dHBzOi8vY2xvdWRjdXRvdXQtd29ya2Zsb3cuczMuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uLWpvYnMvYTBjZTI0YmYtNjMzMC00OWFhLWE2NTAtNmQxNGIzNjZjNDBmL2EwY2UyNGJmLTYzMzAtNDlhYS1hNjUwLTZkMTRiMzY2YzQwZl9jdXRvdXRsb3dyZXMuMS5wbmc/QVdTQWNjZXNzS2V5SWQ9QUtJQUpSQlFWTEZQVVlPQVlUUEEmRXhwaXJlcz0xNDY0ODUxNTEwJlNpZ25hdHVyZT1uSkZ6aldMeXVzVWxmQ2ZSMWo5aEhUWlFaRWclM0QiLCJhbHBoYSI6eyJzbWFsbCI6Imh0dHBzOi8vY2xvdWRjdXRvdXQtd29ya2Zsb3cuczMuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uLWpvYnMvYTBjZTI0YmYtNjMzMC00OWFhLWE2NTAtNmQxNGIzNjZjNDBmL2EwY2UyNGJmLTYzMzAtNDlhYS1hNjUwLTZkMTRiMzY2YzQwZl9hbHBoYWljb24uMS5wbmc/QVdTQWNjZXNzS2V5SWQ9QUtJQUpSQlFWTEZQVVlPQVlUUEEmRXhwaXJlcz0xNDY0ODUxNTEwJlNpZ25hdHVyZT04JTJCVXF5c2ZtJTJCVFJQUUdHSzBxMVlSbUFLcDlnJTNEIiwibWVkaXVtIjoiaHR0cHM6Ly9jbG91ZGN1dG91dC13b3JrZmxvdy5zMy5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24tam9icy9hMGNlMjRiZi02MzMwLTQ5YWEtYTY1MC02ZDE0YjM2NmM0MGYvYTBjZTI0YmYtNjMzMC00OWFhLWE2NTAtNmQxNGIzNjZjNDBmX2FscGhhcHJldmlldy4xLnBuZz9BV1NBY2Nlc3NLZXlJZD1BS0lBSlJCUVZMRlBVWU9BWVRQQSZFeHBpcmVzPTE0NjQ4NTE1MTAmU2lnbmF0dXJlPVRwcnV3JTJGOUpIQ24xdkNuMkNkR1djVVJqSFAwJTNEIiwibGFyZ2UiOiJodHRwczovL2Nsb3VkY3V0b3V0LXdvcmtmbG93LnMzLmFtYXpvbmF3cy5jb20vcHJvZHVjdGlvbi1qb2JzL2EwY2UyNGJmLTYzMzAtNDlhYS1hNjUwLTZkMTRiMzY2YzQwZi9hMGNlMjRiZi02MzMwLTQ5YWEtYTY1MC02ZDE0YjM2NmM0MGZfYWxwaGFsb3dyZXMuMS5wbmc/QVdTQWNjZXNzS2V5SWQ9QUtJQUpSQlFWTEZQVVlPQVlUUEEmRXhwaXJlcz0xNDY0ODUxNTEwJlNpZ25hdHVyZT1VVnNoa2UlMkYyQVVBemtzbGg5YmlWWkljanBEcyUzRCJ9fV19LCJhY3Rpb25zIjpbeyJpZCI6Im1hdHRpbmciLCJuYW1lIjoiTWF0dGluZyBjb2xvciBbdGVzdF0iLCJ0ZW1wbGF0ZVVSTCI6Ii9jbG91ZGN1dG91dC13b3JrZmxvdy1tYXR0aW5nLXNlcnZpY2UvbWF0dGluZy5odG1sP3Bob3Rvc2hvcD0xJiIsImRlc2NyaXB0aW9uIjoiTWFyayB0aGUgaW1hZ2Ugd2l0aCBmb3JlZ3JvdW5kIGFuZCBiYWNrZ3JvdW5kIGFubm90YXRpb25zLiIsInJlc291cmNlcyI6W3siaWQiOiJyb2kiLCJmaWxlbmFtZSI6InJvaS5wbmcifV19LHsiaWQiOiJzcGlsbCIsIm5hbWUiOiJTcGlsbCBjb2xvciBbdGVzdF0iLCJ0ZW1wbGF0ZVVSTCI6Ii9jbG91ZGN1dG91dC13b3JrZmxvdy1qb2Itc2VydmljZS9hY3Rpb25zL3NwaWxsL3NwaWxsLmh0bWw/cGhvdG9zaG9wPTEmIiwiZGVzY3JpcHRpb24iOiJDb3JyZWN0IHNwaWxsIGNvbG9ycy4iLCJyZXNvdXJjZXMiOlt7ImlkIjoicm9pIiwiZmlsZW5hbWUiOiJyb2kucG5nIn1dfV0sInJlbWFya3MiOltdfQ==", "base64"));
  res.end();

  return __filename;
};
