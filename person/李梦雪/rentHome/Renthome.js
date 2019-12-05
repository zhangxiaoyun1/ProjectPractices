import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Flex, WhiteSpace, WingBlank } from 'antd-mobile';
import './rentHome.css';

export default class Renthome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: '位置',
            value2:'租金',
            value3:'户型',
            value4:'方式'
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            value1: event.target.value1,
            value2: event.target.value2,
            value3: event.target.value3,
            value4: event.target.value4,
        });
    }
    render() {
        return (
            <div>
                <div style={{display:'flex',textAlign:'center',backgroundColor:'#ff9645',lineHeight:2}}>
                    <Link to='/appTaber'>
                        <img src={require('./images/return.png')} style={{width:30,height:30,paddingTop:10}}/>
                    </Link>
                    <input type='search' placeholder='你想住哪儿' style={{width:'60%',height:'30px',backgroundColor:'#f1f1f1',borderRadius:30,margin:'0 auto',marginTop:'2.8%',color:'#979797'}}/>
                    <div>
                        <img src={require('./images/position.png')} style={{width:30,height:30,marginTop:'30%',marginLeft:'-15%'}}/>
                    </div>
               </div>
               <WingBlank>
               <div style={{display:'flex'}}>
                    <ul>
                        <li className='rentHome_li1'>
                            <select value={this.state.value1} onChange={this.handleChange}>
                                <option value='位置'>位置</option>
                                <option value='裕华区'>裕华区</option>
                                <option value='桥西区'>桥西区</option>
                                <option value='红旗大街'>红旗大街</option>

                            </select>
                        </li>
                        <li className='rentHome_li1'>
                            <select value={this.state.value2} onChange={this.handleChange}>
                                <option value='租金'>租金</option>
                                <option value='2000/月'>2000/月</option>
                                <option value='2600/月'>2600/月</option>
                                <option value='3300'>3300/月</option>

                            </select>
                        </li>
                        <li className='rentHome_li1'>
                            <select value={this.state.value3} onChange={this.handleChange}>
                                <option value='户型'>户型</option>
                                <option value='一室一厅'>一室一厅</option>
                                <option value='两室一厅'>两室一厅</option>
                                <option value='三室两厅'>三室两厅</option>

                            </select>
                        </li>
                        <li className='rentHome_li1'>
                        <select value={this.state.value4} onChange={this.handleChange}>
                                <option value='方式'>方式</option>
                                <option value='半年租'>半年租</option>
                                <option value='一年租'>一年租</option>
                                <option value='两年租'>两年租</option>

                            </select>
                        </li>
                    </ul>
                </div>
                </WingBlank>
                <WingBlank>
                    <Link to='/detail'>
                <div className='rentHome_box1'>
                    <div className='rentHome_box2' >
                        <img className='rentHome_img1' src={require('./images/1.jpg')} />
                    </div>
                    <div className='rentHome_box4'>
                        <div className="rentHome_address">北沙滩 南沙滩 天和人家 附近 中和家园 精装 次卧</div>
                        <div className='rentHome_span2'>南沙滩 | 北沙滩7号院</div>    
                        <div className='rentHome_message'>
                            <div className='rentHome_message1'>合租</div>
                            <div className='rentHome_message2'>精装修</div>
                            <div className='rentHome_message2'>近地铁</div>
                        </div>
                        <div className='rentHome_box5'>
                            <span className='rentHome_price'>2600元/月</span>    
                        </div>
                    </div>
                </div> 
                </Link>
                </WingBlank>     
                <WingBlank>
                <Link to='/detail'>
                <div className='rentHome_box1'>
                    <div className='rentHome_box2' >
                        <img className='rentHome_img1' src={require('./images/1.jpg')} />
                    </div>
                    <div className='rentHome_box4'>
                        <div className="rentHome_address">北沙滩 南沙滩 天和人家 附近 中和家园 精装 次卧</div>
                        <div className='rentHome_span2'>南沙滩 | 北沙滩7号院</div>    
                        <div className='rentHome_message'>
                            <div className='rentHome_message1'>合租</div>
                            <div className='rentHome_message2'>精装修</div>
                            <div className='rentHome_message2'>近地铁</div>
                        </div>
                        <div className='rentHome_box5'>
                            <span className='rentHome_price'>2600元/月</span>    
                        </div>
                    </div>
                </div> 
                </Link>
                </WingBlank>  
                <WingBlank>
                <Link to='/detail'>
                <div className='rentHome_box1'>
                    <div className='rentHome_box2' >
                        <img className='rentHome_img1' src={require('./images/1.jpg')} />
                    </div>
                    <div className='rentHome_box4'>
                        <div className="rentHome_address">北沙滩 南沙滩 天和人家 附近 中和家园 精装 次卧</div>
                        <div className='rentHome_span2'>南沙滩 | 北沙滩7号院</div>    
                        <div className='rentHome_message'>
                            <div className='rentHome_message1'>合租</div>
                            <div className='rentHome_message2'>精装修</div>
                            <div className='rentHome_message2'>近地铁</div>
                        </div>
                        <div className='rentHome_box5'>
                            <span className='rentHome_price'>2600元/月</span>    
                        </div>
                    </div>
                </div> 
                </Link>
                </WingBlank> 
                <WingBlank>
                <Link to='/detail'>
                <div className='rentHome_box1'>
                    <div className='rentHome_box2' >
                        <img className='rentHome_img1' src={require('./images/1.jpg')} />
                    </div>
                    <div className='rentHome_box4'>
                        <div className="rentHome_address">北沙滩 南沙滩 天和人家 附近 中和家园 精装 次卧</div>
                        <div className='rentHome_span2'>南沙滩 | 北沙滩7号院</div>    
                        <div className='rentHome_message'>
                            <div className='rentHome_message1'>合租</div>
                            <div className='rentHome_message2'>精装修</div>
                            <div className='rentHome_message2'>近地铁</div>
                        </div>
                        <div className='rentHome_box5'>
                            <span className='rentHome_price'>2600元/月</span>    
                        </div>
                    </div>
                </div> 
                </Link>
                </WingBlank> 
                <WingBlank>
                <Link to='/detail'>
                <div className='rentHome_box1'>
                    <div className='rentHome_box2' >
                        <img className='rentHome_img1' src={require('./images/1.jpg')} />
                    </div>
                    <div className='rentHome_box4'>
                        <div className="rentHome_address">北沙滩 南沙滩 天和人家 附近 中和家园 精装 次卧</div>
                        <div className='rentHome_span2'>南沙滩 | 北沙滩7号院</div>    
                        <div className='rentHome_message'>
                            <div className='rentHome_message1'>合租</div>
                            <div className='rentHome_message2'>精装修</div>
                            <div className='rentHome_message2'>近地铁</div>
                        </div>
                        <div className='rentHome_box5'>
                            <span className='rentHome_price'>2600元/月</span>    
                        </div>
                    </div>
                </div> 
                </Link>
                </WingBlank> 
                <WingBlank>
                <Link to='/detail'>
                <div className='rentHome_box1'>
                    <div className='rentHome_box2' >
                        <img className='rentHome_img1' src={require('./images/1.jpg')} />
                    </div>
                    <div className='rentHome_box4'>
                        <div className="rentHome_address">北沙滩 南沙滩 天和人家 附近 中和家园 精装 次卧</div>
                        <div className='rentHome_span2'>南沙滩 | 北沙滩7号院</div>    
                        <div className='rentHome_message'>
                            <div className='rentHome_message1'>合租</div>
                            <div className='rentHome_message2'>精装修</div>
                            <div className='rentHome_message2'>近地铁</div>
                        </div>
                        <div className='rentHome_box5'>
                            <span className='rentHome_price'>2600元/月</span>    
                        </div>
                    </div>
                </div> 
                </Link>
                </WingBlank> 
                
            </div>
        )
    }
}
