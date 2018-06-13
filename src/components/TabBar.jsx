import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../static/css/tab.css';
export default class Tab extends Component {
    render(){
        return (
            <div className="tab">
                <NavLink to={{pathname:"/app/store/2",state:{falg:true},activeClassName:'tabActive'}}>首页</NavLink>
                <NavLink activeClassName='tabActive' to="/app/set">活动</NavLink>
                <NavLink activeClassName='tabActive' to="/app/car">购物车</NavLink>
                <NavLink activeClassName='tabActive' to="/app/about">我的</NavLink>
            </div>
        );
    }
}