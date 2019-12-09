import React, { Component } from 'react'
import './addhome.css'
import {Link} from 'react-router-dom'



export default class AddHome extends Component {
    render() {
        return (
            <div>
                <div className='addhome_nav'>
                    <Link to='/appTaber'><div style={{ fontSize: 26, color: 'white', lineHeight: '50px', marginLeft: '5%' }} className='iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu--copy'></div></Link>
                    <h2 className='addhome_nav_h2'>添加住房</h2>
                </div>
                <div>
                    <form action='/' method='POST' className='form-inline'>
                        <div className="form-group">
                            <label className='addhome_label'>房主姓名:</label>
                            <input className='addhome_input' style={{ paddingLeft: '3%', color: 'gray' }} type='text' name='username' value='输入房主姓名' />
                        </div>
                        <div className='form-group'>
                            <label className='addhome_label'>手  机  号:</label>
                            <input style={{ paddingLeft: '3%', color: 'gray', marginLeft: '4%' }} className='addhome_input' type='telephone' name='userTelephone' value='请输入正确手机号' />
                        </div>
                        <div className='form-group'>
                            <label className='addhome_label'>价<span style={{ marginLeft: '9%' }}>格</span>:</label>
                            <input style={{ paddingLeft: '3%', color: 'gray', marginLeft: '4%' }} type='text' className='addhome_input1' name='userPrice' value='请输入房屋的价格' />
                        </div>
                        <div className='form-group' style={{ marginTop: '3%' }}>
                            <label className='addhome_label'>城 <span style={{ marginLeft: '7%' }}>市:</span></label>
                        </div>
                        <div className='form-group'>
                            <label className='addhome_label'>小 <span style={{ marginLeft: '7%' }}>区：</span></label>
                            <input style={{ paddingLeft: '3%', color: 'gray' }} type='text' className='addhome_input2' name='userAddress' value='请输入详细地址' />
                        </div>
                        <fieldset className='addhome_fieldset'>
                            <legend style={{ fontSize: 24 }}>具体表述</legend>
                            <div className='form-group'>
                                <label style={{ fontSize: 18, marginLeft: '2%' }}>类型:</label>
                                <select name='userType' style={{ width: '60px', height: '30px', marginLeft: '2%', backgroundColor: 'antiquewhite' }}>
                                    <option>单租</option>
                                    <option>整租</option>
                                </select>
                                <label style={{ marginLeft: '10%', fontSize: 18 }}>户型:</label>
                                <input name='userHomeType' style={{ width: '75px', height: '31px', marginLeft: '3%', border: 'none', background: 'none', backgroundColor: 'antiquewhite', border: '1px solid gray' }} value='如三室两厅' />
                            </div>
                            <div className='form-group' style={{ marginTop: '4%', marginLeft: '2%' }}>
                                <label style={{ fontSize: 18 }}>楼层:</label>
                                <input name='userFloor' style={{ width: '57px', height: '30px', marginLeft: '2%', border: 'none', border: '1px solid gray', background: 'none', backgroundColor: 'antiquewhite' }} value='1层' />
                                <label style={{ marginLeft: '10%', fontSize: 18 }}>朝向:</label>
                                <select name='userFloor' style={{ width: '60px', height: '30px', marginLeft: '4%', backgroundColor: 'antiquewhite' }}>
                                    <option>东</option>
                                    <option>南</option>
                                    <option>西</option>
                                    <option>北</option>
                                </select>
                            </div>
                            <div className='form-group' style={{ marginTop: '4%', marginLeft: '2%' }}>
                                <label style={{ fontSize: 18 }}>电梯:</label>
                                <select name='userLift' style={{ width: '60px', height: '30px', marginLeft: '2%', border: 'none', border: '1px solid gray', background: 'none', backgroundColor: 'antiquewhite' }}>
                                    <option>有</option>
                                    <option>无</option>
                                </select>
                                <label style={{ marginLeft: '10%', fontSize: 18 }}>WIFI:</label>
                                <select name='userWifi' style={{ width: '60px', height: '30px', marginLeft: '2%', border: 'none', border: '1px solid gray', background: 'none', backgroundColor: 'antiquewhite' }} >
                                    <option>有</option>
                                    <option>无</option>
                                </select>
                            </div>
                            <div className='form-group' style={{ marginTop: '4%', marginLeft: '2%' }}>
                                <label style={{ fontSize: 18 }}>供暖:</label>
                                <select name='userHeating' style={{ width: '60px', height: '30px', marginLeft: '2%', border: 'none', border: '1px solid gray', background: 'none', backgroundColor: 'antiquewhite' }}>
                                    <option>有</option>
                                    <option>无</option>
                                </select>
                                <label style={{ marginLeft: '10%', fontSize: 18 }}>空调:</label>
                                <select name='userCon' style={{ width: '60px', height: '30px', marginLeft: '2%', border: 'none', border: '1px solid gray', background: 'none', backgroundColor: 'antiquewhite' }} >
                                    <option>有</option>
                                    <option>无</option>
                                </select>
                            </div>
                            <div className='form-group' style={{marginTop:'4%',marginLeft:'2%'}}>
                                <label style={{fontSize:18}}>其他:</label>
                                <input style={{width:'230px',height:'140px',marginTop:'2%',marginLeft:'2%',border:'none',background:'none',border:'1px solid gray',background:'antiquewhite'}}/>
                            </div>
                        </fieldset>
                        <Link to='/rentHome'><input name='submit' type='submit' style={{marginTop:'4%',marginLeft:'70%',fontSize:18,color:'#ffffff',width:'80px',height:'40px',border:'none',background:'none',border:'1px solid #ffffff',background:'#ff9645'}}/></Link>
                    </form>
                </div>
            </div>
        )
    }
}
