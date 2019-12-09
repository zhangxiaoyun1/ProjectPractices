const titbit=require('titbit');
const pg=require('pg');
const URLencode=require('urlencode');
var app=new titbit({
    debug:true
});

var pgdb=pg.Pool({
    port:5432,
    host:'127.0.0.1',
    user:'zxy',
    passworld:'1234567',
    database:'ehome_font'
});

app.use(async (c, next) => {
    c.setHeader('Access-Control-Allow-Origin', '*');
    c.setHeader('Access-Control-Allow-Methods', [
        'GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'
    ]);
    await next(c);
});

//获取用户全部信息
app.get('/api/user',async c=>{
    var sql='SELECT * from usermessage';
    let results=await pgdb.query(sql);
    c.res.body={
        status:0,
        data:results.rows
    };
});
//获取某个用户的信息
app.get('/api/user/:userid',async c =>{
    let sql='SELECT * from usermessage WHERE phone=$1';
    let u=await pgdb.query(sql,[parseInt(c.param.userid)]);
    if(u.rowCount===0){
        c.res.body={
            status:4004,
            errmsg:'not found'
        }
    }else{
        c.res.body={
            status:0,
            data:u.rows
        }
    }
});
//删除用户
app.get('/api/deluser/:id',async c=>{
    let sql='DELETE FROM usermessage WHERE userid=$1';
    let ret=await pgdb.query(sql,[c.param.id]);
    var sql1='SELECT * from usermessage';
    let results=await pgdb.query(sql1);
    if(ret.rowCount===0){
        c.res.body={
            status:1001,
            errmsg:'delete+user failed'
        }
    }else{
        c.res.body={
            status:0,
            data:results.rows
        }
    }
})
//管理员信息
app.get('/api/manager',async c=>{
    var sql='SELECT * from managermessage';
    let results=await pgdb.query(sql);
    c.res.body={
        status:0,
        data:results.rows
    };
});
//查找管理员信息
app.get('/api/manager/:phone',async c=>{
    var sql='SELECT * from managermessage WHERE phone=$1';
    let results=await pgdb.query(sql,[parseInt(c.param.phone)]);
    c.res.body={
        status:0,
        data:results.rows
    };
});
//添加管理员信息
app.post('/api/manager/add',async c=>{
    var nc=JSON.parse(c.body);
    let u={
       managerid:nc.managerid,
       managername:nc.managername,
       managerpwd:nc.managerpwd,
       phone:nc.phone
    };
    let sql='INSERT INTO  managermessage (managerid,managername,managerpwd,phone) VALUES ($1,$2,$3,$4)';
    let ret=await pgdb.query(sql,[u.managerid,u.managername,u.managerpwd,u.phone]);
    var sql1='SELECT * from managermessage';
    let results=await pgdb.query(sql1);
    if(ret.rowCount===0){
        c.res.body={
            status:3003,
            errmsg:'insert err'
        }
    }else{
        c.res.body={
            status:0,
            data:results.rows
        }
    }
});
//删除管理员
app.get('/api/delmanager/:id',async c=>{
    let sql='DELETE FROM managermessage WHERE managerid=$1';
    let ret=await pgdb.query(sql,[c.param.id]);
    var sql1='SELECT * from managermessage';
    let results=await pgdb.query(sql1);
    if(ret.rowCount===0){
        c.res.body={
            status:1001,
            errmsg:'delete+user failed'
        }
    }else{
        c.res.body={
            status:0,
            data:results.rows
        }
    }
})
//查找订单信息
app.get('/api/trademanagermessage/:tradeid',async c=>{
    var sql='SELECT * from trademanagermessage WHERE tradeid=$1';
    let results=await pgdb.query(sql,[parseInt(c.param.tradeid)]);
    c.res.body={
        status:0,
        data:results.rows
    };
});
//订单信息
app.get('/api/trademanagermessage/',async c=>{
    var sql='SELECT * from trademanagermessage';
    let results=await pgdb.query(sql);
    c.res.body={
        status:0,
        data:results.rows
    };
});
//删除订单信息
app.get('/api/deltrademanagermessage/:id',async c=>{
    let sql='DELETE FROM trademanagermessage WHERE tradeid=$1';
    let ret=await pgdb.query(sql,[c.param.id]);
    var sql1='SELECT * from trademanagermessage';
    let results=await pgdb.query(sql1);
    if(ret.rowCount===0){
        c.res.body={
            status:1001,
            errmsg:'delete failed'
        }
    }else{
        c.res.body={
            status:0,
            data:results.rows
        }
    }
})
//查找房屋信息
app.get('/api/homemessage/:realname',async c=>{
    var sql='SELECT * from homemessage WHERE realname=$1';
    var realname = URLencode.decode(c.param.realname,"UTF-8");
    let results=await pgdb.query(sql,[realname]);
    c.res.body={
        status:0,
        data:results.rows
    };
});
//房屋信息
app.get('/api/homemessage',async c=>{
    var sql='SELECT * from homemessage';
    let results=await pgdb.query(sql);
    c.res.body={
        status:0,
        data:results.rows
    };
});
//删除房源信息
app.get('/api/delhomemessage/:id',async c=>{
    let sql='DELETE FROM homemessage WHERE homeid=$1';
    let ret=await pgdb.query(sql,[c.param.id]);
    var sql1='SELECT * from homemessage';
    let results=await pgdb.query(sql1);
    if(ret.rowCount===0){
        c.res.body={
            status:1001,
            errmsg:'delete+user failed'
        }
    }else{
        c.res.body={
            status:0,
            data:results.rows
        }
    }
})
app.run(8002);

