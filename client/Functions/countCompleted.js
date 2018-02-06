export default countCompleted = () => {
  return this.state.todoList.filter(item => item.done).length ? true : false;
  }
