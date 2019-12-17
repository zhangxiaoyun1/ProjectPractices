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
        let url=`http://49.235.251.57:8000/api/map/`+homeid;
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
        var bus=document.getElementById('bus');
        var food=document.getElementById('food');
        var shop=document.getElementById('shop');
        var yinhang=document.getElementById('yinhang');
        var yiyuan=document.getElementById('yiyuan');
        bus.style.color='#ff9645';
        food.style.color='gray';
        shop.style.color='gray';
        yiyuan.style.color='gray';
        yinhang.style.color='gray';
        var map = new BMap.Map("mapContainer");         
        map.centerAndZoom(this.state.data[0].city, 12,1000);  
        
        // 创建地址解析器实例     
        var myGeo = new BMap.Geocoder();      
        // 将地址解析结果显示在地图上，并调整地图视野    
        myGeo.getPoint(this.state.data[0].address, function(point){      
                if (point) {  
                    map.centerAndZoom(point, 18);  
                    var local = new BMap.LocalSearch(map,   
                                    { renderOptions:{map: map, autoViewport: true}});      
                    local.searchNearby("公交",point,1000);
                    // var marker = new BMap.Marker(point); // 创建标注   
                    // map.addOverlay(marker); // 将标注添加到地图中
                }      
            }, this.state.data[0].city);

    }
    /**
     * 展示附近餐饮地图信息
     */
    toFood=()=>{
        var bus=document.getElementById('bus');
        var food=document.getElementById('food');
        var shop=document.getElementById('shop');
        var yinhang=document.getElementById('yinhang');
        var yiyuan=document.getElementById('yiyuan');
        bus.style.color='gray';
        food.style.color='#ff9645';
        shop.style.color='gray';
        yiyuan.style.color='gray';
        yinhang.style.color='gray';
        var map = new BMap.Map("mapContainer");         
        map.centerAndZoom(this.state.data[0].city, 11);      
        // 创建地址解析器实例     
        var myGeo = new BMap.Geocoder();      
        // 将地址解析结果显示在地图上，并调整地图视野    
        myGeo.getPoint(this.state.data[0].address, function(point){      
                if (point) {  
                    map.centerAndZoom(point, 18);  
                    var local = new BMap.LocalSearch(map,   
                                    { renderOptions:{map: map, autoViewport: true}});      
                    local.searchNearby("餐饮",point,1000);
                    // var marker = new BMap.Marker(point); // 创建标注   
                    // map.addOverlay(marker); // 将标注添加到地图中
                }      
            }, this.state.data[0].city);
    }
    /**
     * 展示附近购物地图信息
     */
    toShop=()=>{
        var bus=document.getElementById('bus');
        var food=document.getElementById('food');
        var shop=document.getElementById('shop');
        var yinhang=document.getElementById('yinhang');
        var yiyuan=document.getElementById('yiyuan');
        bus.style.color='gray';
        food.style.color='gray';
        shop.style.color='#ff9645';
        yiyuan.style.color='gray';
        yinhang.style.color='gray';
        var map = new BMap.Map("mapContainer");         
        map.centerAndZoom(this.state.data[0].city, 11);      
        // 创建地址解析器实例     
        var myGeo = new BMap.Geocoder();      
        // 将地址解析结果显示在地图上，并调整地图视野    
        myGeo.getPoint(this.state.data[0].address, function(point){      
                if (point) {  
                    map.centerAndZoom(point, 18);  
                    var local = new BMap.LocalSearch(map,   
                                    { renderOptions:{map: map, autoViewport: true}});      
                    local.searchNearby("购物",point,1000);
                    // var marker = new BMap.Marker(point); // 创建标注   
                    // map.addOverlay(marker); // 将标注添加到地图中
                }      
            }, this.state.data[0].city);
    }
    /**
     * 展示附近医院地图信息
     */
    toYiyuan=()=>{
        var bus=document.getElementById('bus');
        var food=document.getElementById('food');
        var shop=document.getElementById('shop');
        var yinhang=document.getElementById('yinhang');
        var yiyuan=document.getElementById('yiyuan');
        bus.style.color='gray';
        food.style.color='gray';
        shop.style.color='gray';
        yiyuan.style.color='#ff9645';
        yinhang.style.color='gray';
        var map = new BMap.Map("mapContainer");         
        map.centerAndZoom(this.state.data[0].city, 11);      
        // 创建地址解析器实例     
        var myGeo = new BMap.Geocoder();      
        // 将地址解析结果显示在地图上，并调整地图视野    
        myGeo.getPoint(this.state.data[0].address, function(point){      
                if (point) {  
                    map.centerAndZoom(point, 18);  
                    var local = new BMap.LocalSearch(map,   
                                    { renderOptions:{map: map, autoViewport: true}});      
                    local.searchNearby("医院",point,1000);
                    // var marker = new BMap.Marker(point); // 创建标注   
                    // map.addOverlay(marker); // 将标注添加到地图中
                }      
            }, this.state.data[0].city);
    }
    /**
     * 展示附近银行地图信息
     */
    toBank=()=>{
        var bus=document.getElementById('bus');
        var food=document.getElementById('food');
        var shop=document.getElementById('shop');
        var yinhang=document.getElementById('yinhang');
        var yiyuan=document.getElementById('yiyuan');
        bus.style.color='gray';
        food.style.color='gray';
        shop.style.color='gray';
        yiyuan.style.color='gray';
        yinhang.style.color='#ff9645';
        var map = new BMap.Map("mapContainer");         
        map.centerAndZoom(this.state.data[0].city, 11); 
             
       // 创建地址解析器实例     
       var myGeo = new BMap.Geocoder();      
       // 将地址解析结果显示在地图上，并调整地图视野    
       myGeo.getPoint(this.state.data[0].address, function(point){      
               if (point) {  
                   map.centerAndZoom(point, 18);  
                   var local = new BMap.LocalSearch(map,   
                                   { renderOptions:{map: map, autoViewport: true}});      
                   local.searchNearby("银行",point,1000);
                   // var marker = new BMap.Marker(point); // 创建标注   
                   // map.addOverlay(marker); // 将标注添加到地图中
               }      
           }, this.state.data[0].city);
    }
    render() {
        return (
            <div style={{height:'100%',width:'100%',}}>
                <div style={{width:'100%',display:'flex',position:'fixed',top:0,zIndex:2,textAlign:'center',background: 'linear-gradient(to right,#F55E7E, #F47B87, #F58B7F)',lineHeight:2}}>
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
                            <div id='bus' style={{ width: '100%', height: '35px', float: 'left', fontSize: 34, textAlign: 'center', color: 'gray' }} className='iconfont icon-jiaotong'></div>
                            <div style={{ width: '100%', height: '30px', float: 'left', textAlign: 'center' ,color: 'gray' }}>
                                <p>公交</p>
                            </div>
                        </div>
                        <div onClick={()=>this.toFood()} style={{ width: '20%', height: '65px', float: 'left', marginLeft: '2%', marginTop: '2%' }}>
                            <div  id='food' style={{ width: '100%', height: '35px', float: 'left', fontSize: 31, textAlign: 'center', color: 'gray' }} className='iconfont icon-canyin'></div>
                            <div style={{ width: '100%', height: '30px', float: 'left', textAlign: 'center' ,color: 'gray' }}>
                                <p>餐饮</p>
                            </div>
                        </div>
                        <div onClick={()=>this.toShop()} style={{ width: '20%', height: '65px', float: 'left', marginTop: '2%' }}>
                            <div id='shop' style={{ width: '100%', height: '35px', float: 'left', fontSize: 34, textAlign: 'center', color: 'gray' }} className='iconfont icon-shangdian-'></div>
                            <div style={{ width: '100%', height: '30px', float: 'left', textAlign: 'center',color: 'gray'  }}>
                                <p>购物</p>
                            </div>
                        </div>
                        <div onClick={()=>this.toBank()} style={{ width: '20%', height: '65px', float: 'left', marginTop: '2%' }}>
                            <div id='yinhang' style={{ width: '100%', height: '35px', float: 'left', fontSize: 34, textAlign: 'center', color: 'gray' }} className='iconfont icon-fangzu'></div>
                            <div style={{ width: '100%', height: '30px', float: 'left', textAlign: 'center',color: 'gray'  }}>
                                <p>银行</p>
                            </div>
                        </div>
                        <div onClick={()=>this.toYiyuan()} style={{ width: '20%', height: '65px', float: 'left', marginTop: '2%' }}>
                            <div id='yiyuan' style={{ width: '100%', height: '35px', float: 'left', fontSize: 34, textAlign: 'center', color: 'gray' }} className='iconfont icon-yiyuan'></div>
                            <div style={{ width: '100%', height: '30px', float: 'left', textAlign: 'center',color: 'gray'  }}>
                                <p>医院</p>
                            </div>
                        </div>
                    </Flex>
                </div>
            </div>
        )
    }
}
