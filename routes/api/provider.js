var express = require('express');
var router = express.Router();
var http = require("http");
/* GET users listing. */

router.use('/provider/:method', function(req, res, next) {
  var data= {
  	"host" : req.query.host,
  	"gateway" : req.query.gateway,
  	"port" : req.query.port,
  	"data" : {
  		"foo":"bar"
  	}
  }
  res.send(JSON.stringify(data));
  res.end();
});

module.exports = router;
