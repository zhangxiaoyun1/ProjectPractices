import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {List, NavBar, Icon,WhiteSpace, WingBlank,Toast,} from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;
export default class CityList extends Component {

    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }

    componentDidMount(){
       
    }
   
    back=()=>{
        window.location.href = "http://localhost:3000/#/appTaber"
    }

    render() {
        return (
            <div>
                <NavBar
                mode="light"
                icon={<i onClick={()=>this.back()} style={{color:'gray'}} className="iconfont icon-fork"></i>}
                onLeftClick={() => console.log('onLeftClick')}
                >选择城市</NavBar>
                <div style={{width:'100%',height:'30px',color:'#797979' ,backgroundColor:'#f8f6f6',borderTop:'1px solid #f8f6f6',borderBottom:'1px solid #f8f6f6'}}>
                    <WhiteSpace/>
                    <WingBlank>
                        <p>当前定位城市</p>
                    </WingBlank>
                    
                </div>
                <List className="my-list">
                    <Item>石家庄市</Item>
                </List>
                <div style={{width:'100%',height:'30px',color:'#797979' ,backgroundColor:'#f8f6f6',borderTop:'1px solid #f8f6f6',borderBottom:'1px solid #f8f6f6'}}>
                    <WhiteSpace/>
                    <WingBlank>
                        <p>热门城市</p>
                    </WingBlank>
                </div>
                <List className="my-list">
                    <Item>秦皇岛</Item> 
                    <Item>北京</Item>
                    <Item>张家口</Item> 
                    <Item>天津</Item>
                </List>
            </div>
        )
    }
}
