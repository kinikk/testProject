var express = require('express');
var router = express.Router();
var http = require("http");
var connection = require("../../config/dataProvider");
/* GET users listing. */

router.use('/provider/:method', function(req, res, next) {
  var data= {
  	"host" : req.query.host,
  	"gateway" : req.query.method,
  	"port" : req.query.port,
  	"data" : req.query.data.replace(/'/g,'"')
  }

    data=JSON.parse(data.data);
    var limit = 10;
    if (data.limit)
      limit=data.limit

  connection.query('SELECT * FROM customers LIMIT '+limit,function(err,rows,fields){
   
    res.send(JSON.stringify(rows));

  });
});

module.exports = router;
