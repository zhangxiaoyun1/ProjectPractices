import React, { Component } from 'react';
import './login.css'
import {Route, Link} from 'react-router-dom';
import { List, InputItem, WhiteSpace, Button, WingBlank} from 'antd-mobile';
import Password from '../password/Password';

export default class Login extends Component {
    
    render() {
        return (
            <div style={{height:'100%',width:'100%',position:'fixed'}}>
               <div style={{display:'flex',textAlign:'center',backgroundColor:'#ff9645',lineHeight:2}}>
                    <Link to='/appTaber'>
                        <img src={require('./images/return.png')} style={{width:30,height:30,paddingTop:10}}/>
                    </Link>
                    <span style={{margin:'0 auto',fontSize:25,color:'white'}}>
                        登录
                    </span>
               </div>
                <WhiteSpace />
                <WhiteSpace />
                <div>
                    <List>
                        <InputItem
                            name="phone"
                            type="phone"
                            placeholder="186 1234 1234"
                            className='am-list-item am-input-label'
                        >手机号 :</InputItem>
                        <InputItem  
                            name="password"
                            type="password"
                            placeholder="****"
                        > 密 码 :</InputItem>  
                    </List>
                </div>
                <WhiteSpace />
                <WhiteSpace />
                <div style={{textAlign:'center',}}>
                    <WhiteSpace />
                    <WingBlank>
                        <Link to='/appTaber'>
                            <Button style={{backgroundColor:'#ff9645',fontSize:22,color:'white'}} >登录</Button>
                        </Link>
                    </WingBlank>
                </div>
                <WhiteSpace />
                <WhiteSpace />
                <div style={{textAlign:'right',}}>
                    <WingBlank>
                        <Link to='/password' >忘记密码?</Link>
                    </WingBlank>
                </div>
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <div style={{textAlign:'center',}}>
                    <p style={{fontSize:20,fontFamily:'黑体'}}>第三方登录</p>
                    <WhiteSpace />
                    <WhiteSpace />
                    <WhiteSpace />
                    <div style={{textAlign:'center'}}>
                        <Link>
                            <img src={require('./images/QQ.png')} style={{width:'10%',height:'10%'}}/>
                        </Link>
                        <Link>
                            <img src={require('./images/weixin.png')} style={{width:'10%',height:'10%',marginLeft:'10%'}}/>
                        </Link>
                        <Link>
                            <img src={require('./images/weibo.png')} style={{width:'10%',height:'10%',marginLeft:'10%'}}/>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
