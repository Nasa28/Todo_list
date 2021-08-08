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
 
  static deleteTodos(id){
    const tasks = Store.getTodos()
    tasks.forEach((task, index) =>{
      if (task.id === id){
        tasks.splice(index, 1)
      }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  static getProject(){
    let projects;
    if(localStorage.getItem('projects') === null){
     
      projects = [];
    }else {
      projects = JSON.parse(localStorage.getItem('projects'));
    }
    return projects
  }
  
  static addProject(project){
    const projects = Store.getProject()
    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects))
  }
  
  static deleteProject(proName){
    const projects = Store.getProjects()
    projects.forEach((project, index) =>{
      if (project.proName === proName){
        projects.splice(index, 1)
      }
    })
    localStorage.setItem('projects', JSON.stringify(projects))
  }

}

export default Store