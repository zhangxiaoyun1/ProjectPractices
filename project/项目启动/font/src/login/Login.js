import React, { Component } from 'react';
import './login.css'
import { Route, Link } from 'react-router-dom';
import { List, InputItem, WhiteSpace, Button, WingBlank, Modal } from 'antd-mobile';
import Password from '../password/Password';

const alert = Modal.alert;
export default class Login extends Component {
    constructor(props) {
        super(props);
    }
    /**
     * 实现登录
     */
    getToLogin = () => {
        let checked = document.getElementById('loginButton').checked;
        if (checked === false) {
            alert('请同意条款规则!');
        }
        else {
            let phone = document.getElementById('phone').value;
            let password = document.getElementById('password').value;
            let data = {
                phone: phone,
                password: password
            };
            //将传输的对象转换为字符串传输
            let send = JSON.stringify(data);
            let url = `http://49.235.251.57:8000/api/user/login`;
            fetch(url, {
                method: "POST",
                body: send,
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
                .then((res) => res.json())
                .then((res) => {
                    if (res.ok === true) {
                        localStorage.setItem('key', JSON.stringify(res.msg))
                        window.location.href = "http://localhost:3000/#/appTaber"
                    } else {
                        alert("用户名或者密码错误")
                    }
                }).catch(function (err) {
                    console.log(err);
                })
        }
    }
    /**
     * 去注册
     */
    getToReg = () => {
        window.location.href = "http://localhost:3000/#/loginin"
    }
    /**
     * 忘记密码
     */
    forget = () => {
        window.location.href = "http://localhost:3000/#/password"
    }
    render() {
        return (
            <div style={{ height: '100%', width: '100%', position: 'fixed' }}>
                {/* 头 */}
                <div style={{ display: 'flex', textAlign: 'center', background: 'linear-gradient(to right,#F55E7E, #F47B87, #F58B7F)', lineHeight: 2 }}>
                    <Link to='/appTaber'>
                        <img src={require('./images/return.png')} style={{ width: 30, height: 30, paddingTop: 10 }} />
                    </Link>
                    <span style={{ margin: '0 auto', fontSize: 25, color: 'white' }}>
                        登录
                        </span>
                </div>
                {/* <div className="login_top">
                </div> */}
                <WhiteSpace />
                <WhiteSpace />
                {/* 输入框 */}
                <div>
                    <div style={{ backgroundColor: '#F1F3F4', borderRadius: 35, width: '70%', height: 35, margin: "0 auto" }}>
                        <span className="iconfont icon-dianhua" style={{ paddingLeft: '3%', color: '#B3B3B3' }}></span>
                        <input id="phone" autoComplete="off" type='text' placeholder='手机号' style={{ backgroundColor: '#F1F3F4', borderRadius: 10, width: '70%', height: 35, marginLeft: 25 }} />
                    </div>
                    <WhiteSpace />
                    <div style={{ backgroundColor: '#F1F3F4', borderRadius: 35, width: '70%', height: 35, margin: "0 auto" }}>
                        <span className="iconfont icon-mima" style={{ paddingLeft: '3%', color: '#B3B3B3' }}></span>
                        <input name='password' id="password" autoComplete="off" type='password' placeholder='密码' style={{ backgroundColor: '#F1F3F4', borderRadius: 10, width: '70%', height: 35, marginLeft: 26 }} />
                    </div>
                    <WhiteSpace />
                </div>
                <WhiteSpace />
                {/* 注册，忘记密码 */}
                <div className="regforget">
                    <button onClick={() => this.forget()}>忘记密码</button>
                    <button onClick={() => this.getToReg()}>去注册</button>
                </div>
               

                {/* 协议 */}
                <div className="deal">
                    <input id='loginButton' type="checkbox" />登录/注册即同意《易·家用户服务协议》
                </div>
                 {/* 登录按钮 */}
                <div className="loginn">
                    <button onClick={() => this.getToLogin()}>登录</button>
                </div>
                <div className="login_third">
                    <p style={{ color: "#807D7D" }}>——————第三方登录——————</p>
                    <WhiteSpace />
                    <WhiteSpace />
                    <WhiteSpace />
                    <div>
                        <i className="iconfont icon-qq1"></i>
                        <i className="iconfont icon-weixin"></i>
                        <i className="iconfont icon-weibo"></i>
                    </div>
                </div>
            </div>
        )
    }
}
