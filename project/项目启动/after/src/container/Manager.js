import React, { Component } from 'react'

export default class Manager extends Component {
    constructor() {
        super();
        this.state = {
            mn: '',
            mp: '',
            mph:'',
            data: [],
            length:0
        }
        let url = `http://49.235.251.57:8002/api/manager`;
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
        var i=0;
        for(;i<this.state.data.length;i++){
            if(this.state.data[i].phone==mph){
            let url =`http://49.235.251.57:8002/api/manager/${mph}`;
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
    add=()=>{
        var manager=document.getElementById('manager').value;
        var phone=document.getElementById('phone').value;
        var pwd=document.getElementById('pwd').value;
        var len=this.state.length+1;
        if(manager!==''&&phone!==''&&pwd!==''&&len!==''){
            var body={
                        managerid:len,
                        managername:manager,
                        managerpwd:pwd,
                        phone:phone
                    }
        let url =`http://49.235.251.57:8002/api/manager/add`;
        fetch(url,{"method": "post",
                    "body":JSON.stringify(body)
            })
            .then((res) => res.json())
            .then((res) => {
                alert('添加成功！');
                this.setState({
                    data: res.data
                })
            })
        }else{
            alert('添加失败！');
        }  
    }
    del=(key)=>{
        let url =`http://49.235.251.57:8002/api/delmanager/${key}`;
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
                    <p style={{ color: '#707070', fontWeight: '500', fontSize: '15px' }}>管理员</p>
                    <p style={{ fontWeight: '600', marginLeft: '10px' }}>管理员信息</p>
                </div>
                <div style={{ height: '60px', backgroundColor: '#e0e0e0',marginTop:'10px'}}>
                    <p style={{ lineHeight: '60px', marginLeft: '20px', fontWeight: '600' }}>搜索条件</p>
                    <img src={require('../images/搜索.png')} alt="" style={{ float: 'right', marginRight: '30px', width: '20px', marginTop: '-55px' }} />
                </div>
                <div style={{ padding: '20px',marginTop:'10px' }}>
                    <input type="text" name="" id="find" placeholder='  输入手机号查找' style={{ height: '35px', width: '200px', border: '1px solid #e0e0e0', borderRadius: '5px' }} />
                    <button onClick={()=>this.find()} style={{ height: '35px', width: '100px', backgroundColor: 'red', borderRadius: '5px', border: '0', float: 'right', color: '#fff' }}>查找</button>
                </div>
                <div style={{ height: '60px', backgroundColor: '#e0e0e0',marginTop:'10px'}}>
                    <p style={{ lineHeight: '60px', marginLeft: '20px', fontWeight: '600' }}>添加</p>
                    <img src={require('../images/添加.png')} alt="" style={{ float: 'right', marginRight: '30px', width: '20px', marginTop: '-55px' }} />
                </div>
                <div style={{ padding: '20px',marginTop:'10px' }}>
                    <input type="text" name="" id="manager" placeholder=' 添加管理员名字' style={{ height: '35px', width: '200px', border: '1px solid #e0e0e0', borderRadius: '5px' }} />
                    <input type="text" name="" id="phone" placeholder=' 添加手机号' style={{ height: '35px', width: '200px', border: '1px solid #e0e0e0', borderRadius: '5px',marginLeft:'10px' }} />
                    <input type="text" name="" id="pwd" placeholder=' 添加密码' style={{ height: '35px', width: '200px', border: '1px solid #e0e0e0', borderRadius: '5px',marginLeft:'10px' }} />
                    <button onClick={()=>this.add()} style={{ height: '35px', width: '100px', backgroundColor: 'red', borderRadius: '5px', border: '0', float: 'right', color: '#fff' }}>确认添加</button>
                </div>
                <div style={{ height: '60px', backgroundColor: '#e0e0e0',marginTop:'10px'}}>
                    <p style={{ lineHeight: '60px', marginLeft: '20px', fontWeight: '600' }}>管理员信息</p>
                    <img src={require('../images/info.png')} alt="" style={{ float: 'right', marginRight: '30px', width: '20px', marginTop: '-55px' }} />
                </div>
                <div style={{ padding: '10px', overflow: "scroll", width: "100%", height: '500px' }}>
                    <table>
                        <thead>
                            <tr>
                                <td><b>编号</b></td>
                                <td><b>管理员姓名</b></td>
                                <td><b>头像</b></td>
                                <td><b>手机号</b></td>
                                <td><b>操作</b></td>
                                <td><b></b></td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((item, index) => {
                                    return <tr key={item.managerid} className='tds'>
                                        <td>{item.managerid}</td>
                                        <td>{item.managername}</td>
                                        <td><img src={require('../images/头像.png')} alt="" style={{height:'80%'}}/></td>
                                        <td>{item.phone}</td>
                                        <td className='tool'>
                                            <button onClick={()=>this.del(item.managerid)}>删除</button>
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
