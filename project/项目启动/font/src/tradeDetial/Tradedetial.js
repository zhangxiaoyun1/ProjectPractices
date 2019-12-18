import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Modal,ActionSheet,WhiteSpace, WingBlank, Button, Toast} from 'antd-mobile';
import './tradeDetial.css'

const alert=Modal.alert;
export default class Tradedetial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '请输入您的租期',
            longtime:0,
            data:[],
            tradeid:(new Date()).valueOf(),
            price:0
        };
        this.price=0;
    }
    componentDidMount(){
        var homeid = this.props.match.params.homeid;
        let url=`http://49.235.251.57:8000/api/houses/`+homeid;
        fetch(url,{
            method:"GET", 
            headers: new Headers({
                'Content-Type': 'application/json'
                })
        })
        .then((res)=>res.json())
        .then((res)=>{
            var imagedata;
            if (res.msg[0].homeimage.indexOf(',') >= 0) {
                imagedata = (res.msg[0].homeimage).split(',');
            } else {
                imagedata = [];
                imagedata[0] = res.msg[0].homeimage;
            }
            res.msg[0].homeimage=imagedata[0];
            this.setState({
                data:res.msg,
                price: (res.msg[0].price).slice(0,-3)            
            })
            this.price=(res.msg[0].price).slice(0,-3)  
        })
    }

    toTrade=()=>{
        var userid=JSON.parse(localStorage.getItem('key')).userid;
        var adress=this.state.data[0].address;
        var rentername=document.getElementById('rentername').value;//租客姓名
        var renterphone=document.getElementById('renterphone').value;//租客手机号
        var checkin=document.getElementById('checkin').value;//入住时间
        var longtime=document.getElementById('longtime').value;//租期
        var price=document.getElementById('money').value;//租期
        console.log(this.state.tradeid);
        if(rentername!==''&&renterphone!==''&&checkin!==''&&longtime!==''&&price!==''){
            let url=`http://49.235.251.57:8000/api/trade`;
            let data={
                userid:userid,
                tradeid:this.state.tradeid,
                adress:adress,
                rentername:rentername,
                renterphone:renterphone,
                checkin:checkin,
                longtime:longtime,
                price:price
            }
            //将对象转换为字符串传递
            var send=JSON.stringify(data);
            console.log(send);
            //发送post请求
            fetch(url,{
                method: 'POST', 
                body: send, 
                headers: new Headers({
                    'Content-Type': 'application/json'
                    })
            })
            .then((res)=>res.json())
            .then((res)=>{
                //接收响应信息，如果为true,则跳转登录页面
                console.log(this.state.tradeid)
                if(res.ok===true){
                    window.location.href=`http://localhost:3000/#/pay/`+`${this.state.tradeid}`
                    console.log(res.msg);
                }else{
                    window.location.href="http://localhost:3000/#/loginin"
                }
            }).catch(function(err){
                console.log(err);
            })
        }else{
            alert("请把信息填写完整");
        }
    }
    handleChange=(e)=>{
        this.setState({
            longtime:e.target.value,
            price:e.target.value * this.price
        });
    }
    render() {
        return (
            <div>
                <div style={{display:'flex',textAlign:'center',background: 'linear-gradient(to right,#F55E7E, #F47B87, #F58B7F)',lineHeight:2}}>
                    <Link to='/appTaber'>
                        <img src={require('./images/return.png')} style={{width:30,height:30,paddingTop:10}}/>
                    </Link>
                    <span style={{margin:'0 auto',fontSize:25,color:'white'}}>
                        订单详情
                    </span>
               </div>
               <hr/>        
               <div>
                    {
                        this.state.data.map((item, idx) => (
                                <WingBlank key={idx}>
                                    <div style={{ width: '100%', border: '1px solid #f1f1f1', marginTop: '2%', height: '120px' }}>
                                            <div style={{width: '42%', height: '100px',  float: 'left' }}>
                                                <img style={{ width: '100%', height: '100%', marginTop: '6%' }} src={`http://49.235.251.57:8000/api/housess/`+item.homeimage} alt='' />
                                            </div>
                                        <div style={{ float: 'left', width: '55%', height: '120px' }}>
                                            <div className='home_p'>
                                                <span>{item.city}</span>
                                                <span style={{ padding: '0 3px' }}>|</span>
                                                <span>{item.address}</span>
                                            </div>
                                            <div style={{ fontSize: '0.9em', marginLeft: '2%', color: 'gray', marginTop: '3%' }}>
                                                <span>{item.type}</span>
                                                <span style={{ padding: '0 3px' }}>|</span>
                                                <span>{item.hometype}</span>
                                            </div>
                                            <div style={{ fontSize: '0.8em', height: '20px', marginLeft: '2%', color: 'gray', marginTop: '3%' }}>
                                                <p className="message3">朝向:{item.face}</p>
                                                <p className="message4">楼层:{item.floor}</p>
                                                <p className="message4">电梯:{item.lift}</p>
                                            </div>

                                            <div style={{ height: '30px', display: 'flex', margintTop: '10px' }}>
                                                <span style={{ fontSize: '1.1em', color: 'red', marginLeft: '2%', marginTop: '5%', float: 'left' }}>{item.price}</span>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </WingBlank>
                        ))
                    }
                </div>
               <hr/>

               {/* <div style={{textAlign:'center'}}>
                   <div>
                      <ul style={{marginTop:'10%',display:'inline-flex'}}>
                        <li className='trade_li1' > 姓 名 ： </li>
                        <input id='rentername' name='' className='trade_input1' type='text' placeholder='请输入您的姓名'/>
                      </ul> 
                      <br/>
                      <ul className='trade_ul1'>
                        <li className='trade_li1'> 手 机 号 ： </li>
                        <input id='renterphone' name='' type='text' placeholder='请输入您的手机号' className='trade_input1'/>
                      </ul>
                      <br/>
                      <ul className='trade_ul1'>
                        <li className='trade_li1'>入住时间：</li>
                        <input id='checkin' name='' type='text' placeholder='请输入您的入住时间' className='trade_input1'/>
                      </ul>
                      <br/>
                      <ul className='trade_ul1'>
                        <li className='trade_li1'> 租 期 ： </li>
                        <input id='longtime' onChange={this.handleChange} value={this.state.longtime} name='longtime' type='text' placeholder='请输入您的租期' className='trade_input1'/>
                      </ul>
                      <br/>
                      <ul className='trade_ul1'>
                        <li className='trade_li1'> 租  金： </li>
                        <input id='money' name='' type='text' placeholder='' className='trade_input1' value={`${this.state.longtime}`*`${this.price}`}/>
                      </ul>
                      <br/>
                      <ul style={{marginTop:'20%'}}>
                        <button onClick={()=>this.toTrade()} className='button' style={{backgroundColor:'#ff9645',fontSize:25,textAlign:'center',width:150,height:40,borderRadius:10,color:'white',}}>预定</button>
                      </ul>
                   </div>
               </div> */}
               <WhiteSpace />
                {/* 输入框 */}
                <div>
                    <WingBlank>
                        <div style={{width:'100%',height:35,margin:"10px auto 20px auto"}}>
                            <WingBlank>
                                <p style={{float:'left',fontSize:20,color: '#535252',lineHeight:'35px',marginRight:'15px'}}>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</p>
                                <div style={{float:'left',backgroundColor:'#F1F3F4',borderRadius:35,width:'60%',height:35,margin:"0 auto"}}>
                                    <input id='rentername' autoComplete="off" type='text' placeholder='请输入真实姓名' style={{backgroundColor:'#F1F3F4',borderRadius:35,width:'70%',height:35}} />
                                </div>
                            </WingBlank>
                        </div>
                        <div style={{width:'100%',height:35,margin:"10px auto 20px auto"}}>
                            <WingBlank>
                                <p style={{float:'left',fontSize:20,color: '#535252',lineHeight:'35px',marginRight:'15px'}}>手&nbsp;机&nbsp;&nbsp;号</p>
                                <div style={{float:'left',backgroundColor:'#F1F3F4',borderRadius:35,width:'60%',height:35,margin:"0 auto"}}>
                                    <input id='renterphone' autoComplete="off" type='text' placeholder='请输入手机号' style={{backgroundColor:'#F1F3F4',borderRadius:35,width:'80%',height:35}} />
                                </div>
                            </WingBlank>
                        </div>
                        <div style={{width:'100%',height:35,margin:"10px auto 20px auto"}}>
                            <WingBlank>
                                <p style={{float:'left',fontSize:20,color: '#535252',lineHeight:'35px',marginRight:'15px'}}>入住时间</p>
                                <div style={{float:'left',backgroundColor:'#F1F3F4',borderRadius:35,width:'60%',height:35,margin:"0 auto"}}>
                                    <input id='checkin' autoComplete="off" type='text' placeholder='请输入入住时间' style={{backgroundColor:'#F1F3F4',borderRadius:35,width:'80%',height:35}} />
                                </div>
                            </WingBlank>
                        </div>
                        <div style={{width:'100%',height:35,margin:"10px auto 20px auto"}}>
                            <WingBlank>
                                <p style={{float:'left',fontSize:20,color: '#535252',lineHeight:'35px',marginRight:'15px'}}>租&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期</p>
                                <div style={{float:'left',backgroundColor:'#F1F3F4',borderRadius:35,width:'60%',height:35,margin:"0 auto"}}>
                                    <input id='longtime' onChange={this.handleChange} value={this.state.longtime} autoComplete="off" type='text' placeholder='请输入租期' style={{backgroundColor:'#F1F3F4',borderRadius:35,width:'70%',height:35}} />
                                    <span style={{paddingRight:'3%',color:'#B3B3B3'}}>月</span>
                                </div>
                            </WingBlank>
                        </div>
                        <div style={{width:'100%',height:35,margin:"10px auto 20px auto"}}>
                            <WingBlank>
                                <p style={{float:'left',fontSize:20,color: '#535252',lineHeight:'35px',marginRight:'15px'}}>租&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;金</p>
                                <div style={{float:'left',backgroundColor:'#F1F3F4',borderRadius:35,width:'60%',height:35,margin:"0 auto"}}>
                                    <input id="money" autoComplete="off" type='text' placeholder='0' style={{backgroundColor:'#F1F3F4',borderRadius:35,width:'70%',height:35}} value={this.state.price}/>
                                </div>
                            </WingBlank>
                        </div>
                        <div style={{margin:'20% auto 0 auto',width:150,height:40}}>
                            <button onClick={()=>this.toTrade()}  style={{border:'none',backgroundColor:'#FC3554',fontSize:25,textAlign:'center',width:150,height:40,borderRadius:15,color:'white',fontWeight:'lighter'}}>预定</button>
                        </div>
                    </WingBlank>
                    
                </div>
            </div>
        )
    }
}
