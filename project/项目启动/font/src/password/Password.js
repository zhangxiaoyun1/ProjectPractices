import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom';
import {Modal, List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile';
const alert=Modal.alert;
export default class Password extends Component {
    constructor(){
        super();
        this.state={
            code:'',
            warningcode:'',
        }
    }

     //获取验证码
     code=()=>{
        this.state.code='';
        var box = document.getElementById('box');
        var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //0-21
        var strr = "qwertyuiopasdfghjklzcvnmQWERTYUIOPASDFGHKLZXCVBNM1234567890";
        var change=()=>{
            var str = '';
            var str2='';
            for (var i = 0; i < 4; i++) {
                var index = Math.round(Math.random() * (strr.length - 1));
                var fs = Math.round(Math.random() * (30 - 12) + 12);
                var r = Math.round(Math.random() * 255);
                var g = Math.round(Math.random() * 255);
                var b = Math.round(Math.random() * 255);
                str2=str2+strr[index];
                str = str + "<span style='font-size:" + fs + "px;color:rgb(" + r + "," + g + "," + b + ");'>" + strr[index] + "</span>";
            }
            box.innerHTML = str;
            this.setState({
                code:str2
            })
        }
        change();
    }


    newpwd=()=>{
        var phone=document.getElementById('phone').value;
        var password=document.getElementById('newpwd').value;
        var code=document.getElementById('code').value;
        if(this.state.code!==code){
            this.setState({
                warningcode:'验证码错误'
            })
        }
        else if(phone!==''&& password!==''&& code !==''){
              //传给后端的数据
            let data={
                phone:phone,
                password:password,//新密码

            }
            //将对象转换为字符串传递
            var send=JSON.stringify(data);
            console.log(send)
            //发送post请求
            fetch('http://localhost:3001/api/user/forget',{
                method: 'POST', 
                body: send, // data can be `string` or {object}!
                headers: new Headers({
                    'Content-Type': 'application/json'
                    })
            })
            .then((res)=>res.json())
            .then((res)=>{
                //接收响应信息，如果为true,则跳转登录页面
                if(res.ok===true){
                    localStorage.setItem('key',JSON.stringify({'iname':'用户名','realname':null}));
                    window.location.href="http://localhost:3000/#/login"
                }else{
                    alert("信息有误修改失败");
                }
            }).catch(function(err){
                console.log(err);
            })
        }else{
            alert('信息填写不完整');
        }
    }
    render() {
        return (
            <div>
                {/* 头 */}
                <div style={{display:'flex',textAlign:'center',background:'linear-gradient(to right,#F55E7E, #F47B87, #F58B7F)',lineHeight:2}}>
                        <Link to='/appTaber'>
                            <img src={require('./images/return.png')} style={{width:30,height:30,paddingTop:10}}/>
                        </Link>
                        <span style={{margin:'0 auto',fontSize:25,color:'white'}}>
                            修改密码
                        </span>
                </div>
               
                <WhiteSpace />
                {/* 主体 */}
                <div>
                    <WhiteSpace />
                    <div style={{width:'100%',height:35,margin:"10px auto 20px auto"}}>
                        <WingBlank>
                            <p style={{float:'left',fontSize:20,color: '#535252',lineHeight:'35px',marginRight:'15px'}}>手&nbsp;&nbsp;机&nbsp;&nbsp;号</p>
                            <div style={{float:'left',backgroundColor:'#F1F3F4',borderRadius:35,width:'50%',height:35,margin:"0 auto"}}>
                                <span className="iconfont icon-dianhua" style={{paddingLeft:'3%',color:'#B3B3B3'}}></span>
                                <input id="phone" autoComplete="off" type='text' placeholder='手机号' style={{backgroundColor:'#F1F3F4',borderRadius:10,width:'60%',height:35,marginLeft:25}} />
                            </div>
                        </WingBlank>
                    </div>
                    <div style={{width:'100%',height:35,margin:"10px auto 20px auto"}}>
                        <WingBlank>
                            <p style={{float:'left',fontSize:20,color: '#535252',lineHeight:'35px',marginRight:'15px'}}>新&nbsp;&nbsp;密&nbsp;&nbsp;码</p>
                            <div style={{float:'left',backgroundColor:'#F1F3F4',borderRadius:35,width:'45%',height:35,margin:"0 auto"}}>
                            <span className="iconfont icon-mima" style={{paddingLeft:'3%',color:'#B3B3B3'}}></span>
                            <input id="newpwd"  autoComplete="off" type='password' placeholder='新密码' style={{backgroundColor:'#F1F3F4',borderRadius:10,width:'60%',height:35,marginLeft:25}} />
                            </div>
                        </WingBlank>
                    </div>
                    <div style={{width:'100%',height:35,margin:"10px auto 20px auto"}}>
                        <WingBlank>
                        <p style={{float:'left',fontSize:20,color: '#535252',lineHeight:'35px',marginRight:'15px'}}>验&nbsp;&nbsp;证&nbsp;&nbsp;码</p>
                        <div style={{float:'left',backgroundColor:'#F1F3F4',borderRadius:35,width:'40%',height:35,margin:"0 auto"}}>
                            <span className="iconfont icon-dianhua" style={{paddingLeft:'3%',color:'#B3B3B3'}}></span>
                            <input id="code" autoComplete="off" type='text' placeholder='验证码' style={{backgroundColor:'#F1F3F4',borderRadius:10,width:'50%',height:35,marginLeft:25}} />
                        </div>
                            <div style={{float:'right',marginRight:'2%'}}>
                            <div id="box" onClick={()=>this.code()}>点击获取</div>
                                <WhiteSpace/>
                                <span id='changes' onClick={()=>this.code()}>看不清？请点击刷新</span>
                            </div>
                                <div>
                                    <span style={{fontSize:'14px',color:'red'}}>
                                        {this.state.warningcode}
                                    </span>
                                </div>
                                </WingBlank>
                        </div>
                    <div style={{margin:'20% auto 0 auto',width:150,height:40}}>
                        <button onClick={()=>this.newpwd()}  style={{border:'none',backgroundColor:'#FC3554',fontSize:25,textAlign:'center',width:150,height:40,borderRadius:15,color:'white',fontWeight:'lighter'}}>确认</button>
                    </div>
                </div>
                
            </div>
        )
    }
}
