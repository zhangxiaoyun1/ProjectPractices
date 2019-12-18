import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './about.css'

export default class About extends Component {
    render() {
        return (
            <div>
                <div style={{ display: 'flex', textAlign: 'center', background:  'linear-gradient(to right,#F55E7E, #F47B87, #F58B7F)', lineHeight: 2 }}>
                    <Link to='/appTaber'>
                        <img src={require('./images/return.png')} style={{ width: 30, height: 30, paddingTop: 10 }} />
                    </Link>
                    <span style={{ margin: '0 auto', fontSize: 25, color: 'white' }}>
                        关于我们
                    </span>
                </div>
                <div className='about_div1'>
                    <img className='about_img' src={require('./images/house.png')} />
                    <p className="about_p1" >易·家</p>
                    
                </div>
                <div className="about_div2" >
                    <p>我们是易·家的创始人，我们是在城市拼搏的年轻人， 我们创立易·家，想让和我们一样在外拼搏的伙伴们， 能够轻松租房，乐享一座城。</p>
                    <p>我们核实每套房源，实拍照片；我们承诺租客， 永远“免佣”；我们提供，“月付”房租服务； 在易·家平台，一键签约交租交费，信用卡、支 付宝、微信全支持，还有红包和福利。为了让你住的更好， 我们一直在努力……</p>
                    <p>有问题随时联系我们哦~</p>         
                </div>
                <div className="about_div3" >
                    <p className='about_p2' > 客服电话：<span style={{color:'#F58B7F'}}>10205020</span></p>
                </div>
            </div>
        )
    }
}
