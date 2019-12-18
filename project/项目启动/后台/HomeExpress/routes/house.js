const express = require('express');
const router = express.Router();
const pg = require('pg');
const pgdb = require('../config/dbconfig');
const path = require('path');
const fs = require('fs');
//地理位置定位
const https = require('https');
//连接数据库
const con = new pg.Pool(pgdb);
con.connect();

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
      con.query(`update usermessage set ishome=true
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
router.get('/housess/:img',function(req,res){
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
router.get('/house',function(req,res){
  con.query("select * from homemessage",function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send({ok:true,msg:result.rows});
    }
  })
})
//详情页
router.get('/houses/:homeid', function (req, res) {
  con.query("select * from homemessage where homeid=$1", [req.params.homeid], function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send({ ok: true, msg: result.rows });
    }
  })
})
//查找住房信息
router.get('/house', function (req, res) {
  con.query("select * from homemessage", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send({ ok: true, msg: result.rows });
    }
  })
})
router.get('/house/:id', function (req, res) {
  var homeMessage = JSON.parse(req.params.id);
  var homeUserid = homeMessage.userName;
  var homeidList = [];
  var homeMessageList = [];
  var homeDreamFlagList = [];
  con.query("select * from homemessage", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      for (var i = 0; i < result.rows.length; i++) {
        homeidList.push(result.rows[i].homeid);
        homeMessageList.push(result.rows[i]);
      }
      con.query('select * from dreammessage where userid =$1', [homeUserid], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          if (JSON.stringify(result.rows) !== JSON.stringify([])) {
            var homeDreamLength = result.rows.length;
            for (var i = 0; i < result.rows.length; i++) {
              homeDreamFlagList.push(result.rows[i]);
              if (homeDreamFlagList.length === homeDreamLength) {
                res.send({ ok: 'true', msg0: homeMessageList, msg1: homeidList, msg2: homeDreamFlagList })
              }
            }
          } else {
            res.send({ ok: 'true', msg0: homeMessageList, msg1: homeidList, msg2: homeDreamFlagList })
          }
        }
      })
    }
  })

})
//获取心愿单所有信息
router.get('/getDream/:id', function (req, res) {
  var dreamListId = JSON.parse(req.params.id);
  var dreamMessage = dreamListId.dreamMessage;
  con.query("select * from dreammessage where userid = $1", [dreamMessage], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      var homeList = [];
      var homeIdList = [];
      for (var i = 0; i < result.rows.length; i++) {
        if (result.rows[i].dreamflag === true) {
          var dreamHomeid = result.rows[i].homeid;
          homeIdList.push(dreamHomeid);
          con.query("select * from homemessage where homeid =$1", [dreamHomeid], (err, result) => {
            if (err) {
              console.log(err);
            } else {
              for (var i = 0; i < result.rows.length; i++) {
                homeList.push(result.rows[i]);
                if (homeList.length == homeIdList.length) {
                  res.send(homeList)
                }
              }
            }
          })
        }
      }
    }
  })
})
//获取租房百科所有信息
router.get('/rentwiki',function(req,res){
  con.query("select * from rentwiki order by rentid",function(err,result){
      if(err){
        res.header('Access-Control-Allow-Origin', '*');
        console.log(err);
      }else{
        res.header('Access-Control-Allow-Origin', '*');
        res.send({ok:true,msg:result.rows});
      }
  })
})
//房屋订单详情信息
router.post("/trade", function (req, res) {
  var userid=req.body.userid;
  var adress=req.body.adress;
  var tradeid = (new Date()).valueOf();
  var rentername = req.body.rentername;
  var renterphone = req.body.renterphone;
  var checkin = req.body.checkin;
  var longtime = req.body.longtime;
  var price = req.body.price;
  var pushtime = new Date().toLocaleDateString();
  con.query(`insert into trademanagermessage(tradeid,adress,rentername,renterphone,checkin,longtime,price,pushtime) 
    values($1,$2,$3,$4,$5,$6,$7,$8)`,
    [tradeid,adress, rentername, renterphone, checkin,longtime, price, pushtime], function (err, result) {
      if (err) {
        console.log(err);
      } else {
	con.query(`update usermessage set isseller=true
     	 where userid=$1`,[userid],function(err,result){
        if(err){
          console.log(err);
        }else{
           res.send({ok:true,msg:'提交成功！'});
       }
      })
    }
   })
})
router.get('/trade/:tradeid',function(req,res){
  con.query("select * from trademanagermessage where tradeid=$1",[req.params.tradeid],function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send({ok:true,msg:result.rows[0]});
    }
  })
})
router.get('/trade',function(req,res){
  con.query("select * from trademanagermessage",function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send({ok:true,msg:result.rows});
    }
  })
})
//添加心愿单
router.get("/addDream", (req, res) => {
  res.send({ ok: 'true', msg: '传输成功!' });
})
router.post('/addDream', (req, res) => {
  var addMessage = req.body;
  var addDreamId = addMessage.dreamid;
  var addDreamHomeId = addMessage.homeid;
  var dreamUser = addMessage.dreamUser;
  var dreamFlag = true;
  var homeidList = [];
  con.query("select * from dreammessage where userid = $1", [dreamUser], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      if (result.rows.length === 0) {
        con.query("insert into dreammessage(dreamid,userid,homeid,dreamFlag) values ($1,$2,$3,$4)",
          [addDreamId, dreamUser, addDreamHomeId, dreamFlag], (err, result) => {
            if (err) {
              console.log(err)
            } else {
              res.send({ ok: 'true', msg: '添加成功' });
            }
          })
      } else {
        for(var i = 0;i<result.rows.length;i++){
          homeidList.push(result.rows[i].homeid);
        }
        if(homeidList.indexOf(addDreamHomeId) !== -1){
          con.query("update dreammessage set dreamflag = $1 where homeid =$2",[dreamFlag,addDreamHomeId],(err,result)=>{
            if(err){
              console.log(err)
            }else{
              res.send({ok:true,msg:'修改成功!'})
            }
          })
        }else{
          con.query("insert into dreammessage(dreamid,userid,homeid,dreamFlag) values ($1,$2,$3,$4)",
          [addDreamId, dreamUser, addDreamHomeId, dreamFlag], (err, result) => {
            if (err) {
              console.log(err)
            } else {
              res.send({ ok: 'true', msg: '添加成功' });
            }
          })
        }
      }

    }
  })
})
//删除心愿单
router.get("/deleteDream", (req, res) => {
  res.send({ ok: 'true', msg: '传输成功!' })
})
router.post("/deleteDream", (req, res) => {
  var deleteMessage = req.body;
  var deleteDreamHomeid = deleteMessage.homeid;
  var deleteDreamUserid = deleteMessage.dreamUser;
  var deleteDreamFlag = false;
  con.query("update dreammessage set dreamflag =$1 where userid = $2 and homeid = $3", [deleteDreamFlag, deleteDreamUserid, deleteDreamHomeid], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send({ ok: 'true', msg: '删除成功!' });
    }
  }
  )
})
router.get('/houses/:homeid',function(req,res){
  console.log(req.params.homeid);
  con.query("select * from homemessage where homeid=$1",[req.params.homeid],function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send({ok:true,msg:result.rows});
    }
  })
})
//访问百度地图
router.get('/map/:homeid',function(req,res){
  con.query("select * from homemessage where homeid=$1",[req.params.homeid],function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send({ok:true,msg:result.rows});
    }
  })
})
//接受地理定位
router.get('/getLocation',(req,res)=>{
   
//通过req的hearers来获取客户端ip
var getIp = function(req) {
    var ip = req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddres || req.socket.remoteAddress || '';
    if(ip.split(',').length>0){
        ip = ip.split(',')[0];
    }
    return ip;
  } 
  var clientIp = getIp(req);
  let apiUrl = "https://api.map.baidu.com/location/ip?ip="+clientIp.split(":")[3]+"&ak=DxehXP3OwiGt3bRZGkajTMx6v2AeItkm&coor=bd09l"
  var location = {};
  https.get(apiUrl, (res1) => {
    var result = "";
    res1.on("data", function (chunk) {
      result += chunk;
    })
    res1.on("end", function () {
      result = JSON.parse(result);
      var province = result.content.address_detail.province;
      var city = result.content.address_detail.city.slice(0,-1);
      var address = result.content.address;
      location = {province:province,city:city,address:address};
      res.send({ok:'true',msg:location})
    })
  })
})
//搜索小区名称
router.get('/homeSearch/:id', (req, res) => {
  var searchMessage = JSON.parse(req.params.id);
  var search_apartment = searchMessage.apartment;
  con.query("select * from homemessage where apname = $1", [search_apartment], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ ok: true, msg: result.rows });
    }
  })
})
//搜索城市
router.get('/citySearch/:id', (req, res) => {
  var citySearchMessage = JSON.parse(req.params.id);
  var city = citySearchMessage.city;
  con.query("select * from homemessage where city = $1", [city], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ ok: true, msg: result.rows });
    }
  })

})
// 关注
router.post('/notice',function(req,res){
  var tag = req.body.tag +1;
  con.query('update rentwiki set tag=$1 where rentid=$2',[tag,req.body.rentid],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.send({ ok: 'true', msg: '成功!' });
    }
  })
})
router.post('/click',function(req,res){
  console.log(req.body.click);
  console.log(req.body.rentid);
  con.query('update rentwiki set clickcount=$1 where rentid=$2',[req.body.click,req.body.rentid],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.send({ ok: 'true', msg: '成功!' });
    }
  })
})
module.exports = router;
