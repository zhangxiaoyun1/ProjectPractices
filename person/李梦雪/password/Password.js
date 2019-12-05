import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom';
import { List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile';

export default class Password extends Component {
    render() {
        return (
            <div style={{height:'100%',width:'100%',position:'fixed'}}>
                <div style={{display:'flex',textAlign:'center',backgroundColor:'#ff9645',lineHeight:2}}>
                    <Link to='/login'>
                        <img src={require('./images/return.png')} style={{width:30,height:30,paddingTop:10}}/>
                    </Link>
                    <span style={{margin:'0 auto',fontSize:25,color:'white'}}>
                        找回密码
                    </span>
               </div>
               <List>
                    <WhiteSpace />
                    <WhiteSpace />
                    <WingBlank>
                        <WhiteSpace />
                        <div style={{width:'100%',height:35,overflow:'hidden',borderBottom:'1px solid #f8f8f8'}}>
                            <span style={{fontSize:17,width:85}}>手 机 号 :</span>
                            <input style={{border:'none',marginLeft:20,width:110}}  placeholder='请输入手机号' type='tel'/>
                            <button style={{float:'right'}}>获取验证码</button>
                        </div>
                    </WingBlank>
                    <InputItem
                        name="phone"
                        type="number"
                        placeholder="请输入验证码"
                    > 验 证 码 ：
                    </InputItem>
                    <InputItem
                        name="newpassword"
                        type="password"
                        placeholder="请输入新密码"
                    > 新 密 码 ：
                    </InputItem>
               </List>
               <WhiteSpace />
               <WhiteSpace />
               <WhiteSpace />
               <WhiteSpace />
               <WhiteSpace />
               <WhiteSpace />
               <WhiteSpace />
               <div style={{textAlign:'center',}}>
                    <WhiteSpace />
                    <WingBlank>
                        <Link>
                            <Button style={{backgroundColor:'#ff9645',fontSize:22,color:'white'}} >提交</Button>
                        </Link>
                    </WingBlank>
                </div>
            </div>
        )
    }
}
