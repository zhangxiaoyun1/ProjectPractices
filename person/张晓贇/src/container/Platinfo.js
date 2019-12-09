import React, { Component } from 'react'
import '../index.css'
export default class Platinfo extends Component {
    render() {
        return (
            <div style={{ padding: '10px' }}>
                <div style={{ borderBottom: '1px solid #e0e0e0', padding: '10px' }}>
                    <p style={{ color: '#707070', fontWeight: '500', fontSize: '15px' }}>平台信息</p>
                    <p style={{ fontWeight: '600', marginLeft: '10px' }}>平台信息</p>
                </div>
                <div style={{ width: '50%', height: '100px', padding: '30px' }}>
                    <ul>
                        <li>
                            <span className='title'>平台名称：</span><span>易·家管平台</span>
                        </li>
                        <li style={{ marginTop: '20px' }}>
                            <span className='title'>&nbsp;&nbsp;&nbsp;联系人：</span><span>张好看</span>
                        </li>
                        <li style={{ marginTop: '20px' }}>
                            <span className='title'>联系电话：</span><span>18219475896</span>
                        </li>
                        <li style={{ marginTop: '20px' }}>
                            <span className='title'>固定电话：</span><span>400-233-5685</span>
                        </li>
                        <li style={{ marginTop: '20px' }}>
                            <span className='title'>产品描述：</span><span>手机APP的出现节省了人们大量的时间，既方便了租客也方便了房主，便捷的使用方式，是租房类手机APP逐渐成为房屋租赁的主流。</span>
                        </li>
                        <li style={{ marginTop: '20px' }}>
                            <span className='title'>开发人员：</span><span>王莹莹、张晓贇、李梦雪、韩雅宁</span>
                        </li>
                        <li style={{ marginTop: '20px' }}>
                            <span className='title'>开发时间：</span><span>2019-11-11——目前</span>
                        </li>
                        <li style={{ marginTop: '20px' }}>
                            <span className='title'>所属区域：</span><span>石家庄</span><span>裕华区</span>
                        </li>
                        <li style={{ marginTop: '20px' }}>
                            <span className='title'>详细地址：</span><span>河北省石家庄市裕华区裕翔街道南二环东路20号</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
