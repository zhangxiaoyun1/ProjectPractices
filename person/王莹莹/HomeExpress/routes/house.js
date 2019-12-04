const express = require('express');
const router = express.Router();
const pg = require('pg');
const pgdb=require('../config/dbconfig')
//连接数据库
const con=new pg.Pool(pgdb);
con.connect();
//添加房屋信息
router.get('/house',function(req,res){
    res.render('house');
  })
router.post('/house',function(req,res){
    var homeid=parseInt((Math.random())*10+1);
    var realname=req.body.realname;
    var phone=req.body.phone;
    var price=req.body.price;
    var city=req.body.city;
    var address=req.body.address;
    var type=req.body.type;
    var hometype=req.body.hometype;
    var floor=req.body.floor;
    var face=req.body.face;
    var lift=req.body.lift;
    var wifi=req.body.wifi;
    var heating=req.body.heating;
    var conditioner=req.body.conditioner;
    var homeimage=req.body.homeimage;
    var pushtime=new Date().toLocaleDateString();
    con.query(`insert into homemessage(homeid,realname,phone,price,
        city,address,type,hometype,floor,face,lift,wifi,heating,conditioner,homeimage,pushtime) 
        values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)`,
        [homeid,realname,phone,price,city,address,type,hometype,floor,face,lift,
            wifi,heating,conditioner,homeimage,pushtime],function(err,result){
      if(err){
        console.log(err);
      }else{
       
        res.send({ok:true,msg:'发布成功！'});
      }
    })
  })
//查找住房信息
router.get('/house',function(req,res){
  con.query("select * from homemessage",function(err,result){
    if(err){
      console.log(err);
    }else{
      console.log(result.rows);
      res.send({ok:true,msg:'查找成功'});
    }
  })
})

  module.exports = router;