import React, { Component } from 'react';
import ListItemComponent from "./ListItemComponent.js";

export default class ListComponent extends Component {
  render () {
    return (
      <ul className="list-component">
      {this.props.todoList.map((todoItem, index) => {
        return <ListItemComponent 
         key={index}
         todoIndex={index}
         item={todoItem}
         updateTodos={this.props.updateTodos}
         removeTodo={this.props.removeTodo}
         />  
      })}
      </ul>
    )
  }
}