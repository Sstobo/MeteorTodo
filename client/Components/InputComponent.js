import React, { Component } from 'react';

export default class InputComponent extends Component {
  constructor () {
    super(); 
    this.title = "";
  }

  render () {
    return (

    <form className="new-todo"
    // USE ON SUBMIT AND CHECK IF TITLE IS REAL, THEN IF IT IS, CHANGE VARIABLE TO THIS.X.VALUE SO IT IS LEGIBLE, THEN FIRE IT THROUGH

      onSubmit={(e) => {
      e.preventDefault();
      if(this.title) this.title = this.title.value
      console.log(this.title)
      this.props.addTodo(this.title, this.props.todoList)
    }
 }>
  
{/* USE REF TO GET INPUT FROM FORM */}

  <input className="new-item-input" id="input" type="text" name="name" ref={(input => (this.title = input))} />

  <label>
   press enter to add
  </label>

</form>
    )
  }
}