var path = require("path");
var debug = require('debug')('cc-api-mock');

/**
 * GET /cloudcutout-workflow-job-service/rest/session/session_dca463ad-a271-41a6-8631-9ff7b9c72e42_J_ce797636-9ad5-4d6f-9324-7bbff9dc852f/data_0/fixed2_39daa40a-b8a5-467b-ad87-18911940b70c/roi_39daa40a-b8a5-467b-ad87-18911940b70c/cutout.png?compute=true&convert_args=-crop+719x904+616+1314
 *
 * host: api2.cloudcutout.com
 * connection: keep-alive
 * origin: http://localhost:9000
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36
 * accept: * / *
 * referer: http://localhost:9000/
 * accept-encoding: gzip, deflate, sdch
 * accept-language: en-US,en;q=0.8,da;q=0.6
 * cookie: AWSELB=192F5B25149066DC84746F35692CB34D10DD7B6BA20919B71FFEA654F566B4C302DDB42EDD45DC338A891349AF2EA61BF204979AC9017EC16A538BD32DF74F76E7A9652E7F; _ga=GA1.1.583733367.1463916964; _gat=1
 */

module.exports = function (req, res) {
  debug('GET /model/cutout.png');

  res.statusCode = 200;

  res.setHeader("access-control-allow-credentials", "true");
  res.setHeader("access-control-allow-methods", "GET, POST, DELETE, PUT");
  res.setHeader("access-control-allow-origin", "http://localhost:9000");
  res.setHeader("content-type", "image/png");
  res.setHeader("date", "Thu, 26 May 2016 05:39:02 GMT");
  res.setHeader("fixed2_39daa40a-b8a5-467b-ad87-18911940b70c", "Replace ROI with a pregenerated alternative. alt_id: integer deciding the fixed alternative id to use; replace_rgb: set to \"true\" to also replace RGB values within ROI.");
  res.setHeader("hostname", "ip-10-101-182-80");
  res.setHeader("roi_39daa40a-b8a5-467b-ad87-18911940b70c", "Input: cutout.png, roi.png. Output: cutout.png. Description: Blends cutout.png with the cutout.png in session root using roi.png.");
  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

	res.sendFile(__dirname+'/alternative.png');
	//res.end();
};