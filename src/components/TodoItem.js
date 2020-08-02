import React, { Component } from 'react'
import propTypes from 'prop-types';

export default class TodoItem extends Component {

getStyle = ()=>{
    // if (this.props.todo.completed) {
    //     return{
    //         textDecoration: 'line-through'
    //     }
    // }  else{
    //     return {
    //         textDecoration: 'none'
    //     }
    // }

    return {
        // backgroundColor: this.props.todo.test ?
        // 'red' : 'blue',
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: this.props.todo.completed ?
         'line-through': 'none'
    }
}

 

    render() {
        const {id, title, completed} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
            <input type="checkbox" checked={completed} onChange={this.props.markComplete.bind
            (this, id)} /> {' '}
            {title} 
           <button style={btnStyle} onClick={this.props.delTodo.bind(this,id)}>X</button>
                    </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes={
    todo: propTypes.object.isRequired
 
}


const btnStyle= {
    background:'#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50px',
    cursor: 'pointer',
    float: 'right'
}
// const itemStyle= {
//     backgroundColor: "#f4f4f4"
// }

