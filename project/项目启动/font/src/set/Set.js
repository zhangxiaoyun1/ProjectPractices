import React, { Component } from 'react'
import './set.css'
import { WingBlank, Flex } from 'antd-mobile';
import {Link} from 'react-router-dom'

export default class Set extends Component {
    render() {
        return (
            <div>
                <div className='set_nav'>
                    <Link to='/my'><div style={{ fontSize: 26, color: 'white', lineHeight: '50px', marginLeft: '30%' }} className='iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu--copy'></div></Link>
                    <h2 className='set_nav_h2'>设置</h2>
                </div>
                <WingBlank>
                    <div style={{ width: '100%', height: '50px', marginTop: '5%', borderTop: '1px solid #f1f1f1', borderBottom: '1px solid #f1f1f1' }}>
                        <Flex>
                            <div className="set_div"></div>
                            <p style={{ fontSize: 20, lineHeight: '50px', color: '#5a5a5a', marginLeft: '4%' }}>账号管理</p>
                            <div className='set_div1'></div>
                        </Flex>
                    </div>
                </WingBlank>
                <WingBlank>
                    <div style={{ width: '100%', height: '50px', marginTop: '5%', borderTop: '1px solid #f1f1f1', borderBottom: '1px solid #f1f1f1' }}>
                        <Flex>
                            <div className="set_div2"></div>
                            <p style={{ fontSize: 20, lineHeight: '50px', color: '#5a5a5a', marginLeft: '4%' }}>账号安全</p>
                            <div className='set_div1'></div>
                        </Flex>
                    </div>
                </WingBlank>
                <WingBlank>
                    <div style={{ width: '100%', height: '50px', marginTop: '5%', borderTop: '1px solid #f1f1f1', borderBottom: '1px solid #f1f1f1' }}>
                        <Flex>
                            <div className="set_div3"></div>
                            <p style={{ fontSize: 20, lineHeight: '50px', color: '#5a5a5a', marginLeft: '4%' }}>消息管理</p>
                            <div className='set_div1'></div>
                        </Flex>
                    </div>
                </WingBlank>
                <WingBlank>
                    <div style={{ width: '100%', height: '50px', marginTop: '5%', borderTop: '1px solid #f1f1f1', borderBottom: '1px solid #f1f1f1' }}>
                        <Flex>
                            <div className="set_div4"></div>
                            <p style={{ fontSize: 20, lineHeight: '50px', color: '#5a5a5a', marginLeft: '4%' }}>清除缓存</p>
                            <div className='set_div1'></div>
                        </Flex>
                    </div>
                </WingBlank>
                <WingBlank>
                    <div style={{ width: '100%', height: '50px', marginTop: '5%', borderTop: '1px solid #f1f1f1', borderBottom: '1px solid #f1f1f1' }}>
                        <Flex>
                            <div className="set_div5"></div>
                            <p style={{ fontSize: 20, lineHeight: '50px', color: '#5a5a5a', marginLeft: '4%' }}>当前版本</p>
                            <div className='set_div1'></div>
                        </Flex>
                    </div>
                </WingBlank>
                <div>
                    <WingBlank>
                        <Link to='/appTaber'>
                        <button className='set_btn'>
                            <img style={{width:'35px',height:'35px',float:'left',marginLeft:'12%'}} src={`${require('./images/exit.png')}`} alt=''/>
                            <span style={{float:'left',color:'#ffffff',fontSize:20,marginTop:'4%',marginLeft:'2%'}}>退出登录</span>
                            </button>
                            </Link>
                    </WingBlank>
                </div>
            </div>
        )
    }
}
