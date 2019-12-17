import React, { Component } from 'react'
import BMap  from 'BMap';
export default class Map extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            locationvalue:'石家庄'
        }
    }
    /**
     * 初始化地图
     */
    componentDidMount(){
        fetch('http://49.235.251.57:8000/api/getLocation')
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res)
                this.setState({
                    locationvalue:res.msg.city
                })
                var map = new BMap.Map("mapContainer");
                map.centerAndZoom(res.msg.city, 13);
                 // 创建地址解析器实例     
                var myGeo = new BMap.Geocoder();      
                // 将地址解析结果显示在地图上，并调整地图视野    
                myGeo.getPoint(res.msg.city, function(point){      
                        if (point) {  
                            map.centerAndZoom(point, 18);  
                            var local = new BMap.LocalSearch(map,   
                                            { renderOptions:{map: map, autoViewport: true}});      
                            local.searchNearby("小区",point);
                        }      
                    }, res.msg.city);
            })   
    }
    getValue=() =>{
        var input = document.getElementById('iname').value;
        if(input===''){
            var map = new BMap.Map("mapContainer");
            map.centerAndZoom(this.state.locationvalue, 13);
            // 创建地址解析器实例     
            var myGeo = new BMap.Geocoder();      
            // 将地址解析结果显示在地图上，并调整地图视野    
            myGeo.getPoint(this.state.locationvalue, function(point){      
                    if (point) {  
                        map.centerAndZoom(point, 18);  
                        var local = new BMap.LocalSearch(map, {
                            renderOptions: {
                                map: map
                            }
                        });
                        // local.search(this.state.locationvalue);   
                        local.searchNearby("小区",point);
                    }      
                }, this.state.locationvalue);
        }else{
            var map = new BMap.Map("mapContainer");
            map.centerAndZoom(input, 13);
          map.enableScrollWheelZoom();
            // 创建地址解析器实例     
            var myGeo = new BMap.Geocoder();      
            // 将地址解析结果显示在地图上，并调整地图视野    
            myGeo.getPoint(input, function(point){      
                    if (point) {  
                        map.centerAndZoom(point, 18);  
                        var local = new BMap.LocalSearch(map, {
                            renderOptions: {
                                map: map
                            }
                        }); 
                        local.searchNearby("小区",point);
                    }      
                }, input);
        }
       
    }
    /**
     * 返回按钮
     */
    back=()=>{
        window.location.href="http://localhost:3000/#/appTaber"
    }
    render() {
        return (
            <div style={{height:'100%',width:'100%',}}>
                <div style={{width:'100%',display:'flex',position:'fixed',top:0,zIndex:2,textAlign:'center',background: 'linear-gradient(to right,#F55E7E, #F47B87, #F58B7F)',lineHeight:2}}>
                    <div onClick={()=>this.back()}>
                        <span className="iconfont icon-fanhui" style={{margin:'0 auto',fontSize:25,color:'white'}}></span>
                        <span style={{margin:'0 auto',fontSize:25,color:'white'}}>
                           地图找房
                        </span>
                    </div>
                </div>
                <div style={{height:51}}></div>
                <div style={{height:800}} className="mapContainer" id="mapContainer"></div>
                <div style={{ width: '100%', height: "65px", position: 'fixed', bottom: 0, backgroundColor: '#f5f5f9' }}>
                    <input id="iname" type='text' autoComplete="off" placeholder='请输入要查找城市' style={{backgroundColor:'antiquewhite',borderRadius:10,width:'55%',height:35,margin:"10px 0 0 25px"}} />
                    <button style={{width:'20%',height:35,backgroundColor:'antiquewhite',borderRadius:10,border:0,margin:'0 0 0 10px'}} id="search" onClick={()=>this.getValue()}>搜索</button>
                </div>
            </div>
        )
  }
}
