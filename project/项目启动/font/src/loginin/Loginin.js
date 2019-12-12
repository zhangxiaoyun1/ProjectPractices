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
                warningname:'请输入用户名'
            })
        }else if(password === ''){
            this.setState({
                warningpwd:'请输入密码'
            })
        }else if(password !== password2){ 
            this.setState({
                warningpwd2:'两次密码不一致'
            })
        }else if(phone.length!==11){
            this.setState({
                warningphone:'手机号格式错误'
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
            fetch('http://localhost:3001/api/user/reg',{
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
                <div style={{display:'flex',textAlign:'center',backgroundColor:'#ff9645',lineHeight:2}}>
                    <Link >
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
                    <WingBlank>
                        <form>
                            <span> 昵 称 ：</span>
                            <input id="iname" type='text' autocomplete="off" placeholder='请输入您的昵称' style={{backgroundColor:'antiquewhite',borderRadius:10,width:'40%',height:35,marginLeft:25}} />
                            <span style={{fontSize:'14px',color:'red'}}>
                                {this.state.warningname}
                            </span>
                            <WhiteSpace/>
                            <span> 密 码 ：</span>
                            <input name='password' autocomplete="off" id="password"  type='password' placeholder='请输入您的密码' style={{backgroundColor:'antiquewhite',borderRadius:10,width:'40%',height:35,marginLeft:26}}/>
                            <span style={{fontSize:'14px',color:'red'}}>
                                {this.state.warningpwd}
                            </span>
                            <WhiteSpace/>
                            <span>确认密码：</span>
                            <input  name='password2' autocomplete="off" id="password2" type='password' placeholder='请再次输入您的密码' style={{backgroundColor:'antiquewhite',borderRadius:10,width:'40%',height:35}}/>
                            <span style={{fontSize:'14px',color:'red'}}>
                                {this.state.warningpwd2}
                            </span>
                            <WhiteSpace/>
                            <span>手机号：</span>
                            <input  name="phone" autocomplete="off" id="phone" type='text' placeholder='请输入您的手机号' style={{backgroundColor:'antiquewhite',borderRadius:10,width:'40%',height:35,marginLeft:19}}/>              
                            <span style={{fontSize:'14px',color:'red'}}>
                                {this.state.warningphone}
                            </span>
                            <WhiteSpace/>
                            {/* 验证码 */}
                            <div style={{width:'100%',margin:'0 auto'}}>
                                <span>验证码：</span>
                                <input  id="code" autocomplete="off" name='code' type='text' placeholder='字母区分大小写' style={{backgroundColor:'antiquewhite',borderRadius:10,width:'40%',height:35,marginLeft:19}} />
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
                            </div>
                            <WhiteSpace/>
                            <WhiteSpace />
                            <WhiteSpace />
                            <WhiteSpace />
                            <WhiteSpace />
                            <WhiteSpace />
                            <WhiteSpace />
                            <WhiteSpace />
                           <button type='button'  className='button' onClick={() => this.addItem()} style={{backgroundColor:'#ff9645',fontSize:25,textAlign:'center',width:150,height:40,borderRadius:10,color:'white',marginLeft:'30%'}}>注册</button>
                        </form>
                    </WingBlank>
               </div>
            </div>
        )
    }
}
