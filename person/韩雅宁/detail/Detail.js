import React, { Component } from 'react'
import './detail.css'
import { Carousel, Flex, WingBlank,ActionSheet } from 'antd-mobile';
import {Link} from 'react-router-dom'


const PlaceHolder_detail = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_detail`} {...restProps}>
        阳光小区 | 主卧合租 | 外沙滩一号院 押一月付 出行方便 主卧有阳台 带独卫
    </div>
);
const PlaceHolder_detail1 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_detail1`} {...restProps}>三室一厅</div>
);
const PlaceHolder_detail2 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_detail1`} {...restProps}>16m2</div>
);
const PlaceHolder_detail3 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_detail1`} {...restProps}>低/21层 </div>
);
const PlaceHolder_detail4 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_detail1`} {...restProps}>东</div>
);
const PlaceHolder_detail5 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_detail2`} {...restProps}>房型</div>
);
const PlaceHolder_detail6 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_detail2`} {...restProps}>面积</div>
);
const PlaceHolder_detail7 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_detail2`} {...restProps}>楼层</div>
);
const PlaceHolder_detail8 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_detail2`} {...restProps}>朝向</div>
);
const PlaceHolder_detail9 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_detail3`} {...restProps}>近地铁</div>
);
const PlaceHolder_detail10 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_detail3`} {...restProps}>有电梯</div>
);
const PlaceHolder_detail11 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_detail3`} {...restProps}>精装修</div>
);
const PlaceHolder_detail12 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_detail4`} {...restProps}></div>
);
const PlaceHolder_detail13 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_detail5`} {...restProps}>WIFI</div>
);
const PlaceHolder_detail14 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_detail5`} {...restProps}>床</div>
);
const PlaceHolder_detail15 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_detail5`} {...restProps}>衣柜</div>
);
const PlaceHolder_detail16 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_detail5`} {...restProps}>沙发</div>
);
const PlaceHolder_detail17 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_detail5`} {...restProps}>桌椅</div>
);
const PlaceHolder_detail18 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_detail5`} {...restProps}>电视</div>
);
const PlaceHolder_detail19 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_detail5`} {...restProps}>空调</div>
);
const PlaceHolder_detail20 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_detail5`} {...restProps}>洗衣机</div>
);
const PlaceHolder_detail21 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_detail5`} {...restProps}>冰箱</div>
);
const PlaceHolder_detail22 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_detail5`} {...restProps}>暖气</div>
);
const PlaceHolder_detail23 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_detail5`} {...restProps}>热水器</div>
);
const PlaceHolder_detail24 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_detail5`} {...restProps}>燃气灶</div>
);
const PlaceHolder_detail25 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_detail5`} {...restProps}>抽烟机</div>
);
const PlaceHolder_detail26 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_detail5`} {...restProps}>电磁炉</div>
);
const PlaceHolder_detail27 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_detail5`} {...restProps}>微波炉</div>
);
const PlaceHolder_detail28 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_detail5`} {...restProps}>卫生间</div>
);
const PlaceHolder_detail29 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_detail5`} {...restProps}>阳台</div>
);
const PlaceHolder_detail30 = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder_detail5`} {...restProps}>智能锁</div>
);
//弹窗部分
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}
export default class Detail extends Component {
    constructor() {
        super();
        this.state = {
            imgData: ['detail_01.jpg', 'detail_02.jpg', 'detail_03.jpg', 'detail_04.jpg', 'detail_05.jpg', 'detail_06.jpg'],
            clicked2: 'none',
        }
    }
    dataList = [
        { url: 'share.png', title: '发送给朋友' },
        { url: 'weibo.png', title: '新浪微博' },
        { url: 'friend.png', title: '生活圈' },
        { url: 'wechat.png', title: '微信好友' },
        { url: 'QQ.png', title: 'QQ' },
        { url:'QQHome.png',title:'分享到QQ空间'},
        { url:'link.png',title:'复制链接'},
        { url:'fresh.png',title:'刷新'},
        { url:'tell.png',title:'举报'}
      ].map(obj => ({
        icon: <img src={require('./images/'+`${obj.url}`)} alt={obj.title} style={{ width: 36 }} />,
        title: obj.title,
      }));
      showShareActionSheetMulpitleLine = () => {
        const data = [[this.dataList[0],this.dataList[1],this.dataList[2],this.dataList[3],this.dataList[4],this.dataList[5]], [this.dataList[6], this.dataList[7],this.dataList[8]]];
        ActionSheet.showShareActionSheetWithOptions({
          options: data,
          message: '分享至',
        },
        (buttonIndex, rowIndex) => {
          this.setState({ clicked2: buttonIndex > -1 ? data[rowIndex][buttonIndex].title : 'cancel' });
        });
      }
    render() {
        return (
            <div>
                <div className='detail_nav'>
                    <Link to='/appTaber'><div style={{ fontSize: 26, color: 'white', lineHeight: '50px', marginLeft: '5%' }} className='iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu--copy'></div></Link>
                    <h2 className='detail_nav_h2'>房屋详情</h2>
                    <div onClick={this.showShareActionSheetMulpitleLine} style={{fontSize:40,position:'absolute',color:'white',top:'4.5%',right:'4%'}} className='iconfont icon-shenglvehao'></div>
                </div>
                <div>
                    <Carousel
                        autoplay={false}
                        infinite
                    >
                        {this.state.imgData.map(val => (
                            <a
                                key={val}
                                href="http://www.alipay.com"
                                style={{ display: 'inline-block', width: '100%', height: 220 }}
                            >
                                <img
                                    src={require('./images/' + `${val}`)}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </div>
                <WingBlank>
                    <div style={{ width: '100%', marginTop: '2%' }}>
                        <Flex>
                            <p style={{ color: 'red', fontSize: 22 }}>2260 <span style={{ color: 'orange', fontSize: 20 }}>元/月</span><span style={{ color: '#dadada', fontSize: 18 }}>押一付一(佣金: 无佣金)</span></p>
                        </Flex>
                    </div>
                    <div style={{ width: '100%' }}>
                        <Flex>
                            <Flex.Item><PlaceHolder_detail /></Flex.Item>
                        </Flex>
                    </div>
                    <div style={{ borderTop: '1px dashed gray', marginTop: '3%', borderBottom: '1px dashed gray' }}>
                        <Flex>
                            <Flex.Item><PlaceHolder_detail1 /></Flex.Item>
                            <Flex.Item><PlaceHolder_detail2 /></Flex.Item>
                            <Flex.Item><PlaceHolder_detail3 /></Flex.Item>
                            <Flex.Item><PlaceHolder_detail4 /></Flex.Item>
                        </Flex>
                        <Flex>
                            <Flex.Item><PlaceHolder_detail5 /></Flex.Item>
                            <Flex.Item><PlaceHolder_detail6 /></Flex.Item>
                            <Flex.Item><PlaceHolder_detail7 /></Flex.Item>
                            <Flex.Item><PlaceHolder_detail8 /></Flex.Item>
                        </Flex>
                    </div>
                    <div style={{ borderBottom: '1px dashed gray' }}>
                        <Flex style={{ marginTop: '2%', marginBottom: '4%' }} wrap='wrap'>
                            <PlaceHolder_detail9 className='inline' />
                            <PlaceHolder_detail10 className='inline' />
                            <PlaceHolder_detail11 className='inline' />
                        </Flex>
                    </div>
                    <div style={{ marginTop: '5%' }}>
                        <div>
                            <h3 className='detail_h3'>房屋介绍</h3>
                        </div>
                        <div>
                            <p className='detail_p'>
                                本房合租主卧，小区距离地铁近，步行只要10分钟，入住就可以享受到超值的专业服务
                        </p>
                        </div>
                        <div style={{ marginTop: '2%', borderTop: '1px dashed gray' }}>
                            <Flex>
                                <Flex.Item><PlaceHolder_detail12 className='iconfont icon-wifi' /></Flex.Item>
                                <Flex.Item><PlaceHolder_detail12 className='iconfont icon-chuang' /></Flex.Item>
                                <Flex.Item><PlaceHolder_detail12 className='iconfont icon-yigui' /></Flex.Item>
                                <Flex.Item><PlaceHolder_detail12 className='iconfont icon-shafa' /></Flex.Item>
                                <Flex.Item><PlaceHolder_detail12 className='iconfont icon-nothing' /></Flex.Item>
                                <Flex.Item><PlaceHolder_detail12 className='iconfont icon-dianshi' /></Flex.Item>
                            </Flex>
                            <Flex>
                                <Flex.Item><PlaceHolder_detail13 /></Flex.Item>
                                <Flex.Item><PlaceHolder_detail14 /></Flex.Item>
                                <Flex.Item><PlaceHolder_detail15 /></Flex.Item>
                                <Flex.Item><PlaceHolder_detail16 /></Flex.Item>
                                <Flex.Item><PlaceHolder_detail17 /></Flex.Item>
                                <Flex.Item><PlaceHolder_detail18 /></Flex.Item>
                            </Flex>
                            <Flex>
                                <Flex.Item><PlaceHolder_detail12 className='iconfont icon-icon-test' /></Flex.Item>
                                <Flex.Item><PlaceHolder_detail12 className='iconfont icon-xiyiji' /></Flex.Item>
                                <Flex.Item><PlaceHolder_detail12 className='iconfont icon-bingxiang' /></Flex.Item>
                                <Flex.Item><PlaceHolder_detail12 className='iconfont icon-shuinuanqigongcheng' /></Flex.Item>
                                <Flex.Item><PlaceHolder_detail12 className='iconfont icon-yugang' /></Flex.Item>
                                <Flex.Item><PlaceHolder_detail12 className='iconfont icon-nothing' /></Flex.Item>
                            </Flex>
                            <Flex>
                                <Flex.Item><PlaceHolder_detail19 /></Flex.Item>
                                <Flex.Item><PlaceHolder_detail20 /></Flex.Item>
                                <Flex.Item><PlaceHolder_detail21 /></Flex.Item>
                                <Flex.Item><PlaceHolder_detail22 /></Flex.Item>
                                <Flex.Item><PlaceHolder_detail23 /></Flex.Item>
                                <Flex.Item><PlaceHolder_detail24 /></Flex.Item>
                            </Flex>
                            <Flex>
                                <Flex.Item><PlaceHolder_detail12 className='iconfont icon-nothing' /></Flex.Item>
                                <Flex.Item><PlaceHolder_detail12 className='iconfont icon-nothing' /></Flex.Item>
                                <Flex.Item><PlaceHolder_detail12 className='iconfont icon-nothing' /></Flex.Item>
                                <Flex.Item><PlaceHolder_detail12 className='iconfont icon-weiyu' /></Flex.Item>
                                <Flex.Item><PlaceHolder_detail12 className='iconfont icon-yangtai' /></Flex.Item>
                                <Flex.Item><PlaceHolder_detail12 className='iconfont icon-nothing' /></Flex.Item>
                            </Flex>
                            <Flex>
                                <Flex.Item><PlaceHolder_detail25 /></Flex.Item>
                                <Flex.Item><PlaceHolder_detail26 /></Flex.Item>
                                <Flex.Item><PlaceHolder_detail27 /></Flex.Item>
                                <Flex.Item><PlaceHolder_detail28 /></Flex.Item>
                                <Flex.Item><PlaceHolder_detail29 /></Flex.Item>
                                <Flex.Item><PlaceHolder_detail30 /></Flex.Item>
                            </Flex>
                        </div>
                        <div style={{ marginTop: '5%' }}>
                            <div>
                                <h3 className='detail_h3'>房东简介</h3>
                            </div>
                        </div>
                        <div style={{ marginTop: '5%' }}>
                            <Flex>
                                <div className='detail_div'></div>
                                <div style={{ width: '230px', height: '80px' }}>
                                    <p style={{ fontSize: 20, marginLeft: '2%' }}>王一平</p>
                                    <br />
                                    <p style={{ fontSize: 18, marginLeft: '2%', color: '#45aedf', border: '1px solid #45aedf', width: '80px', height: '20px', textAlign: 'center' }}>超赞房东</p>
                                </div>
                            </Flex>
                        </div>
                        <div style={{ marginTop: '5%' }}>
                            <div>
                                <h3 className='detail_h3'>用户评价</h3>
                            </div>
                        </div>
                        <div>
                            <Flex>
                                <div className='detail_div1'></div>
                                <div style={{ width: '230px', height: '70px', marginLeft: '2%' }}>
                                    <div style={{ width: '230px', height: '30px', marginLeft: '2%' }}>
                                        <div className='detail_div2'></div>
                                        <div className='detail_div2'></div>
                                        <div className='detail_div2'></div>
                                        <div className='detail_div2'></div>
                                    </div>
                                    <div style={{ width: '230px', height: '40px', marginLeft: '2%', fontsize: 16 }}>
                                        <p style={{ fontWeight: 'bold', fontSize: 16 }}>匿名用户</p>
                                        <p>环境超级好，房东很棒，会再来.....</p>
                                    </div>
                                </div>
                            </Flex>
                            <Flex style={{ marginTop: '2%' }}>
                                <div className='detail_div1'></div>
                                <div style={{ width: '230px', height: '70px', marginLeft: '2%' }}>
                                    <div style={{ width: '230px', height: '30px', marginLeft: '2%' }}>
                                        <div className='detail_div2'></div>
                                        <div className='detail_div2'></div>
                                        <div className='detail_div2'></div>
                                        <div className='detail_div2'></div>
                                    </div>
                                    <div style={{ width: '230px', height: '40px', marginLeft: '2%', fontsize: 16 }}>
                                        <p style={{ fontWeight: 'bold', fontSize: 16 }}>匿名用户</p>
                                        <p>环境超级好，房东很棒，会再来.....</p>
                                    </div>
                                </div>
                            </Flex>
                            <Flex style={{ marginTop: '2%' }}>
                                <div className='detail_div1'></div>
                                <div style={{ width: '230px', height: '70px', marginLeft: '2%' }}>
                                    <div style={{ width: '230px', height: '30px', marginLeft: '2%' }}>
                                        <div className='detail_div2'></div>
                                        <div className='detail_div2'></div>
                                        <div className='detail_div2'></div>
                                        <div className='detail_div2'></div>
                                    </div>
                                    <div style={{ width: '230px', height: '40px', marginLeft: '2%', fontsize: 16 }}>
                                        <p style={{ fontWeight: 'bold', fontSize: 16 }}>匿名用户</p>
                                        <p>环境超级好，房东很棒，会再来.....</p>
                                    </div>
                                </div>
                            </Flex>
                        </div>
                    </div>
                </WingBlank>
                <div style={{ width: '100%', height: "65px", position: 'fixed', bottom: 0, backgroundColor: '#f5f5f9' }}>
                    <Flex>
                        <div style={{ width: '16%', height: '65px', float: 'left', marginTop: '2%' }}>
                            <div style={{ width: '100%', height: '35px', float: 'left', fontSize: 34, textAlign: 'center', color: 'gray' }} className='iconfont icon-aixin'></div>
                            <div style={{ width: '100%', height: '30px', float: 'left', textAlign: 'center' }}>
                                <p>收藏</p>
                            </div>
                        </div>
                        <div style={{ width: '16%', height: '65px', float: 'left', marginLeft: '2%', marginTop: '2%' }}>
                            <div style={{ width: '100%', height: '35px', float: 'left', fontSize: 31, textAlign: 'center', color: 'gray' }} className='iconfont icon-rili'></div>
                            <div style={{ width: '100%', height: '30px', float: 'left', textAlign: 'center' }}>
                                <p>预约看房</p>
                            </div>
                        </div>
                        <div style={{ width: '33%', height: '65px', marginLeft: '2%' }}>
                            <button style={{ width: '100%', height: "50px", backgroundColor: "orange", marginTop: '3%', border: 'none', color: '#ffffff', fontSize: 20, lineHeight: '50px' }}>
                                <img style={{ float: 'left', width: '30px', height: '30px', marginLeft: '12%', marginTop: '7%' }} src={require("./images/detail_04.png")} />
                                消息
                            </button>
                        </div>
                        <div style={{ width: '33%', height: '65px', marginLeft: '2%' }}>
                            <button style={{ width: '100%', height: "50px", backgroundColor: "#58e968", marginTop: '3%', border: 'none', color: '#ffffff', fontSize: 20, lineHeight: '50px' }}>
                                <img style={{ float: 'left', width: '30px', height: '30px', marginLeft: '14%' ,marginTop: '8%'}} src={require("./images/detail_05.png")} />
                                电话
                            </button>
                        </div>
                    </Flex>
                </div>
            </div>
        )
    }
}
