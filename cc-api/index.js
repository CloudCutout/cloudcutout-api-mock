var express = require('express');
var url = require('url');
var querystring = require('querystring');
var yakbak = require('../index.js');
var debug = require('debug')('cc-api-mock:server');


var api = yakbak('https://api2.cloudcutout.com', {
  dirname: __dirname + '/recorded'
});

var mock = express();

// mock all rendering models
mock.use('/cloudcutout-workflow-job-service/rest/session/session_:1/data_:2/*/cutout.png', function(req, res){
	debug('Serving alternative.png');
	res.header('Access-Control-Allow-Origin', 'http://localhost:9000');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.sendFile(__dirname+'/alternative.png');
});
/*
// scrub convert_args if -crop is present
mock.use(function(req, res, next){
	debug('mock-api', req.url);
	var u = url.parse(req.url);
	var q = querystring.parse(u.query);
	debug('mock-api', q);
	if (q.convert_args && q.convert_args.indexOf('-crop') !== -1) {
		debug('mock-api', 'scrubbing convert_args');
		delete q.convert_args;
	}
	u.search = querystring.stringify(q);
	req.url = u.format();
	next();
});
*/
mock.use(function(req, res, next) {
	//if (req.query.convert_args) {
		// scrub the convert args
		//debug('convert_args_before', req);
		//delete req.query.convert_args;
		//debug('convert_args_after', req);
	//}
	api(req, res);
	//process.exit();

});

mock.listen(3000);

