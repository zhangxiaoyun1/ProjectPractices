const express = require('express');
var app = express();
const router = express.Router();
const pg = require('pg');
const pgdb=require('../config/dbconfig')
const fs=require('fs');
const path=require('path');
//连接数据库
const con=new pg.Pool(pgdb);
con.connect();
//注册
router.post('/user/reg',function(req,res){
  var userid=(new Date()).valueOf();
  var iname=req.body.iname;
  var password=req.body.password;
  var phone=req.body.phone;
  var userimg='user.png';
  var settime=new Date().toLocaleDateString();
  con.query("select * from usermessage where iname=$1",[iname],function(err,result){
    console.log(result);
    if(err){
      console.log(err);
    }else{
      if(result.rows.length!==0){
        res.send({ok:false,msg:'用户名存在'});
      }else{
        con.query("insert into usermessage (userid,iname,password,phone,settime,userimage) values($1,$2,$3,$4,$5,$6)",[userid,iname,password,phone,settime,userimg],function(err,result){
          if(err){
            console.log(err);
          }else{
              res.send({ok:true,msg:'注册成功'});
            }
        })
      }
    }
  })
})
  
//登录
router.post('/user/login',function(req,res){
  console.log(1);
  var phone=req.body.phone;
  var password=req.body.password;
  con.query("select * from usermessage where phone=$1 and password=$2",[phone,password],function(err,result){
    if(err){
      console.log(err);
    }else{
      if(result.rows.length===0){
        res.send({ok:false,msg:'登录失败'});
      }
      else{
        useridNum=result.rows[0].userid;
        console.log(useridNum);
        res.send({ok:true,msg:result.rows[0]});
      }
    }
  })
})
router.post('/user/real',function(req,res,next){
  var realname=req.body.realname;
  var phone=req.body.phone;
  var id=req.body.idcard;
  var sex=req.body.sex;
  con.query("select * from usermessage where phone=$1",[phone],function(err,result){
    if(err){
      console.log(err);
    }else{
      if(result.rows.length!==0){
        if(result.rows[0].realname!==null){
          res.send({ok:false,msg:'已经实名认证'})
        }else{
          con.query(`update usermessage set realname=$1,id=$2,sex=$3
          where phone=$4`,[realname,id,sex,phone],function(err,result){
            if(err){
              console.log(err);
            }else{
              res.send({ok:true,msg:'认证成功'});
            }
          })
        }
      }else{
        res.send({ok:false,msg:'没有此用户'})
      }
    }
  })
})
//忘记密码
router.get('/user/forget',function(req,res,next){
  res.render('forget');
});
router.post('/user/forget',function(req,res,next){
  var phone=req.body.phone;
  var password=req.body.password;
  con.query(`update usermessage set password=$1
  where phone=$2`,[password,phone],function(err,result){
    if(err){
      console.log(err);
    }else{
        res.send({ok:true,msg:'修改成功'});
    }
  })
})
router.post('/user/upimgs',function(req,res,next){
      var file=req.body.file;
      var userid=req.body.userid;
      var name;
      var data = file.split(',');
      var buf = Buffer.from(data[1], "base64");
      if (data[0].indexOf('png') || data[0].indexOf('PNG')) {
          name = `${userid}.png`;
      } else if (data[0].indexOf('jpg') || data[0].indexOf('JPG') || data[0].indexOf('jpeg') || data[0].indexOf('JPEG')) {
          name = `${userid}.jpg`;
      } else if (data[0].indexOf('gif') || data[0].indexOf('GIF')) {
           name = `${userid}.gif`;
      }
      var paths=path.join(__dirname,'../../images/usersimg/', name);
      var userimage=name;
      fs.writeFileSync(paths, buf, { "encoding": "base64" });
      con.query(`update usermessage set userimage=$1
        where userid=$2`,[userimage,userid],function(err,result){
          if(err){
            console.log(err);
          }else{
             res.send({ok:true,msg:'发布成功！'});
          }
        });
})
router.get('/user/:img',function(req,res){
  var img=req.params.img;
  var imgPath=path.join(__dirname,'../../images/usersimg/', img);
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
module.exports = router;
