import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { WhiteSpace, Button, WingBlank} from 'antd-mobile';
import  './realName.css'

export default class Realname extends Component {
    render() {
        return (
            <div style={{width:'100%',height:'100%'}}>
                <div style={{display:'flex',backgroundColor:'crimson',lineHeight:2,color:'white'}}>
                    <div>
                        <Link to='/item'>
                            <img src={require('./images/return.png')} style={{width:30,height:30,paddingTop:10,marginLeft:10,}}/>
                        </Link>
                    </div>
                    <div style={{margin:'0 auto'}}>
                        <span style={{fontSize:25,}}>
                            实名认证
                        </span>
                    </div>                   
               </div>
               <WhiteSpace/>
               <WhiteSpace/>
               <WhiteSpace />
               
               <div className='b2 '>
                   {/* <WingBlank> */}
                    <form action='/' method='POST'>
                        <span> 姓 名 ： </span>
                        <input name='realName' type='text' placeholder='与证件姓名一致' style={{backgroundColor:'antiquewhite',borderRadius:10,width:210,height:35}} />
                        <WhiteSpace/>
                        <span> 证 件 ： </span>
                        <input name='idCard' type='text' placeholder='请输入您的身份证号' style={{backgroundColor:'antiquewhite',borderRadius:10,width:210,height:35}} />
                        <WhiteSpace/>
                        <span> 性 别 ： </span>
                        <input name='sex' type='text' placeholder='请输入您的性别' style={{backgroundColor:'antiquewhite',borderRadius:10,width:210,height:35}} />
                        <WhiteSpace/>
                        <WhiteSpace />
                        <WhiteSpace />
                        <WhiteSpace />
                        <WhiteSpace />
                        <WhiteSpace />
                        <WhiteSpace />
                        <WhiteSpace />
                        
                        <Link to='/appTaber'><button type='submit' style={{backgroundColor:'crimson',fontSize:25,textAlign:'center',width:150,height:40,borderRadius:10,color:'white'}}>立即授权</button></Link>
                    </form>   
                   
               </div>
            </div>
        )
    }
}

