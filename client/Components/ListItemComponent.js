import React, { Component } from 'react';

export default class ListItemComponent extends Component {
  render () {
    const { title, done, todoIndex } = this.props.item;
    return (
      <li className="list-item">{this.props.item.title} 
     
      <input className="list-input" type="checkbox" 
      onChange={()=> {   

        this.props.updateTodos(this.props.todoIndex, !done)
      }}

     checked={this.props.item.done}/> 
      
      <button className="list-button " onClick={() => {this.props.removeTodo(this.props.todoIndex)}}>
     <i className="fa fa-trash" aria-hidden="true"></i></button>
      
      </li>
    )
  }
}