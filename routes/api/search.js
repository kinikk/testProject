var express = require('express');
var router = express.Router();
var http = require("http");
var provider = require('./provider');
/* GET users listing. */

router.get('/search/:method',function(req, res) {

	var req_opts = {
	    host: "127.0.0.1",
	    port: 3000,
	    path: '/api/provider/simpleSearch?host='+req.query.host+'&gateway='+req.query.gateway+'&port='+req.query.port+'&data='
	};
	var req = http.request(req_opts, function(response) {
	    var data ='';
	    response.on("data", function(chunk) {
	    	data+=chunk;
	    });
	    response.on("end", function() {
	    	res.send(data);
	    });
	});



	req.on("error", function(err) {
	    
	});

	req.end();
	  
});

module.exports = router;
