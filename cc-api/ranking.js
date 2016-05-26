var path = require("path");
var debug = require('debug')('cc-api-mock');
/**
 * POST /cloudcutout-workflow-job-service/rest/session/session_eebcbddc-b073-4c9f-b518-6e41ed736de7_J_97f206d8-9bd3-4966-9965-8f8376b6e376/data_0/rank_0/ranking.json?compute=true
 *
 * host: api2.cloudcutout.com
 * connection: keep-alive
 * content-length: 152230
 * accept: * / *
 * origin: http://localhost:9000
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36
 * content-type: multipart/form-data; boundary=----WebKitFormBoundaryFFZd8WXABtAA2R5y
 * referer: http://localhost:9000/
 * accept-encoding: gzip, deflate
 * accept-language: en-US,en;q=0.8,da;q=0.6
 * cookie: AWSELB=192F5B25149066DC84746F35692CB34D10DD7B6BA20919B71FFEA654F566B4C302DDB42EDD45DC338A891349AF2EA61BF204979AC9017EC16A538BD32DF74F76E7A9652E7F; _ga=GA1.1.583733367.1463916964; _gat=1
 */

module.exports = function (req, res) {
  debug('/ranking.json');

  res.statusCode = 200;

  res.setHeader("access-control-allow-credentials", "true");
  res.setHeader("access-control-allow-methods", "GET, POST, DELETE, PUT");
  res.setHeader("access-control-allow-origin", "http://localhost:9000");
  res.setHeader("content-type", "text/plain");
  res.setHeader("date", "Wed, 25 May 2016 13:59:26 GMT");
  res.setHeader("hostname", "ip-10-101-182-80");
  res.setHeader("rank_0", "Here goes the help description");
  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("content-length", "326");
  res.setHeader("connection", "keep-alive");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.json({
    "ranking": [
      "TEST_fixed3_db1c7717-fdc8-48b3-8f70-fdf7c4bf324b/roi_db1c7717-fdc8-48b3-8f70-fdf7c4bf324b/cutout.png?",
      "TEST_fixed2_aa774db8-7e26-4ca6-9ee9-55e87485d3d9/roi_aa774db8-7e26-4ca6-9ee9-55e87485d3d9/cutout.png?",
      "TEST_fixed1_41f4c253-0bc1-4297-befd-2766f5c8fc43/roi_41f4c253-0bc1-4297-befd-2766f5c8fc43/cutout.png?"
    ]
    });
  res.end();

  return __filename;
};
