import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {WhiteSpace, WingBlank} from 'antd-mobile';
import './tradeDetial.css'
export default class Tradedetial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address:'',
            price:'',
            realname:'请输入您的姓名',
            phone:'请输入您的手机号',
            checkin:'请输入您的入住时间',
            longtime:'请输入您的租期',
            apname:'',
            address:'',
            type:'',
            face:'',
            floor:'',
            lift:'',
            price:'',
            data:[]
        }; 
    }
    changeName = (e)=>{
        this.setState({
            realname:e.target.value
        })
        
    }
    changePhone = (e)=>{
        this.setState({
            phone:e.target.value
        })
       
    }
    changeCheckin = (e)=>{
        this.setState({
            checkin:e.target.value
        })
        
    }
    
    changeLongtime = (e)=>{
        this.setState({
            longtime:e.target.value
        })
        
    }
    componentDidMount() {
        fetch('http://localhost:3001/api/house')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                data:res.msg
            })
            console.log(this.state.data)
        })
    }

    push = ()=>{
        var price = '2000/月';
        var realname = this.state.realname;
        var phone = this.state.phone;
        var checkin = this.state.checkin;
        var longtime = this.state.longtime;
        var message = JSON.stringify({realname:realname,phone:phone,checkin:checkin,longtime:longtime,price:price})
        fetch('http://localhost:3001/api/trade',{
            method:'POST',
            body:message,
            headers:new Headers({'Content-Type':'application/json'})
   
        })
        
    }

    render() {
        return (
            <div>
                <div style={{display:'flex',textAlign:'center',backgroundColor:'#ff9645',lineHeight:2}}>
                    <Link to='/appTaber'>
                        <img src={require('./images/return.png')} style={{width:30,height:30,paddingTop:10}}/>
                    </Link>
                    <span style={{margin:'0 auto',fontSize:25,color:'white'}}>
                        订单详情
                    </span>
               </div>
               <hr/>
               <WingBlank>             
                   <div className='box1'>
                        <div className='box2' >
                            <img className='img1' src={require('./images/1.jpg')} />
                        </div>
                        <div className='box4'>
                            <div className="address">北沙滩 南沙滩 天和人家 附近 中和家园 精装 次卧</div>
                            <div className='span2'>南沙滩 | 北沙滩7号院</div>    
                            <div className='message'>
                                <div className='message1'>合租</div>
                                <div className='message2'>精装修</div>
                                <div className='message2'>近地铁</div>
                            </div>
                            <div className='box5'>
                                <span className='price'>2600元/月</span>    
                            </div>
                        </div>
                    </div>       
               </WingBlank>
               <hr/>

               <div style={{textAlign:'center'}}>
                   <form action='/' method='POST'>
                      <ul style={{marginTop:'10%',display:'inline-flex'}}>
                        <li className='trade_li1' > 姓 名 ： </li>
                        <input name='realname' onChange={this.changeName} className='trade_input1' type='text' value={this.state.realname} />
                      </ul> 
                      <br/>
                      <ul className='trade_ul1'>
                        <li className='trade_li1'> 手 机 号 ： </li>
                        <input name='phone' onChange={this.changePhone} type='text' value={this.state.phone} className='trade_input1'/>
                      </ul>
                      <br/>
                      <ul className='trade_ul1'>
                        <li className='trade_li1'>入住时间：</li>
                        <input name='pushtime' onChange={this.changeCheckin} type='text' value={this.state.checkin} className='trade_input1'/>
                      </ul>
                      <br/>
                      <ul className='trade_ul1'>
                        <li className='trade_li1'> 租 期 ： </li>
                        <input onChange={this.changeLongtime} name='longtime' type='text' value={this.state.longtime} className='trade_input1'/>
                      </ul>
                      <br/>
                      <ul style={{marginTop:'20%'}}>
                          
                        <Link to={'/pay/price='+2000+'&phone='+'15231157097'}>
                            <button type='button' onClick={this.push} className='button' style={{backgroundColor:'#ff9645',fontSize:25,textAlign:'center',width:150,height:40,borderRadius:10,color:'white',}}>支付</button>
                        </Link>
                      </ul>
                      
                   </form>
                   
               </div>
            </div>
        )
    }
}
