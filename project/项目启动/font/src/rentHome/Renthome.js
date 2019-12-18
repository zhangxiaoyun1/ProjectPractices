import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { SearchBar, WingBlank } from 'antd-mobile';
import './rentHome.css';


var dreamUser = 0;
export default class Renthome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            value1: '位置',
            value2: '租金',
            value3: '户型',
            value4: '方式',
            data0: [],
            data1: [],
            data2: []
        };
    }

    componentDidMount() {
            fetch('http://49.235.251.57:8000/api/house')
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
                    });
                })
            }

    /**
     * 搜索框
     */
    toSearch = () => {
        var data3 = [];
        fetch('http://49.235.251.57:8000/api/house')
            .then((res) => res.json())
            .then((res) => {
                for (var i = 0; i < res.msg.length; i++) {
                    if ((res.msg[i].apname).indexOf(this.state.value)>=0) {
                        data3 = [...data3, res.msg[i]]
                    }
                }
                this.setState({
                    data0: data3,
                    value1: '位置',
                    value2: '租金',
                    value3: '户型',
                    value4: '方式',
                })
            })
    }
    onChange = (value) => {
        this.setState({ value });
    };
    clear = () => {
        this.setState({ value: '' });
    };
    /**
     * 选择位置
     */
    handleChange1 = (event) => {
        var li1 = document.getElementById('li1').value;
        var data3 = [];
        fetch('http://49.235.251.57:8000/api/house')
            .then((res) => res.json())
            .then((res) => {

                for (var i = 0; i < res.msg.length; i++) {
                    if (res.msg[i].city === li1) {
                        data3 = [...data3, res.msg[i]]
                    }
                }
                this.setState({
                    data0: data3,
                    value1: li1,
                    value: '',
                    value2: '租金',
                    value3: '户型',
                    value4: '方式',
                })
            })
    }
    /**
     * 选择租金
     */
    handleChange2 = (event) => {
        var li2 = document.getElementById('li2').value;
        li2=li2.slice(0,-2)+'元/月';
        var data4 = [];
        fetch('http://49.235.251.57:8000/api/house')
            .then((res) => res.json())
            .then((res) => {
                for (var i = 0; i < res.msg.length; i++) {
                    if (res.msg[i].price === li2) {
                        data4 = [...data4, res.msg[i]]

                    }
                }
                this.setState({
                    data0: data4,
                    value2: li2,
                    value: '',
                    value1: '位置',
                    value3: '户型',
                    value4: '方式',
                })
            })
    }
    /**
     * 选择房屋类型
     */
    handleChange3 = (event) => {
        var li3 = document.getElementById('li3').value;
        var data5 = []
        fetch('http://49.235.251.57:8000/api/house')
            .then((res) => res.json())
            .then((res) => {
                for (var i = 0; i < res.msg.length; i++) {
                    if ((res.msg[i].hometype).indexOf(li3)>=0) {
                        data5 = [...data5, res.msg[i]]
                    }
                }
                this.setState({
                    data0: data5,
                    value3: li3,
                    value: '',
                    value1: '位置',
                    value2: '租金',
                    value4: '方式',
                })
            })
    }
    /**
     * 选择租房类型
     */
    handleChange4 = (event) => {
        var li4 = document.getElementById('li4').value;
        var data6 = [];
        fetch('http://49.235.251.57:8000/api/house')
            .then((res) => res.json())
            .then((res) => {
                for (var i = 0; i < res.msg.length; i++) {
                    if (res.msg[i].type === li4) {
                        data6 = [...data6, res.msg[i]];
                    }
                }
                this.setState({
                    data0: data6,
                    value4: li4,
                    value: '',
                    value1: '位置',
                    value2: '租金',
                    value3: '户型',
                })
            })
    }
    //添加删除心愿单
    changeDream = (idx, homeid) => {
        var list = "love" + `${idx}`
        var loveList = document.getElementById(list);
        var dreamid = (new Date()).valueOf();
        if (JSON.parse(localStorage.getItem('key')) === null) {
            fetch('http://49.235.251.57:8000/api/house')
                .then((res) => res.json())
                .then((res) => {
                    this.setState({
                        data0: res.msg
                    });
                })
        } else {
            if (JSON.parse(localStorage.getItem('key')).userid === undefined) {
                fetch('http://49.235.251.57:8000/api/house')
                    .then((res) => res.json())
                    .then((res) => {
                        this.setState({
                            data0: res.msg
                        });
                    })
            } else {
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
    }
    render() {
        return (
            <div>
                {/* 头 */}
                <div style={{ width: '100%', display: 'flex', textAlign: 'center', background: 'linear-gradient(to right,#F55E7E, #F47B87, #F58B7F)', lineHeight: 2, position: 'fixed', top: 0, zIndex: 2 }}>
                    <Link to='/appTaber'>
                        <img src={require('./images/return.png')} style={{ width: 30, height: 30, paddingTop: 10 }} />
                    </Link>
                    <SearchBar
                        id="searchid"
                        style={{ width: '70%', margin: '0 auto', backgroundColor: '#ff9645', color: 'gray' }}
                        value={this.state.value}
                        placeholder="请输入要搜索的小区名"
                        onSubmit={() => this.toSearch()}
                        showCancelButton
                        onChange={this.onChange}
                    />
                </div>
                {/* 导航栏 */}
                <div style={{ height: 50 }}></div>
                <div style={{ display: 'flex', borderBottom: '0.5px solid #dfdfdf' }}>
                    <ul style={{ width: '94%', margin: '0 auto' }}>
                        <li className='rentHome_li1'>
                            <select style={{ width: '100%', color: 'grey' }} id="li1" value={this.state.value1} onChange={this.handleChange1}>
                                <option value='位置'>位置</option>
                                <option value='石家庄'>石家庄</option>
                                <option value='秦皇岛'>秦皇岛</option>
                                <option value='红旗大街'>红旗大街</option>

                            </select>
                        </li>
                        <li className='rentHome_li1'>
                            <select style={{ width: '100%', color: 'grey' }} id="li2" value={this.state.value2} onChange={this.handleChange2}>
                                <option value='租金'>租金</option>
                                <option value='1200/月'>1200/月</option>
                                <option value='2500/月'>2500/月</option>
                                <option value='3300'>3300/月</option>

                            </select>
                        </li>
                        <li className='rentHome_li1'>
                            <select style={{ width: '100%', color: 'grey' }} id="li3" value={this.state.value3} onChange={this.handleChange3}>
                                <option value='户型'>户型</option>
                                <option value='一室一厅'>一室一厅</option>
                                <option value='两室一厅'>两室一厅</option>
                                <option value='三室一厅'>三室一厅</option>

                            </select>
                        </li>
                        <li className='rentHome_li1'>
                            <select style={{ width: '100%', color: 'grey' }} id="li4" value={this.state.value4} onChange={this.handleChange4}>
                                <option value='方式'>方式</option>
                                <option value='合租'>合租</option>
                                <option value='单租'>单租</option>
                                <option value='整租'>整租</option>

                            </select>
                        </li>
                    </ul>
                </div>
                {/* 房屋信息遍历 */}
                <div>
                    {
                        this.state.data0.map((item, idx) => (
                            <WingBlank key={idx}>
                                <div style={{ width: '100%', border: '1px solid #f1f1f1', marginTop: '2%', height: '120px' }}>
                                    <Link key={idx} to={"/detail/" + item.homeid}>
                                        <div style={{ width: '42%', height: '100px', float: 'left' }}>
                                            <img style={{ width: '100%', height: '100%', marginTop: '6%' }} src={'http://49.235.251.57:8000/api/housess/' + `${item.homeimage}`} alt='' />
                                        </div>
                                    </Link>
                                    <div style={{ float: 'left', width: '55%', height: '120px' }}>
                                        <div className='home_p'>
                                            <span>{item.city}</span>
                                            <span style={{ padding: '0 3px' }}>|</span>
                                            <span>{item.address}</span>
                                        </div>
                                        <div style={{ fontSize: '0.9em', marginLeft: '2%', color: 'gray', marginTop: '3%' }}>
                                            <span>{item.type}</span>
                                            <span style={{ padding: '0 3px' }}>|</span>
                                            <span>{item.hometype}</span>
                                        </div>
                                        <div style={{ fontSize: '0.8em', height: '20px', marginLeft: '2%', color: 'gray', marginTop: '3%' }}>
                                            <p className="message3">朝向:{item.face}</p>
                                            <p className="message4">楼层:{item.floor}</p>
                                            <p className="message4">电梯:{item.lift}</p>
                                        </div>

                                        <div style={{ height: '30px', display: 'flex', margintTop: '10px' }}>
                                            <span style={{ fontSize: '1.1em', color: 'red', marginLeft: '2%', marginTop: '5%', float: 'left' }}>{item.price}</span>
                                            {/* <span id={"love" + `${idx}`} onClick={() => this.changeDream(idx, item.homeid)} style={{ fontSize: 30, color: '#ddd', marginLeft: '45%', marginTop: '2%', dreamFlag: 'false' }} className='iconfont icon-aixin1'></span> */}
                                            {
                                                idx < this.state.data2.length && this.state.data2.length !== 0 && dreamUser === this.state.data2[idx].userid && this.state.data2[idx].dreamflag === true ?
                                                    <span id={"love" + `${idx}`} onClick={() => this.changeDream(idx, item.homeid)} style={{ fontSize: 30, color: 'red', marginLeft: '45%', marginTop: '2%' }} className='iconfont icon-qq'></span>
                                                    : <span id={"love" + `${idx}`} onClick={() => this.changeDream(idx, item.homeid)} style={{ fontSize: 30, color: '#ddd', marginLeft: '45%', marginTop: '2%' }} className='iconfont icon-qq'></span>
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
