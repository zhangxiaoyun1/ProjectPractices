import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { WingBlank, Flex } from 'antd-mobile';
import './my.css'


const PlaceHolder_my = ({ className = '', ...restProps }) => (
    <div className={`${className} my_placeholder`} {...restProps}>
        <span style={{ fontSize: 28, color: 'orange' }}>0</span>
        <span style={{ color: 'orange' }}>元</span>
    </div>
);
const PlaceHolder_my1 = ({ className = '', ...restProps }) => (
    <div className={`${className} my_placeholder`} {...restProps}>
        <span style={{ fontSize: 28, color: '#3388FF' }}>0</span>
        <span style={{ color: '#3388FF' }}>笔</span>
    </div>
);
const PlaceHolder_my2 = ({ className = '', ...restProps }) => (
    <div className={`${className} my_placeholder`} {...restProps}>
        <span style={{ fontSize: 28, color: 'green' }}>0</span>
        <span style={{ color: 'green' }}>张</span>
    </div>
);
const PlaceHolder_my3 = ({ className = '', ...restProps }) => (
    <div className={`${className} my_placeholder1`} {...restProps}>
        <span>我的余额</span>
    </div>
);
const PlaceHolder_my4 = ({ className = '', ...restProps }) => (
    <div className={`${className} my_placeholder1`} {...restProps}>
        <span>我的订单</span>
    </div>
);
const PlaceHolder_my5 = ({ className = '', ...restProps }) => (
    <div className={`${className} my_placeholder1`} {...restProps}>
        <span>优惠券</span>
    </div>
);
export default class My extends Component {
    constructor(props) {
        super(props);
        if (JSON.parse(localStorage.getItem('key')) === null) {
            this.state = {
                data: { "iname": '用户名', "realname": "未实名", "userimage": 'user.png' },
            }
        } else {
            if (JSON.parse(localStorage.getItem('key')).iname === '用户名') {
                this.state = {
                    data: { "iname": JSON.parse(localStorage.getItem('key')).iname, "realname": "未实名", "userimage": 'user.png' },
                }
            } else {
                if (JSON.parse(localStorage.getItem('key')).realname === null) {
                    this.state = {
                        data: { "iname": JSON.parse(localStorage.getItem('key')).iname, "realname": "未实名", "userimage": JSON.parse(localStorage.getItem('key')).userimage },
                    }
                } else {
                    this.state = {
                        data: { "iname": JSON.parse(localStorage.getItem('key')).iname, "realname": "已实名", "userimage": JSON.parse(localStorage.getItem('key')).userimage },
                    }
                }
            }

        }
    }
    /**
     * 去登陆
     */
    login = () => {
        window.location.href = "http://localhost:3000/#/login"
    }
    /**
    * 去注册
    */
    loginin = () => {
        window.location.href = "http://localhost:3000/#/loginin"
    }
    /**
    * 去实名认证
    */
    realName = () => {
        window.location.href = "http://localhost:3000/#/realName"
    }
    /**
    * 去设置
    */
    toSet = () => {
        window.location.href = "http://localhost:3000/#/set"
    }
    upimgs = () => {
        var imgs = document.getElementById('upimg').files[0];
        var data = {};
        data.file = '';
        data.userid = JSON.parse(localStorage.getItem('key')).userid;
        var reader = new FileReader();
        reader.readAsDataURL(imgs);
        reader.onload = function (e) {
            document.getElementById('imgs').src = e.target.result;
            data.file = e.target.result;
            //console.log(data.file);
            var send = JSON.stringify(data);
            console.log(data.file);
            fetch('http://49.235.251.57:8000/api/user/upimgs', {
                method: 'POST',
                body: send,
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
                .then((res) => res.json())
                .then((res) => {
                    if (res.ok === true) {
                        console.log(res.ok);
                    }
                }).catch(function (err) {
                    console.log(err);
                })
        }

    }
    render() {
        return (
            <div>
                <div style={{ display: 'flex', textAlign: 'center', backgroundColor: '#ff9645', lineHeight: 2 }}>
                    <span style={{ margin: '0 auto', fontSize: 25, color: 'white' }}>
                        我的
                    </span>
                </div>
                {/* 头像部分 */}

                <div className='my_banner'>
                    <WingBlank>

                        <div style={{ float: 'left', position: 'relative', width: '10%', height: '80px', marginTop: '5%' }}>
                            <img id='imgs' className='upimgs' src={'http://49.235.251.57:8000/api/user/' + this.state.data.userimage} alt="" />
                            <input onChange={this.upimgs} id='upimg' type="file" accept="image/*" className='upimg' />
                        </div>
                        <div style={{ float: 'left', width: '70%', height: '100%', marginTop: '-17%', marginLeft: '30%' }}>
                            <p style={{ color: 'gray', fontSize: '18px' }}>{this.state.data.iname}</p>
                            <div>
                                <div style={{ float: 'left', height: '25px', marginTop: '5%', border: '1px solid red', borderRadius: '10px', color: 'red', textAlign: 'center', lineHeight: '25px' }}>
                                    信誉良好
                                </div>
                                <div style={{ float: 'left', color: '#ff9645', height: '25px', fontSize: '14px', textAlign: 'center', lineHeight: '25px', borderRadius: '10px', border: '1px solid #ff9645', marginLeft: '5%', marginTop: '5%' }}>
                                    {this.state.data.realname}
                                </div>
                            </div>
                        </div>
                    </WingBlank>
                </div>
                <WingBlank>
                    <div>
                        <Flex>
                            <Flex.Item><PlaceHolder_my /></Flex.Item>
                            <Flex.Item><PlaceHolder_my1 /></Flex.Item>
                            <Flex.Item><PlaceHolder_my2 /></Flex.Item>
                        </Flex>
                        <Flex>
                            <Flex.Item><PlaceHolder_my3 /></Flex.Item>
                            <Flex.Item><PlaceHolder_my4 /></Flex.Item>
                            <Flex.Item><PlaceHolder_my5 /></Flex.Item>
                        </Flex>
                    </div>
                </WingBlank>
                <WingBlank>
                    <div style={{ width: '100%', height: '50px', marginTop: '5%', borderTop: '1px solid #f1f1f1', borderBottom: '1px solid #f1f1f1' }}>
                        <Flex>
                            <div className="my_div6"></div>
                            <button onClick={() => this.login()} style={{ background: 'none', border: 'none', fontSize: 20, lineHeight: '50px', color: '#5a5a5a', marginLeft: '4%' }}>登录</button>
                            <div className='my_div5'></div>
                        </Flex>
                    </div>
                </WingBlank>
                <WingBlank>
                    <div style={{ width: '100%', height: '50px', marginTop: '5%', borderTop: '1px solid #f1f1f1', borderBottom: '1px solid #f1f1f1' }}>
                        <Flex>
                            <div className="my_div7"></div>
                            <button onClick={() => this.loginin()} style={{ background: 'none', border: 'none', fontSize: 20, lineHeight: '50px', color: '#5a5a5a', marginLeft: '4%' }}>注册</button>
                            <div className='my_div5'></div>
                        </Flex>
                    </div>
                </WingBlank>
                <WingBlank>
                    <div style={{ width: '100%', height: '50px', marginTop: '7%', borderTop: '1px solid #f1f1f1', borderBottom: '1px solid #f1f1f1' }}>
                        <Flex>
                            <div className="my_div"></div>
                            <p style={{ fontSize: 20, lineHeight: '50px', color: '#5a5a5a', marginLeft: '4%' }}>关于我们</p>
                            <div className='my_div1'></div>
                        </Flex>
                    </div>
                </WingBlank>
                <WingBlank>
                    <div style={{ width: '100%', height: '50px', marginTop: '5%', borderTop: '1px solid #f1f1f1', borderBottom: '1px solid #f1f1f1' }}>
                        <Flex>
                            <div className="my_div2"></div>
                            <p style={{ fontSize: 20, lineHeight: '50px', color: '#5a5a5a', marginLeft: '4%' }}>意见反馈</p>
                            <div className='my_div1'></div>
                        </Flex>
                    </div>
                </WingBlank>
                <WingBlank>
                    <div style={{ width: '100%', height: '50px', marginTop: '5%', borderTop: '1px solid #f1f1f1', borderBottom: '1px solid #f1f1f1' }}>
                        <Flex>
                            <div className="my_div3"></div>
                            <button onClick={() => this.realName()} style={{ background: 'none', border: 'none', fontSize: 20, lineHeight: '50px', color: '#5a5a5a', marginLeft: '4%' }}>实名认证</button>
                            <div className='my_div1'></div>
                        </Flex>
                    </div>
                </WingBlank>
                <WingBlank>
                    <Link to='/set'>
                        <div style={{ width: '100%', height: '50px', marginTop: '5%', borderTop: '1px solid #f1f1f1', borderBottom: '1px solid #f1f1f1' }}>
                            <Flex>
                                <div className="my_div4"></div>
                                <button onClick={() => this.toSet()} style={{ background: 'none', border: 'none', fontSize: 20, lineHeight: '50px', color: '#5a5a5a', marginLeft: '4%' }}>设置</button>
                                <div className='my_div5'></div>
                            </Flex>
                        </div>
                    </Link>
                </WingBlank>
            </div>
        )
    }
}
