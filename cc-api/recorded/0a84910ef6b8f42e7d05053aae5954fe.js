var path = require("path");

/**
 * GET /cloudcutout-workflow-job-service/rest/jobs/66ffaca0-b6de-4da7-b999-11a8a1ed5569?cloudfront=false&token=884787ea-5f2e-4370-8813-d5e60dbe5780
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
  res.setHeader("date", "Thu, 26 May 2016 07:11:55 GMT");
  res.setHeader("hostname", "ip-10-101-182-80");
  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("content-length", "3944");
  res.setHeader("connection", "keep-alive");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJpZCI6IjY2ZmZhY2EwLWI2ZGUtNGRhNy1iOTk5LTExYThhMWVkNTU2OSIsInVzZXJuYW1lIjoidGVzdEN1c3RvbWVyIiwib3JpZ2luYWxGaWxlbmFtZSI6IkdSRUVOU0NSRUVOLzIwMTYwNTI1XzIwMDAvMzM3ODI1LTItMzA4NC1CTVctMTIyLkpQRyIsImR1ZURhdGUiOjE0NjQxOTk0OTIxODksImxvY2tTdGF0dXMiOjEsInN0YXR1cyI6MSwiUUFTdGF0dXMiOiJjYyIsInJlZ2lzdGVyZWREYXRlIjoxNDY0MTk5NDkyMTg5LCJkZWxpdmVyeURhdGUiOjAsInF1ZXVlSWQiOiJHUkVFTlNDUkVFTiIsIm9yaWdpbmFsVVJMIjoiaHR0cHM6Ly9jbG91ZGN1dG91dC13b3JrZmxvdy5zMy5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24tam9icy82NmZmYWNhMC1iNmRlLTRkYTctYjk5OS0xMWE4YTFlZDU1NjkvNjZmZmFjYTAtYjZkZS00ZGE3LWI5OTktMTFhOGExZWQ1NTY5X2hpZ2hyZXMuMS5wbmc/QVdTQWNjZXNzS2V5SWQ9QUtJQUpSQlFWTEZQVVlPQVlUUEEmRXhwaXJlcz0xNDY0ODUxNTE0JlNpZ25hdHVyZT1jR3dXWGRKSUZSVE9MZ2czQU9EeDdsZldmWlElM0QiLCJ0aHVtYm5haWxzIjp7InNtYWxsIjoiaHR0cHM6Ly9jbG91ZGN1dG91dC13b3JrZmxvdy5zMy5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24tam9icy82NmZmYWNhMC1iNmRlLTRkYTctYjk5OS0xMWE4YTFlZDU1NjkvNjZmZmFjYTAtYjZkZS00ZGE3LWI5OTktMTFhOGExZWQ1NTY5X2ljb24uMS5wbmc/QVdTQWNjZXNzS2V5SWQ9QUtJQUpSQlFWTEZQVVlPQVlUUEEmRXhwaXJlcz0xNDY0ODUxNTE0JlNpZ25hdHVyZT13MFpkb2VXUW54OTF4a21VbEJuRWJHaTJtUmclM0QiLCJsYXJnZSI6Imh0dHBzOi8vY2xvdWRjdXRvdXQtd29ya2Zsb3cuczMuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uLWpvYnMvNjZmZmFjYTAtYjZkZS00ZGE3LWI5OTktMTFhOGExZWQ1NTY5LzY2ZmZhY2EwLWI2ZGUtNGRhNy1iOTk5LTExYThhMWVkNTU2OV9sb3dyZXMuMS5wbmc/QVdTQWNjZXNzS2V5SWQ9QUtJQUpSQlFWTEZQVVlPQVlUUEEmRXhwaXJlcz0xNDY0ODUxNTE0JlNpZ25hdHVyZT1kV0FINTJyR0tSTzNnekpMOHByRHF1S2E4RTglM0QiLCJtZWRpdW0iOiJodHRwczovL2Nsb3VkY3V0b3V0LXdvcmtmbG93LnMzLmFtYXpvbmF3cy5jb20vcHJvZHVjdGlvbi1qb2JzLzY2ZmZhY2EwLWI2ZGUtNGRhNy1iOTk5LTExYThhMWVkNTU2OS82NmZmYWNhMC1iNmRlLTRkYTctYjk5OS0xMWE4YTFlZDU1NjlfcHJldmlldy4xLnBuZz9BV1NBY2Nlc3NLZXlJZD1BS0lBSlJCUVZMRlBVWU9BWVRQQSZFeHBpcmVzPTE0NjQ4NTE1MTQmU2lnbmF0dXJlPUdJeiUyQjJSY1FXVXBlVHBPZEl2JTJCeHRSOVlHdmclM0QifSwiY3V0b3V0cyI6eyIxIjoiaHR0cHM6Ly9jbG91ZGN1dG91dC13b3JrZmxvdy5zMy5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24tam9icy82NmZmYWNhMC1iNmRlLTRkYTctYjk5OS0xMWE4YTFlZDU1NjkvNjZmZmFjYTAtYjZkZS00ZGE3LWI5OTktMTFhOGExZWQ1NTY5X2N1dG91dC4xLnBuZz9BV1NBY2Nlc3NLZXlJZD1BS0lBSlJCUVZMRlBVWU9BWVRQQSZFeHBpcmVzPTE0NjQ4NTE1MTQmU2lnbmF0dXJlPVdvZElFeGZYWFhXTkpLRzltd0hIR2NvUWR5SSUzRCJ9LCJyZXNvdXJjZXMiOnsiY3V0b3V0cyI6W3siVVJMIjoiaHR0cHM6Ly9jbG91ZGN1dG91dC13b3JrZmxvdy5zMy5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24tam9icy82NmZmYWNhMC1iNmRlLTRkYTctYjk5OS0xMWE4YTFlZDU1NjkvNjZmZmFjYTAtYjZkZS00ZGE3LWI5OTktMTFhOGExZWQ1NTY5X2N1dG91dC4xLnBuZz9BV1NBY2Nlc3NLZXlJZD1BS0lBSlJCUVZMRlBVWU9BWVRQQSZFeHBpcmVzPTE0NjQ4NTE1MTQmU2lnbmF0dXJlPVdvZElFeGZYWFhXTkpLRzltd0hIR2NvUWR5SSUzRCIsInNtYWxsIjoiaHR0cHM6Ly9jbG91ZGN1dG91dC13b3JrZmxvdy5zMy5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24tam9icy82NmZmYWNhMC1iNmRlLTRkYTctYjk5OS0xMWE4YTFlZDU1NjkvNjZmZmFjYTAtYjZkZS00ZGE3LWI5OTktMTFhOGExZWQ1NTY5X2N1dG91dGljb24uMS5wbmc/QVdTQWNjZXNzS2V5SWQ9QUtJQUpSQlFWTEZQVVlPQVlUUEEmRXhwaXJlcz0xNDY0ODUxNTE0JlNpZ25hdHVyZT1mSUh5bnRCOWJ4YlRScWVhS1NlM1RyamJyb1UlM0QiLCJtZWRpdW0iOiJodHRwczovL2Nsb3VkY3V0b3V0LXdvcmtmbG93LnMzLmFtYXpvbmF3cy5jb20vcHJvZHVjdGlvbi1qb2JzLzY2ZmZhY2EwLWI2ZGUtNGRhNy1iOTk5LTExYThhMWVkNTU2OS82NmZmYWNhMC1iNmRlLTRkYTctYjk5OS0xMWE4YTFlZDU1NjlfY3V0b3V0bG93cmVzLjEucG5nP0FXU0FjY2Vzc0tleUlkPUFLSUFKUkJRVkxGUFVZT0FZVFBBJkV4cGlyZXM9MTQ2NDg1MTUxNCZTaWduYXR1cmU9JTJGYlpKWXB0NUd1QlRjTHVqeDAlMkZOVmJiZmZJZyUzRCIsImxhcmdlIjoiaHR0cHM6Ly9jbG91ZGN1dG91dC13b3JrZmxvdy5zMy5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24tam9icy82NmZmYWNhMC1iNmRlLTRkYTctYjk5OS0xMWE4YTFlZDU1NjkvNjZmZmFjYTAtYjZkZS00ZGE3LWI5OTktMTFhOGExZWQ1NTY5X2N1dG91dGxvd3Jlcy4xLnBuZz9BV1NBY2Nlc3NLZXlJZD1BS0lBSlJCUVZMRlBVWU9BWVRQQSZFeHBpcmVzPTE0NjQ4NTE1MTUmU2lnbmF0dXJlPVNZZEpob0J6TjB6eDJtUmFzbSUyQmthek53SjhBJTNEIiwiYWxwaGEiOnsic21hbGwiOiJodHRwczovL2Nsb3VkY3V0b3V0LXdvcmtmbG93LnMzLmFtYXpvbmF3cy5jb20vcHJvZHVjdGlvbi1qb2JzLzY2ZmZhY2EwLWI2ZGUtNGRhNy1iOTk5LTExYThhMWVkNTU2OS82NmZmYWNhMC1iNmRlLTRkYTctYjk5OS0xMWE4YTFlZDU1NjlfYWxwaGFpY29uLjEucG5nP0FXU0FjY2Vzc0tleUlkPUFLSUFKUkJRVkxGUFVZT0FZVFBBJkV4cGlyZXM9MTQ2NDg1MTUxNSZTaWduYXR1cmU9TThLV1B5ODRjWkdiU2lpekZNN2E5U1JUNXJrJTNEIiwibWVkaXVtIjoiaHR0cHM6Ly9jbG91ZGN1dG91dC13b3JrZmxvdy5zMy5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24tam9icy82NmZmYWNhMC1iNmRlLTRkYTctYjk5OS0xMWE4YTFlZDU1NjkvNjZmZmFjYTAtYjZkZS00ZGE3LWI5OTktMTFhOGExZWQ1NTY5X2FscGhhcHJldmlldy4xLnBuZz9BV1NBY2Nlc3NLZXlJZD1BS0lBSlJCUVZMRlBVWU9BWVRQQSZFeHBpcmVzPTE0NjQ4NTE1MTUmU2lnbmF0dXJlPWtnRHJ6Ym9uMkVVUERPTDR5d2FOZklZcGZ5SSUzRCIsImxhcmdlIjoiaHR0cHM6Ly9jbG91ZGN1dG91dC13b3JrZmxvdy5zMy5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24tam9icy82NmZmYWNhMC1iNmRlLTRkYTctYjk5OS0xMWE4YTFlZDU1NjkvNjZmZmFjYTAtYjZkZS00ZGE3LWI5OTktMTFhOGExZWQ1NTY5X2FscGhhbG93cmVzLjEucG5nP0FXU0FjY2Vzc0tleUlkPUFLSUFKUkJRVkxGUFVZT0FZVFBBJkV4cGlyZXM9MTQ2NDg1MTUxNSZTaWduYXR1cmU9R3Jvc0hqcUttajc0RExGJTJCdjdXU200b3l2QnMlM0QifX1dfSwiYWN0aW9ucyI6W3siaWQiOiJtYXR0aW5nIiwibmFtZSI6Ik1hdHRpbmcgY29sb3IgW3Rlc3RdIiwidGVtcGxhdGVVUkwiOiIvY2xvdWRjdXRvdXQtd29ya2Zsb3ctbWF0dGluZy1zZXJ2aWNlL21hdHRpbmcuaHRtbD9waG90b3Nob3A9MSYiLCJkZXNjcmlwdGlvbiI6Ik1hcmsgdGhlIGltYWdlIHdpdGggZm9yZWdyb3VuZCBhbmQgYmFja2dyb3VuZCBhbm5vdGF0aW9ucy4iLCJyZXNvdXJjZXMiOlt7ImlkIjoicm9pIiwiZmlsZW5hbWUiOiJyb2kucG5nIn1dfSx7ImlkIjoic3BpbGwiLCJuYW1lIjoiU3BpbGwgY29sb3IgW3Rlc3RdIiwidGVtcGxhdGVVUkwiOiIvY2xvdWRjdXRvdXQtd29ya2Zsb3ctam9iLXNlcnZpY2UvYWN0aW9ucy9zcGlsbC9zcGlsbC5odG1sP3Bob3Rvc2hvcD0xJiIsImRlc2NyaXB0aW9uIjoiQ29ycmVjdCBzcGlsbCBjb2xvcnMuIiwicmVzb3VyY2VzIjpbeyJpZCI6InJvaSIsImZpbGVuYW1lIjoicm9pLnBuZyJ9XX1dLCJyZW1hcmtzIjpbXX0=", "base64"));
  res.end();

  return __filename;
};