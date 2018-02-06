import './main.html';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HeaderComponent from "./Components/HeaderComponent.js";
import ListComponent from "./Components/ListComponent.js";
import ListItemComponent from "./Components/ListItemComponent.js";
import FooterComponent from "./Components/FooterComponent.js";
import InputComponent from "./Components/InputComponent.js";
import "./main.css";
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';


class App extends Component {
  // use a constructor to instatiate
  constructor() {
    super();

    // set the initial 'state'. if this variable changes update the virtual DOM

    this.state= {
      todoList: [
        {title: "Get groceries", done: false},
        {title: "Eat groceries", done: false},
        {title: "Writhe in pain", done: false},
      ]
    }
    this.removeTodo = this.removeTodo.bind(this);
  }

  updateTodos(todo, done) {
    this.props.todoList[todo] = {
      done,
      title: this.state.todoList[todo].title 
    };
    this.setState({todoList: [...this.state.todoList ]});
  }

  removeTodo(todoIndex) {
    const newList = this.state.todoList.filter((item, i ) => {
      return i !== todoIndex;
    });
    this.setState({todoList: newList})
  };

  addTodo(title, todoList) {

     Todo.insert({title: title, done: false})

    // let newState = [];

    // newState = newState.concat (
    //   {title: title,
    //     done: false},
    //   todoList
    // );
    // this.setState({todoList: newState})
  };

  clearCompleted () {
    const todoList = this.state.todoList.filter(item => {
      return !item.done;
    })
    this.setState({todoList})
  }

  countCompleted () {
    return this.state.todoList.filter(item => item.done).length ? true : false;
    }


   render() {
      return (
      <div id="container">
        <HeaderComponent title="Todos"/>
        <InputComponent
        addTodo={this.addTodo.bind(this)} 
        todoList = {this.state.todoList}
        clearCompleted = {this.clearCompleted.bind(this)}/>
       
        <ListComponent 
        removeTodo={this.removeTodo}
        updateTodos={this.updateTodos.bind(this)}
        todoList={this.state.todoList} />

         <FooterComponent
         numTodos={this.state.todoList.length}
         countCompleted={this.countCompleted()}
         clearCompleted = {this.clearCompleted.bind(this)}/>
      </div>

      );
   }
}


export default withTracker(() => {  
  return { todoList: Todo.find().fetch()
  };
})(App);


Meteor.startup(() => {
  render(
  <App/>, document.getElementById('app'));
});

