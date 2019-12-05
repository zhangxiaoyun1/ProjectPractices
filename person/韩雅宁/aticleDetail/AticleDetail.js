import React, { Component } from 'react'
import './aticleDetail.css'
import { Link } from 'react-router-dom'
import { Flex, WingBlank, ActionSheet } from 'antd-mobile';
import { bold } from 'ansi-colors';

export default class AticleDetail extends Component {
    constructor() {
        super();
        this.state = {
            clicked2: 'none',
        }
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
    render() {
        return (
            <div>
                <div className='aticleDetail_nav'>
                    <Link to='/rentWiki'><div style={{ fontSize: 26, color: 'white', lineHeight: '50px', marginLeft: '5%' }} className='iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu--copy'></div></Link>
                    <h2 className='aticleDetail_nav_h2'>内容详情</h2>
                    <div onClick={this.showShareActionSheetMulpitleLine} style={{ fontSize: 40, position: 'absolute', color: 'white', top: '4.5%', right: '4%' }} className='iconfont icon-shenglvehao'></div>
                </div>
                <WingBlank>
                    <div style={{ width: '100%' }}>
                        <h1>上海滩的盖茨比之“租房手记”……</h1>
                    </div>
                </WingBlank>
                <WingBlank>
                    <div className='aticleDetail_div'>
                        <div style={{ float: 'left' }}>
                            <img className='actileDetail_img' src={`${require("./images/aticle_01.png")}`} />
                        </div>
                        <div style={{ float: 'left', width: '300px', height: "70px" }}>
                            <h4 style={{ fontSize: 22, marginLeft: '3%', marginTop: '3%' }}>潭水清澈</h4>
                            <p style={{ fontSize: 14, marginLeft: '3%', marginTop: '3%', color: 'gray' }}>2018.08.24 17:41:51 字数 4,334 阅读 48</p>
                        </div>
                        <div style={{ width: '50px', height: '30px', border: '1px solid red', position: 'absolute', top: '5%', right: '37%', borderRadius: '20px', color: 'red', textAlign: 'center', lineHeight: '30px', fontSize: 18 }}>
                            关注
                        </div>
                    </div>
                </WingBlank>
                <WingBlank>
                    <div style={{ width: '100%', height: '200px' }}>
                        <img style={{ width: "340px", height: '200px' }} src={`${require("./images/actile_01.jpg")}`} />
                    </div>
                </WingBlank>
                <WingBlank>
                    <div style={{ width: '100%' }}>
                        <p style={{ fontSize: 18, lineHeight: 1.5, fontWeight: 'bold' }}>关于“租房这件事，我已经无感了。来上海奋斗之前，我确定我短时间内买不起房，来上海之后，我确定我很长时间内买不起房。从一个文艺青年的角度讲，我一直固执地认为我不需要房，我的理想是30岁之前去世界的每一个角落看看。但从现实主义角度来看，实质上我就是一个逃避现实的穷逼。
                        </p>
                    </div>
                </WingBlank>
                <WingBlank>
                    <div style={{ width: '100%', height: '20px', border: '1px solid #f1f1f1' }}>
                        <p style={{ fontSize: 18, color: '#ff9645', fontWeight: bold }}>1</p>
                    </div>
                    <div style={{ width: '100%' }}>
                        <p style={{ lineHeight: '1.8', fontSize: 16 }}>
                            去年的夏天还很热，我和H一同离开了家乡，来到了上海。在坐了26个小时绿皮火车之后，我们第一站先是去了江苏昆山暂时落脚。印象中那天的昆山天气十分闷热，空气中弥漫的那股湿热似乎要让人抑郁。
                        </p>
                        <p style={{ lineHeight: '1.8', fontSize: 16, marginTop: '2%' }}>
                            在她姐的带领下，我们在街头吃了水煮鱼和螺丝，晚上就在昆山找住宿之地，她姐带我们去自己住的单元楼下面的居民房找住宿的地方。单元楼下几乎每走一段路都会碰到写着租房信息的牌子，俨然一个三无旅馆，但却似乎很适合那些在底层谋生活的人。
                        </p>
                        <p style={{ lineHeight: '1.8', fontSize: 16, marginTop: '2%' }}>
                            在她姐的带领下，我们在街头吃了水煮鱼和螺丝，晚上就在昆山找住宿之地，她姐带我们去自己住的单元楼下面的居民房找住宿的地方。单元楼下几乎每走一段路都会碰到写着租房信息的牌子，俨然一个三无旅馆，但却似乎很适合那些在底层谋生活的人。
                        </p>
                        <p style={{ lineHeight: '1.8', fontSize: 16, marginTop: '2%' }}>
                            在她姐的带领下，我们在街头吃了水煮鱼和螺丝，晚上就在昆山找住宿之地，她姐带我们去自己住的单元楼下面的居民房找住宿的地方。单元楼下几乎每走一段路都会碰到写着租房信息的牌子，俨然一个三无旅馆，但却似乎很适合那些在底层谋生活的人。
                        </p>
                    </div>
                </WingBlank>
                <WingBlank>
                    <Flex>
                        <div style={{ position: 'fixed', left:0, bottom: 0, height: '65px', backgroundColor: '#fff', width: '100%' }}>
                            <input defaultValue='写评论' type='text' style={{width:'180px',height:'40px',backgroundColor:'#f1f1f1',borderRadius:'13px',marginTop:'3%',marginLeft:'2%',float:'left'}}/>
                            <div className='actile_div' style={{width:'30px',height:'30px',float:'left',margin:'3.3% 0% 0% 2%'}}></div>
                            <p style={{float:'left',margin:'5.5% 0% 0% 2%',fontSize:16}}>评论 0</p>
                            <div className='actile_div1' style={{width:'30px',height:'30px',float:'left',margin:'3.3% 0% 0% 2%'}}></div>
                            <p style={{float:'left',margin:'5.5% 0% 0% 2%',fontSize:16}}>赞 0</p>
                        </div>
                    </Flex>
                </WingBlank>
            </div>
        )
    }
}
