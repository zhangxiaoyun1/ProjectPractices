import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {WhiteSpace, WingBlank} from 'antd-mobile';
import BMap  from 'BMap';
import {TabBar,Flex} from 'antd-mobile'
export default class Map extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    /**
     * 初始化地图
     */
    componentDidMount(){
        var homeid = this.props.match.params.homeid;
        console.log(homeid);
        let url=`http://localhost:3001/api/map/`+homeid;
        fetch(url,{
            method:"GET", 
            headers: new Headers({
                'Content-Type': 'application/json'
                })
        })
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res.msg[0].city)
            this.setState({
                data:res.msg
            })
            var map = new BMap.Map("mapContainer"); // 创建Map实例
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
        })
       
    }
    /**
     * 返回按钮
     */
    back=()=>{
        window.location.href="http://localhost:3000/#/appTaber"
    }
    /**
     * 展示附近公交站地图信息
     */
    toBus=()=>{
        var map = new BMap.Map("mapContainer");         
        map.centerAndZoom(this.state.data[0].city, 11);  
        map.enableScrollWheelZoom(true);   //启用滚轮放大缩小，默认禁用
        map.enableContinuousZoom();     
        var local = new BMap.LocalSearch(map,   
                        { renderOptions:{map: map, autoViewport: true}});      
        local.searchNearby("公交",this.state.data[0].address);
    }
    /**
     * 展示附近餐饮地图信息
     */
    toFood=()=>{
        var map = new BMap.Map("mapContainer");         
        map.centerAndZoom(this.state.data[0].city, 11);      
        var local = new BMap.LocalSearch(map,   
                        { renderOptions:{map: map, autoViewport: true}});      
        local.searchNearby("餐饮",this.state.data[0].address);
    }
    /**
     * 展示附近购物地图信息
     */
    toShop=()=>{
        var map = new BMap.Map("mapContainer");         
        map.centerAndZoom(this.state.data[0].city, 11);      
        var local = new BMap.LocalSearch(map,   
                        { renderOptions:{map: map, autoViewport: true}});      
        local.searchNearby("购物",this.state.data[0].address);
    }
    /**
     * 展示附近医院地图信息
     */
    toYiyuan=()=>{
        var map = new BMap.Map("mapContainer");         
        map.centerAndZoom(this.state.data[0].city, 11);      
        var local = new BMap.LocalSearch(map,   
                        { renderOptions:{map: map, autoViewport: true}});      
        local.searchNearby("医院",this.state.data[0].address);
    }
    /**
     * 展示附近银行地图信息
     */
    toBank=()=>{
        var map = new BMap.Map("mapContainer");         
        map.centerAndZoom(this.state.data[0].city, 11);      
        var local = new BMap.LocalSearch(map,   
                        { renderOptions:{map: map, autoViewport: true}});      
        local.searchNearby("银行",this.state.data[0].address);
    }
    render() {
        return (
            <div style={{height:'100%',width:'100%',}}>
                <div style={{width:'100%',display:'flex',position:'fixed',top:0,zIndex:2,textAlign:'center',backgroundColor:'#ff9645',lineHeight:2}}>
                    <div onClick={()=>this.back()}>
                        <span className="iconfont icon-fanhui" style={{margin:'0 auto',fontSize:25,color:'white'}}></span>
                        <span style={{margin:'0 auto',fontSize:25,color:'white'}}>
                           周边信息
                        </span>
                    </div>
               </div>
               <div style={{height:window.innerHeight}} className="mapContainer" id="mapContainer"></div>
               <div style={{ width: '100%', height: "65px", position: 'fixed', bottom: 0, backgroundColor: '#f5f5f9' }}>
                    <Flex>
                        <div onClick={()=>this.toBus()} style={{ width: '20%', height: '65px', float: 'left', marginTop: '2%' }}>
                            <div style={{ width: '100%', height: '35px', float: 'left', fontSize: 34, textAlign: 'center', color: 'gray' }} className='iconfont icon-jiaotong'></div>
                            <div style={{ width: '100%', height: '30px', float: 'left', textAlign: 'center' }}>
                                <p>公交</p>
                            </div>
                        </div>
                        <div onClick={()=>this.toFood()} style={{ width: '20%', height: '65px', float: 'left', marginLeft: '2%', marginTop: '2%' }}>
                            <div style={{ width: '100%', height: '35px', float: 'left', fontSize: 31, textAlign: 'center', color: 'gray' }} className='iconfont icon-canyin'></div>
                            <div style={{ width: '100%', height: '30px', float: 'left', textAlign: 'center' }}>
                                <p>餐饮</p>
                            </div>
                        </div>
                        <div onClick={()=>this.toShop()} style={{ width: '20%', height: '65px', float: 'left', marginTop: '2%' }}>
                            <div style={{ width: '100%', height: '35px', float: 'left', fontSize: 34, textAlign: 'center', color: 'gray' }} className='iconfont icon-shangdian-'></div>
                            <div style={{ width: '100%', height: '30px', float: 'left', textAlign: 'center' }}>
                                <p>购物</p>
                            </div>
                        </div>
                        <div onClick={()=>this.toBank()} style={{ width: '20%', height: '65px', float: 'left', marginTop: '2%' }}>
                            <div style={{ width: '100%', height: '35px', float: 'left', fontSize: 34, textAlign: 'center', color: 'gray' }} className='iconfont icon-fangzu'></div>
                            <div style={{ width: '100%', height: '30px', float: 'left', textAlign: 'center' }}>
                                <p>银行</p>
                            </div>
                        </div>
                        <div onClick={()=>this.toYiyuan()} style={{ width: '20%', height: '65px', float: 'left', marginTop: '2%' }}>
                            <div style={{ width: '100%', height: '35px', float: 'left', fontSize: 34, textAlign: 'center', color: 'gray' }} className='iconfont icon-yiyuan'></div>
                            <div style={{ width: '100%', height: '30px', float: 'left', textAlign: 'center' }}>
                                <p>医院</p>
                            </div>
                        </div>
                    </Flex>
                </div>
            </div>
        )
    }
}
