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
        this.setState({
            mn:''
        })
        this.setState({
            mp:''
        })
        var mn = document.getElementById('ManagerName').value;
        var mp = document.getElementById('ManagerPW').value;
        if (mn == '') {
            this.setState({
                mn:'账户名不能为空'
            })
        } else {
            let url = `http://49.235.251.57:8002/api/manager`;
            fetch(url, { method: 'get' })
                .then((res) => res.json())
                .then((res) => {
                    var i = 0;
                    for (; i < res.data.length; i++) {
                        if (mn === res.data[i].managername) {
                            if (mp === res.data[i].managerpwd) {
                                window.location.hash = "/content";
                                break;
                            } else if(mp ==''){
                                this.setState({
                                    mp:'密码不能为空'
                                });
                                break;
                            }else {
                                this.setState({
                                    mp:'密码错误,请重新输入'
                                });
                                break;
                            }
                        }
                    }
                    if (i == res.data.length) {
                        this.setState({
                            mn:'账户姓名不存在，请重新输入'
                        });
                    }
                    this.setState({
                        data: res.data
                    })
                })
        }

    }
    render() {
        return (
            <div style={{ height: '100%', width: '100%' }}>
                <div style={{ textAlign: 'center', width: '80%', margin: '50px auto' }}>
                    <img src={require('../images/15.png')} alt="" style={{ height: '200px', width: '300px' }} />
                    <h2 style={{ marginTop: '30px' }}>易·家管理平台</h2>
                    <div style={{ margin: '30px auto', width: '35%' }}>
                        <input type="text" placeholder=' 管理员' className='linput' disabled style={{ backgroundColor: '#fff', margin: '10px auto' }} />
                        <br />
                        <input type="text" placeholder=' 账户名' className='linput' style={{ margin: '10px auto' }} id='ManagerName' />
                        <br />
                        <span style={{ fontSize: '10px', color: 'red', height: '10px', float: 'left', marginTop: '-5px', marginLeft: '5%' }}>{this.state.mn}</span>
                        <br />
                        <input type="password" placeholder=' 账户密码' className='linput' style={{ margin: '-25px auto' }} id='ManagerPW' />
                        <br />
                        <span style={{ fontSize: '10px', color: 'red', height: '10px', float: 'left', marginTop: '10px', marginLeft: '5%' }}>{this.state.mp}</span>
                        <br />
                        <div onClick={() => this.login()} style={{ color: '#fff', marginTop: '10px' }}>
                            <button className='linput' style={{ margin: '0 auto', backgroundColor: '#F55D54', border: '0', fontSize: '18px', lineHeight: '40px' }}>登录</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
