import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'antd-mobile/dist/antd-mobile.css';
import './home.css'
import { SearchBar, NavBar, Icon, Carousel, Flex, WingBlank, Modal } from 'antd-mobile';
import { Link } from 'react-router-dom'


// 首页
const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>
    </div>
);
const PlaceHolder1 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder1`} {...restProps}>
        我要发布
    </div>
);
const PlaceHolder2 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder1`} {...restProps}>
        帮我找房
    </div>
);
const PlaceHolder3 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder1`} {...restProps}>
        租房百科
    </div>
);
const PlaceHolder4 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder1`} {...restProps}>
        地图找房
    </div>
);


var dreamUser = JSON.parse(localStorage.getItem('key')).userid === undefined ? 0 : JSON.parse(localStorage.getItem('key')).userid;
const alert = Modal.alert;
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgData: ['home_11.jpg', 'home_12.jpg', 'home_13.jpg'],
            selectedTab: 'blueTab',
            data0: [],
            data1: [],
            data2: [],
            location: [],
            //小区名
            value: '',
            //城市名
            city: ''
        }
    }
    componentDidMount() {
        if (dreamUser === 0) {
            fetch('http://49.235.251.57:8000/api/house')
                .then((res) => res.json())
                .then((res) => {
                    for (var i = 0; i < res.msg.length; i++) {
                        var imagedata;
                        if (res.msg[i].homeimage.indexOf(',') >= 0) {
                            imagedata = (res.msg[i].homeimage).split(',');
                        } else {
                            imagedata = [];
                            imagedata[0] = res.msg[i].homeimage;
                        }
                        res.msg[i].homeimage = imagedata[0];
                        this.setState({
                            data0: res.msg
                        });
                    }
                })
        } else {
            var userName = JSON.parse(localStorage.getItem('key')).userid;
            var jsonUserName = JSON.stringify({ userName: userName });
            let url = `http://49.235.251.57:8000/api/house/` + jsonUserName;
            fetch(url,
                {
                    method: 'GET',
                    headers: new Headers({ 'Content-Type': 'application/json' })
                })
                .then((res) => res.json())
                .then((res) => {
                    for (var i = 0; i < res.msg0.length; ++i) {
                        var imagedata;
                        if (res.msg0[i].homeimage.indexOf(',') >= 0) {
                            imagedata = (res.msg0[i].homeimage).split(',');
                        } else {
                            imagedata = [];
                            imagedata[0] = res.msg0[i].homeimage;
                        }
                        res.msg0[i].homeimage = imagedata[0];
                    }
                    this.setState({
                        data0: res.msg0,
                        data1: res.msg1,
                        data2: res.msg2
                    })
                }
                )
        }
        //地理位置
        fetch("http://49.235.251.57:8000/api/getLocation")
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    location: res.msg
                })
            })
    }


    /**
     * 跳转地图找房
     */
    home_login = () => {
        if (JSON.parse(localStorage.getItem('key')) === null) {
            alert("请先登录");
        } else {
            if (JSON.parse(localStorage.getItem('key')).iname === '用户名') {
                alert("请先登录");
            } else {
                if (JSON.parse(localStorage.getItem('key')).realname === null) {
                    alert('请进行实名认证');
                } else {
                    window.location.href = "http://localhost:3000/#/addhome"
                }
            }

        }
    }
    //添加删除增加心愿单
    changeDream(idx, homeid, dreamUser) {
        var dreamUser = dreamUser;
        console.log(dreamUser);
        if (dreamUser === 0) {
            alert("请先进行登录")
        } else {
            var list = "love" + `${idx}`
            var loveList = document.getElementById(list);
            var dreamid = (new Date()).valueOf();
            var dreamUser = JSON.parse(localStorage.getItem('key')).userid;
            if (loveList.style.color === 'rgb(221, 221, 221)') {
                loveList.style.color = 'red';
                var addStr = JSON.stringify({ dreamid: dreamid, homeid: homeid, dreamUser: dreamUser })
                fetch("http://49.235.251.57:8000/api/addDream",
                    {
                        method: 'POST',
                        body: addStr,
                        headers: new Headers({ 'Content-Type': 'application/json' })
                    }).then((res) => res.json())
                    .then((res) => {
                        console.log(res);
                    })
            }
            else {
                loveList.style.color = 'rgb(221, 221, 221)';
                var addStr = JSON.stringify({ dreamid: dreamid, homeid: homeid, dreamUser: dreamUser });
                fetch("http://49.235.251.57:8000/api/deleteDream",
                    {
                        method: 'POST',
                        body: addStr,
                        headers: new Headers({ 'Content-Type': 'application/json' })
                    }
                ).then((res) => res.json())
                    .then((res) => {
                        console.log(res);
                    })
            }

        }

    }
    //搜索小区房屋信息
    homeSearch(e) {
        if (13 === e.keyCode) {
            this.setState({
                value: e.target.value
            }, () => {
                var homeSerach = JSON.stringify({ apartment: this.state.value });
                let url = `http://49.235.251.57:8000/api/homeSearch/` + homeSerach
                fetch(url, {
                    method: 'GET',
                    headers: new Headers({ 'Content-Type': 'application/json' })
                })
                    .then((res) => res.json())
                    .then((res) => {
                        for(var i =0;i<res.msg.length;++i){
                            var imagedata;
                        if (res.msg[i].homeimage.indexOf(',') >= 0) {
                            imagedata = (res.msg[i].homeimage).split(',');
                        } else {
                            imagedata = [];
                            imagedata[0] = res.msg[i].homeimage;
                        }
                        res.msg[i].homeimage=imagedata[0];
                        }
                        this.setState({
                            data0: res.msg
                        })
                    })
            })
            e.target.value = '搜索当地房屋';
        }
    }
    //切换城市
    changCity(e) {
        this.setState({
            city: e.target.value
        }, () => {
            var cityJson = JSON.stringify({ city: this.state.city });
            var url = `http://49.235.251.57:8000/api/citySearch/` + cityJson;
            fetch(url, {
                method: 'GET',
                headers: new Headers({ 'Content-Type': 'application/json' })
            })
                .then((res) => res.json())
                .then((res) => {
                    for (var i = 0; i < res.msg.length; ++i) {
                        var imagedata;
                        if (res.msg[i].homeimage.indexOf(',') >= 0) {
                            imagedata = (res.msg[i].homeimage).split(',');
                        } else {
                            imagedata = [];
                            imagedata[0] = res.msg[i].homeimage;
                        }
                        res.msg[i].homeimage = imagedata[0];
                    }
                    this.setState({
                        data0: res.msg
                    })
                })
        })
    }
    render() {
        return (
            <div>
                {/* //首页 */}
                {/* 表头搜索定位 */}
                <div id='home_flow'>
                    <div className='home_nav'>
                        <span style={{ float: "left" }} id="home_icon" className='iconfont icon-diliweizhi'></span>
                        <div style={{ float: "left" }}>
                            <select className='home_select' onChange={(e) => this.changCity(e)}>
                                <option>{this.state.location.city}</option>
                                <option>北京</option>
                                <option>天津</option>
                                <option>秦皇岛</option>
                                <option>张家口</option>
                                <option>保定</option>
                                <option>邯郸</option>
                            </select>
                            {/* <Link to='/citylist'><p style={{width:60,lineHeight:'50px',textAlign:'center',fontSize:'17px',color:'#fff'}}>{this.state.location.city}</p></Link> */}
                        </div>
                        <div style={{ width: '60%', float: "left" }}>
                            <input onKeyDown={(e) => this.homeSearch(e)} name='homeSearch' className='home_input' type='text' placeholder='搜索当地房屋' />
                        </div>
                        <div style={{ float: 'right', lineHeight: '50px', textAlign: 'center' }}>
                            <Link to='/message'><span className='iconfont icon-news' style={{ color: '#fff', fontSize: '26px' }}></span></Link>
                        </div>
                    </div>
                </div>
                {/* 轮播图 */}
                <div id='home_flow1'>
                    <div className='home_carousel'>
                        <Carousel
                            autoplay={true}
                            infinite
                        >
                            {this.state.imgData.map(val => (
                                <a
                                    key={val}
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
                                <Flex.Item><PlaceHolder onClick={() => this.home_login()} style={{ background: `url(${require('./images/home_05.png')}) no-repeat`, backgroundColor: '#F47B87', backgroundSize: '62px 62px' }} /></Flex.Item>
                                <Flex.Item><Link to='/rentHome'><PlaceHolder style={{ background: `url(${require('./images/home_05.png')}) no-repeat`, backgroundColor: '#D061DE', backgroundSize: '62px 62px', backgroundPosition: 'center' }} /></Link></Flex.Item>
                                <Flex.Item><Link to='/rentWiki'><PlaceHolder style={{ background: `url(${require('./images/home_05.png')}) no-repeat`, backgroundColor: '#57DE92', backgroundSize: '62px 62px', backgroundPosition: 'center' }} /></Link></Flex.Item>
                                <Flex.Item><Link to='/mapp'><PlaceHolder style={{ background: `url(${require('./images/home_05.png')}) no-repeat`, backgroundColor: '#FDA42F', backgroundSize: '62px 62px' }} /></Link></Flex.Item>
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
                {/* 推荐房屋信息 */}
                <div className='home_banner'>
                    <WingBlank>
                        <h2>为你推荐</h2>
                    </WingBlank>
                </div>
                <div>
                    {
                        this.state.data0.map((item, idx) => (
                            <WingBlank key={idx}>
                                <div style={{ width: '100%', border: '1px solid #f1f1f1', marginTop: '2%', height: '120px' }}>
                                    <Link key={idx} to={"/detail/" + item.homeid}>
                                        <div style={{ float: 'left' }}>
                                            <img style={{ width: '150px', height: '100px', marginTop: '6%' }} src={'http://49.235.251.57:8000/api/housess/' + `${item.homeimage}`} alt='' />
                                        </div>
                                    </Link>
                                    <div style={{ float: 'left', width: '190px', height: '120px' }}>
                                        <div className='home_p'>
                                            <span>{item.city}</span>
                                            <span style={{ padding: '0 3px' }}>|</span>
                                            <span>{item.address}</span>
                                        </div>
                                        <div style={{ fontSize: '13px', marginLeft: '2%', color: 'gray', marginTop: '3%' }}>
                                            <span>{item.type}</span>
                                            <span style={{ padding: '0 3px' }}>|</span>
                                            <span>{item.hometype}</span>
                                        </div>
                                        <div style={{ fontSize: '13px', height: '20px', marginLeft: '2%', color: 'gray', marginTop: '3%' }}>
                                            <p className="message3">朝向:{item.face}</p>
                                            <p className="message4">楼层:{item.floor}</p>
                                            <p className="message4">电梯:{item.lift}</p>
                                        </div>

                                        <div style={{ height: '30px', display: 'flex', margintTop: '10px', position: 'relative' }}>
                                            <span style={{ fontSize: '17px', color: 'red', marginLeft: '2%', marginTop: '5%' }}>{item.price}</span>
                                            {

                                                idx < this.state.data2.length && this.state.data2.length !== 0 && dreamUser === this.state.data2[idx].userid && this.state.data2[idx].dreamflag === true ?
                                                    <span id={"love" + `${idx}`} onClick={() => this.changeDream(idx, item.homeid, dreamUser)} style={{ fontSize: 30, color: 'red', position: 'absolute', top: '2%', left: '78%' }} className='iconfont icon-zan1'></span>
                                                    : <span id={"love" + `${idx}`} onClick={() => this.changeDream(idx, item.homeid, dreamUser)} style={{ fontSize: 30, color: '#ddd', position: 'absolute', top: '2%', left: '78%' }} className='iconfont icon-zan1'></span>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </WingBlank>
                        ))
                    }
                </div>
            </div>
        )
    }

}
