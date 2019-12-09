import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {WhiteSpace, WingBlank} from 'antd-mobile';
import './tradeDetial.css'
export default class Tradedetial extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '请输入您的租期'};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
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
                        <input name=''className='trade_input1' type='text' placeholder='请输入您的姓名' />
                      </ul> 
                      <br/>
                      <ul className='trade_ul1'>
                        <li className='trade_li1'> 手 机 号 ： </li>
                        <input name='' type='text' placeholder='请输入您的手机号'className='trade_input1'/>
                      </ul>
                      <br/>
                      <ul className='trade_ul1'>
                        <li className='trade_li1'>入住时间：</li>
                        <input name='' type='text' placeholder='请输入您的入住时间'className='trade_input1'/>
                      </ul>
                      <br/>
                      <ul className='trade_ul1'>
                        <li className='trade_li1'> 租 期 ： </li>
                        <input name='' type='text' placeholder='请输入您的租期' className='trade_input1'/>
                      </ul>
                      <br/>
                      <ul style={{marginTop:'20%'}}>
                        <button type='submit' className='button' style={{backgroundColor:'#ff9645',fontSize:25,textAlign:'center',width:150,height:40,borderRadius:10,color:'white',}}>预定</button>
                      </ul>
                      
                   </form>
                   
               </div>
            </div>
        )
    }
}
