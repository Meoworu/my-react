import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../static/css/common.css';
import Todo from '../components/Todo.jsx';
import Caozuo from '../components/Caozuo.jsx';
class Store extends Component {
    constructor(props){
        super(props);
        this.toOther = this.toOther.bind(this);
    }
    toOther(){
        console.log(this);
    }
    render(){
        return (
            <div className="box">
                <Caozuo/>
                <div style={{width:'100%',height:'100%',paddingTop:'200px'}}>
                    <Todo todos={this.props.todos}/>
                </div>
            </div>
        )
    }
}

const mapStoreToProps = function(state, ownProps){
    return {
        todos : state.todos
    }
}
const mapDispatchToProps = { type:'ADD'}
    

const todoLists = connect(mapStoreToProps, mapDispatchToProps)(Store);
export default todoLists;