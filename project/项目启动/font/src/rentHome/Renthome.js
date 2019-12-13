import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Select,Option, Flex, WhiteSpace, WingBlank } from 'antd-mobile';
import './rentHome.css';

export default class Renthome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: '位置',
            value2:'租金',
            value3:'户型',
            value4:'方式',
            data:[],
        };
        // this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        fetch('http://localhost:3001/api/house')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                data:res.msg
            });
        })
    }
    /**
     * 选择位置
     */
    handleChange1=(event)=> {
        var li1=document.getElementById('li1').value;
        var data2=[];
        fetch('http://localhost:3001/api/house')
        .then((res)=>res.json())
        .then((res)=>{
            
            for(var i=0;i<res.msg.length;i++){
                if(res.msg[i].city===li1){
                    console.log(res.msg[i].city);
                    data2=[...data2,res.msg[i]]
                }
            }
            this.setState({
                data:data2,
                value1: li1,
                value2:'租金',
                value3:'户型',
                value4:'方式',
            })
        })
    }
    /**
     * 选择租金
     */
    handleChange2=(event)=> {
        var li2=document.getElementById('li2').value;
        var data2=[];
        fetch('http://localhost:3001/api/house')
        .then((res)=>res.json())
        .then((res)=>{
            
            for(var i=0;i<res.msg.length;i++){
                if(res.msg[i].price===li2){
                    console.log(res.msg[i].type);
                    data2=[...data2,res.msg[i]]
                   
                }
            }
            this.setState({
                data:data2,
                value2: li2,
                value1: '位置',
                value3:'户型',
                value4:'方式',
            })
        })
    }
    /**
     * 选择房屋类型
     */
    handleChange3=(event)=> {
        var li3=document.getElementById('li3').value;
        var data2=[]
        fetch('http://localhost:3001/api/house')
        .then((res)=>res.json())
        .then((res)=>{
            
            for(var i=0;i<res.msg.length;i++){
                if(res.msg[i].hometype===li3){
                    console.log(res.msg[i].hometype);
                    data2=[...data2,res.msg[i]]
                   
                }
            } 
            this.setState({
                data:data2,
                value3: li3,
                value1: '位置',
                value2:'租金',
                value4:'方式',
            })
        })
    }
    /**
     * 选择租房类型
     */
    handleChange4=(event)=> {
        var li4=document.getElementById('li4').value;
        var data2=[];
        fetch('http://localhost:3001/api/house')
        .then((res)=>res.json())
        .then((res)=>{
            for(var i=0;i<res.msg.length;i++){
                if(res.msg[i].type===li4){
                    console.log(res.msg[i].type);
                    data2=[...data2,res.msg[i]];
                }
            }
            this.setState({
                data:data2,
                value4: li4,
                value1: '位置',
                value2:'租金',
                value3:'户型',
            })
        })
    }
    render() {
        return (
            <div>
                {/* 头 */}
                <div style={{display:'flex',textAlign:'center',backgroundColor:'#ff9645',lineHeight:2}}>
                    <Link to='/appTaber'>
                        <img src={require('./images/return.png')} style={{width:30,height:30,paddingTop:10}}/>
                    </Link>
                    <input onKeyDown={()=>this.search()} type='search' placeholder='你想住哪儿' style={{width:'60%',height:'30px',backgroundColor:'#f1f1f1',borderRadius:30,margin:'0 auto',marginTop:'2.8%',color:'#979797'}}/>
               </div>
                {/* 导航栏 */}
               <div style={{display:'flex',borderBottom:'0.5px solid #dfdfdf'}}>
                    <ul style={{width:'94%',margin:'0 auto'}}>
                        <li className='rentHome_li1'>
                            <select style={{width:'100%',color: 'grey'}} id="li1" value={this.state.value1} onChange={this.handleChange1}>
                                <option value='位置'>位置</option>
                                <option value='石家庄'>石家庄</option>
                                <option value='秦皇岛'>秦皇岛</option>
                                <option value='红旗大街'>红旗大街</option>

                            </select>
                        </li>
                        <li className='rentHome_li1'>
                            <select style={{width:'100%',color: 'grey'}} id="li2"  value={this.state.value2} onChange={this.handleChange2}>
                                <option value='租金'>租金</option>
                                <option value='1200/月'>1200/月</option>
                                <option value='2500/月'>2500/月</option>
                                <option value='3300'>3300/月</option>

                            </select>
                        </li>
                        <li className='rentHome_li1'>
                            <select style={{width:'100%',color: 'grey'}} id="li3" value={this.state.value3} onChange={this.handleChange3}>
                                <option value='户型'>户型</option>
                                <option value='一室一厅'>一室一厅</option>
                                <option value='两室一厅'>两室一厅</option>
                                <option value='三室一厅'>三室一厅</option>

                            </select>
                        </li>
                        <li className='rentHome_li1'>
                        <select style={{width:'100%',color: 'grey'}} id="li4" value={this.state.value4} onChange={this.handleChange4}>
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
                        this.state.data.map((item)=>(
                            <Link to={"/detail/"+item.homeid}>
                                <WingBlank>
                                <div style={{ width: '100%', border: '1px solid #f1f1f1', marginTop: '2%', height: '120px' }}>
                                    <div style={{ float: 'left' }}>
                                        <img style={{ width: '150px', height: '100px', marginTop: '6%' }} src={`${require('./images/1.jpg')}`} alt='' />
                                    </div>
                                    <div style={{ float: 'left', width: '190px', height: '120px' }}>
                                        <div className='home_p'>
                                            <span>{item.city}</span>
                                            <span style={{padding:'0 3px'}}>|</span>
                                            <span>{item.address}</span>
                                        </div>
                                        <div style={{ fontSize: '13px', marginLeft: '2%', color: 'gray', marginTop: '3%' }}>
                                            <span>{item.type}</span>
                                            <span style={{padding:'0 3px'}}>|</span>
                                            <span>{item.hometype}</span>
                                        </div>
                                        <div style={{ fontSize: '13px',height:'20px', marginLeft: '2%', color: 'gray', marginTop: '3%' }}>
                                            <p className="message3">朝向:{item.face}</p>
                                            <p className="message4">楼层:{item.floor}</p>
                                            <p className="message4">电梯:{item.lift}</p>
                                        </div>
                                        <div style={{height:'30px',display:'flex',margintTop:'10px'}}>
                                            <span style={{ fontSize: '17px', color: 'red', marginLeft: '2%', marginTop: '5%' ,float:'left'}}>{item.price}</span>
                                            <span style={{position:'relative',right:'-40%',top:'28%'}}><img style={{width:'20px'}} src={`${require('./images/love.png')}`}></img></span>
                                        </div>
                                    </div>
                                </div>
                                </WingBlank>
                            </Link>
                        ))
                    }
                    </div>                
            </div>
        )
    }
}
