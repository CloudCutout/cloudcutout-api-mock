var path = require("path");

/**
 * POST /cloudcutout-workflow-job-service/rest/auth
 *
 * host: api2.cloudcutout.com
 * connection: keep-alive
 * content-length: 67
 * accept: * / *
 * origin: http://localhost:9000
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36
 * content-type: application/json
 * referer: http://localhost:9000/
 * accept-encoding: gzip, deflate
 * accept-language: en-US,en;q=0.8,da;q=0.6
 * cookie: AWSELB=192F5B25149066DC84746F35692CB34D10DD7B6BA20919B71FFEA654F566B4C302DDB42EDD45DC338A891349AF2EA61BF204979AC9017EC16A538BD32DF74F76E7A9652E7F; _gat=1; _ga=GA1.1.583733367.1463916964
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("access-control-allow-credentials", "true");
  res.setHeader("access-control-allow-methods", "GET, POST, DELETE, PUT");
  res.setHeader("access-control-allow-origin", "http://localhost:9000");
  res.setHeader("content-type", "application/json");
  res.setHeader("date", "Thu, 26 May 2016 06:50:01 GMT");
  res.setHeader("hostname", "ip-10-101-182-80");
  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("content-length", "119");
  res.setHeader("connection", "keep-alive");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJ1c2VybmFtZSI6InRlc3RDdXN0b21lcl9jYyIsInBhc3N3b3JkIjpudWxsLCJ0b2tlbiI6IjIzOWI1YTM3LWI0YjAtNGQyNC1iN2ZjLTg1NDk0YTcyZTMxZCIsInRhZyI6ImFhYSIsInFhcm9sZSI6ImNjIn0=", "base64"));
  res.end();

  return __filename;
};
