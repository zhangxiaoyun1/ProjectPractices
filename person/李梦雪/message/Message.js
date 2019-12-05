import React, { Component } from 'react';
import {WhiteSpace, WingBlank} from 'antd-mobile';
import {Link} from 'react-router-dom';
import './message.css'

export default class Message extends Component {
    constructor() {
        super();
        this.state={
            date: new Date().toLocaleTimeString()
        }
            
    }
    render() {
        return (
            <div style={{width:'100%'}}>
                <div style={{display:'flex',textAlign:'center',backgroundColor:'#ff9645',lineHeight:2}}>
                    <span style={{margin:'0 auto',fontSize:25,color:'white'}}>
                        消息
                    </span>
               </div>
               <div>
                   <div className='message_div1'>
                        <div className='message_div2'>
                            <img className='message_img1' src={require('./images/headimg1.jpg')}/>
                        </div>
                        <div className='message_div3'>
                            <div className='message_host'>金牌房主</div>
                            <div className='message_content'>金牌房主：您好，我是金牌房主,gfyuebdhjvsnu比较发达v繁华的v进行无法回避 师傅i阿保机欸发布的v就i二把刀 合并的VS潮汐和那得看额好吧的v可产生的v尽快农民数据的v朝南</div>
                        </div>
                        <div className='message_div4'>
                            <div>{this.state.date}</div>
                        </div>
                   </div>
               </div>
               <div>
                   <div className='message_div1'>
                        <div className='message_div2'>
                            <img className='message_img1' src={require('./images/headimg1.jpg')}/>
                        </div>
                        <div className='message_div3'>
                            <div className='message_host'>金牌房主</div>
                            <div className='message_content'>金牌房主：您好，我是金牌房主,gfyuebdhjvsnu比较发达v繁华的v进行无法回避 师傅i阿保机欸发布的v就i二把刀 合并的VS潮汐和那得看额好吧的v可产生的v尽快农民数据的v朝南</div>
                        </div>
                        <div className='message_div4'>
                            <div>{this.state.date}</div>
                        </div>
                   </div>
               </div>
               <div>
                   <div className='message_div1'>
                        <div className='message_div2'>
                            <img className='message_img1' src={require('./images/headimg1.jpg')}/>
                        </div>
                        <div className='message_div3'>
                            <div className='message_host'>金牌房主</div>
                            <div className='message_content'>金牌房主：您好，我是金牌房主,gfyuebdhjvsnu比较发达v繁华的v进行无法回避 师傅i阿保机欸发布的v就i二把刀 合并的VS潮汐和那得看额好吧的v可产生的v尽快农民数据的v朝南</div>
                        </div>
                        <div className='message_div4'>
                            <div>{this.state.date}</div>
                        </div>
                   </div>
               </div>
               <div>
                   <div className='message_div1'>
                        <div className='message_div2'>
                            <img className='message_img1' src={require('./images/headimg1.jpg')}/>
                        </div>
                        <div className='message_div3'>
                            <div className='message_host'>金牌房主</div>
                            <div className='message_content'>金牌房主：您好，我是金牌房主,gfyuebdhjvsnu比较发达v繁华的v进行无法回避 师傅i阿保机欸发布的v就i二把刀 合并的VS潮汐和那得看额好吧的v可产生的v尽快农民数据的v朝南</div>
                        </div>
                        <div className='message_div4'>
                            <div>{this.state.date}</div>
                        </div>
                   </div>
               </div>
               <div>
                   <div className='message_div1'>
                        <div className='message_div2'>
                            <img className='message_img1' src={require('./images/headimg1.jpg')}/>
                        </div>
                        <div className='message_div3'>
                            <div className='message_host'>金牌房主</div>
                            <div className='message_content'>金牌房主：您好，我是金牌房主,gfyuebdhjvsnu比较发达v繁华的v进行无法回避 师傅i阿保机欸发布的v就i二把刀 合并的VS潮汐和那得看额好吧的v可产生的v尽快农民数据的v朝南</div>
                        </div>
                        <div className='message_div4'>
                            <div>{this.state.date}</div>
                        </div>
                   </div>
               </div>
               <div>
                   <div className='message_div1'>
                        <div className='message_div2'>
                            <img className='message_img1' src={require('./images/headimg1.jpg')}/>
                        </div>
                        <div className='message_div3'>
                            <div className='message_host'>金牌房主</div>
                            <div className='message_content'>金牌房主：您好，我是金牌房主,gfyuebdhjvsnu比较发达v繁华的v进行无法回避 师傅i阿保机欸发布的v就i二把刀 合并的VS潮汐和那得看额好吧的v可产生的v尽快农民数据的v朝南</div>
                        </div>
                        <div className='message_div4'>
                            <div>{this.state.date}</div>
                        </div>
                   </div>
               </div>
               <div>
                   <div className='message_div1'>
                        <div className='message_div2'>
                            <img className='message_img1' src={require('./images/headimg1.jpg')}/>
                        </div>
                        <div className='message_div3'>
                            <div className='message_host'>金牌房主</div>
                            <div className='message_content'>金牌房主：您好，我是金牌房主,gfyuebdhjvsnu比较发达v繁华的v进行无法回避 师傅i阿保机欸发布的v就i二把刀 合并的VS潮汐和那得看额好吧的v可产生的v尽快农民数据的v朝南</div>
                        </div>
                        <div className='message_div4'>
                            <div>{this.state.date}</div>
                        </div>
                   </div>
               </div>
               <div>
                   <div className='message_div1'>
                        <div className='message_div2'>
                            <img className='message_img1' src={require('./images/headimg1.jpg')}/>
                        </div>
                        <div className='message_div3'>
                            <div className='message_host'>金牌房主</div>
                            <div className='message_content'>金牌房主：您好，我是金牌房主,gfyuebdhjvsnu比较发达v繁华的v进行无法回避 师傅i阿保机欸发布的v就i二把刀 合并的VS潮汐和那得看额好吧的v可产生的v尽快农民数据的v朝南</div>
                        </div>
                        <div className='message_div4'>
                            <div>{this.state.date}</div>
                        </div>
                   </div>
               </div>
               <div>
                   <div className='message_div1'>
                        <div className='message_div2'>
                            <img className='message_img1' src={require('./images/headimg1.jpg')}/>
                        </div>
                        <div className='message_div3'>
                            <div className='message_host'>金牌房主</div>
                            <div className='message_content'>金牌房主：您好，我是金牌房主,gfyuebdhjvsnu比较发达v繁华的v进行无法回避 师傅i阿保机欸发布的v就i二把刀 合并的VS潮汐和那得看额好吧的v可产生的v尽快农民数据的v朝南</div>
                        </div>
                        <div className='message_div4'>
                            <div>{this.state.date}</div>
                        </div>
                   </div>
               </div>
               <div>
                   <div className='message_div1'>
                        <div className='message_div2'>
                            <img className='message_img1' src={require('./images/headimg1.jpg')}/>
                        </div>
                        <div className='message_div3'>
                            <div className='message_host'>金牌房主</div>
                            <div className='message_content'>金牌房主：您好，我是金牌房主,gfyuebdhjvsnu比较发达v繁华的v进行无法回避 师傅i阿保机欸发布的v就i二把刀 合并的VS潮汐和那得看额好吧的v可产生的v尽快农民数据的v朝南</div>
                        </div>
                        <div className='message_div4'>
                            <div>{this.state.date}</div>
                        </div>
                   </div>
               </div>
            </div>
        )
    }
}
