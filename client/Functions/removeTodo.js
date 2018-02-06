export default 
removeTodo = (todoIndex) => {
  const newList = this.state.todoList.filter((item, i ) => {
    return i !== todoIndex;
  });
  this.setState({todoList: newList})
};
