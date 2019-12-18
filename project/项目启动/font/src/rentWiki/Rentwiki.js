import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { WhiteSpace, WingBlank } from 'antd-mobile';
import './rentWiki.css'

export default class Rentwiki extends Component {
    constructor() {
        super();
        this.state = {
            wikiDetail: []
        }
    }
    componentDidMount() {
        fetch('http://49.235.251.57:8000/api/rentwiki')
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    wikiDetail: res.msg
                })
            })
    }
    render() {
        return (
            <div style={{ height: '100%', width: '100%', }}>
                <div style={{ display: 'flex', textAlign: 'center', background:  'linear-gradient(to right,#F55E7E, #F47B87, #F58B7F)', lineHeight: 2 }}>
                    <Link to='/appTaber'>
                        <img src={require('./images/return.png')} style={{ width: 30, height: 30, paddingTop: 10 }} />
                    </Link>
                    <span style={{ margin: '0 auto', fontSize: 25, color: 'white' }}>
                        租房百科
                    </span>
                </div>
                <div>
                    <img src={require("./images/wiki.JPG")} style={{ width: '100%', height: 150 }} />
                </div>
                <WhiteSpace />
                <WingBlank>
                    {
                        this.state.wikiDetail.map((item, idx) => {
                            let path = '/aticleDetail/id='+item.rentid;
                            return (
                                <Link key={idx} to={path}>
                                <div  className='rent_line'>
                                    <div  className='title1'>
                                        {
                                            item.title
                                        }
                                    </div>
                                    <div className='content'>
                                        {
                                            item.content
                                        }
                                    </div>
                                    <div className='rentwiki_detail' style={{ marginTop: "2%" ,marginBottom:'3%'}}>
                                        <span className='author'>{item.author}</span>
                                        <span style={{float:'right',display:'inline-flex',marginRight:'5%'}}>
                                            <img style={{ width: '22px', height: '22px', }} src={require('./images/heart.png')} />
                                            <span style={{ color: '#333333', fontSize:20,fontWeight:200,marginLeft:'20%' }}>{item.clickcount}</span>
                                        </span>
                                        
                                    </div>
                                </div>
                                </Link>
                            )
                        })
                    }
                </WingBlank>
            </div>
        )
    }
}
