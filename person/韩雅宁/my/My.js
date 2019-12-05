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
                        <div style={{ float: 'left' }}>
                            <img style={{ width: '80px', height: '80px', marginTop: '20%' }} src={require('./images/my_01.png')} />
                        </div>
                        <div style={{ float: 'left', marginTop: '8%' }}>
                            <p style={{ color: 'gray', fontSize: 20 ,marginLeft:'8%'}}>喵柠i</p>
                            <div style={{ color: '#ff9645', width: '50px', height: '25px', fontSize: '14px' ,textAlign:'center',lineHeight:'25px',borderRadius:'10px',border:'1px solid #ff9645',marginLeft:'2%',marginTop:'5%'}}>
                                未实名
                            </div>
                        </div>
                        <div style={{float:'left',width:'80px',height:'25px',marginTop: '15%',marginLeft:'2%',border:'1px solid red',borderRadius:'10px',color:'red',textAlign:'center',lineHeight:'25px'}}>
                            信誉良好
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
                    <Link to='/login'>
                    <div style={{ width: '100%', height: '50px', marginTop: '5%', borderTop: '1px solid #f1f1f1', borderBottom: '1px solid #f1f1f1' }}>
                        <Flex>
                            <div className="my_div6"></div>
                            <p style={{ fontSize: 20, lineHeight: '50px', color: '#5a5a5a', marginLeft: '4%' }}>登录</p>
                            <div className='my_div5'></div>
                        </Flex>
                    </div>
                    </Link>
                </WingBlank>
                <WingBlank>
                    <Link to='/loginin'>
                    <div style={{ width: '100%', height: '50px', marginTop: '5%', borderTop: '1px solid #f1f1f1', borderBottom: '1px solid #f1f1f1' }}>
                        <Flex>
                            <div className="my_div7"></div>
                            <p style={{ fontSize: 20, lineHeight: '50px', color: '#5a5a5a', marginLeft: '4%' }}>注册</p>
                            <div className='my_div5'></div>
                        </Flex>
                    </div>
                    </Link>
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
                    <Link to='/item'>
                    <div style={{ width: '100%', height: '50px', marginTop: '5%', borderTop: '1px solid #f1f1f1', borderBottom: '1px solid #f1f1f1' }}>
                        <Flex>
                            <div className="my_div3"></div>
                            <p style={{ fontSize: 20, lineHeight: '50px', color: '#5a5a5a', marginLeft: '4%' }}>实名认证</p>
                            <div className='my_div1'></div>
                        </Flex>
                    </div>
                    </Link>
                </WingBlank>
                <WingBlank>
                <Link to='/set'>
                    <div style={{ width: '100%', height: '50px', marginTop: '5%', borderTop: '1px solid #f1f1f1', borderBottom: '1px solid #f1f1f1' }}>
                        <Flex>
                            <div className="my_div4"></div>
                            <p style={{ fontSize: 20, lineHeight: '50px', color: '#5a5a5a', marginLeft: '4%' }}>设置</p>
                            <div className='my_div5'></div>
                        </Flex>
                    </div>
                    </Link>
                </WingBlank>
            </div>
        )
    }
}
