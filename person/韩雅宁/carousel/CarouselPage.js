import React, { Component } from 'react'
import 'antd-mobile/dist/antd-mobile.css';
import './carousel.css'
import { Carousel } from 'antd-mobile';
import {Link} from 'react-router-dom'


export default class CarouselPage extends Component {
    constructor() {
        super();
        this.state = {
            data: ['carousel_01.jpg', 'carousel_02.jpg', 'carousel_03.jpg', 'carousel_04.png', 'carousel_05.jpg'],
            hei: window.innerHeight
        }
    }
    render() {
        return (
            <div className='carousel_page' style={{ height: this.state.hei, overflow: 'hidden' }}>
                <Carousel
                    autoplay={false}
                >
                    {this.state.data.map(val => (
                        `${ val }` === 'carousel_05.jpg' ?
                            <a
                                key={val}
                                href="http://www.alipay.com"
                                style={{ float: 'left', width: '100%', height: this.state.hei, background: 'url(' + require('./images/' + `${val}`) + ') no-repeat center/cover' }}
                            >
                                <Link to='/appTaber'><button className='carousel_btn'>跳过</button></Link>
                            </a>
                            :
                            <a
                                key={val}
                                href="http://www.alipay.com"
                                style={{ float: 'left', width: '100%', height: this.state.hei, background: 'url(' + require('./images/' + `${val}`) + ') no-repeat center/cover' }}
                            >
                            </a>
                    ))}
                </Carousel>
            </div>
        )
    }
}
