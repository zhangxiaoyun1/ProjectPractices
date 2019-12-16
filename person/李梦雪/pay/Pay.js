import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {WhiteSpace, WingBlank,Toast,} from 'antd-mobile';

export default class Pay extends Component {

    constructor(props){
        super(props);
        this.state={
            
            pwd:'请输入您的密码'
        }
    }

    
    changePwd = (e)=>{
        this.setState({
            pwd:e.target.value
        })
    }

    successToast = ()=> { 
        if(this.state.pwd ==='请输入您的密码' || this.state.pwd === ''){
            Toast.success('密码错误', 1);
        }
        else{
            Toast.success('支付成功！', 1);
        }
      }


    render() {
        return (
            <div>
                <div>
                    <div style={{display:'flex',textAlign:'center',backgroundColor:'#ff9645',lineHeight:2}}>
                        <Link to='/tradeDetail'>
                            <img src={require('./images/wrong.png')} style={{width:30,height:30,paddingTop:10}}/>
                        </Link>
                        <span style={{margin:'0 auto',fontSize:25,color:'white'}}>
                            确认付款
                        </span>      
                        {/* <Link to='/help'>
                            <img src={require('./images/help.png')} style={{width:30,height:30,float:'right',paddingTop:10,marginRight:'30%'}}/>
                        </Link>          */}
                    </div>
                </div>
                <div style={{textAlign:'center',marginTop:'20%'}}>
                    <span style={{fontSize:40}}>￥</span>
                    <span style={{fontSize:50,fontWeight:'bold'}}>{this.props.match.params.price.slice(6,10)}</span>
                </div>
                <div style={{height:'20%',width:'100%',marginTop:'8%'}}>
                    <span style={{float:'left',marginLeft:'5%'}}>支付宝账号</span>
                    <span style={{float:'right',marginRight:'5%'}}>{this.props.match.params.price.slice(17)}</span>
                </div>
                <br/>
                <hr style={{marginTop:'3%'}}/>
                <div style={{height:'20%',width:'100%',marginTop:'3%'}}>
                    <span style={{float:'left',marginLeft:'5%'}}>付款方式</span>
                    <span style={{float:'right',marginRight:'5%'}}>
                        <select>
                            <option>中国邮政储蓄银行卡</option>
                            <option>中国建设银行卡</option>
                            <option>中国农民银行卡</option>
                            <option>中国银行卡</option>
                        </select>
                    </span>
                </div>

                <br/>
                <hr style={{marginTop:'3%'}}/>
                <div style={{height:'20%',width:'100%',marginTop:'3%'}}>
                    <span style={{float:'left',marginLeft:'5%'}}>输入密码</span>
                    <span style={{float:'right'}}>
                        <input onChange={this.changePwd} style={{width:'80%'}} type='password' value={this.state.pwd}/>
                    </span>
                </div>



                <br/>
                <hr style={{marginTop:'3%'}}/>
                <div style={{textAlign:'center',marginTop:'30%'}} >
                    <input style={{textAlign:'center',width:'30%',height:'45px',backgroundColor:'#ff9645',fontSize:23,borderRadius:20}} type='button' onClick={this.successToast} value='提 交'/>
                </div>
            </div>
        )
    }
}
