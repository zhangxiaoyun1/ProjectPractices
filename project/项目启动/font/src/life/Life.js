import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './life.css'

  
export default class Life extends Component {
    render() {
        return (
            <div >
                <div style={{display:'flex',textAlign:'center',background: 'linear-gradient(to right,#F55E7E, #F47B87, #F58B7F)',lineHeight:2}}>
                    <Link to='/appTaber'>
                        <img src={require('./images/return.png')} style={{width:"30px",height:"30px",marginTop:"30%"}}/>
                    </Link>
                    <span style={{margin:'0 auto',fontSize:25,color:'white'}}>
                        生活服务
                    </span>
               </div>
               <div style={{display:'flex'}}>
                   <img src={require('./images/lifehead.jpg')} style={{width:'100%',height:'60%'}}/>
               </div>
               <div>
                    <ul>
                        <li className='life_li' >
                            <div className='life_div' style={{backgroundColor:'#39b7ac'}}>
                                <img src={require('./images/xuzu.png')} className='life_img'/>
                            </div>
                            
                            <p className='life_p'>续租</p>
                        </li>
                        <li className='life_li'>
                            <div className='life_div' style={{backgroundColor:'#38b7ac'}}>
                                <img src={require('./images/zhangdan.png')} className='life_img'/>
                            </div>
                            
                            <p className='life_p'>账单</p>
                        </li>
                        <li className='life_li'>
                            <div className='life_div' style={{backgroundColor:'#00c300'}}>
                                <img src={require('./images/money.png')} className='life_img'/>
                            </div>
                            
                            <p className='life_p'>生活缴费</p>
                        </li>
                    </ul>
                    <br/>
                    <ul>
                        <li className='life_li'>
                            <div className='life_div' style={{backgroundColor:'#e2716d'}}>
                                <img src={require('./images/weixiu.png')} className='life_img'/>
                            </div>
                            
                            <p className='life_p'>维修</p>
                        </li>
                        <li className='life_li'>
                            <div className='life_div' style={{backgroundColor:'#f2bf40'}}>
                                <img src={require('./images/tuifang.png')} className='life_img'/>
                            </div>
                            
                            <p className='life_p' >退房</p>
                        </li>
                        <li className='life_li'>
                            <div className='life_div' style={{backgroundColor:'#398dc9'}}>
                                <img src={require('./images/zhuanzu.png')} className='life_img'/>
                            </div>
                            
                            <p className='life_p' >转租</p>
                        </li>
                    </ul>
                    <br/>
                    <ul>
                        <li className='life_li'>
                            <div className='life_div' style={{backgroundColor:'#398dc9'}}>
                                <img src={require('./images/zhineng.png')} className='life_img'/>
                            </div>
                            
                            <p className='life_p'>智能设备</p>
                        </li>

                        <li className='life_li'>
                            <div className='life_div' style={{backgroundColor:'#ea6c6d'}}>
                                <img src={require('./images/kefu.png')} className='life_img'/>
                            </div>
                            
                            <p className='life_p'>客服中心</p>
                        </li>
                        <li className='life_li'>
                            <div className='life_div' style={{backgroundColor:'#07ba07'}}>
                                <img src={require('./images/shop.png')} className='life_img' />
                            </div>
                            
                            <p className='life_p'>购物中心</p>
                        </li>
                    </ul>
                    
               </div>
            </div>
        )
    }
}
