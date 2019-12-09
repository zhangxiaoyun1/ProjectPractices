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
        fetch('http://localhost:3001/api/rentwiki')
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
                <div style={{ display: 'flex', textAlign: 'center', backgroundColor: '#ff9645', lineHeight: 2 }}>
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
                            return (
                                <Link key={idx} to='/aticleDetail'>
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
                                    <div className='rentwiki_detail' style={{ marginTop: "1.5%" }}>
                                        <span className='author'>{item.author}</span>
                                        <span style={{ marginLeft: "3%" }}>
                                            <img style={{ width: '18px', height: "18px" }} src={require('./images/message.png')} />
                                        </span>
                                        <span style={{ color: '#333333', fontSize: '14px', marginLeft: '1%' }}>{item.saycount}</span>
                                        <span>
                                            <img style={{ width: '18px', height: '18px', marginLeft: "1%" }} src={require('./images/heart.png')} />
                                        </span>
                                        <span style={{ color: '#333333', marginLeft: '1%' }}>{item.clickcount}</span>
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
