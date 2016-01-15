var express = require('express');
var router = express.Router();
var http = require("http");
/* GET users listing. */

router.get('/search/:method',function(req, res) {

 if(req.query.host==='' || req.query.port==='' || req.query.method==='' || req.query.data===''){
 	res.send("Złe parametry");
 }else{
 	var req_opts = {
	    host: req.query.host,
	    port: req.query.port,
	    path: '/api/provider/simpleSearch?host='+req.query.host+'&method='+req.query.method+'&port='+req.query.port+'&data='+req.query.data
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
 }


	
	  
});

module.exports = router;
