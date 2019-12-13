const express = require('express');
const router = express.Router();
const pg = require('pg');
const fs = require('fs');
const path = require('path');
const pgdb=require('../config/dbconfig')
//连接数据库
const con=new pg.Pool(pgdb);
con.connect();

// router.get('/house',function(req,res){
//     res.render('house');
//   })
//添加房屋信息
router.post('/house',function(req,res){
    var userid=req.body.userid;
    var homeid=(new Date()).valueOf();
    var realname=req.body.realname;
    var phone=req.body.phone;
    var price=req.body.price;
    var city=req.body.city;
    var detail=req.body.detail;
    var apname=req.body.apname;
    var address=req.body.address;
    var type=req.body.type;
    var hometype=req.body.hometype;
    var floor=req.body.floor;
    var face=req.body.face;
    var lift=req.body.lift;
    var wifi=req.body.wifi;
    var heating=req.body.heating;
    var conditioner=req.body.conditioner;
    var files=req.body.files;
    var imgs=[];
    for(var i=0;i<files.length;i++){
      var name;
      var data = files[i].url.split(',');
      var buf = Buffer.from(data[1], "base64");
      if (data[0].indexOf('png') || data[0].indexOf('PNG')) {
          name = `${homeid}-${i}.png`;
      } else if (data[0].indexOf('jpg') || data[0].indexOf('JPG') || data[0].indexOf('jpeg') || data[0].indexOf('JPEG')) {
          name = `${homeid}-${i}.jpg`;
      } else if (data[0].indexOf('gif') || data[0].indexOf('GIF')) {
           name = `${homeid}-${i}.gif`;
      }
      var paths=path.join(__dirname,'../../images/houseimage/', name);
      imgs.push(name);
      fs.writeFileSync(paths, buf, { "encoding": "base64" });
     }
    var homeimage=imgs.join(',');
    var pushtime=new Date().toLocaleDateString();
    con.query(`insert into homemessage(homeid,realname,phone,price,
        city,address,type,hometype,floor,face,lift,wifi,heating,detail,apname,conditioner,homeimage,pushtime) 
        values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18)`,
        [homeid,realname,phone,price,city,address,type,hometype,floor,face,lift,
            wifi,heating,detail,apname,conditioner,homeimage,pushtime],function(err,result){
      if(err){
        console.log(err);
      }else{
        con.query(`update usermessage set isseller=true
        where userid=$1`,[userid],function(err,result){
          if(err){
            console.log(err);
          }else{
             res.send({ok:true,msg:'发布成功！'});
          }
        });
      }
    })
  })
  //读取房屋图片
  router.get('/house/:img',function(req,res){
    var img=req.params.img;
    var imgPath=path.join(__dirname,'../../images/houseimage/', img);
    fs.readFile(imgPath, (err, data) => {
      if (err) {
          console.log(err);
      } else {
          if (img.indexOf('png') >0 || img.indexOf('PNG')>0) {
              res.writeHead(200, { "Content-Type": "image/png" });
          } else if (img.indexOf('jpg')>0 || img.indexOf('JPG')>0 || img.indexOf('jpeg') || img.indexOf('JPEG')) {
              res.writeHead(200, { "Content-Type": "image/jpeg" });                            
          } else if (img.indexOf('gif')>0|| img.indexOf('GIF')>0) {
              res.writeHead(200, { "Content-Type": "image/gif" });                            
          }
          res.end(data);
      }
  })
  })
//查找住房信息
router.get('/house',function(req,res){
  con.query("select * from homemessage",function(err,result){
    if(err){
      console.log(err);
    }else{
      res.header('Access-Control-Allow-Origin', '*');
      res.send({ok:true,msg:JSON.stringify(result.rows)});
    }
  })
})
//获取心愿单所有信息
router.get('/dream',function(req,res){
  con.query("select * from dreammessage",function(err,result){
      if(err){
        console.log(err);
      }else{
        res.send({ok:true,msg:result.rows});
      }
  })
})
//获取租房百科所有信息
router.get('/rentwiki',function(req,res){
  con.query("select * from rentwiki",function(err,result){
      if(err){
        res.header('Access-Control-Allow-Origin', '*');
        console.log(err);
      }else{
        console.log(result.rows);
        res.header('Access-Control-Allow-Origin', '*');
        res.send({ok:true,msg:result.rows});
      }
  })
})
//房屋订单详情信息
router.get('/trade',function(req,res){
  res.render('trade');
})
router.post("/trade",function(req,res){
  var tradeid=(new Date()).valueOf();
  var realname=req.body.realname;
  var phone=req.body.phone;
  var longtime=req.body.longtime;
  var price=req.body.price;
  var pushtime=new Date().toLocaleDateString();
  con.query(`insert into trademanagermessage(tradeid,realname,phone,longtime,price,pushtime) 
    values($1,$2,$3,$4,$5,$6)`,
    [tradeid,realname,phone,longtime,price,pushtime],function(err,result){
  if(err){
    console.log(err);
  }else{
    res.send({ok:true,msg:'提交成功！'});
  }
})
})

router.post('/house/upimg',function(req,res){
  var datastr = '';
        req.setEncoding("binary");
        req.on('data', function (chunk) {
            datastr += chunk;
        })
        req.on('end', function () {
          console.log(datastr);
        })
})
module.exports = router;