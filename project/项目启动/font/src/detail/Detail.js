import React, { Component } from 'react'
import './detail.css';
import { Link } from 'react-router-dom';
import BMap  from 'BMap';
import {Modal, Button, Toast ,NavBar,Icon,TabBar, Carousel, Flex, WingBlank,ActionSheet ,WhiteSpace} from 'antd-mobile';
//弹窗部分
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}
const alert = Modal.alert;
export default class Detail extends Component {
    constructor() {
        super();
        this.state = {
            imgData: [],
            clicked2: 'none',
            data:[],
            sdata:['1','2','3'],
            imgheight:200
        }
    }
    componentDidMount(){
        var homeid = this.props.match.params.homeid;
        let url=`http://49.235.251.57:8000/api/houses/`+homeid;
        fetch(url,{
            method:"GET", 
            headers: new Headers({
                'Content-Type': 'application/json'
                })
        })
        .then((res)=>res.json())
        .then((res)=>{
            var imagedata;
            if(res.msg[0].homeimage.indexOf(',')>=0){
                imagedata = (res.msg[0].homeimage).split(',');
            }else{
                imagedata=[];
                imagedata[0]= res.msg[0].homeimage;
            }
            this.setState({
                imgData:imagedata,
                data:res.msg
            })
            var map = new BMap.Map("map1"); // 创建Map实例
            map.centerAndZoom(res.msg[0].city, 12);      
            // 创建地址解析器实例     
            var myGeo = new BMap.Geocoder();      
            // 将地址解析结果显示在地图上，并调整地图视野    
            myGeo.getPoint(res.msg[0].address, function(point){      
                    if (point) {  
                        map.centerAndZoom(point, 18);  
                        var marker = new BMap.Marker(point); // 创建标注   
                        map.addOverlay(marker); // 将标注添加到地图中
                    }      
                }, res.msg[0].city);
                // 地图添加点击事件
                function showInfo(e){
                    window.location.href="http://localhost:3000/#/map/"+res.msg[0].homeid;
                }
                map.addEventListener("click", showInfo);
        })
        setTimeout(() => {
            this.setState(state=>{
                return{
                    imgData:state.imgData
                }
            });
          }, 100);

    }
    /**
     * 返回
     */
    back=()=>{
        window.location.href="http://localhost:3000/#/appTaber"
    }
    /**
     * 收藏改变颜色
     */
    changeColor = (idx, homeid) => {
        var list = "love" + `${idx}`
        var dreamid = (new Date()).valueOf();
        console.log(homeid);
        if(JSON.parse(localStorage.getItem('key'))===null){
           alert("未登录")
        }else{
            if(JSON.parse(localStorage.getItem('key')).userid===undefined){
                alert("未登录")
            }else{
                var shou=document.getElementById('shou');
                var dreamUser = JSON.parse(localStorage.getItem('key')).userid;
                if (shou.style.color === 'gray') {
                    shou.style.color = 'red';
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
                    shou.style.color = 'gray';
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
    /**
     * 提交订单
     */
    toRent=()=>{
        window.location.href="http://localhost:3000/#/tradeDetail"
    }
    //右上角点击分享
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
                    <button onClick={()=>this.back()} style={{background:'none',border:'none', fontSize: 26, color: 'white', lineHeight: '50px'}} className='iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu--copy'></button>
                    <h2 className='detail_nav_h2'>房屋详情</h2>
                    <div onClick={this.showShareActionSheetMulpitleLine} style={{fontSize:40,position:'absolute',color:'white',top:'4.5%',right:'4%'}} className='iconfont icon-shenglvehao'></div>
                </div>
                {/* 轮播图 */}
                <div style={{marginTop:51,height:200,overflow:'hidden'}}>
                <Carousel
                    autoplay={true}
                    infinite={true}
                >
                        {this.state.imgData.map(val => (
                            <a
                                key={val}
                                style={{ display: 'inline-block', width: '100%', height:this.state.imgheight }}
                            >
                                <img
                                     src={'http://49.235.251.57:8000/api/housess/' + `${val}`}
                                    alt=""
                                    style={{ width: '100%',height:this.state.imgheight, verticalAlign: 'top' }}
                                    onLoad={() => {
                                        window.dispatchEvent(new Event('resize'));
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </div>
                {/* 房屋信息 */}
                    {
                        this.state.data.map((item,idx)=>(
                            <div key={idx}>
                                <WingBlank>
                                <div style={{margin:"3% auto 0 auto" }}>
                                    <span style={{fontFamily:'黑体',fontSize:'17px',fontWeight:'bolder'}}>{item.type}</span>
                                    <span style={{padding:'0 4px',fontWeight:'bolder'}}>-</span>
                                    <span style={{fontFamily:'黑体',fontSize:'17px',fontWeight:'bolder'}}>{item.apname}</span>
                                </div>
                                </WingBlank>
                                <WingBlank>
                                <div style={{margin:"3% auto 0 auto" }}>
                                    <span style={{fontSize:'10px',fontWeight:'bolder',color:'red'}}>￥</span>
                                    <span style={{fontSize:'15px',fontWeight:'bolder',color:'red'}}>{item.price}</span>
                                </div>
                                </WingBlank>
                                {/* 房屋简介 */}
                                <WingBlank>
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
                                </WingBlank>
                                  {/* 地理位置 */}
                                <WingBlank>
                                    <div style={{marginTop:15}}>
                                        <form>
                                            <fieldset style={{border:'0.4px solid #b1b0b0',borderRadius:10,height:70}}>
                                            <legend>房源位置</legend>
                                            <Link to={'/map/'+item.homeid}>
                                                <div className="weizhi">
                                                        <span>
                                                            <img style={{width:"12%",height:"50%",position:'absolute',top:6,left:10}} src={require('./images/weizhi.png')}/>
                                                        </span>
                                                        <span style={{position:'absolute',top:15,left:60,fontSize:15,color:"#000"}}>{item.address}</span>
                                                </div>
                                            </Link>
                                            </fieldset>
                                        </form>
                                    </div>
                                </WingBlank>
                                <WhiteSpace />
                                <div style={{width:'100%',height:5,backgroundColor:'#f8f6f6'}}></div>
                                {/* 房源设施 */}
                                <WhiteSpace />
                                <WingBlank>
                                <div style={{height:'150px'}}>
                                    <p style={{marginBottom:'10px',fontSize:20,fontWeight:'bold'}}>房源设施</p>
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
                                </WingBlank>
                                <WhiteSpace />
                                <div style={{width:'100%',height:5,backgroundColor:'#f8f6f6'}}></div>
                                  {/* 房源描述 */}
                                <WingBlank>
                                    <div>
                                        <p style={{marginBottom:'10px',fontSize:20,fontWeight:'bold'}}>房源描述</p>
                                        <div className="box11">
                                            <img src={require('./images/beijing.jpg')} width="100%" height="260"/>
                                            <div className="box22">
                                                {/* 房主信息 */}
                                                <Flex>
                                                    <div style={{marginLeft:10,width:70}}>
                                                        <p style={{fontSize:18,fontWeight:'bolder',color:'#686767'}}>房主：</p>
                                                    </div>
                                                    {/* <div className='detail_div'>
                                                        <img src={require('./images/detail_02.png')}/>
                                                    </div> */}
                                                    <div style={{ width: '70%', height: '80px',marginLeft:'15px',color:'#686767'}}>
                                                        <p style={{ fontSize: 18, height: '20px',marginTop:'23px',color:'#fff'}}>{item.realname}</p>
                                                        <p style={{ fontSize: 11, marginLeft: '2%', color: '#000',height: '20px',marginTop:'5px'}}>实名认证</p>
                                                    </div>
                                                </Flex>
                                                {/* 详细地址 */}
                                                <div style={{width:'100%',color:'#686767'}}>
                                                    <p style={{fontSize:18,fontWeight:'bolder',margin:'0 10px 0 10px'}}>详细地址:</p>
                                                    <p style={{fontSize:15,fontWeight:'bolder',margin:'7px 10px 0 10px'}}>{item.address}</p>
                                                </div>
                                                {/* 房屋简介 */}
                                                <div style={{width:'100%',marginTop:15,color:'#686767'}}>
                                                    <p style={{fontSize:18,fontWeight:'bolder',margin:'0 10px 10px 10px'}}>房源简介:</p>
                                                    <p style={{fontSize:15,fontWeight:'bolder',margin:'0 10px 0 10px',lineHeight:1.4}}>{item.detail}</p>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </WingBlank>
                                <WhiteSpace />
                                <div style={{width:'100%',height:5,backgroundColor:'#f8f6f6'}}></div>
                                {/* 发布时间 */}
                                <WingBlank>
                                    <div>
                                        <div style={{lineHeight:2}}>
                                            <span style={{fontSize:17,color:'#757575'}}>发布时间</span>
                                            <span style={{fontSize:17,color:'#757575'}}>:</span>
                                            <span style={{fontSize:17,color:'#757575'}}>{item.pushtime.slice(0,10)}</span>
                                        </div>
                                        <div style={{lineHeight:2}}>
                                            <span style={{fontSize:17,color:'#757575'}}>入住</span>
                                            <span style={{fontSize:17,color:'#757575'}}>:</span>
                                            <span style={{fontSize:17,color:'#757575'}}>随时入住</span>
                                        </div>
                                        <div style={{lineHeight:2}}>
                                            <span style={{fontSize:17,color:'#757575'}}>其他信息</span>
                                            <span style={{fontSize:17,color:'#757575'}}>:</span>
                                            <span style={{fontSize:17,color:'#757575'}}>暂无信息</span>
                                        </div>
                                    </div>
                                </WingBlank>
                                <div style={{height:'65px'}}></div>
                                <div style={{ width: '100%', height: "65px", position: 'fixed', bottom: 0, backgroundColor: '#f5f5f9' }}>
                                    <Flex>
                                        <div style={{ width: '16%', height: '65px', float: 'left', marginTop: '2%' }}>
                                            <div id='shou' onClick={()=>this.changeColor(idx,item.homeid)} style={{ width: '100%', height: '35px', float: 'left', fontSize: 34, textAlign: 'center', color: 'gray' }} className='iconfont icon-zan1'></div>
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
                                            <Button onClick={() =>
                                                        alert('拨打电话',item.phone, [
                                                        { text: '取消', onPress: () => console.log('cancel') },
                                                        { text: '确定', onPress: () => console.log('ok') },
                                                        ])} style={{ width: '100%', height: "50px", background: "linear-gradient(to right,#ff9645, #fa9e57, #fcc193)",borderRadius:'3px', marginTop: '3%', border: 'none', color: '#ffffff',}}>
                                            <p style={{ fontSize: 20, lineHeight: '30px' }}>电话房主</p>
                                            <p style={{ fontSize: 10, lineHeight: '20px' }}>平台转接 防骚扰</p>
                                            </Button>
                                        </div>
                                        <div style={{ width: '33%', height: '65px', marginLeft: '2%' }}>
                                            <Link to={"/tradeDetail/" + item.homeid}><button  style={{ width: '100%', height: "50px", background: "linear-gradient(to right,#58e968, #6eeb7c,#a4e4ac)",borderRadius:'3px', marginTop: '3%', border: 'none', color: '#ffffff', fontSize: 20, lineHeight: '50px' }}>
                                                <p style={{ fontSize: 20, lineHeight: '30px' }}>我要租房</p>
                                                <p style={{ fontSize: 10, lineHeight: '20px' }}>直联房租 0中介</p>
                                            </button></Link>
                                        </div>
                                    </Flex>
                                </div>
                            </div>
                        ))
                    }
                {/* 底部 */}
              
            </div>
        )
    }
}
