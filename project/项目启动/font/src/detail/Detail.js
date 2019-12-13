import React, { Component } from 'react'
import './detail.css'
import { Carousel, Flex, WingBlank,ActionSheet ,WhiteSpace} from 'antd-mobile';
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
            data:[]
        }
    }
    componentDidMount(){
        var homeid = this.props.match.params.homeid;
        let url=`http://localhost:3001/api/house/`+homeid;
        fetch(url,{
            method:"GET", 
            headers: new Headers({
                'Content-Type': 'application/json'
                })
        })
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res.msg)
            this.setState({
                data:res.msg
            })
        })
    }
    /**
     * 返回
     */
    back=()=>{
        window.location.href="http://localhost:3000/#/appTaber"
    }
    /**
     * 调取地图
     */
    mapp=()=>{
        window.location.href="http://localhost:3000/#/mapp"
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
                {/* 头 */}
                <div className='detail_nav'>
                    <button onClick={()=>this.back()} style={{background:'none',border:'none', fontSize: 26, color: 'white', lineHeight: '50px', marginLeft: '5%' }} className='iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu--copy'></button>
                    <h2 className='detail_nav_h2'>房屋详情</h2>
                    <div onClick={this.showShareActionSheetMulpitleLine} style={{fontSize:40,position:'absolute',color:'white',top:'4.5%',right:'4%'}} className='iconfont icon-shenglvehao'></div>
                </div>
                {/* 轮播图 */}
                <div>
                    <Carousel autoplay={false} infinite>
                        {this.state.imgData.map(val => (
                            <a
                                key={val}
                                style={{ display: 'inline-block', width: '100%', height: 220 }}
                            >
                                <img
                                    src={require('./images/' + `${val}`)}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </div>
                <WingBlank>
                    {
                        this.state.data.map((item)=>(
                            <div>
                                <div style={{margin:"3% auto 0 auto" }}>
                                    <span style={{fontFamily:'黑体',fontSize:'17px',fontWeight:'bolder'}}>{item.type}</span>
                                    <span style={{padding:'0 4px',fontWeight:'bolder'}}>-</span>
                                    <span style={{fontFamily:'黑体',fontSize:'17px',fontWeight:'bolder'}}>{item.address}</span>
                                </div>
                                <div style={{margin:"3% auto 0 auto" }}>
                                    <span style={{fontSize:'10px',fontWeight:'bolder',color:'red'}}>￥</span>
                                    <span style={{fontSize:'15px',fontWeight:'bolder',color:'red'}}>{item.price}</span>
                                    <span onClick={()=>this.mapp()} style={{float:'right'}}>地图</span>
                                </div>
                                <div style={{margin:"5% auto 0 auto",width:'100%',height:'70px',backgroundColor:'#f8f6f6'}}>
                                    <div style={{float:'left',width:'33%'}}>
                                        <p className="detail_floor" style={{borderRight:'1px solid #797979'}}>朝向</p>
                                        <p className="detail_floor1" style={{borderRight:'1px solid #797979'}}>{item.face}</p>
                                    </div>
                                    <div style={{float:'left',width:'33%'}}>
                                        <p className="detail_floor" style={{borderRight:'1px solid #797979'}}>楼层</p>
                                        <p className="detail_floor1" style={{borderRight:'1px solid #797979'}}>{item.floor}</p>
                                    </div>
                                    <div style={{float:'left',width:'33%'}}>
                                        <p className="detail_floor">类型</p>
                                        <p className="detail_floor1">{item.hometype}</p>
                                    </div>
                                </div>
                                <WhiteSpace />
                                {/* 房源设施 */}
                                <WhiteSpace />
                                <div style={{height:'150px'}}>
                                    <h2 style={{marginBottom:'10px'}}>房源设施</h2>
                                    <hr/>                                  
                                    <div style={{height:'72px',marginTop:'10px'}}>
                                        <div style={{float:'left',width:'25%'}}>
                                            <p className="iconfont icon-kongdiao detail_tu"></p>
                                            <p style={{textAlign:'center'}}>空调</p>
                                            <p style={{textAlign:'center'}}>{item.conditioner}</p>
                                        </div>
                                        <div style={{float:'left',width:'25%'}}>
                                            <p className="iconfont icon-shuinuanqigongcheng detail_tu"></p>
                                            <p style={{textAlign:'center'}}>供暖</p>
                                            <p style={{textAlign:'center'}}>{item.heating}</p>
                                        </div>
                                        <div style={{float:'left',width:'25%'}}>
                                            <p className="iconfont icon-wuxian detail_tu"></p>
                                            <p style={{textAlign:'center'}}>WIFI</p>
                                            <p style={{textAlign:'center'}}>{item.wifi}</p>
                                        </div>
                                        <div style={{float:'right',width:'25%'}}>
                                            <p className="iconfont icon-dianti detail_tu"></p>
                                            <p style={{textAlign:'center'}}>电梯</p>
                                            <p style={{textAlign:'center'}}>{item.lift}</p>
                                        </div>
                                    </div>
                                </div>
                                <WhiteSpace />
                                {/* 房主信息 */}
                                <div>
                                    <h2 style={{marginBottom:'10px'}}>房主信息</h2>
                                    <hr/>
                                    <div>
                                        <Flex>
                                            <div className='detail_div'>
                                                <img src={require('./images/detail_02.png')}/>
                                            </div>
                                            <div style={{ width: '70%', height: '80px' ,marginLeft:'10px'}}>
                                                <p style={{ fontSize: 18, height: '20px',marginTop:'15px'}}>{item.realname}</p>
                                                <p style={{ fontSize: 13, marginLeft: '2%', color: '#6b6b6b',height: '20px',marginTop:'10px'}}>实名认证</p>
                                            </div>
                                        </Flex>
                                    </div>
                                </div>
                                <div style={{height:'50px'}}></div>
                            </div>
                        ))
                    }
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
