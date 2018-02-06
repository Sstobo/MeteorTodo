export default clearCompleted = () => {
  const todoList = this.state.todoList.filter(item => {
    return !item.done;
  })
  this.setState({todoList})
}