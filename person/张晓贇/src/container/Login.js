import React, { Component } from 'react'
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
                            window.location.hash= "/content";
                            break;
                        } else {
                            this.state.mp = '密码错误,请重新输入';
                            alert(this.state.mp);
                            break;
                        }
                    }
                }
                if (i == res.data.length) {
                        this.state.mn = '账户姓名不存在，请重新输入';
                        alert(this.state.mn);
                    }
                this.setState({
                    data: res.data
                })
            })
    }
    render() {
        return (
            <div style={{ height: '100%', width: '100%' }}>
                <div style={{ textAlign: 'center', width: '80%', margin: '50px auto'}}>
                    <img src={require('../images/15.png')} alt="" style={{ height: '200px', width: '300px' }} />
                    <h2 style={{ marginTop: '30px' }}>易·家管理平台</h2>
                    <div style={{margin:'30px auto',width:'55%'}}>
                        <input type="text" placeholder=' 管理员' className='linput' disabled style={{ backgroundColor: '#fff' ,margin:'10px auto'}} />
                        <br/>
                        <input type="text" placeholder=' 账户名' className='linput' style={{ marginTop: '10px' ,margin:'10px auto'}} id='ManagerName' />
                        <br/>
                        <input type="password" placeholder=' 账户密码' className='linput' style={{ marginTop: '10px' ,margin:'10px auto'}} id='ManagerPW' />
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
