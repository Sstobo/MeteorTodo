export default 
addTodo = (title, todoList) => {
  let newState = [];

  newState = newState.concat (
    {title: title,
      done: false},
    todoList
  );
  this.setState({todoList: newState})
};