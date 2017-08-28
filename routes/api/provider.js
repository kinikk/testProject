var express = require('express');
var router = express.Router();
var http = require("http");
var dataApi = require("../../config/dataProvider");
/* GET users listing. */

router.use('/provider/:method', function(req, res, next) {
  let data= {
  	"host" : req.query.host,
  	"gateway" : req.query.method,
  	"port" : req.query.port,
  	"data" : req.query.data.replace(/'/g,'"')
  }
  let type = 'albums';
  let limit = 10;
    data=JSON.parse(data.data);
    if (data.limit){
      limit=data.limit;
    } 
    if (data.type){
      type = data.type;
    }
    console.log(type)
    dataApi.getData(type,limit,0).then(data=>{
      res.send(JSON.stringify(data));
    })
});

module.exports = router;
