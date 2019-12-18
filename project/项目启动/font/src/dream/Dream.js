import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { WhiteSpace, WingBlank } from 'antd-mobile';
import './dream.css'
var dreamUser = JSON.parse(localStorage.getItem('key')).userid === undefined ? 0 : JSON.parse(localStorage.getItem('key')).userid;
export default class Dream extends Component {
    constructor() {
        super();
        this.state = {
            dream: []
        }
    }
    componentDidMount() {
        if (dreamUser !== 0) {
            var dreamMessage = JSON.parse(localStorage.getItem('key')).userid;
            console.log(dreamMessage);
            var dreamMessage1 = JSON.stringify({dreamMessage:dreamMessage});
            console.log(dreamMessage1);
            fetch('http://49.235.251.57:8000/api/getDream/'+ dreamMessage)
            .then((res)=>res.json())
            .then((res)=>{
                for (var i = 0; i < res.length; i++) {
                    var imagedata;
                    if (res[i].homeimage.indexOf(',') >= 0) {
                        imagedata = (res[i].homeimage).split(',');
                    } else {
                        imagedata = [];
                        imagedata[0] = res[i].homeimage;
                    }
                    res[i].homeimage = imagedata[0];
                    this.setState({
                        dream: res
                    });
                }
            })
        }
      
    }
    render() {
        return (
            <div style={{ width: '100%', height: '100%' }}>
                <div style={{ display: 'flex', textAlign: 'center', background: 'linear-gradient(to right,#F55E7E, #F47B87, #F58B7F)', lineHeight: 2 }}>
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
                                        <img style={{ width: '150px', height: '100px', marginTop: '6%' }} src={'http://49.235.251.57:8000/api/housess/' + `${item.homeimage}`} alt='' />
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
