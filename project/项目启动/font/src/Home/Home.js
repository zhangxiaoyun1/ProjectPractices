import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'antd-mobile/dist/antd-mobile.css';
import './home.css'
import { SearchBar, Carousel, Flex, WingBlank } from 'antd-mobile';
import { Link } from 'react-router-dom'

// 首页
const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>
    </div>
);
const PlaceHolder1 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder1`} {...restProps}>
        出租
    </div>
);
const PlaceHolder2 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder1`} {...restProps}>
        租房
    </div>
);
const PlaceHolder3 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder1`} {...restProps}>
        租房百科
    </div>
);
const PlaceHolder4 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder1`} {...restProps}>
        交易服务
    </div>
);
const PlaceHolder_home = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_home`} {...restProps}>
        合租
    </div>
);
const PlaceHolder_home1 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_home1`} {...restProps}>
        精装修
    </div>
);
const PlaceHolder_home2 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_home1`} {...restProps}>
        近地铁
    </div>
);
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgData: ['home_01.jpg', 'home_02.jpg', 'home_03.jpg'],
            selectedTab: 'blueTab',
            data:[]

        }
    }
    componentDidMount(){
        fetch('http://localhost:3001/api/house')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                data:res.msg
            });
            console.log(res.msg)
        })
    }
    render() {
        return (
            <div>
                {/* //首页 */}
                <div id='home_flow'>
                    <div className='home_nav'>
                        <span id="home_icon" className='iconfont icon-diliweizhi'></span>
                        <div className='home_checkBox'>
                            <button>石家庄 </button>
                            <button style={{ fontSize: 25, textAlign: 'center' }} className='iconfont icon-xialajiantou'></button>
                        </div>
                        <div className='home_input'>
                            <SearchBar placeholder="搜索" maxLength={8} style={{ backgroundColor: '#ff9645' }} />
                        </div>
                    </div>
                </div>
                <div id='home_flow1'>
                    <div className='home_carousel'>
                        <Carousel
                            autoplay={true}
                            infinite
                        >
                            {this.state.imgData.map(val => (
                                <a
                                    key={val}
                                    href="http://www.alipay.com"
                                    style={{ display: 'inline-block', width: '100%', }}
                                >
                                    <img
                                        src={require('./images/' + `${val}`)}
                                        alt=""
                                        style={{ width: '100%', verticalAlign: 'top', height: '200px' }}
                                        onLoad={() => {
                                            window.dispatchEvent(new Event('resize'));
                                        }}
                                    />
                                </a>
                            ))}
                        </Carousel>
                    </div>

                    <div className='home_list'>
                        <WingBlank>
                            <Flex>
                                <Flex.Item><Link to='/addhome'><PlaceHolder onClick={this.home_login} style={{ background: `url(${require('./images/home_05.png')}) no-repeat`, backgroundColor: '#51CEFF', backgroundSize: '62px 62px' }} /></Link></Flex.Item>
                                <Flex.Item><Link to='/rentHome'><PlaceHolder style={{ background: `url(${require('./images/home_06.png')}) no-repeat`, backgroundColor: '#D061DE', backgroundSize: '55px 55px', backgroundPosition: 'center' }} /></Link></Flex.Item>
                                <Flex.Item><Link to='/rentWiki'><PlaceHolder style={{ background: `url(${require('./images/home_07.png')}) no-repeat`, backgroundColor: '#57DE92', backgroundSize: '50px 50px', backgroundPosition: 'center' }} /></Link></Flex.Item>
                                <Flex.Item><Link to='/tradeDetail'><PlaceHolder style={{ background: `url(${require('./images/home_05.png')}) no-repeat`, backgroundColor: '#FDA42F', backgroundSize: '62px 62px' }} /></Link></Flex.Item>
                            </Flex>
                            <Flex>
                                <Flex.Item><PlaceHolder1 /></Flex.Item>
                                <Flex.Item><PlaceHolder2 /></Flex.Item>
                                <Flex.Item><PlaceHolder3 /></Flex.Item>
                                <Flex.Item><PlaceHolder4 /></Flex.Item>
                            </Flex>
                        </WingBlank>
                    </div>

                </div>
                <div className='home_banner'>
                    <WingBlank>
                        <h2>为你推荐</h2>
                    </WingBlank>
                </div>
                <div>
                    {
                        this.state.data.map((item)=>(
                            <WingBlank>
                            <Link to='/detail'>
                            <div style={{ width: '100%', border: '1px solid #f1f1f1', marginTop: '2%', height: '120px' }}>
                                <Flex>
                                    <div style={{ float: 'left' }}>
                                        <img style={{ width: '150px', height: '100px', marginTop: '6%' }} src={`${require('./images/home_08.jpg')}`} alt='' />
                                    </div>
                                    <div style={{ float: 'left', width: '190px', height: '120px' }}>
                                        <p className='home_p'>
                                            <span>{item.apname}</span>
                                            <span style={{padding:'0 3px'}}>|</span>
                                            <span>{item.address}</span>
                                        </p>
                                        <p style={{ fontSize: '13px', marginLeft: '2%', color: 'gray', marginTop: '3%' }}>
                                            <span>{item.type}</span>
                                            <span style={{padding:'0 3px'}}>|</span>
                                            <span>{item.hometype}</span>
                                        </p>
                                        <p style={{ fontSize: '13px', marginLeft: '2%', color: 'gray', marginTop: '3%' }}>
                                            <span>朝向{item.type}</span>
                                            <span style={{padding:'0 3px'}}>|</span>
                                            <span>楼层{item.hometype}</span>
                                            <span style={{padding:'0 3px'}}>|</span>
                                            <span>电梯{item.hometype}</span>
                                        </p>
                                        {/* <Flex>
                                            <Flex.Item><PlaceHolder_home /></Flex.Item>
                                            <Flex.Item><PlaceHolder_home1 /></Flex.Item>
                                            <Flex.Item><PlaceHolder_home2 /></Flex.Item>
                                        </Flex> */}
                                        <p style={{ fontSize: '17px', color: 'red', marginLeft: '2%', marginTop: '4%' }}>{item.price}<img style={{width:'22px',height:'22px',float:'right'}} src={`${require('./images/love.png')}`}></img></p>
                                        
                                    </div>
                                </Flex>
                            </div>
                            </Link>
                        </WingBlank>
                        ))
                    }
                </div>
           </div>
        )
    }

}
