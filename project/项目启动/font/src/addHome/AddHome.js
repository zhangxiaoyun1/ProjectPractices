import React, { Component } from 'react'
import './addhome.css'
import {Link} from 'react-router-dom'

import { ImagePicker, WingBlank, SegmentedControl } from 'antd-mobile';

const data = [];

class ImagePickerExample extends React.Component {
  state = {
    files: data,
    multiple: false,
  }
  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.props.getimg(files);
    this.setState({
      files,
    });
    //this.upimg();
  }
  onSegChange = (e) => {
    const index = e.nativeEvent.selectedSegmentIndex;
    this.setState({
      multiple: index === 1,
    });
   console.log(1);
  }
//   upimg=()=>{
//       var file={files:this.state.files};
//       console.log(file);
//       let url=`http://49.235.251.57:8000/api/house/upimg`;
//         fetch(url,{
//             method:"POST",
//             body:file,
//             headers: new Headers({
//                 'Content-Type': 'application/json'
//             })
//         })
//         .then((res)=>res.json())
//         .then((res)=>{
//             console.log(1);
//         })
//   }
  render() {
    const { files } = this.state;
    return (
      <WingBlank>
        <SegmentedControl
          values={['点击加号添加图片(最多5张)']}
          selectedIndex={this.state.multiple ? 1 : 0}
          onChange={this.onSegChange}
        />
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 5}
          multiple={this.state.multiple}
        />
      </WingBlank>
    );
  }
}

export default class AddHome extends Component {
    constructor(){
        super();
        this.state={
            files:[]
        }
    }
    getimg=(files)=>{
        this.setState({
            files
        })
    }
    /*添加房屋信息函数*/
    addItem=()=>{
        var owername=document.getElementById('owername').value;;
        var price=document.getElementById('price').value;
        var city=document.getElementById('city').value;
        var phone=document.getElementById('phone').value;
        var address=document.getElementById('address').value;
        var type=document.getElementById('type').value;
        var hometype=document.getElementById('hometype').value;
        var floor=document.getElementById('floor').value;
        var face=document.getElementById('face').value;
        var lift=document.getElementById('lift').value;
        var wifi=document.getElementById('wifi').value;
        var apname=document.getElementById('apname').value;
        var heating=document.getElementById('heating').value;
        var conditioner=document.getElementById('conditioner').value;
        var detail=document.getElementById('detail').value;
        var userid=JSON.parse(localStorage.getItem('key')).userid;
        var files=this.state.files;
        //传给后端的数据
        if(owername!==''&&phone!==''&&price!==''&&city!==''&&address!==''&&type!==''&&hometype!==''&&
        floor!==''&&face!==''&&lift!==''&&wifi!==''&&heating!==''&&conditioner!==''&&apname!==''&&detail!==''){
            let data={
                userid:userid,
                realname:owername,
                price:price,
                phone:phone,
                city:city,
                address:address,
                type:type,
                hometype:hometype,
                floor:floor,
                face:face,
                lift:lift,
                wifi:wifi,
                apname:apname,
                heating:heating,
                conditioner:conditioner,
                files:files
            }
            //将对象转换为字符串传递
            var send=JSON.stringify(data);
            console.log(send)
            //发送post请求
            fetch('http://49.235.251.57:8000/api/house',{
                method: 'POST', 
                body: send,
                headers: new Headers({
                    'Content-Type': 'application/json'
                    })
            })
            .then((res)=>res.json())
            .then((res)=>{
                //接收响应信息，如果为true,则跳转登录页面
                if(res.ok===true){
                    console.log(res.ok);
                    //window.location.href="http://localhost:3000/#/appTaber"
                }
            }).catch(function(err){
                console.log(err);
            })
        }
    }
    render() {
        return (
            <div>
                <div className='addhome_nav'>
                    <Link to='/appTaber'><div style={{ fontSize: 26, color: 'white', lineHeight: '50px', marginLeft: '5%' }} className='iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu--copy'></div></Link>
                    <h2 className='addhome_nav_h2'>添加住房</h2>
                </div>
                <div>
                    <div className='form-inline'>
                        <div className="form-group">
                            <label className='addhome_label'>房主姓名:</label>
                            <input id="owername" className='addhome_input' style={{ paddingLeft: '3%', color: 'gray' }} type='text' name='username' placeholder='输入房主姓名' />
                        </div>
                        <div className='form-group'>
                            <label className='addhome_label'>手  机  号:</label>
                            <input id="phone" style={{ paddingLeft: '3%', color: 'gray', marginLeft: '4%' }} className='addhome_input' type='telephone' name='userTelephone' placeholder='请输入正确手机号' />
                        </div>
                        <div className='form-group'>
                            <label className='addhome_label'>价<span style={{ marginLeft: '9%' }}>格</span>:</label>
                            <input id="price" style={{ paddingLeft: '3%', color: 'gray', marginLeft: '4%' }} type='text' className='addhome_input1' name='userPrice' placeholder='请输入房屋的价格' />
                        </div>
                        <div className='form-group' style={{ marginTop: '3%' }}>
                            <label className='addhome_label'>城 <span style={{ marginLeft: '7%' }}>市:</span></label>
                            <input id="city" style={{ paddingLeft: '3%', color: 'gray', marginLeft: '4%' }} type='text' className='addhome_input1' name='userPrice' placeholder='请输入所在城市' />
                        </div>
                        <div className='form-group'>
                            <label className='addhome_label'>小 <span style={{ marginLeft: '7%' }}>区：</span></label>
                            <input id="apname" style={{ paddingLeft: '3%', color: 'gray' }} type='text' className='addhome_input2' name='userAddress' placeholder='请输入小区名称' />
                        </div>
                        <div className="form-group">
                            <label className='addhome_label'>详细地址:</label>
                            <input id="address" className='addhome_input' style={{ paddingLeft: '3%', color: 'gray' }} type='text' name='username' placeholder='输入房主姓名' />
                        </div>
                        <fieldset className='addhome_fieldset'>
                            <legend style={{ fontSize: 24 }}>具体表述</legend>
                            <div className='form-group'>
                                <label style={{ fontSize: 18, marginLeft: '2%' }}>类型:</label>
                                <select id="type" name='userType' style={{ width: '60px', height: '30px', marginLeft: '2%', backgroundColor: 'antiquewhite' }}>
                                    <option>单租</option>
                                    <option>整租</option>
                                </select>
                                <label style={{ marginLeft: '10%', fontSize: 18 }}>户型:</label>
                                <input id="hometype" name='userHomeType' style={{ width: '75px', height: '31px', marginLeft: '3%', border: 'none', background: 'none', backgroundColor: 'antiquewhite', border: 'none' }} placeholder='如三室两厅' />
                            </div>
                            <div className='form-group' style={{ marginTop: '4%', marginLeft: '2%' }}>
                                <label style={{ fontSize: 18 }}>楼层:</label>
                                <input id="floor" name='userFloor' style={{ width: '57px', height: '30px', marginLeft: '2%', border: 'none', background: 'none', backgroundColor: 'antiquewhite' }} placeholder='1层' />
                                <label style={{ marginLeft: '10%', fontSize: 18 }}>朝向:</label>
                                <select id="face" name='userFloor' style={{ width: '60px', height: '30px', marginLeft: '4%', backgroundColor: 'antiquewhite' }}>
                                    <option>东</option>
                                    <option>南</option>
                                    <option>西</option>
                                    <option>北</option>
                                </select>
                            </div>
                            <div className='form-group' style={{ marginTop: '4%', marginLeft: '2%' }}>
                                <label style={{ fontSize: 18 }}>电梯:</label>
                                <select id="lift" name='userLift' style={{ width: '60px', height: '30px', marginLeft: '2%', border: 'none', background: 'none', backgroundColor: 'antiquewhite' }}>
                                    <option>有</option>
                                    <option>无</option>
                                </select>
                                <label style={{ marginLeft: '10%', fontSize: 18 }}>WIFI:</label>
                                <select id="wifi" name='userWifi' style={{ width: '60px', height: '30px', marginLeft: '2%', border: 'none', background: 'none', backgroundColor: 'antiquewhite' }} >
                                    <option>有</option>
                                    <option>无</option>
                                </select>
                            </div>
                            <div className='form-group' style={{ marginTop: '4%', marginLeft: '2%' }}>
                                <label style={{ fontSize: 18 }}>供暖:</label>
                                <select id="heating" name='userHeating' style={{ width: '60px', height: '30px', marginLeft: '2%', border: 'none', background: 'none', backgroundColor: 'antiquewhite' }}>
                                    <option>有</option>
                                    <option>无</option>
                                </select>
                                <label style={{ marginLeft: '10%', fontSize: 18 }}>空调:</label>
                                <select id="conditioner" name='userCon' style={{ width: '60px', height: '30px', marginLeft: '2%', border: 'none', background: 'none', backgroundColor: 'antiquewhite' }} >
                                    <option>有</option>
                                    <option>无</option>
                                </select>
                            </div>
                            <div style={{marginTop:'10px'}}>
                                <span style={{ fontSize: 18 ,float:"left"}}>详细描述:</span>
                                <textarea placeholder='不超过100个字' style={{backgroundColor: 'antiquewhite'}} name="detail" id="detail" cols="30" rows="10"></textarea>
                            </div>
                            <div className='form-group' style={{marginTop:'4%',marginLeft:'2%',height:'150px',overflow:'scroll'}}>
                                <ImagePickerExample getimg={this.getimg}/>
                            </div>
                        </fieldset>
                        <div className="tijiao">
                            <button onClick={this.addItem}>提交</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
