export default  updateTodos = (todo, done) => {
  this.state.todoList[todo] = {
    done,
    title: this.state.todoList[todo].title 
  };
  this.setState({todoList: [...this.state.todoList ]});
}
