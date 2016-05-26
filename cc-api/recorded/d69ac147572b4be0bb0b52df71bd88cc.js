var path = require("path");

/**
 * GET /cloudcutout-workflow-job-service/rest/jobs/7d6ee252-3ac6-49cc-ac58-401c2c114c97?cloudfront=false&token=884787ea-5f2e-4370-8813-d5e60dbe5780
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
  res.setHeader("date", "Thu, 26 May 2016 07:11:57 GMT");
  res.setHeader("hostname", "ip-10-101-182-80");
  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("content-length", "3951");
  res.setHeader("connection", "keep-alive");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJpZCI6IjdkNmVlMjUyLTNhYzYtNDljYy1hYzU4LTQwMWMyYzExNGM5NyIsInVzZXJuYW1lIjoidGVzdEN1c3RvbWVyIiwib3JpZ2luYWxGaWxlbmFtZSI6IkdSRUVOU0NSRUVOLzIwMTYwNTI1XzIwMDAvMzM3ODI1LTEtMzA3Mi1DU1ctNTcuSlBHIiwiZHVlRGF0ZSI6MTQ2NDE5OTQ5MjE4OSwibG9ja1N0YXR1cyI6MSwic3RhdHVzIjoxLCJRQVN0YXR1cyI6ImNjIiwicmVnaXN0ZXJlZERhdGUiOjE0NjQxOTk0OTIxODksImRlbGl2ZXJ5RGF0ZSI6MCwicXVldWVJZCI6IkdSRUVOU0NSRUVOIiwib3JpZ2luYWxVUkwiOiJodHRwczovL2Nsb3VkY3V0b3V0LXdvcmtmbG93LnMzLmFtYXpvbmF3cy5jb20vcHJvZHVjdGlvbi1qb2JzLzdkNmVlMjUyLTNhYzYtNDljYy1hYzU4LTQwMWMyYzExNGM5Ny83ZDZlZTI1Mi0zYWM2LTQ5Y2MtYWM1OC00MDFjMmMxMTRjOTdfaGlnaHJlcy4xLnBuZz9BV1NBY2Nlc3NLZXlJZD1BS0lBSlJCUVZMRlBVWU9BWVRQQSZFeHBpcmVzPTE0NjQ4NTE1MTcmU2lnbmF0dXJlPSUyRmNjZzdTM3pqJTJCNTQxMXN3JTJCcSUyQjhPYnZtM1E0JTNEIiwidGh1bWJuYWlscyI6eyJzbWFsbCI6Imh0dHBzOi8vY2xvdWRjdXRvdXQtd29ya2Zsb3cuczMuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uLWpvYnMvN2Q2ZWUyNTItM2FjNi00OWNjLWFjNTgtNDAxYzJjMTE0Yzk3LzdkNmVlMjUyLTNhYzYtNDljYy1hYzU4LTQwMWMyYzExNGM5N19pY29uLjEucG5nP0FXU0FjY2Vzc0tleUlkPUFLSUFKUkJRVkxGUFVZT0FZVFBBJkV4cGlyZXM9MTQ2NDg1MTUxNyZTaWduYXR1cmU9bTZGUVpmMG1XaTFuSVBBVEJwTkF2QzBNNjFrJTNEIiwibGFyZ2UiOiJodHRwczovL2Nsb3VkY3V0b3V0LXdvcmtmbG93LnMzLmFtYXpvbmF3cy5jb20vcHJvZHVjdGlvbi1qb2JzLzdkNmVlMjUyLTNhYzYtNDljYy1hYzU4LTQwMWMyYzExNGM5Ny83ZDZlZTI1Mi0zYWM2LTQ5Y2MtYWM1OC00MDFjMmMxMTRjOTdfbG93cmVzLjEucG5nP0FXU0FjY2Vzc0tleUlkPUFLSUFKUkJRVkxGUFVZT0FZVFBBJkV4cGlyZXM9MTQ2NDg1MTUxNyZTaWduYXR1cmU9V1Q3cTc5c3J4VVNsUmNJVmhtVjFQZSUyQjhmUmslM0QiLCJtZWRpdW0iOiJodHRwczovL2Nsb3VkY3V0b3V0LXdvcmtmbG93LnMzLmFtYXpvbmF3cy5jb20vcHJvZHVjdGlvbi1qb2JzLzdkNmVlMjUyLTNhYzYtNDljYy1hYzU4LTQwMWMyYzExNGM5Ny83ZDZlZTI1Mi0zYWM2LTQ5Y2MtYWM1OC00MDFjMmMxMTRjOTdfcHJldmlldy4xLnBuZz9BV1NBY2Nlc3NLZXlJZD1BS0lBSlJCUVZMRlBVWU9BWVRQQSZFeHBpcmVzPTE0NjQ4NTE1MTcmU2lnbmF0dXJlPVBIZmU5UkVnUTRscVhFVUdheGVWaTF0RmV2byUzRCJ9LCJjdXRvdXRzIjp7IjEiOiJodHRwczovL2Nsb3VkY3V0b3V0LXdvcmtmbG93LnMzLmFtYXpvbmF3cy5jb20vcHJvZHVjdGlvbi1qb2JzLzdkNmVlMjUyLTNhYzYtNDljYy1hYzU4LTQwMWMyYzExNGM5Ny83ZDZlZTI1Mi0zYWM2LTQ5Y2MtYWM1OC00MDFjMmMxMTRjOTdfY3V0b3V0LjEucG5nP0FXU0FjY2Vzc0tleUlkPUFLSUFKUkJRVkxGUFVZT0FZVFBBJkV4cGlyZXM9MTQ2NDg1MTUxNyZTaWduYXR1cmU9YmVxWG11b1ZINnVSWnY0JTJGTjU0NG05WnYlMkZRMCUzRCJ9LCJyZXNvdXJjZXMiOnsiY3V0b3V0cyI6W3siVVJMIjoiaHR0cHM6Ly9jbG91ZGN1dG91dC13b3JrZmxvdy5zMy5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24tam9icy83ZDZlZTI1Mi0zYWM2LTQ5Y2MtYWM1OC00MDFjMmMxMTRjOTcvN2Q2ZWUyNTItM2FjNi00OWNjLWFjNTgtNDAxYzJjMTE0Yzk3X2N1dG91dC4xLnBuZz9BV1NBY2Nlc3NLZXlJZD1BS0lBSlJCUVZMRlBVWU9BWVRQQSZFeHBpcmVzPTE0NjQ4NTE1MTcmU2lnbmF0dXJlPWJlcVhtdW9WSDZ1Ulp2NCUyRk41NDRtOVp2JTJGUTAlM0QiLCJzbWFsbCI6Imh0dHBzOi8vY2xvdWRjdXRvdXQtd29ya2Zsb3cuczMuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uLWpvYnMvN2Q2ZWUyNTItM2FjNi00OWNjLWFjNTgtNDAxYzJjMTE0Yzk3LzdkNmVlMjUyLTNhYzYtNDljYy1hYzU4LTQwMWMyYzExNGM5N19jdXRvdXRpY29uLjEucG5nP0FXU0FjY2Vzc0tleUlkPUFLSUFKUkJRVkxGUFVZT0FZVFBBJkV4cGlyZXM9MTQ2NDg1MTUxNyZTaWduYXR1cmU9V3g4OElTT1NJM2VGRUxNMUhEeDFIRGFqdCUyQlElM0QiLCJtZWRpdW0iOiJodHRwczovL2Nsb3VkY3V0b3V0LXdvcmtmbG93LnMzLmFtYXpvbmF3cy5jb20vcHJvZHVjdGlvbi1qb2JzLzdkNmVlMjUyLTNhYzYtNDljYy1hYzU4LTQwMWMyYzExNGM5Ny83ZDZlZTI1Mi0zYWM2LTQ5Y2MtYWM1OC00MDFjMmMxMTRjOTdfY3V0b3V0bG93cmVzLjEucG5nP0FXU0FjY2Vzc0tleUlkPUFLSUFKUkJRVkxGUFVZT0FZVFBBJkV4cGlyZXM9MTQ2NDg1MTUxNyZTaWduYXR1cmU9bHA3bDQ4SWhxbHBadnpvRkpvWU5KN3AxWmhnJTNEIiwibGFyZ2UiOiJodHRwczovL2Nsb3VkY3V0b3V0LXdvcmtmbG93LnMzLmFtYXpvbmF3cy5jb20vcHJvZHVjdGlvbi1qb2JzLzdkNmVlMjUyLTNhYzYtNDljYy1hYzU4LTQwMWMyYzExNGM5Ny83ZDZlZTI1Mi0zYWM2LTQ5Y2MtYWM1OC00MDFjMmMxMTRjOTdfY3V0b3V0bG93cmVzLjEucG5nP0FXU0FjY2Vzc0tleUlkPUFLSUFKUkJRVkxGUFVZT0FZVFBBJkV4cGlyZXM9MTQ2NDg1MTUxNyZTaWduYXR1cmU9bHA3bDQ4SWhxbHBadnpvRkpvWU5KN3AxWmhnJTNEIiwiYWxwaGEiOnsic21hbGwiOiJodHRwczovL2Nsb3VkY3V0b3V0LXdvcmtmbG93LnMzLmFtYXpvbmF3cy5jb20vcHJvZHVjdGlvbi1qb2JzLzdkNmVlMjUyLTNhYzYtNDljYy1hYzU4LTQwMWMyYzExNGM5Ny83ZDZlZTI1Mi0zYWM2LTQ5Y2MtYWM1OC00MDFjMmMxMTRjOTdfYWxwaGFpY29uLjEucG5nP0FXU0FjY2Vzc0tleUlkPUFLSUFKUkJRVkxGUFVZT0FZVFBBJkV4cGlyZXM9MTQ2NDg1MTUxNyZTaWduYXR1cmU9YkVIYXZHUTdOeTFkQ0pycFB3OVhkR29qd0dZJTNEIiwibWVkaXVtIjoiaHR0cHM6Ly9jbG91ZGN1dG91dC13b3JrZmxvdy5zMy5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24tam9icy83ZDZlZTI1Mi0zYWM2LTQ5Y2MtYWM1OC00MDFjMmMxMTRjOTcvN2Q2ZWUyNTItM2FjNi00OWNjLWFjNTgtNDAxYzJjMTE0Yzk3X2FscGhhcHJldmlldy4xLnBuZz9BV1NBY2Nlc3NLZXlJZD1BS0lBSlJCUVZMRlBVWU9BWVRQQSZFeHBpcmVzPTE0NjQ4NTE1MTcmU2lnbmF0dXJlPVdXdjR5cmVYeVFYSjRNa29GeXE0YWpEMkFpTSUzRCIsImxhcmdlIjoiaHR0cHM6Ly9jbG91ZGN1dG91dC13b3JrZmxvdy5zMy5hbWF6b25hd3MuY29tL3Byb2R1Y3Rpb24tam9icy83ZDZlZTI1Mi0zYWM2LTQ5Y2MtYWM1OC00MDFjMmMxMTRjOTcvN2Q2ZWUyNTItM2FjNi00OWNjLWFjNTgtNDAxYzJjMTE0Yzk3X2FscGhhbG93cmVzLjEucG5nP0FXU0FjY2Vzc0tleUlkPUFLSUFKUkJRVkxGUFVZT0FZVFBBJkV4cGlyZXM9MTQ2NDg1MTUxNyZTaWduYXR1cmU9TktTZmJKd244b1pLTjh5QXJDSmRBdjY3QnpjJTNEIn19XX0sImFjdGlvbnMiOlt7ImlkIjoibWF0dGluZyIsIm5hbWUiOiJNYXR0aW5nIGNvbG9yIFt0ZXN0XSIsInRlbXBsYXRlVVJMIjoiL2Nsb3VkY3V0b3V0LXdvcmtmbG93LW1hdHRpbmctc2VydmljZS9tYXR0aW5nLmh0bWw/cGhvdG9zaG9wPTEmIiwiZGVzY3JpcHRpb24iOiJNYXJrIHRoZSBpbWFnZSB3aXRoIGZvcmVncm91bmQgYW5kIGJhY2tncm91bmQgYW5ub3RhdGlvbnMuIiwicmVzb3VyY2VzIjpbeyJpZCI6InJvaSIsImZpbGVuYW1lIjoicm9pLnBuZyJ9XX0seyJpZCI6InNwaWxsIiwibmFtZSI6IlNwaWxsIGNvbG9yIFt0ZXN0XSIsInRlbXBsYXRlVVJMIjoiL2Nsb3VkY3V0b3V0LXdvcmtmbG93LWpvYi1zZXJ2aWNlL2FjdGlvbnMvc3BpbGwvc3BpbGwuaHRtbD9waG90b3Nob3A9MSYiLCJkZXNjcmlwdGlvbiI6IkNvcnJlY3Qgc3BpbGwgY29sb3JzLiIsInJlc291cmNlcyI6W3siaWQiOiJyb2kiLCJmaWxlbmFtZSI6InJvaS5wbmcifV19XSwicmVtYXJrcyI6W119", "base64"));
  res.end();

  return __filename;
};