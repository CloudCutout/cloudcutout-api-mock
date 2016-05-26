var path = require("path");

/**
 * GET /cloudcutout-workflow-job-service/rest/jobs/lock_assigned?count=10&token=884787ea-5f2e-4370-8813-d5e60dbe5780&{}
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
  res.setHeader("date", "Thu, 26 May 2016 07:11:41 GMT");
  res.setHeader("hostname", "ip-10-101-182-80");
  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("content-length", "2415");
  res.setHeader("connection", "keep-alive");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOiJlMmRhZGYwMC05NTVhLTQ1OTEtYWEyYy05NGM4OTgwN2U1OTEiLCJ1c2VybmFtZSI6InRlc3RDdXN0b21lciIsIm9yaWdpbmFsRmlsZW5hbWUiOiJHUkVFTlNDUkVFTi8yMDE2MDUyNV8xNzAwLzMzNzgyNS0xLTMwNzItQ1NXLTI0LkpQRyIsImR1ZURhdGUiOjE0NjQxODg2ODY0NzAsImxvY2tTdGF0dXMiOjAsInN0YXR1cyI6MSwiUUFTdGF0dXMiOiJjYyIsInJlZ2lzdGVyZWREYXRlIjoxNDY0MTg4Njg2NDcwfSx7ImlkIjoiYjJkNjBkZjUtNjFlOS00MWE4LWI0MzgtMGE4NDdkNzcxYzBhIiwidXNlcm5hbWUiOiJ0ZXN0Q3VzdG9tZXIiLCJvcmlnaW5hbEZpbGVuYW1lIjoiR1JFRU5TQ1JFRU4vMjAxNjA1MjVfMTcwMC8zMzc4MjUtMS0zMDc1LUJNVy0zMjcuSlBHIiwiZHVlRGF0ZSI6MTQ2NDE4ODY4NjQ3MCwibG9ja1N0YXR1cyI6MCwic3RhdHVzIjoxLCJRQVN0YXR1cyI6ImNjIiwicmVnaXN0ZXJlZERhdGUiOjE0NjQxODg2ODY0NzB9LHsiaWQiOiI0MWRhNmUzNy02OTMyLTQwODctYjAzNS1iNTA2ZGIzNDZjOTEiLCJ1c2VybmFtZSI6InRlc3RDdXN0b21lciIsIm9yaWdpbmFsRmlsZW5hbWUiOiJHUkVFTlNDUkVFTi8yMDE2MDUyNV8xNzAwLzMzNzgyNS0yLTMwODQtQk1XLTM5LkpQRyIsImR1ZURhdGUiOjE0NjQxODg2ODY0NzAsImxvY2tTdGF0dXMiOjAsInN0YXR1cyI6MSwiUUFTdGF0dXMiOiJjYyIsInJlZ2lzdGVyZWREYXRlIjoxNDY0MTg4Njg2NDcwfSx7ImlkIjoiNjFkMWZmZTktOWU3ZS00NTM3LTkzYzEtYjlhMjFiMDgwYzJiIiwidXNlcm5hbWUiOiJ0ZXN0Q3VzdG9tZXIiLCJvcmlnaW5hbEZpbGVuYW1lIjoiR1JFRU5TQ1JFRU4vMjAxNjA1MjVfMTcwMC8zNDE2MDAtMS0zMTEyLUpMRC03My5KUEciLCJkdWVEYXRlIjoxNDY0MTg4Njg2NDcwLCJsb2NrU3RhdHVzIjowLCJzdGF0dXMiOjEsIlFBU3RhdHVzIjoiY2MiLCJyZWdpc3RlcmVkRGF0ZSI6MTQ2NDE4ODY4NjQ3MH0seyJpZCI6IjhmZWY4OWFhLTBhYzYtNDRiMC04ZTExLTI5NGI3MGNmNGZiNCIsInVzZXJuYW1lIjoidGVzdEN1c3RvbWVyIiwib3JpZ2luYWxGaWxlbmFtZSI6IkdSRUVOU0NSRUVOLzIwMTYwNTI1XzE3MDAvMzQ1OTQ1LTEtMzA3NC1NVEItMjYuSlBHIiwiZHVlRGF0ZSI6MTQ2NDE4ODY4NjQ3MCwibG9ja1N0YXR1cyI6MCwic3RhdHVzIjoxLCJRQVN0YXR1cyI6ImNjIiwicmVnaXN0ZXJlZERhdGUiOjE0NjQxODg2ODY0NzB9LHsiaWQiOiJhMGNlMjRiZi02MzMwLTQ5YWEtYTY1MC02ZDE0YjM2NmM0MGYiLCJ1c2VybmFtZSI6InRlc3RDdXN0b21lciIsIm9yaWdpbmFsRmlsZW5hbWUiOiJHUkVFTlNDUkVFTi8yMDE2MDUyNV8xNzAwLzMzNzgyNS0yLTMwODEtQ1NXLTE2My5KUEciLCJkdWVEYXRlIjoxNDY0MTg4Njg2NDcwLCJsb2NrU3RhdHVzIjowLCJzdGF0dXMiOjEsIlFBU3RhdHVzIjoiY2MiLCJyZWdpc3RlcmVkRGF0ZSI6MTQ2NDE4ODY4NjQ3MH0seyJpZCI6ImQ2NWFlMDU4LWM2ODktNDRiOC05ZWY2LTVlYTI4OGY3MTM2YyIsInVzZXJuYW1lIjoidGVzdEN1c3RvbWVyIiwib3JpZ2luYWxGaWxlbmFtZSI6IkdSRUVOU0NSRUVOLzIwMTYwNTI1XzE3MDAvMzM3ODI1LTEtMzA3Mi1DU1ctMjc3LkpQRyIsImR1ZURhdGUiOjE0NjQxODg2ODY0ODEsImxvY2tTdGF0dXMiOjAsInN0YXR1cyI6MSwiUUFTdGF0dXMiOiJjYyIsInJlZ2lzdGVyZWREYXRlIjoxNDY0MTg4Njg2NDgxfSx7ImlkIjoiNjZmZmFjYTAtYjZkZS00ZGE3LWI5OTktMTFhOGExZWQ1NTY5IiwidXNlcm5hbWUiOiJ0ZXN0Q3VzdG9tZXIiLCJvcmlnaW5hbEZpbGVuYW1lIjoiR1JFRU5TQ1JFRU4vMjAxNjA1MjVfMjAwMC8zMzc4MjUtMi0zMDg0LUJNVy0xMjIuSlBHIiwiZHVlRGF0ZSI6MTQ2NDE5OTQ5MjE4OSwibG9ja1N0YXR1cyI6MCwic3RhdHVzIjoxLCJRQVN0YXR1cyI6ImNjIiwicmVnaXN0ZXJlZERhdGUiOjE0NjQxOTk0OTIxODl9LHsiaWQiOiI3ZDZlZTI1Mi0zYWM2LTQ5Y2MtYWM1OC00MDFjMmMxMTRjOTciLCJ1c2VybmFtZSI6InRlc3RDdXN0b21lciIsIm9yaWdpbmFsRmlsZW5hbWUiOiJHUkVFTlNDUkVFTi8yMDE2MDUyNV8yMDAwLzMzNzgyNS0xLTMwNzItQ1NXLTU3LkpQRyIsImR1ZURhdGUiOjE0NjQxOTk0OTIxODksImxvY2tTdGF0dXMiOjAsInN0YXR1cyI6MSwiUUFTdGF0dXMiOiJjYyIsInJlZ2lzdGVyZWREYXRlIjoxNDY0MTk5NDkyMTg5fSx7ImlkIjoiYzU1OTU4YTUtNzBiYi00ZGIyLWFmMzUtMTRjOGFiY2QyN2ZmIiwidXNlcm5hbWUiOiJ0ZXN0Q3VzdG9tZXIiLCJvcmlnaW5hbEZpbGVuYW1lIjoiR1JFRU5TQ1JFRU4vMjAxNjA1MjVfMjAwMC8zNDU5NDUtMS0zMDc0LU1UQi01MS5KUEciLCJkdWVEYXRlIjoxNDY0MTk5NDkyMzU3LCJsb2NrU3RhdHVzIjowLCJzdGF0dXMiOjEsIlFBU3RhdHVzIjoiY2MiLCJyZWdpc3RlcmVkRGF0ZSI6MTQ2NDE5OTQ5MjM1N31d", "base64"));
  res.end();

  return __filename;
};