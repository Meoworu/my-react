import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../static/css/common.css';
class Caozuo extends Component{
    setTodos(){
        this.props.add();
    }
    upTodos(){
        this.props.up();
    }
    render (){
        return (
            <div className="kong" style={{width:'100%',height:"100px",display:'flex'}}>
                <span onClick={this.setTodos.bind(this)}>增加</span>
                <span onClick={this.upTodos.bind(this)}>减少</span>
            </div>
        )    
    }
}
const mapDispatchToProps = function(dispatch){
    return {
        add:()=>{
            dispatch({
                type:'ADD'
            })
        },
        up:()=>{
            dispatch({
                type:'UP'
            })
        }
    }
}
const CaozuoTodos = connect( null , mapDispatchToProps)(Caozuo);

export default CaozuoTodos ;