import React, {Component} from 'react';
import '../static/css/common.css';

export default class About extends Component {
    render(){
        return (
            <div className="box">
                <input style={{width:'100px',height:'40px'}} type="file" id='image' accept="image/*" />
            </div>
        )
    }
}