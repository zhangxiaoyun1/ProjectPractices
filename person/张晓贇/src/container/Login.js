import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../index.css'
export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            mn: '',
            mp: '',
            data: []
        }
    }
    login = () => {
        this.state.mn='';
        this.state.mp='';
        var mn = document.getElementById('ManagerName').value;
        var mp = document.getElementById('ManagerPW').value;
        let url = `http://49.235.251.57:8002/api/manager`;
        fetch(url, { method: 'get' })
            .then((res) => res.json())
            .then((res) => {
                var i = 0;
                for (; i < res.data.length; i++) {
                    if (mn === res.data[i].managername) {
                        if (mp === res.data[i].managerpwd) {
                            window.location.hash= "/content/analysis/";
                            break;
                        } else {
                            this.state.mp = '密码错误';
                            break;
                        }
                    }
                }
                if (i == res.data.length) {
                        this.state.mn = '账户姓名不存在'
                    }
                this.setState({
                    data: res.data
                })
            })
    }
    render() {
        return (
            <div style={{ height: '100%', width: '100%' }}>
                <div style={{ textAlign: 'center', width: '50%', margin: '50px auto' }}>
                    <img src={require('../images/15.png')} alt="" style={{ height: '200px', width: '300px' }} />
                    <h2 style={{ marginTop: '20px' }}>易·家管理平台</h2>
                    <div style={{ marginTop: '30px' ,textAlign:'left',marginLeft:'180px',marginRight:'40px'}}>
                        <input type="text" placeholder=' 管理员' className='linput' disabled style={{ backgroundColor: '#fff' }} />
                        <input type="text" placeholder=' 账户名' className='linput' style={{ marginTop: '10px' }} id='ManagerName' />
                        <span style={{float:'right',marginTop:'20px',color:'red'}}>
                            {this.state.mn}
                        </span>
                        <input type="password" placeholder=' 账户密码' className='linput' style={{ marginTop: '10px' }} id='ManagerPW' />
                        <span style={{float:'right',marginTop:'20px',color:'red'}}>
                            {this.state.mp}
                        </span>
                        <br />
                        <div onClick={() => this.login()} style={{ color: '#fff' }}>
                            <button className='linput' style={{ margin: '10px auto', backgroundColor: '#F55D54', border: '0', fontSize: '18px', lineHeight: '40px' }}>登录</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
