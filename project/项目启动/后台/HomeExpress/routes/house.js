const express = require('express');
const router = express.Router();
const pg = require('pg');
const pgdb = require('../config/dbconfig');
//地理位置定位
const https = require('https');
//连接数据库
const con = new pg.Pool(pgdb);
con.connect();

//添加房屋信息
router.post('/house', function (req, res) {
  var homeid = (new Date()).valueOf();
  var realname = req.body.realname;
  var phone = req.body.phone;
  var price = req.body.price;
  var city = req.body.city;
  var address = req.body.address;
  var type = req.body.type;
  var hometype = req.body.hometype;
  var floor = req.body.floor;
  var face = req.body.face;
  var lift = req.body.lift;
  var wifi = req.body.wifi;
  var heating = req.body.heating;
  var conditioner = req.body.conditioner;
  var homeimage = req.body.homeimage;
  var pushtime = new Date().toLocaleDateString();
  con.query(`insert into homemessage(homeid,realname,phone,price,
        city,address,type,hometype,floor,face,lift,wifi,heating,conditioner,homeimage,pushtime) 
        values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)`,
    [homeid, realname, phone, price, city, address, type, hometype, floor, face, lift,
      wifi, heating, conditioner, homeimage, pushtime], function (err, result) {
        if (err) {
          console.log(err);
        } else {

          res.send({ ok: true, msg: '发布成功！' });
        }
      })
})
/**
 * 获得所有房源信息列表
 */
router.get('/house',function(req,res){
  con.query("select * from homemessage",function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send({ok:true,msg:result.rows});
    }
  })
})

/**
 * 详情页
 */

//获得房屋详细信息用于详情页 
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
//访问百度地图用来展示房源位置
router.get('/map/:homeid',function(req,res){
  console.log(req.params.homeid);
  con.query("select * from homemessage where homeid=$1",[req.params.homeid],function(err,result){
    if(err){
      console.log(err);
    }else{
      res.send({ok:true,msg:result.rows});
    }
  })
})

/**
 * 心愿单
 */

//查找住房信息用于心愿单
router.get('/house/:id', function (req, res) {
  console.log(JSON.parse(req.params.id))
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

          //console.log(result.rows);
          //console.log(homeDreamFlagList);
        }
      })
      //console.log(homeDreamFlagList,homeMessageList,homeidList);
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
      //console.log(result.rows);
      var homeList = [];
      var homeIdList = [];
      for (var i = 0; i < result.rows.length; i++) {
        // console.log(result.rows[i].dreamflag)
        if (result.rows[i].dreamflag === true) {
          var dreamHomeid = result.rows[i].homeid;
          homeIdList.push(dreamHomeid);
          //console.log(homeIdList.length);
          con.query("select * from homemessage where homeid =$1", [dreamHomeid], (err, result) => {
            if (err) {
              console.log(err);
            } else {
              for (var i = 0; i < result.rows.length; i++) {
                homeList.push(result.rows[i]);
                if (homeList.length == homeIdList.length) {
                  res.send(homeList)
                }
                //console.log(homeList);
              }
              // homeList.push(result.rows[0]);
              // if (homeList.length == homeCount) {
              //   res.send(homeList)
              // }
              // console.log(result.rows);
            }

          })
        }

      }

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
  con.query("insert into dreammessage(dreamid,userid,homeid,dreamFlag) values ($1,$2,$3,$4)",
    [addDreamId, dreamUser, addDreamHomeId, dreamFlag], (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send({ ok: 'true', msg: '添加成功' });
      }
    })
})
//删除心愿单
router.get("/deleteDream", (req, res) => {
  res.send({ ok: 'true', msg: '传输成功!' })
})
router.post("/deleteDream", (req, res) => {
  var deleteMessage = req.body;
  // var deletedreamId = deleteMessage.dreamid;
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
//获取租房百科所有信息
router.get('/rentwiki', function (req, res) {
  con.query("select * from rentwiki", function (err, result) {
    if (err) {
      res.header('Access-Control-Allow-Origin', '*');
      console.log(err);
    } else {
      console.log(result.rows);
      res.header('Access-Control-Allow-Origin', '*');
      res.send({ ok: true, msg: result.rows });
    }
  })
})
//房屋订单详情信息
router.get('/trade', function (req, res) {
  res.render('trade');
})
/**
 * 添加租房订单
 */
router.post("/trade", function (req, res) {
  var tradeid = (new Date()).valueOf();
  var realname = req.body.realname;
  var phone = req.body.phone;
  var longtime = req.body.longtime;
  var price = req.body.price;
  var pushtime = new Date().toLocaleDateString();
  con.query(`insert into trademanagermessage(tradeid,realname,phone,longtime,price,pushtime) 
    values($1,$2,$3,$4,$5,$6)`,
    [tradeid, realname, phone, longtime, price, pushtime], function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.send({ ok: true, msg: '提交成功！' });
      }
    })
})


/**
 * 首页地理位置定位
 */

//接受地理定位
router.get('/getLocation',(req,res)=>{
  let apiUrl = "https://api.map.baidu.com/location/ip?ak=DxehXP3OwiGt3bRZGkajTMx6v2AeItkm&coor=bd09l"
  var location = {};
  https.get(apiUrl, (res1) => {
    var result = "";
    res1.on("data", function (chunk) {
      result += chunk;
    })
    res1.on("end", function () {
      result = JSON.parse(result);
      var province = result.content.address_detail.province;
      var city = result.content.address_detail.city;
      var address = result.content.address;
      location = {province:province,city:city,address:address};
      res.send({ok:'true',msg:location})
    })
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

module.exports = router;