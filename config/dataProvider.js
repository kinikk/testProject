var sqlite3 = require('sqlite3').verbose();

dataApi = ()=>{};


dataApi.getData = (type, limit,offset)=>{
  const db = new sqlite3.Database('./dataBase/chinook.db');
  return new Promise((res,rej)=>{
    let table = [];
    db.all("SELECT * from "+type+" limit "+limit, function(err, data) {
      res(data);
    })
  }).then(db.close());
}


module.exports = dataApi;