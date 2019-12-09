import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class Expand extends Component {
    render() {
        return (
            <div>
                <ul style={{fontSize:'10px'}}>
                <li><NavLink to='/content/usermanager/home' activeStyle={{color:'#fff',backgroundColor:'red',padding:'15px 70px'}}>房主管理</NavLink></li>
                <li><NavLink to='/content/usermanager/tenants' activeStyle={{color:'#fff',backgroundColor:'red',padding:'15px 70px'}}>租客管理</NavLink></li>
                </ul>
            </div>
        )
    }
}
