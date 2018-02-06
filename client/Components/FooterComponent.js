import React, { Component } from 'react';



export default class FooterComponent extends Component {

// button styling
  render () {
    const {numTodos, countCompleted } = this.props;
    return (
      <div className="footer-div">
      <p className="count-text"> {numTodos} Todo{numTodos > 1 && "s"} </p>
      {countCompleted ? (

      <button className="clear-button" onClick={this.props.clearCompleted}> Remove Selected</button> )
      : (
        ""
        )}

   </div>
  )}
};