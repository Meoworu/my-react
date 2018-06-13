import React, {Component} from 'react';

export default class Todo extends Component{
    render (){
        let arr = this.props.todos;
        return (
            <ul>
                {arr.map( val => <li key={val}>{val}</li>)}
            </ul>
        )    
    }
}