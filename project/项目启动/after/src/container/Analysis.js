import React, { Component } from 'react'
import '../index.css'
import * as echarts from 'echarts';
export default class Analysis extends Component {
    constructor(){
        super();
        this.state={
            arr:[]
        };
    }
    componentDidMount(){
        var brr=[];
        for(var i=0;i<7;i++){
            var date1 = new Date();
            var date2 = new Date(date1);
            date2.setDate(date1.getDate()-i);
            var d1=date2.getMonth()+1;
            if(d1<10){
                d1='0'+d1;
            }
            var d2=date2.getDate();
            if(d2<10){
                d2='0'+d2;
            }
            var time2 = date2.getFullYear()+"-"+d1+"-"+d2;
            brr.push(time2);
        }
        this.setState({
            arr:brr
        })
        var myChart = echarts.init(document.getElementById('main'));
        var option = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['新注册用户','日访问量','累计注册']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [brr[6],brr[5],brr[4],brr[3],brr[2],brr[1],brr[0]]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'新注册用户',
                    type:'line',
                    data:[0, 26,12, 8, 33,41, 30]
                },
                {
                    name:'访问量',
                    type:'line',
                    data:[100, 50, 68, 37, 45,156, 231]
                },
                {
                    name:'累计注册',
                    type:'line',
                    data:[30, 45, 50, 70, 102, 150, 230]
                }
            ]
        };
        myChart.setOption(option);
    }
    render() {
        return (
            <div style={{ padding: '10px' }}>
                <div style={{ borderBottom: '1px solid #e0e0e0', padding: '10px' }}>
                    <p style={{ color: '#707070', fontWeight: '500', fontSize: '15px' }}>用户分析</p>
                    <p style={{ fontWeight: '600', marginLeft: '10px' }}>用户增长</p>
                </div>
                <p style={{ marginTop: '30px', color: '#707070', fontSize: '12px' }}>本页根据昨日数据来计算，而非实时数据。</p>
                <div style={{ height: '60px', backgroundColor: '#e0e0e0', marginTop: '30px' }}>
                    <p style={{ lineHeight: '60px', marginLeft: '20px', fontWeight: '600' }}>昨日核心指标</p>
                    <img src={require('../images/info.png')} alt="" style={{ float: 'right', marginRight: '30px', width: '20px', marginTop: '-55px' }} />
                </div>
                <ul className='shuju' style={{ marginTop: '30px' }}>
                    <li>
                        <p style={{ fontSize: '12px' }}>新注册用户</p>
                        <p style={{ fontSize: '22px', fontWeight: '600', marginTop: '30px' }}>19</p>
                    </li>
                    <li>
                        <p style={{ fontSize: '12px' }}>日访问量</p>
                        <p style={{ fontSize: '22px', fontWeight: '600', marginTop: '30px' }}>123</p>
                    </li>
                    <li style={{ border: '0' }}>
                        <p style={{ fontSize: '12px' }}>累计注册</p>
                        <p style={{ fontSize: '22px', fontWeight: '600', marginTop: '30px' }}>120</p>
                    </li>
                </ul>
                <div id='main' style={{width:'100%',marginTop: '150px',height:'300px'}}>
                
                </div>
                <div style={{ height: '60px', backgroundColor: '#e0e0e0',marginTop:'-5px' }}>
                    <p style={{ lineHeight: '60px', marginLeft: '20px', fontWeight: '600' }}>历史记录</p>
                    <a href="#" style={{ float: 'right', marginRight: '20px', width: '100px', marginTop: '-55px' }}>打印表格</a>
                </div>
                <div style={{ overflow: "scroll", width: "100%", height: "230px" }}>
                    <table>
                        <thead>
                            <tr>
                                <td><b>时间</b></td>
                                <td><b>新注册数</b></td>
                                <td><b>日访问</b></td>
                                <td><b>累计注册</b></td>
                                <td style={{ width: '230px' }}></td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.arr.map((item,index)=>{
                                    return(
                                        <tr>
                                            <td>{item}</td>
                                            <td>19</td>
                                            <td>123</td>
                                            <td>120</td>
                                            <td style={{ width: '230px' }}></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
