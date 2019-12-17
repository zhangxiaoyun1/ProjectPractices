import React, { Component } from 'react'
import Home from '../Home/Home'
import Dream from '../dream/Dream'
import Message from  '../message/Message'
import My from '../my/My';
import Life from '../life/Life';
import {TabBar} from 'antd-mobile'



export default class AppTaber extends Component {
    constructor(){
        super();
        this.state={
            selectedTab: 'blueTab',
            hidden: false,
        }
    }
    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0}}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#FC3453"
                    barTintColor="white"
                    tabBarPosition="bottom"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="首页"
                        key="firstPage"
                        icon={<i style={{fontSize:25}} className='iconfont icon-shouye'></i>}
                        selectedIcon={<i style={{fontSize:25}} className='iconfont icon-shouye'></i>}
                        selected={this.state.selectedTab === 'blueTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                        }}
                    >
                        <Home />
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<i style={{fontSize:25}} className='iconfont icon-aixin'></i>}
                        selectedIcon={<i style={{fontSize:25}} className='iconfont icon-aixin'></i>}
                        title="心愿单"
                        key="hope"
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                        }}
                    >
                        <Dream />
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<i style={{fontSize:25}} className='iconfont icon-huapen'></i>}
                        selectedIcon={<i style={{fontSize:25}} className='iconfont icon-huapen'></i>}
                        title="生活"
                        key="life"
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                        }}
                    >
                        <Life />
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<i style={{fontSize:25}} className='iconfont icon-wode'></i>}
                        selectedIcon={<i style={{fontSize:25}} className='iconfont icon-wode'></i>}
                        title="我的"
                        key="my"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                        }}
                    >
                        <My />
                    </TabBar.Item>
                </TabBar>
                </div>
        )
    }
}
