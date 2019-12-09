import React, { Component } from 'react'

export default class Face extends Component {
    render() {
        return (
            <div style={{padding:'10px',width:'100%',textAlign:'center'}}>
                <h1 style={{marginTop:'100px',fontSize:'100px',color:'#ff9645'}}>易·家</h1>
                <img src={require('../images/房子.png')} alt="" style={{width:'50%',margin:'30px 230px'}}/>
            </div>
        )
    }
}
