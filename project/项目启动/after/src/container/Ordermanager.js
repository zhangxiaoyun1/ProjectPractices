import React, { Component } from 'react'

export default class Ordermanager extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
        let url = `http://49.235.251.57:8002/api/trademanagermessage/`;
        fetch(url, { "method": 'get' })
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    data: res.data,
                    length:res.data.length
                })
            })
    }
    find=()=>{
        var mph=document.getElementById('find').value;
        let url =`http://49.235.251.57:8002/api/trademanagermessage/${mph}`;
        fetch(url, { method: 'get' })
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    data: res.data
                })
            })
    }
    del=(key)=>{
        let url =`http://49.235.251.57:8002/api/deltrademanagermessage/${key}`;
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
            <div style={{padding:'10px'}}>
                <div style={{ borderBottom: '1px solid #e0e0e0', padding: '10px' }}>
                    <p style={{ color: '#707070', fontWeight: '500', fontSize: '15px' }}>订单管理</p>
                    <p style={{ fontWeight: '600', marginLeft: '10px' }}>订单列表</p>
                </div>
                <div style={{ height: '60px', backgroundColor: '#e0e0e0', marginTop: '10px' }}>
                    <p style={{ lineHeight: '60px', marginLeft: '20px', fontWeight: '600' }}>搜索条件</p>
                    <img src={require('../images/搜索.png')} alt="" style={{ float: 'right', marginRight: '30px', width: '20px', marginTop: '-55px' }} />
                </div>
                <div style={{ padding: '20px' }}>
                    <input type="text" name="" id="find" placeholder='  输入订单编号' style={{ height: '35px', width: '200px', border: '1px solid #e0e0e0', borderRadius: '5px', marginRight:'40px'}} />
                    <button onClick={()=>{this.find()}} style={{ height: '35px', width: '100px', backgroundColor: 'red', borderRadius: '5px', border: '0', float: 'right', color: '#fff' }}>查找</button>
                </div>
                <div style={{ height: '60px', backgroundColor: '#e0e0e0', marginTop: '10px' }}>
                    <p style={{ lineHeight: '60px', marginLeft: '20px', fontWeight: '600' }}>订单信息</p>
                    <a href="#" style={{ float: 'right', marginRight: '30px', marginTop: '-55px'}} >打印表格</a>
                </div>
                <div style={{ padding: '10px', overflow: "scroll", width: "100%", height: '660px' }}>
                    <table>
                        <thead>
                            <tr>
                                <td><b>订单编号</b></td>
                                <td><b>租客</b></td>
                                <td><b>联系方式</b></td>
                                <td><b>地址</b></td>
                                <td><b>实付金额</b></td>
                                <td><b>建立时间</b></td>
                                <td><b>租期</b></td>
                                <td><b>操作</b></td>
                                <td><b></b></td>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((item, index) => {
                                    return <tr key={item.tradeid} className='tds'>
                                        <td>{item.tradeid}</td>
                                        <td>{item.realname}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <div style={{overflow:'hidden',height:'50px',width:'100%'}}>
                                                <p>{item.address}</p>
                                            </div>
                                        </td>
                                        <td>{item.price}</td>
                                        <td>{item.pushtime.slice(0,10)}</td>
                                        <td>{item.longtime}</td>
                                        <td className='tool'>
                                            <button onClick={()=>this.del(item.tradeid)}>删除</button>
                                        </td>
                                        <td></td>
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
