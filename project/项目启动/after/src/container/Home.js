import React, { Component } from 'react'
import '../index.css'
export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
        let url = `http://49.235.251.57:8002/api/user`;
        fetch(url, { "method": 'get' })
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    data: res.data,
                })
            })
    }
    find=()=>{
        var mph=document.getElementById('find').value;
        var i=0;
        for(;i<this.state.data.length;i++){
            if(this.state.data[i].phone==mph){
                let url =`http://49.235.251.57:8002/api/user/${mph}`;
                fetch(url, { method: 'get' })
                .then((res) => res.json())
                .then((res) => {
                    this.setState({
                        data: res.data
                    })
                })
                break;
            }
        }
        if(i==this.state.data.length){
            alert('查询无此内容');
            document.getElementById('find').value='';
        }
    }
    del=(key)=>{
        let url =`http://49.235.251.57:8002/api/deluser/${key}`;
            fetch(url, { method: 'get' })
            .then((res) => res.json())
            .then((res) => {
                alert('删除成功！');
                this.setState({
                    data: res.data
                })
            })
    }
    render() {
        return (
            <div style={{ padding: '10px' }}>
                <div style={{ borderBottom: '1px solid #e0e0e0', padding: '10px' }}>
                    <p style={{ color: '#707070', fontWeight: '500', fontSize: '15px' }}>房主管理</p>
                    <p style={{ fontWeight: '600', marginLeft: '10px' }}>房主信息</p>
                </div>
                <div style={{ height: '60px', backgroundColor: '#e0e0e0', marginTop: '10px' }}>
                    <p style={{ lineHeight: '60px', marginLeft: '20px', fontWeight: '600' }}>搜索条件</p>
                    <img src={require('../images/搜索.png')} alt="" style={{ float: 'right', marginRight: '30px', width: '20px', marginTop: '-55px' }} />
                </div>
                <div style={{ padding: '20px' }}>
                    <input type="text" name="" id="find" placeholder='  输入手机号查找' style={{ height: '35px', width: '200px', border: '1px solid #e0e0e0', borderRadius: '5px' }} />
                    <button onClick={()=>this.find()} style={{ height: '35px', width: '100px', backgroundColor: 'red', borderRadius: '5px', border: '0', float: 'right', color: '#fff' }}>查找</button>
                </div>
                <div style={{ height: '60px', backgroundColor: '#e0e0e0', marginTop: '10px' }}>
                    <p style={{ lineHeight: '60px', marginLeft: '20px', fontWeight: '600' }}>房主信息</p>
                    <img src={require('../images/info.png')} alt="" style={{ float: 'right', marginRight: '30px', width: '20px', marginTop: '-55px' }} />
                </div>
                <div style={{ padding: '10px', overflow: "scroll", width: "100%", height: '650px' }}>
                    <table>
                        <thead>
                            <tr>
                                <td><b>用户头像</b></td>
                                <td><b>昵称</b></td>
                                <td><b>用户名</b></td>
                                <td><b>性别</b></td>
                                <td><b>手机号</b></td>
                                <td><b>身份证号</b></td>
                                <td><b>注册时间</b></td>
                                <td><b>操作</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((item, index) => {
                                    if(item.ishome==true){
                                        return <tr key={item.userid}>
                                        <td><img src={require('../images/头像.png')} alt="" style={{height:'80%'}}/></td>
                                        <td>{item.iname}</td>
                                        <td>{item.realname}</td>
                                        <td>{item.sex}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.id}</td>
                                        <td>{item.settime.slice(0,10)}</td>
                                        <td className='tool'><button onClick={() => this.del(item.userid)}>删除</button></td>
                                    </tr>
                                    }
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
