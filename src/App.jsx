import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './static/css/App.css';
import Tab from './components/TabBar.jsx';

import Store from './page/Store.jsx';
import About from './page/About.jsx';
import Car from './page/Car.jsx';
import Setting from './page/Setting.jsx';
class App extends Component {
  render() {
    return (
        <div>
            <Tab/>
            <Route  render={ (props) => {
                let {pathname} = props.location;
                if(pathname.indexOf('about')>-1){
                    return <About/>
                } else if(pathname.indexOf('car')>-1){
                    return <Car/>
                } else if(pathname.indexOf('set')>-1){
                    return <Setting/>
                }else {
                    return <Store/>
                }
            }}/>
        </div>
    );
  }
}

export default App;
