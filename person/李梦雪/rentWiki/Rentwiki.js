import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {WhiteSpace, WingBlank} from 'antd-mobile';
import './rentWiki.css'

export default class Rentwiki extends Component {
    render() {
        return (
            <div style={{height:'100%',width:'100%',}}> 
                <div style={{display:'flex',textAlign:'center',backgroundColor:'#ff9645',lineHeight:2}}>
                    <Link to='/appTaber'>
                        <img src={require('./images/return.png')} style={{width:30,height:30,paddingTop:10}}/>
                    </Link>
                    <span style={{margin:'0 auto',fontSize:25,color:'white'}}>
                        租房百科
                    </span>
               </div>
               <div>
                   <img src={require("./images/wiki.JPG")} style={{width:'100%',height:150}}/>
               </div>
               <WhiteSpace/>
               <hr/>
               <WingBlank>
                   <Link to='/aticleDetail'>
                    <div>
                        <div className='title1' >
                            上海滩的盖茨比之“租房手记”,发现生活
                        </div>
                        <div className='content'>
                             关于“租房这件事，我已经无感了。来上海奋斗之前，我确定我短时间内买不起房，来上海之后，
                             我确定我很长时间内买不起房。从一个文艺青年的角度讲，我一直
                        </div>
                        <div className='bottom'>
                            <span className='author'>潭水清澈</span>
                            <span className='count'>
                                <img src={require('./images/message.png')}/>
                            </span>
                            <span style={{color:'#333333'}}>122</span>
                            <span className='count'>
                                <img src={require('./images/heart.png')}/>
                            </span>
                            <span style={{color:'#333333'}}>333</span>
                        </div>
                    </div>
                </Link>
              </WingBlank>
              <WhiteSpace/>
              <WhiteSpace/>
              
              <hr/>
               <WingBlank>
               <Link to='/aticleDetail'>
                    <div>
                        <div className='title1' >
                            上海滩的盖茨比之“租房手记”,发现生活
                        </div>
                        <div className='content'>
                             关于“租房这件事，我已经无感了。来上海奋斗之前，我确定我短时间内买不起房，来上海之后，
                             我确定我很长时间内买不起房。从一个文艺青年的角度讲，我一直
                        </div>
                        <div className='bottom'>
                            <span className='author'>潭水清澈</span>
                            <span className='count'>
                                <img src={require('./images/message.png')}/>
                            </span>
                            <span style={{color:'#333333'}}>122</span>
                            <span className='count'>
                                <img src={require('./images/heart.png')}/>
                            </span>
                            <span style={{color:'#333333'}}>333</span>
                        </div>
                    </div>
                </Link>
              </WingBlank>
              <WhiteSpace/>
              <WhiteSpace/>
              <hr/>
               <WingBlank>
               <Link to='/aticleDetail'>
                    <div>
                        <div className='title1' >
                            上海滩的盖茨比之“租房手记”,发现生活
                        </div>
                        <div className='content'>
                             关于“租房这件事，我已经无感了。来上海奋斗之前，我确定我短时间内买不起房，来上海之后，
                             我确定我很长时间内买不起房。从一个文艺青年的角度讲，我一直
                        </div>
                        <div className='bottom'>
                            <span className='author'>潭水清澈</span>
                            <span className='count'>
                                <img src={require('./images/message.png')}/>
                            </span>
                            <span style={{color:'#333333'}}>122</span>
                            <span className='count'>
                                <img src={require('./images/heart.png')}/>
                            </span>
                            <span style={{color:'#333333'}}>333</span>
                        </div>
                    </div>
                </Link>
              </WingBlank>
              <WhiteSpace/>
              <WhiteSpace/>
              <hr/>
               <WingBlank>
               <Link to='/aticleDetail'>
                    <div>
                        <div className='title1' >
                            上海滩的盖茨比之“租房手记”,发现生活
                        </div>
                        <div className='content'>
                             关于“租房这件事，我已经无感了。来上海奋斗之前，我确定我短时间内买不起房，来上海之后，
                             我确定我很长时间内买不起房。从一个文艺青年的角度讲，我一直
                        </div>
                        <div className='bottom'>
                            <span className='author'>潭水清澈</span>
                            <span className='count'>
                                <img src={require('./images/message.png')}/>
                            </span>
                            <span style={{color:'#333333'}}>122</span>
                            <span className='count'>
                                <img src={require('./images/heart.png')}/>
                            </span>
                            <span style={{color:'#333333'}}>333</span>
                        </div>
                    </div>
                </Link>>
              </WingBlank>
              <WhiteSpace/>
              <WhiteSpace/>

            </div>
        )
    }
}
