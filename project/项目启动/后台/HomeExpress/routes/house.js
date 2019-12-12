const express = require('express');
const router = express.Router();
const pg = require('pg');
const pgdb=require('../config/dbconfig')
//连接数据库
const con=new pg.Pool(pgdb);
con.connect();

// router.get('/house',function(req,res){
//     res.render('house');
//   })
//添加房屋信息
router.post('/house',function(req,res){
    var homeid=(new Date()).valueOf();
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
  // con.query("select * from homemessage",function(err,result){
  //   if(err){
  //     console.log(err);
  //   }else{
  //     res.header('Access-Control-Allow-Origin', '*');
  //     res.send({ok:true,msg:result.rows});

  //   }
  // })
})
//获取心愿单所有信息
router.get('/getDream/:id',function(req,res){
    var dreamListId = JSON.parse(req.params.id);
    var dreamMessage = dreamListId.dreamMessage;
    con.query("select * from dreammessage where userid = $1",[dreamMessage],(err,result)=>{
      if(err){
        console.log(err)
      }else{
        //console.log(result.rows);
        var homeList = [];
        var homeCount = result.rows.length
        for(var i =0;i<result.rows.length;i++){
          var dreamHomeid = result.rows[i].homeid;
          con.query("select * from homemessage where homeid =$1",[dreamHomeid],(err,result)=>{
              if(err){
                console.log(err);
              }else{
                homeList.push(result.rows[0]);
                if(homeList.length == homeCount) {
                  res.send(homeList)
                }
              }

            })
        }
        
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

//添加心愿单
router.get("/addDream",(req,res)=>{
  res.send({ok:'true',msg:'传输成功!'});
  })
router.post('/addDream',(req,res)=>{
  var addMessage = req.body;
  var addDreamId = addMessage.dreamid;
  var addDreamHomeId = addMessage.homeid;
  var dreamUser = addMessage.dreamUser;
  var dreamFlag = true;
  con.query("insert into dreammessage(dreamid,userid,homeid,dreamFlag) values ($1,$2,$3,$4)",
  [addDreamId,dreamUser,addDreamHomeId,dreamFlag],(err,result)=>{
    if(err){
      console.log(err)
    }else{
      res.send({ok:'true',msg:'添加成功'});
    }
  })
})
//删除心愿单
router.get("/deleteDream",(req,res)=>{
  res.send({ok:'true',msg:'传输成功!'})
})
router.post("/deleteDream",(req,res)=>{
  var deleteMessage = req.body;
  var deletedreamId = deleteMessage.dreamid;
  var deleteDreamFlag = false;
  con.query("update dreammessage set dreamflag =$1 where dreamid = $2",[deleteDreamFlag,deletedreamId],(err,result)=>{
    if(err){
      console.log(err)
    }else{
      res.send({ok:'true',msg:'删除成功!'});
    }
  }
  )
})
module.exports = router;