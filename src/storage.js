class Store {
  static getTodos(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    }else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks
  }

  static addTodos(task){
    const tasks = Store.getTodos()
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
 
  static deleteTodos(title){
    const tasks = Store.getTodos()
    tasks.forEach((task, index) =>{
      if (task.title === title){
        tasks.splice(index, 1)
      }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
}

export default Store