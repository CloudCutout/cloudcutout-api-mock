var crypto = require('crypto');
var url = require('url');

module.exports = createStream;

function createStream(algorithm, encoding) {
    var hash = createHash(algorithm);

    hash.on('pipe', function (req) {
	    updateHash(hash, req);
	});

    hash.setEncoding(encoding || 'hex');

    return hash;
}

createStream.sync = function (req, body, algorithm, encoding) {
    var hash = createHash(algorithm);

    updateHash(hash, req);

    //hash.write(body);

    return hash.digest(encoding || 'hex');
};

function createHash(algorithm) {
    return crypto.createHash(algorithm || 'md5');
}

function updateHash(hash, req) {
    var parts = url.parse(req.url, true);
  
    //console.log('PREHASH: ', parts);

    hash.update(req.httpVersion);
    hash.update(req.method);

    // strip the uuid prefix off the session_id
    parts.pathname = parts.pathname.replace(/\/session_(.*)\//, function(s) {return s.replace(/session_(.*)_J_/, 'session_J_');});

    // replace data id by 0
    parts.pathname = parts.pathname.replace(/\/data_(.*)\//, '/data_0/');

    // replace rank id by 0
    parts.pathname = parts.pathname.replace(/\/rank_(.*)\//, '/rank_0/');

    hash.update(parts.pathname);
    /*
  if (parts.query.convert_args && parts.query.convert_args.indexOf('-crop') !== -1) {
    console.log('DELETING CROP');
    delete parts.query.convert_args;
  };
    */

    hash.update(JSON.stringify(sort(parts.query)));
    hash.update(JSON.stringify(sort(req.headers)));
    hash.update(JSON.stringify(sort(req.trailers)));

    //console.log('HASHED: ', parts);
}

function sort(obj) {
    var ret = {};

    Object.keys(obj).sort().forEach(function (key) {
	    ret[key] = obj[key];
	});

    return ret;
}
