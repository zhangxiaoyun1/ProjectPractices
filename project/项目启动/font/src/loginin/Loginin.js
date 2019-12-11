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
            warningphone:''
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
        }
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
                            <input id="iname" type='text' placeholder='请输入您的昵称' style={{backgroundColor:'antiquewhite',borderRadius:10,width:'40%',height:35,marginLeft:25}} />
                            <span style={{fontSize:'14px',color:'red'}}>
                                {this.state.warningname}
                            </span>
                            <WhiteSpace/>
                            <span> 密 码 ：</span>
                            <input name='password' id="password"  type='password' placeholder='请输入您的密码' style={{backgroundColor:'antiquewhite',borderRadius:10,width:'40%',height:35,marginLeft:26}}/>
                            <span style={{fontSize:'14px',color:'red'}}>
                                {this.state.warningpwd}
                            </span>
                            <WhiteSpace/>
                            <span>确认密码：</span>
                            <input  name='password2' id="password2" type='password' placeholder='请再次输入您的密码' style={{backgroundColor:'antiquewhite',borderRadius:10,width:'40%',height:35}}/>
                            <span style={{fontSize:'14px',color:'red'}}>
                                {this.state.warningpwd2}
                            </span>
                            <WhiteSpace/>
                            <span>手机号：</span>
                            <input  name="phone" id="phone" type='text' placeholder='请输入您的手机号' style={{backgroundColor:'antiquewhite',borderRadius:10,width:'40%',height:35,marginLeft:19}}/>              
                            <span style={{fontSize:'14px',color:'red'}}>
                                {this.state.warningphone}
                            </span>
                            <button style={{float:'right',height:35}}>获取验证码</button>
                            <WhiteSpace/>
                            <span>验证码：</span>
                            <input  name='code' type='text' placeholder='请输入验证码' style={{backgroundColor:'antiquewhite',borderRadius:10,width:'40%',height:35,marginLeft:19}} />
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
