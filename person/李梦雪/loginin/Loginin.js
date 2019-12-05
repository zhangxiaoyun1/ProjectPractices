import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom';
import { List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import './loginin.css'



export default class Loginin extends Component {
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
                        <form action='/' method='POST'>
                            <span> 昵 称 ：</span>
                            <input name='nickName' type='text' placeholder='请输入您的昵称' style={{backgroundColor:'antiquewhite',borderRadius:10,width:'40%',height:35,marginLeft:25}} />
                            <WhiteSpace/>
                            <span> 密 码 ：</span>
                            <input name='password' type='password' placeholder='请输入您的密码' style={{backgroundColor:'antiquewhite',borderRadius:10,width:'40%',height:35,marginLeft:26}}/>
                            <WhiteSpace/>
                            <span>确认密码：</span>
                            <input name='password2' type='password' placeholder='请再次输入您的密码' style={{backgroundColor:'antiquewhite',borderRadius:10,width:'40%',height:35}}/>
                            <WhiteSpace/>
                            <span>手机号：</span>
                            <input name='phone' type='number' placeholder='请输入您的手机号' style={{backgroundColor:'antiquewhite',borderRadius:10,width:'40%',height:35,marginLeft:19}}/>              
                            <button type='submit' style={{float:'right',height:35}}>获取验证码</button>
                            <WhiteSpace/>
                            <span>验证码：</span>
                            <input name='code' type='text' placeholder='请输入验证码' style={{backgroundColor:'antiquewhite',borderRadius:10,width:'40%',height:35,marginLeft:19}} />
                            <WhiteSpace/>
                            <WhiteSpace />
                            <WhiteSpace />
                            <WhiteSpace />
                            <WhiteSpace />
                            <WhiteSpace />
                            <WhiteSpace />
                            <WhiteSpace />
                            <Link to='/login'><button type='submit' className='button' style={{backgroundColor:'#ff9645',fontSize:25,textAlign:'center',width:150,height:40,borderRadius:10,color:'white',marginLeft:'30%'}}>注册</button></Link>
                        </form>
                    </WingBlank>
               </div>
            </div>
        )
    }
}
