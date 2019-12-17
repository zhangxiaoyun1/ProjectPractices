import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { WhiteSpace} from 'antd-mobile';
import  './realName.css'

export default class Realname extends Component {
    constructor(props){
        super(props);
        this.state={
            text:'',
        }
    }
    /**
     * 实名认证函数
     */
    realItem=()=>{
        var realname=document.getElementById("realname").value;
        var phone=document.getElementById("phone").value;
        var idcard=document.getElementById("idcard").value;
        var sex=document.getElementById("sex").value;
        //传给后端的数据
        let data={
            realname:realname,//真实姓名
            phone:phone,//手机号
            idcard:idcard,//身份证号
            sex:sex,//性别
        }
        //将对象转换为字符串传递
        var send=JSON.stringify(data);
        console.log(send)
        fetch('http://49.235.251.57:8000/api/user/real',{
            method: 'POST', 
            body: send, // data can be `string` or {object}!
            headers: new Headers({
                'Content-Type': 'application/json'
                })
        })
        .then((res)=>res.json())
        .then((res)=>{
            //接收响应信息，如果为true,则跳转我的页面
           if(res.ok===true){
                localStorage.setItem('key',JSON.stringify(res.msg))
                window.location.href="http://localhost:3000/#/appTaber"
           }else{
            this.setState({
                text:res.msg
            })
            window.location.href="http://localhost:3000/#/realName"
           }
        }).catch(function(err){
            console.log(err);
        })
    }
    render() {
        return (
            <div style={{width:'100%',height:'100%'}}>
                <div style={{display:'flex',background: 'linear-gradient(to right,#F55E7E, #F47B87, #F58B7F)',lineHeight:2,color:'white'}}>
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
               {/* 实名认证信息填写 */}
               <div className='b2 '>
                   {/* <WingBlank> */}
                    <span> 姓 名 ： </span>
                    <input name='realName' id="realname" type='text' autocomplete="off" placeholder='与证件姓名一致' style={{backgroundColor:'antiquewhite',borderRadius:10,width:210,height:35}} />
                    <WhiteSpace/>
                    <span> 手机号 ： </span>
                    <input name='phone' id="phone" type='text' autocomplete="off" placeholder='请输入您的手机号' style={{backgroundColor:'antiquewhite',borderRadius:10,width:210,height:35}} />
                    <WhiteSpace/>
                    <span> 证 件 ： </span>
                    <input name='idCard' id="idcard" type='text' autocomplete="off" placeholder='请输入您的身份证号' style={{backgroundColor:'antiquewhite',borderRadius:10,width:210,height:35}} />
                    <WhiteSpace/>
                    <span> 性 别 ： </span>
                    <input name='sex' id="sex" type='text' autocomplete="off" placeholder='请输入您的性别' style={{backgroundColor:'antiquewhite',borderRadius:10,width:210,height:35}} />
                    <WhiteSpace/>
                    <WhiteSpace />
                    <WhiteSpace />
                    <WhiteSpace />
                    <WhiteSpace />
                    <WhiteSpace />
                    <WhiteSpace />
                    <WhiteSpace />
                    <button onClick={()=>this.realItem()} style={{backgroundColor:'crimson',fontSize:25,textAlign:'center',width:"35%",margin:'0 auto',height:40,borderRadius:19,color:'white'}}>立即授权</button>
        <p style={{width:"70%",margin:'5% auto 0 auto',color:'#8a8787'}}>{this.state.text}</p>
               </div>
            </div>
        )
    }
}

