import React, { Component } from 'react'
import './set.css'
import { WingBlank, Flex,Modal } from 'antd-mobile';
import {Link} from 'react-router-dom'

const alert = Modal.alert;
export default class Set extends Component {
    /**
     * 退出登录
     */
    exitLogin=()=>{
        if(JSON.parse(localStorage.getItem('key'))===null){
            window.location.href="http://localhost:3000/#/appTaber"
        }else{
            alert("退出成功!")
            localStorage.setItem('key',JSON.stringify({"iname":'用户名',"realname":null}))
            //window.location.href="http://localhost:3000/#/appTaber"
        } 
    }
    render() {
        return (
            <div>
                <div className='set_nav'>
                    <Link to='/appTaber'><div style={{ fontSize: 26, color: 'white', lineHeight: '50px', marginLeft: '30%' }} className='iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu--copy'></div></Link>
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
                        <div className="exit_login">
                            <button onClick={()=>this.exitLogin()}>退出登录</button>
                        </div>
                    </WingBlank>
                </div>
            </div>
        )
    }
}
