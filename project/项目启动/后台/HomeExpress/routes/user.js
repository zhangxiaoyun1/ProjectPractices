const express = require('express');
var app = express();
const router = express.Router();
const pg = require('pg');
const pgdb=require('../config/dbconfig')
//连接数据库
const con=new pg.Pool(pgdb);
con.connect();
// var useridNum=0;
// console.log(useridNum);
//注册
router.post('/user/reg',function(req,res){
  var userid=(new Date()).valueOf();
  var iname=req.body.iname;
  var password=req.body.password;
  var phone=req.body.phone;
  var settime=new Date().toLocaleDateString();
  con.query("select * from usermessage where iname=$1",[iname],function(err,result){
    console.log(result);
    if(err){
      console.log(err);
    }else{
      if(result.rows.length!==0){
        res.send({ok:false,msg:'用户名存在'});
      }else{
        con.query("insert into usermessage (userid,iname,password,phone,settime) values($1,$2,$3,$4,$5)",[userid,iname,password,phone,settime],function(err,result){
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
// router.get('/user/login',function(req,res){
//   res.render('login');
// })
router.post('/user/login',function(req,res){
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

// 获取用户名写到我的页面
// router.get('/user/my',function(req,res){
//   con.query("select * from usermessage where userid=$1",[useridNum],function(err,result){
//     if(err){
//       console.log(err);
//     }else{
//       res.send({ok:true,msg:result.rows})
//     }
//   })
// })
// 退出登录
// router.get('/user/loginout',function(req,res){
//   con.query("select * from usermessage where userid=$1",[useridNum],function(err,result){
//     if(err){
//       console.log(err);
//     }else{
//       res.send({ok:true,msg:"退出成功"})
//     }
//   })
// })
//实名认证
// router.get('/user/real',function(req, res, next) {
//   res.render('real');
// });
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
module.exports = router;
