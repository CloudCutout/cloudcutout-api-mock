var path = require("path");

/**
 * GET /cloudcutout-workflow-job-service/rest/jobs/e2dadf00-955a-4591-aa2c-94c89807e591?cloudfront=false&token=884787ea-5f2e-4370-8813-d5e60dbe5780
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
  res.setHeader("date", "Thu, 26 May 2016 07:11:42 GMT");
  res.setHeader("hostname", "ip-10-101-182-80");
  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("content-length", "3951");
  res.setHeader("connection", "keep-alive");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJpZCI6ImUyZGFkZjAwLTk1NWEtNDU5MS1hYTJjLTk0Yzg5ODA3ZTU5MSIsInVzZXJuYW1lIjoidGVzdEN1c3RvbWVyIiwib3JpZ2luYWxGaWxlbmFtZSI6IkdSRUVOU0NSRUVOLzIwMTYwNTI1XzE3MDAvMzM3ODI1LTEtMzA3Mi1DU1ctMjQuSlBHIiwiZHVlRGF0ZSI6MTQ2NDE4ODY4NjQ3MCwibG9ja1N0YXR1cyI6MSwic3RhdHVzIjoxLCJRQVN0YXR1cyI6ImNjIiwicmVnaXN0ZXJlZERhdGUiOjE0NjQxODg2ODY0NzAsImRlbGl2ZXJ5RGF0ZSI6MCwicXVldWVJZCI6IkdSRUVOU0NSRUVOIiwib3JpZ2luYWxVUkwiOiJodHRwczovL2Nsb3VkY3V0b3V0LXdvcmtmbG93LnMzLmFtYXpvbmF3cy5jb20vcHJvZHVjdGlvbi1qb2JzL2UyZGFkZjAwLTk1NWEtNDU5MS1hYTJjLTk0Yzg5ODA3ZTU5MS9lMmRhZGYwMC05NTVhLTQ1OTEtYWEyYy05NGM4OTgwN2U1OTFfaGlnaHJlcy4xLnBuZz9BV1NBY2Nlc3NLZXlJZD1BS0lBSlJCUVZMRlBVWU9BWVRQQSZFeHBpcmVzPTE0NjQ4NTE1MDImU2lnbmF0dXJlPUpTbDh2SzJ6S3J3c1VzTjd6R2xlZSUyQjF1czRVJTNEIiwidGh1bWJuYWlscyI6eyJzbWFsbCI6Imh0dHBzOi8vY2xvdWRjdXRvdXQtd29ya2Zsb3cuczMuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uLWpvYnMvZTJkYWRmMDAtOTU1YS00NTkxLWFhMmMtOTRjODk4MDdlNTkxL2UyZGFkZjAwLTk1NWEtNDU5MS1hYTJjLTk0Yzg5ODA3ZTU5MV9pY29uLjEucG5nP0FXU0FjY2Vzc0tleUlkPUFLSUFKUkJRVkxGUFVZT0FZVFBBJkV4cGlyZXM9MTQ2NDg1MTUwMiZTaWduYXR1cmU9cjVQRXMlMkI0MENybm9jT0FWS2xHaUdaZHNlY28lM0QiLCJsYXJnZSI6Imh0dHBzOi8vY2xvdWRjdXRvdXQtd29ya2Zsb3cuczMuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uLWpvYnMvZTJkYWRmMDAtOTU1YS00NTkxLWFhMmMtOTRjODk4MDdlNTkxL2UyZGFkZjAwLTk1NWEtNDU5MS1hYTJjLTk0Yzg5ODA3ZTU5MV9sb3dyZXMuMS5wbmc/QVdTQWNjZXNzS2V5SWQ9QUtJQUpSQlFWTEZQVVlPQVlUUEEmRXhwaXJlcz0xNDY0ODUxNTAyJlNpZ25hdHVyZT1XZiUyRmRqU2ZzJTJGdEZyciUyRnpZaFdmNFo2RHhvbUElM0QiLCJtZWRpdW0iOiJodHRwczovL2Nsb3VkY3V0b3V0LXdvcmtmbG93LnMzLmFtYXpvbmF3cy5jb20vcHJvZHVjdGlvbi1qb2JzL2UyZGFkZjAwLTk1NWEtNDU5MS1hYTJjLTk0Yzg5ODA3ZTU5MS9lMmRhZGYwMC05NTVhLTQ1OTEtYWEyYy05NGM4OTgwN2U1OTFfcHJldmlldy4xLnBuZz9BV1NBY2Nlc3NLZXlJZD1BS0lBSlJCUVZMRlBVWU9BWVRQQSZFeHBpcmVzPTE0NjQ4NTE1MDImU2lnbmF0dXJlPVJzOG4lMkZnQjQ2Y0puOTFnVExPUFpnWjJXSnc4JTNEIn0sImN1dG91dHMiOnsiMSI6Imh0dHBzOi8vY2xvdWRjdXRvdXQtd29ya2Zsb3cuczMuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uLWpvYnMvZTJkYWRmMDAtOTU1YS00NTkxLWFhMmMtOTRjODk4MDdlNTkxL2UyZGFkZjAwLTk1NWEtNDU5MS1hYTJjLTk0Yzg5ODA3ZTU5MV9jdXRvdXQuMS5wbmc/QVdTQWNjZXNzS2V5SWQ9QUtJQUpSQlFWTEZQVVlPQVlUUEEmRXhwaXJlcz0xNDY0ODUxNTAyJlNpZ25hdHVyZT1FRE9UTTltS3JPTllOMjdlREFmWUV2T1ZtdFklM0QifSwicmVzb3VyY2VzIjp7ImN1dG91dHMiOlt7IlVSTCI6Imh0dHBzOi8vY2xvdWRjdXRvdXQtd29ya2Zsb3cuczMuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uLWpvYnMvZTJkYWRmMDAtOTU1YS00NTkxLWFhMmMtOTRjODk4MDdlNTkxL2UyZGFkZjAwLTk1NWEtNDU5MS1hYTJjLTk0Yzg5ODA3ZTU5MV9jdXRvdXQuMS5wbmc/QVdTQWNjZXNzS2V5SWQ9QUtJQUpSQlFWTEZQVVlPQVlUUEEmRXhwaXJlcz0xNDY0ODUxNTAyJlNpZ25hdHVyZT1FRE9UTTltS3JPTllOMjdlREFmWUV2T1ZtdFklM0QiLCJzbWFsbCI6Imh0dHBzOi8vY2xvdWRjdXRvdXQtd29ya2Zsb3cuczMuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uLWpvYnMvZTJkYWRmMDAtOTU1YS00NTkxLWFhMmMtOTRjODk4MDdlNTkxL2UyZGFkZjAwLTk1NWEtNDU5MS1hYTJjLTk0Yzg5ODA3ZTU5MV9jdXRvdXRpY29uLjEucG5nP0FXU0FjY2Vzc0tleUlkPUFLSUFKUkJRVkxGUFVZT0FZVFBBJkV4cGlyZXM9MTQ2NDg1MTUwMiZTaWduYXR1cmU9eGExNmhsOWlHJTJCb2VyY3ZkTG95ck5LT2VDckklM0QiLCJtZWRpdW0iOiJodHRwczovL2Nsb3VkY3V0b3V0LXdvcmtmbG93LnMzLmFtYXpvbmF3cy5jb20vcHJvZHVjdGlvbi1qb2JzL2UyZGFkZjAwLTk1NWEtNDU5MS1hYTJjLTk0Yzg5ODA3ZTU5MS9lMmRhZGYwMC05NTVhLTQ1OTEtYWEyYy05NGM4OTgwN2U1OTFfY3V0b3V0bG93cmVzLjEucG5nP0FXU0FjY2Vzc0tleUlkPUFLSUFKUkJRVkxGUFVZT0FZVFBBJkV4cGlyZXM9MTQ2NDg1MTUwMiZTaWduYXR1cmU9QmJTcDd6dXlUeG44T0pieUc0aTJXZktPQld3JTNEIiwibGFyZ2UiOiJodHRwczovL2Nsb3VkY3V0b3V0LXdvcmtmbG93LnMzLmFtYXpvbmF3cy5jb20vcHJvZHVjdGlvbi1qb2JzL2UyZGFkZjAwLTk1NWEtNDU5MS1hYTJjLTk0Yzg5ODA3ZTU5MS9lMmRhZGYwMC05NTVhLTQ1OTEtYWEyYy05NGM4OTgwN2U1OTFfY3V0b3V0bG93cmVzLjEucG5nP0FXU0FjY2Vzc0tleUlkPUFLSUFKUkJRVkxGUFVZT0FZVFBBJkV4cGlyZXM9MTQ2NDg1MTUwMiZTaWduYXR1cmU9QmJTcDd6dXlUeG44T0pieUc0aTJXZktPQld3JTNEIiwiYWxwaGEiOnsic21hbGwiOiJodHRwczovL2Nsb3VkY3V0b3V0LXdvcmtmbG93LnMzLmFtYXpvbmF3cy5jb20vcHJvZHVjdGlvbi1qb2JzL2UyZGFkZjAwLTk1NWEtNDU5MS1hYTJjLTk0Yzg5ODA3ZTU5MS9lMmRhZGYwMC05NTVhLTQ1OTEtYWEyYy05NGM4OTgwN2U1OTFfYWxwaGFpY29uLjEucG5nP0FXU0FjY2Vzc0tleUlkPUFLSUFKUkJRVkxGUFVZT0FZVFBBJkV4cGlyZXM9MTQ2NDg1MTUwMiZTaWduYXR1cmU9dEJNV0JTWHJlQU84cSUyRk84MDNac0ZLcVpDUm8lM0QiLCJtZWRpdW0iOiJodHRwczovL2Nsb3VkY3V0b3V0LXdvcmtmbG93LnMzLmFtYXpvbmF3cy5jb20vcHJvZHVjdGlvbi1qb2JzL2UyZGFkZjAwLTk1NWEtNDU5MS1hYTJjLTk0Yzg5ODA3ZTU5MS9lMmRhZGYwMC05NTVhLTQ1OTEtYWEyYy05NGM4OTgwN2U1OTFfYWxwaGFwcmV2aWV3LjEucG5nP0FXU0FjY2Vzc0tleUlkPUFLSUFKUkJRVkxGUFVZT0FZVFBBJkV4cGlyZXM9MTQ2NDg1MTUwMiZTaWduYXR1cmU9UGllV25WWGY3d2NkSkZUNGtXMHVjbjl5aW5nJTNEIiwibGFyZ2UiOiJodHRwczovL2Nsb3VkY3V0b3V0LXdvcmtmbG93LnMzLmFtYXpvbmF3cy5jb20vcHJvZHVjdGlvbi1qb2JzL2UyZGFkZjAwLTk1NWEtNDU5MS1hYTJjLTk0Yzg5ODA3ZTU5MS9lMmRhZGYwMC05NTVhLTQ1OTEtYWEyYy05NGM4OTgwN2U1OTFfYWxwaGFsb3dyZXMuMS5wbmc/QVdTQWNjZXNzS2V5SWQ9QUtJQUpSQlFWTEZQVVlPQVlUUEEmRXhwaXJlcz0xNDY0ODUxNTAyJlNpZ25hdHVyZT03QkNsZ1pQd01ZUHdoSU4lMkZsNXdZcHdPNlYlMkYwJTNEIn19XX0sImFjdGlvbnMiOlt7ImlkIjoibWF0dGluZyIsIm5hbWUiOiJNYXR0aW5nIGNvbG9yIFt0ZXN0XSIsInRlbXBsYXRlVVJMIjoiL2Nsb3VkY3V0b3V0LXdvcmtmbG93LW1hdHRpbmctc2VydmljZS9tYXR0aW5nLmh0bWw/cGhvdG9zaG9wPTEmIiwiZGVzY3JpcHRpb24iOiJNYXJrIHRoZSBpbWFnZSB3aXRoIGZvcmVncm91bmQgYW5kIGJhY2tncm91bmQgYW5ub3RhdGlvbnMuIiwicmVzb3VyY2VzIjpbeyJpZCI6InJvaSIsImZpbGVuYW1lIjoicm9pLnBuZyJ9XX0seyJpZCI6InNwaWxsIiwibmFtZSI6IlNwaWxsIGNvbG9yIFt0ZXN0XSIsInRlbXBsYXRlVVJMIjoiL2Nsb3VkY3V0b3V0LXdvcmtmbG93LWpvYi1zZXJ2aWNlL2FjdGlvbnMvc3BpbGwvc3BpbGwuaHRtbD9waG90b3Nob3A9MSYiLCJkZXNjcmlwdGlvbiI6IkNvcnJlY3Qgc3BpbGwgY29sb3JzLiIsInJlc291cmNlcyI6W3siaWQiOiJyb2kiLCJmaWxlbmFtZSI6InJvaS5wbmcifV19XSwicmVtYXJrcyI6W119", "base64"));
  res.end();

  return __filename;
};
