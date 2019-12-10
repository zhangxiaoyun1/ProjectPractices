import React, { Component } from 'react'
import { Route, NavLink, Link, Switch } from 'react-router-dom';
import '../index.css'
import Analysis from './Analysis'
import Usermanager from './Usermanager'
import Housemanager from './Housemanager'
import Ordermanager from './Ordermanager'
import Platinfo from './Platinfo'
import Manager from './Manager'
import Expand from './Expand'
import Home from './Home'
import Tenants from './Tenants'
import Face from './Face';
export default class Content extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#f0f0f2', height: '1050px' }}>
                <div style={{ width: '100%', backgroundColor: '#f0f0f2' }}>
                    <div className='header'>
                        <img src={require('../images/15.png')} alt="" style={{ width: '150px', height: '80px' }} />
                        <span style={{ marginLeft: '30px', color: 'red', fontSize: '20px' }}>易·家管理平台</span>
                        <ul className='back'>
                            <li style={{ color: 'red' }}> <Link to='/' style={{ color: 'red' }}><img src={require('../images/退出.png')} alt="" style={{ height: '60%' ,marginRight:'10px'}}/>退出</Link></li>
                            <li>易·家</li>
                            <li><img src={require('../images/房子.png')} alt="" style={{ height: '100%', marginTop: '-5px' }} /></li>
                        </ul>
                    </div>
                </div>
                <div style={{ width: '1200px', height: '1050px', margin: '0 auto', backgroundColor: '#cccccc', padding: '20px' }}>
                    <div className='left'>
                        <ul style={{ borderBottom: '2px solid #cccccc' }}>
                            <li style={{fontWeight:'bold'}}><img src={require('../images/统计.png')} alt="" style={{ height: '50%', marginRight: '20px', marginLeft: '-70px'}} />统计</li>
                            <li><NavLink to='/content/analysis' activeStyle={{ color: '#fff', backgroundColor: 'red', padding: '15px 81px' }}>用户分析</NavLink></li>
                            <li></li>
                        </ul>
                        <ul style={{ borderBottom: '2px solid #cccccc', width: '100%' }}>
                            <li style={{fontWeight:'bold'}}><img src={require('../images/文件.png')} alt="" style={{ height: '50%', marginRight: '20px', marginLeft: '-70px' }} />管理</li>
                            <li style={{ height: '100%' }}><NavLink to='/content/usermanager' activeStyle={{ color: '#fff', backgroundColor: 'red', padding: '15px 81px' }}>用户管理</NavLink>
                                <Route path='/content/usermanager' component={Expand} />
                            </li>
                            <li><NavLink to='/content/housemanager' activeStyle={{ color: '#fff', backgroundColor: 'red', padding: '15px 67px' }}>房源信息管理</NavLink></li>
                            <li><NavLink to='/content/ordermanager' activeStyle={{ color: '#fff', backgroundColor: 'red', padding: '15px 81px' }}>订单管理</NavLink></li>
                            <li></li>
                        </ul>
                        <ul>
                            <li style={{fontWeight:'bold'}}><img src={require('../images/文件夹.png')} alt="" style={{ height: '50%', marginRight: '20px', marginLeft: '-70px' }} />开发</li>
                            <li><NavLink to='/content/platinfo' activeStyle={{ color: '#fff', backgroundColor: 'red', padding: '15px 81px' }}>平台信息</NavLink></li>
                            <li><NavLink to='/content/manager' activeStyle={{ color: '#fff', backgroundColor: 'red', padding: '15px 81px' }}>管理员</NavLink></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className='right'>
                        <Switch>
                            <Route exact path='/content' component={Face}/>
                            <Route path='/content/analysis' component={Analysis} />
                            <Route exact path='/content/usermanager' component={Usermanager} />
                            <Route path='/content/housemanager' component={Housemanager} />
                            <Route path='/content/ordermanager' component={Ordermanager} />
                            <Route path='/content/platinfo' component={Platinfo} />
                            <Route path='/content/manager' component={Manager} />
                            <Route exact path='/content/usermanager/home' component={Home} />
                            <Route path='/content/usermanager/tenants' component={Tenants} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}
