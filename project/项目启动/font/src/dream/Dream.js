import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { WhiteSpace, WingBlank } from 'antd-mobile';
import './dream.css'

export default class Dream extends Component {
    constructor() {
        super();
        this.state = {
            dream: []
        }
    }
    componentDidMount() {
        var dreamMessage = JSON.parse(localStorage.getItem('key')).userid;
        var dreamUserid = JSON.stringify({ dreamMessage: dreamMessage });
        let url = `http://localhost:3001/api/getDream/` + dreamUserid;
        fetch(url, {
            method: 'GET',
            headers: new Headers({ 'Content-Type': 'application/json' })
        })
            .then((res) => res.json())
            .then((res) => {
                // console.log(res.msg);
                this.setState({
                    dream: res.msg
                })
            })

    }
    render() {
        return (
            <div style={{ width: '100%', height: '100%' }}>
                <div style={{ display: 'flex', textAlign: 'center', backgroundColor: '#ff9645', lineHeight: 2 }}>
                    <span style={{ margin: '0 auto', fontSize: 25, color: 'white' }}>
                        心愿单
                    </span>
                </div>
                <WingBlank>
                    {
                        this.state.dream.map((item, idx) => (
                            <Link key={idx} to={"/detail/" + item.homeid}>
                                <div style={{ width: '100%', border: '1px solid #f1f1f1', marginTop: '2%', height: '120px' }}>
                                    <div style={{ float: 'left' }}>
                                        <img style={{ width: '150px', height: '100px', marginTop: '6%' }} src={`${require('./images/home_08.jpg')}`} alt='' />
                                    </div>
                                    <div style={{ float: 'left', width: '190px', height: '120px' }}>
                                        <div className='dream_p'>
                                            <span>{item.city}</span>
                                            <span style={{ padding: '0 3px' }}>|</span>
                                            <span>{item.address}</span>
                                        </div>
                                        <div style={{ fontSize: '13px', marginLeft: '2%', color: 'gray', marginTop: '3%' }}>
                                            <span>{item.type}</span>
                                            <span style={{ padding: '0 3px' }}>|</span>
                                            <span>{item.hometype}</span>
                                        </div>
                                        <div style={{ fontSize: '13px', height: '20px', marginLeft: '2%', color: 'gray', marginTop: '3%' }}>
                                            <p className="message3">朝向:{item.face}</p>
                                            <p className="message4">楼层:{item.floor}</p>
                                            <p className="message4">电梯:{item.lift}</p>
                                        </div>
                                        <div style={{ height: '30px', display: 'flex', margintTop: '10px' }}>
                                            <span style={{ fontSize: '17px', color: 'red', marginLeft: '2%', marginTop: '5%', float: 'left' }}>{item.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </WingBlank>
            </div>
        )
    }
}
