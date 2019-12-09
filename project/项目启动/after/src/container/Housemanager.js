import React, { Component } from 'react'
import '../index.css'
export default class Housemanager extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
        let url = `http://49.235.251.57:8002/api/homemessage`;
        fetch(url, { method: 'get' })
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    data: res.data
                })
            })
    }
    sousuo=()=>{
        var rn=document.getElementById('realname').value;
        let url =`http://49.235.251.57:8002/api/homemessage/${rn}`;
        fetch(url, { method: 'get' })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                this.setState({
                    data: res.data
                })
            })
    }
    render() {
        return (
            <div style={{padding:'10px'}}>
                <div style={{ borderBottom: '1px solid #e0e0e0', padding: '10px' }}>
                    <p style={{ color: '#707070', fontWeight: '500', fontSize: '15px' }}>房源信息管理</p>
                    <p style={{ fontWeight: '600', marginLeft: '10px' }}>房源信息</p>
                </div>
                <div style={{ height: '60px', backgroundColor: '#e0e0e0',marginTop:'10px'}}>
                    <p style={{ lineHeight: '60px', marginLeft: '20px', fontWeight: '600' }}>搜索条件</p>
                    <img src={require('../images/搜索.png')} alt="" style={{ float: 'right', marginRight: '30px', width: '20px', marginTop: '-55px' }} />
                </div>
                <div style={{padding:'50px'}}>
                    <input type="text" name="" id="realname" placeholder='   请输入房主名' style={{ height: '35px', width: '200px', border: '1px solid #e0e0e0', borderRadius: '5px' }}/>
                    <button onClick={()=>this.sousuo()} style={{ height: '35px', width: '100px', backgroundColor: 'red', borderRadius: '5px', border: '0', float: 'right', color: '#fff' }}>搜索</button>
                </div>
                <div style={{ height: '60px', backgroundColor: '#e0e0e0'}}>
                    <p style={{ lineHeight: '60px', marginLeft: '20px', fontWeight: '600'}}>房源信息</p>
                    <img src={require('../images/信息.png')} alt="" style={{ float: 'right', marginRight: '30px', width: '20px', marginTop: '-55px' }} />
                </div>
                <div style={{ padding: '10px', overflow: "scroll", width: "100%", height: '600px' }}>
                    <table>
                        <thead>
                            <tr>
                                <td><b>编号</b></td>
                                <td><b>房主姓名</b></td>
                                <td><b>图片</b></td>
                                <td><b>房源描述</b></td>
                                <td><b>发布日期</b></td>
                                <td><b>价格</b></td>
                                <td><b>手机号</b></td>
                                <td><b></b></td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((item, index) => {
                                    return <tr key={item.homeid} className='tds'>
                                        <td>{item.homeid}</td>
                                        <td>{item.realname}</td>
                                        <td><img src={require('../images/头像.png')} alt="" style={{height:'80%'}}/></td>
                                        <td>
                                            <div style={{overflow:'hidden',height:'50px',width:'100%',fontSize:'10px'}}>
                                                <p>{item.address}</p>
                                            </div>
                                        </td>
                                        <td>{item.pushtime.slice(0,10)}</td>
                                        
                                        <td>{item.price}</td>
                                        <td>{item.phone}</td>
                                        <td className='tool'>
                                        </td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
