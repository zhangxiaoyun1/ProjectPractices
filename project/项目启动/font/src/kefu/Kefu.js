import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Modal, WhiteSpace, WingBlank, } from 'antd-mobile';
import './kefu.css'
// import './alert'
const alert = Modal.alert;


export default class Kefu extends Component {
    
    tan1 = ()=>{
        alert('忘记手机登录密码','如您忘记手机登录密码，请点击登录页面的忘记密码，通过输入账号，重新修改密码',)
    }
    tan2 = ()=>{
        alert('修改手机号码','如果您需要修改手机号码，可以通过点击我的，选择账号管理修改手机号')
    }
    tan3 = ()=>{
        alert('修改账号密码','如果您需要修改账号密码，可以通过点击我的，选择账号管理修改账号密码')
    }
    tan4 = ()=>{
        alert('发布房源的要求','必须要进行实名认证，为确保用户的安全和房源信息的准确，必须实名认证后才能发布房源信息')
    }
    tan5 = ()=>{
        alert('房源的审核时间','房源发布后，审核时间预计在1-2个工作日，若急需确认可致电客服热线：10205020')
    }
    tan6 = ()=>{
        alert("预约线下看房","在房源详细信息页面，有户主的联系方式，可直接致电户主，与户主取得联系")
    }
    tan7 = ()=>{
        alert("租约未确认","详情可联系客服热线：10205020")
        
    }
    tan8 = ()=>{
        alert("续租","您可至易·家APP底部的“生活”页面中点击“续租”提交续租申请，待房东同意后您会收到续租确认单，待您确认并支付完成即可完成续租哦！")
        
    }
    tan9 = ()=>{
        alert("退房","如果您要退房，和房东协商清楚费用后，可至易·家APP底部的“生活”页面中点击“退房”，提交退房申请并验证支付宝信息，待房东确认后，即可完成退房")
        
    }
    tan10 = ()=>{
        alert("房内设施损坏","亲，您可至易·家APP，点开底部的“生活”页面，点击“维修”发起在线报修，房东就会收到您的报修工单进行售后处理~")
        
    }
    tan11 = ()=>{
        alert("转租","建议您在签约的时候跟房东确认清楚，附加条款约定清楚是否可以转租以及转租后的结算方式等内容，以免后期产生歧义。")
        
    }
    tan12 = ()=>{
        alert("联系房东","您可在房源的详细信息页面的底部，得到房主的联系电话")
        
    }

    render() {
        return (
            <div>
                <div style={{ display: 'flex', textAlign: 'center', background:  'linear-gradient(to right,#F55E7E, #F47B87, #F58B7F)', lineHeight: 2 }}>
                    <Link to='/appTaber'>
                        <img src={require('./images/return.png')} style={{ width: 30, height: 30, paddingTop: 10 }} />
                    </Link>
                    <span style={{ margin: '0 auto', fontSize: 25, color: 'white' }}>
                        智能助手
                    </span>
                </div>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WingBlank>
                    <div style={{width:'100%',height:'580px',backgroundColor:'#fdfafa',borderRadius:20}}>    
                        <ul style={{paddingTop:10}} className='kefu_ul'>
                            <li style={{textAlign:'center',fontSize:22,color:'#fd3456'}}>热点问题</li>
                            <WingBlank><hr style={{marginTop:15}}/></WingBlank>
                            <li className='kefu_li' onClick={this.tan1}>    
                                <WingBlank>忘记手机登录密码怎么办</WingBlank>
                            </li>
                            <WingBlank><hr/></WingBlank>
                            <li className='kefu_li' onClick={this.tan2}>    
                                <WingBlank>如何修改手机号码</WingBlank>
                            </li>
                            <WingBlank><hr/></WingBlank>
                            <li className='kefu_li' onClick={this.tan3}>    
                                <WingBlank>如何修改账号密码</WingBlank>
                            </li>
                            <WingBlank><hr/></WingBlank>
                            <li className='kefu_li' onClick={this.tan4}>    
                                <WingBlank>未实名认证能否发布房源信息</WingBlank>
                            </li>
                            <WingBlank><hr/></WingBlank>
                            <li className='kefu_li' onClick={this.tan5}>    
                                <WingBlank>发布房源后，审核需要多久</WingBlank>
                            </li>
                            <WingBlank><hr/></WingBlank>
                            <li className='kefu_li' onClick={this.tan6}>    
                                <WingBlank>如何预约线下看房</WingBlank>
                            </li>
                            <WingBlank><hr/></WingBlank>
                            <li className='kefu_li' onClick={this.tan7}>    
                                <WingBlank>显示租约未确认怎么办</WingBlank>
                            </li>
                            <WingBlank><hr/></WingBlank>
                            <li className='kefu_li' onClick={this.tan8}>    
                                <WingBlank>我想续租怎么办</WingBlank>
                            </li>
                            <WingBlank><hr/></WingBlank>
                            <li className='kefu_li' onClick={this.tan9}>    
                                <WingBlank>我要退房怎么办</WingBlank>
                            </li>
                            <WingBlank><hr/></WingBlank>
                            <li className='kefu_li' onClick={this.tan10}>    
                                <WingBlank>房源内设施坏了怎么办</WingBlank>
                            </li>
                            <WingBlank><hr/></WingBlank>
                            <li className='kefu_li' onClick={this.tan11}>    
                                <WingBlank>以后能转租吗</WingBlank>
                            </li>
                            <WingBlank><hr/></WingBlank>
                            <li className='kefu_li' onClick={this.tan12}>    
                                <WingBlank>如何联系房东</WingBlank>
                            </li>
                            <WingBlank><hr/></WingBlank>

                        </ul>
                    </div>
                </WingBlank>
            </div>
        )
    }
}
