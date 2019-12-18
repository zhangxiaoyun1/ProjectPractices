import React, { Component } from 'react'
import './aticleDetail.css'
import { Link } from 'react-router-dom'
import { Flex, WingBlank, ActionSheet,Toast } from 'antd-mobile';


export default class AticleDetail extends Component {
    
    constructor() {
        super();
        this.state = {
            clicked2: 'none',
            article:[],
            title:'',
            content:'',
            author:'',
            addtime:'',
            clickcount:'',
            saycount:'',
            a:1,
            rentid:'',
            tag:'',
            inner:[],
            src:''
        }
        
    }

    
    componentDidMount() {
        
        fetch('http://49.235.251.57:8000/api/rentwiki')
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    article: res.msg
                },()=>{
                    var id = this.props.match.params.id.slice(3);
                    for(var i = 0; i < this.state.article.length; i++){
                        if(this.state.article[i].rentid == id){
                            var item = this.state.article[i];
                            this.setState({
                                title:item.title,
                                author:item.author,
                                content:item.content,
                                addtime:item.addtime,
                                clickcount:item.clickcount,
                                saycount:item.saycount,
                                rentid:item.rentid,
                                tag:item.tag
                            },()=>{
                                var essay =  this.state.content;
                                var essayList = essay.split('~');
                                this.paragraph(essayList);
                                
                            })
                        }
                    }
                    this.setState({
                        src:"./images/aticle_0"+id+".jpeg"
                    })
                })
            })
    }

    dataList = [
        { url: 'share.png', title: '发送给朋友' },
        { url: 'weibo.png', title: '新浪微博' },
        { url: 'friend.png', title: '生活圈' },
        { url: 'wechat.png', title: '微信好友' },
        { url: 'QQ.png', title: 'QQ' },
        { url: 'QQHome.png', title: '分享到QQ空间' },
        { url: 'link.png', title: '复制链接' },
        { url: 'fresh.png', title: '刷新' },
        { url: 'tell.png', title: '举报' }
    ].map(obj => ({
        icon: <img src={require('./images/' + `${obj.url}`)} alt={obj.title} style={{ width: 36 }} />,
        title: obj.title,
    }));
    showShareActionSheetMulpitleLine = () => {
        const data = [[this.dataList[0], this.dataList[1], this.dataList[2], this.dataList[3], this.dataList[4], this.dataList[5]], [this.dataList[6], this.dataList[7], this.dataList[8]]];
        ActionSheet.showShareActionSheetWithOptions({
            options: data,
            message: '分享至',
        },
            (buttonIndex, rowIndex) => {
                this.setState({ clicked2: buttonIndex > -1 ? data[rowIndex][buttonIndex].title : 'cancel' });
            });
    }
    changValue = ()=>{
        this.setState({
            tag:this.state.tag+1
        })
        var tag  = this.state.tag;
        var rentid = this.state.rentid;
        var notice = JSON.stringify({tag:tag,rentid:rentid});
        let url = "http://49.235.251.57:8000/api/notice";
        fetch(url,{
            method:'POST',
            body:notice,
            headers:new Headers({'Content-Type':'application/json'})
        })    
    }

    add = ()=>{
        this.setState({
            a:this.state.a+ 1
        },()=>{
            if(this.state.a%2!=0){
                this.setState({
                    clickcount:this.state.clickcount - 1
                },()=>{
                    var click = this.state.clickcount;
                    var rentid = this.state.rentid;
                    var count = JSON.stringify({click:click,rentid:rentid})
                    let url = "http://49.235.251.57:8000/api/click";
                    fetch(url,{
                        method:'POST',
                        body:count,
                        headers:new Headers({'Content-Type':'application/json'})
                    });
                    Toast.success('取消赞', 1);
                })
            } 
            else{
                this.setState({
                    clickcount:this.state.clickcount + 1
                },()=>{
                    var click = this.state.clickcount;
                    var rentid = this.state.rentid;
                    var count = JSON.stringify({click:click,rentid:rentid})
                    let url = "http://49.235.251.57:8000/api/click";
                    fetch(url,{
                        method:'POST',
                        body:count,
                        headers:new Headers({'Content-Type':'application/json'})
                    });
                    Toast.success('点赞成功', 1);
                })
            }
            
        })
        
    }

    paragraph = (text)=> {
        this.setState({
            inner:text
        })
    }
    

    render() {
        
        return (
            <div>
                <div className='aticleDetail_nav'>
                    <Link to='/rentWiki'><div style={{ fontSize: 26, color: 'white', lineHeight: '50px', marginLeft: '5%' }} className='iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu--copy'></div></Link>
                    <h2 className='aticleDetail_nav_h2'>内容详情</h2>
                    <div onClick={this.showShareActionSheetMulpitleLine} style={{ fontSize: 40, position: 'absolute', color: 'white', top: '4.5%', right: '4%' }} className='iconfont icon-shenglvehao'></div>
                </div>
                
                <WingBlank>
                    <div>
                        <div style={{ width: '100%' }}>
                            <h1>{this.state.title}</h1>
                        </div>
                        <div className='aticleDetail_div'>
                            <div style={{ float: 'left'}}>
                                <img className='actileDetail_img' src={require("./images/aticle_01.jpeg")}/>
                            </div>
                            <div style={{ float: 'left', width: '300px', height: "70px" }}>
                                <h4 style={{ fontSize: 22, marginLeft: '3%', marginTop: '3%' }}>{this.state.author}</h4>
                                <p style={{ fontSize: 14, marginLeft: '3%', marginTop: '3%', color: 'gray' }}>{this.state.addtime.slice(0,10)}</p>
                            </div>
                            <div onClick={this.changValue} style={{ width: '80px', height: '30px', border: '1px solid red', position: 'absolute', top: '5%', right: '2%', borderRadius: '20px', color: 'red', textAlign: 'center', lineHeight: '30px', fontSize: 18 }}>
                                
                                {
                                    this.state.tag%2==0?'已关注':'关注'
                                }
                            </div>
                        </div>
                        <div style={{ width: '100%', height: '200px' }}>
                            <img style={{ width: "100%", height: '200px' }} src={`${require("./images/actile_01.jpg")}`} />
                        </div>
                        <div style={{ width: '100%',lineHeight:1.6,fontSize:18,textIndent:'2em',textAlign:'justify'}} className='aticle_content'  >
                                {
                                    this.state.inner.map((item,idx)=>(
                                        <p>
                                            {item}
                                        </p>
                                    ))
                                }
                        </div>
                    </div>
                            
                </WingBlank>
                <div style={{height:'60px'}}></div>
                <WingBlank>
                    <Flex>
                        <div style={{ position: 'fixed', left:0, bottom: 0, height: '65px', backgroundColor: 'rgb(255, 242, 241)', width: '100%', textAlign:'center',}}>
                            <div className='actile_div1' onClick={this.add} style={{width:'30px',height:'30px',float:'left',margin:'3.5% 0% 0% 10%'}}></div>
                            <p style={{float:'left',margin:'5.5% 0% 0% 2%',fontSize:16}} >{this.state.clickcount}</p>
                            <img src={require("./images/weibo.png")} style={{width:35,height:35,margin:'3.5% 0% 0% 10%'}} />
                            <img src={require("./images/wechat.png")} style={{width:35,height:35,margin:'3.5% 0% 0% 10%'}} />
                            <img src={require("./images/QQ.png")} style={{width:35,height:35,margin:'3.5% 0% 0% 10%'}} />
                           
                        </div>
                    </Flex>
                </WingBlank>
            </div>
        )
    }
}
