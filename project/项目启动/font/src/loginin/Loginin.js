import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom';
import { List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import './loginin.css'
export default class Loginin extends Component {
    constructor(){
        super();
        this.state={
            iname:'',//用户名
            password:'',//密码
            password2:'',//确认密码
            phone:'',//手机号
            warningname:'',
            warningpwd:'',
            warningpwd2:'',
            warningphone:'',
            warningcode:'',
            code:''
        }
    }
    addItem=()=>{
        // 页面输入的信息
        if(JSON.parse(localStorage.getItem('key'))=== null){
            this.state.warningname='';
            this.state.warningpwd='';
            this.state.warningpwd2='';
            this.state.warningphone='';
            var iname=document.getElementById('iname').value;//用户名
            var password=document.getElementById('password').value;//密码
            var password2=document.getElementById('password2').value;//确认密码
            var phone=document.getElementById('phone').value;//手机号
            var code=document.getElementById('code').value;
            if(iname.length === 0){
                this.setState({
                    warningname:'请输入昵称'
                })
            }else if(password === ''){
                this.setState({
                    warningpwd:'请输入密码'
                })
            }else if(password !== password2){ 
                this.setState({
                    warningpwd2:'密码不一致'
                })
            }else if(phone.length!==11){
                this.setState({
                    warningphone:'格式错误'
                })
            }else if(this.state.code!==code){
                this.setState({
                    warningcode:'验证码错误'
                })
            }else{
                //传给后端的数据
                let data={
                    iname:iname,//用户名
                    password:password,//密码
                    phone:phone,//手机号
                }
                //将对象转换为字符串传递
                var send=JSON.stringify(data);
                console.log(send)
                //发送post请求
                fetch('http://49.235.251.57:8000/api/user/reg',{
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
                        window.location.href="http://localhost:3000/#/login"
                    }else{
                        window.location.href="http://localhost:3000/#/loginin"
                    }
                }).catch(function(err){
                    console.log(err);
                })
                }
        }else{
            if(JSON.parse(localStorage.getItem('key')).iname !== '用户名'){
                alert('请先退出登录')
            }else{
                this.state.warningname='';
                this.state.warningpwd='';
                this.state.warningpwd2='';
                this.state.warningphone='';
                var iname=document.getElementById('iname').value;//用户名
                var password=document.getElementById('password').value;//密码
                var password2=document.getElementById('password2').value;//确认密码
                var phone=document.getElementById('phone').value;//手机号
                var code=document.getElementById('code').value;
                if(iname.length === 0){
                    this.setState({
                        warningname:'请输入昵称'
                    })
                }else if(password === ''){
                    this.setState({
                        warningpwd:'请输入密码'
                    })
                }else if(password !== password2){ 
                    this.setState({
                        warningpwd2:'密码不一致'
                    })
                }else if(phone.length!==11){
                    this.setState({
                        warningphone:'格式错误'
                    })
                }else if(this.state.code!==code || code===''){
                    this.setState({
                        warningcode:'验证码错误'
                    })
                }else{
                    //传给后端的数据
                    let data={
                        iname:iname,//用户名
                        password:password,//密码
                        phone:phone,//手机号
                    }
                    //将对象转换为字符串传递
                    var send=JSON.stringify(data);
                    //发送post请求
                    fetch('http://49.235.251.57:8000/api/user/reg',{
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
                            window.location.href="http://localhost:3000/#/login"
                        }else{
                            window.location.href="http://localhost:3000/#/loginin"
                        }
                    }).catch(function(err){
                        console.log(err);
                    })
                    }
            }
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

    //页面渲染
    render() {
        return (
            
            <div style={{height:'100%',width:'100%',}}>
                <div style={{display:'flex',textAlign:'center',background: 'linear-gradient(to right,#F55E7E, #F47B87, #F58B7F)',lineHeight:2}}>
                    <Link to='/appTaber'>
                        <img src={require('./images/return.png')} style={{width:30,height:30,paddingTop:10}}/>
                    </Link>
                    <span style={{margin:'0 auto',fontSize:25,color:'white'}}>
                        注册账号
                    </span>
               </div>
               <WhiteSpace />
               <WhiteSpace />
               <WhiteSpace />
               <div className='b3'>
                    <div style={{width:'100%',height:35,margin:"10px auto 20px auto"}}>
                        <WingBlank>
                            <p style={{float:'left',fontSize:20,color: '#535252',lineHeight:'35px',marginRight:'15px'}}>昵&nbsp;&nbsp;&nbsp;&nbsp;称</p>
                            <div style={{float:'left',backgroundColor:'#F1F3F4',borderRadius:35,width:'45%',height:35,margin:"0 auto"}}>
                            <span className="iconfont icon-wode" style={{paddingLeft:'3%',color:'#B3B3B3'}}></span>
                                <input id="iname" autoComplete="off" type='text' placeholder='昵称' style={{backgroundColor:'#F1F3F4',borderRadius:10,width:'60%',height:35,marginLeft:10}} />
                            </div>
                            <span style={{fontSize:'14px',color:'red',lineHeight:'35px'}}>
                                {this.state.warningname}
                            </span>
                        </WingBlank>
                    </div>
                    <div style={{width:'100%',height:35,margin:"10px auto 20px auto"}}>
                        <WingBlank>
                            <p style={{float:'left',fontSize:20,color: '#535252',lineHeight:'35px',marginRight:'15px'}}>密&nbsp;&nbsp;&nbsp;&nbsp;码</p>
                            <div style={{float:'left',backgroundColor:'#F1F3F4',borderRadius:35,width:'45%',height:35,margin:"0 auto"}}>
                                <span className="iconfont icon-mima" style={{paddingLeft:'3%',color:'#B3B3B3'}}></span>
                                <input id="password" autoComplete="off" type='password' placeholder='密码' style={{backgroundColor:'#F1F3F4',borderRadius:10,width:'60%',height:35,marginLeft:10}} />
                            </div>
                            <span style={{fontSize:'14px',color:'red',lineHeight:'35px'}}>
                                {this.state.warningpwd}
                            </span>
                        </WingBlank>
                    </div>
                    <div style={{width:'100%',height:35,margin:"10px auto 20px auto"}}>
                        <WingBlank>
                            <p style={{float:'left',fontSize:20,color: '#535252',lineHeight:'35px',marginRight:'15px'}}>确认密码</p>
                            <div style={{float:'left',backgroundColor:'#F1F3F4',borderRadius:35,width:'45%',height:35,margin:"0 auto"}}>
                                <span className="iconfont icon-mima" style={{paddingLeft:'3%',color:'#B3B3B3'}}></span>
                                <input id="password2" autoComplete="off" type='password' placeholder='确认密码' style={{backgroundColor:'#F1F3F4',borderRadius:10,width:'60%',height:35,marginLeft:10}} />
                            </div>
                            <span style={{fontSize:'14px',color:'red',lineHeight:'35px'}}>
                                {this.state.warningpwd2}
                            </span>
                        </WingBlank>
                    </div>
                    <div style={{width:'100%',height:35,margin:"10px auto 20px auto"}}>
                        <WingBlank>
                            <p style={{float:'left',fontSize:20,color: '#535252',lineHeight:'35px',marginRight:'15px'}}>手&nbsp;机&nbsp;号</p>
                            <div style={{float:'left',backgroundColor:'#F1F3F4',borderRadius:35,width:'45%',height:35,margin:"0 auto"}}>
                                <span className="iconfont icon-dianhua" style={{paddingLeft:'3%',color:'#B3B3B3'}}></span>
                                <input id="phone" autoComplete="off" type='text' placeholder='手机号' style={{backgroundColor:'#F1F3F4',borderRadius:10,width:'60%',height:35,marginLeft:10}} />
                            </div>
                            <span style={{fontSize:'14px',color:'red',lineHeight:'35px'}}>
                                {this.state.warningphone}
                            </span>
                        </WingBlank>
                    </div>
                    <div style={{width:'100%',height:35,margin:"10px auto 20px auto"}}>
                        <WingBlank>
                        <p style={{float:'left',fontSize:20,color: '#535252',lineHeight:'35px',marginRight:'15px'}}>验&nbsp;证&nbsp;码</p>
                        <div style={{float:'left',backgroundColor:'#F1F3F4',borderRadius:35,width:'45%',height:35,margin:"0 auto"}}>
                            <span className="iconfont icon-verify-fill" style={{paddingLeft:'3%',color:'#B3B3B3'}}></span>
                            <input id="code" autoComplete="off" type='text' placeholder='验证码' style={{backgroundColor:'#F1F3F4',borderRadius:10,width:'50%',height:35,marginLeft:10}} />
                        </div>
                        <div style={{float:'right'}}>
                        <div id="box" onClick={()=>this.code()}>点击获取</div>
                            <WhiteSpace/>
                            <span id='changes' onClick={()=>this.code()}>看不清？请点击刷新</span>
                        </div>
                        </WingBlank>
                    </div>
                    <div>
                        <span style={{fontSize:'14px',color:'red'}}>
                            {this.state.warningcode}
                        </span>
                    </div>
                    <div style={{margin:'20% auto 0 auto',width:150,height:40}}>
                        <button onClick={() => this.addItem()}  style={{border:'none',backgroundColor:'#FC3554',fontSize:25,textAlign:'center',width:150,height:40,borderRadius:15,color:'white',fontWeight:'lighter'}}>注册</button>
                    </div>
                </div>
            </div>
        )
    }
}
