 import Store from './storage';
  const content = document.getElementById('content');
 class Display{
  static displayTask(){ 
    const todos =Store.getTodos()
    for(let task of todos)
    Display.addTask(task)
  }
    
  static addTask(task){
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card mb-5 border-3" style="width: 30rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${task.title}</li>
        <li class="list-group-item">${task.description}</li>
        <li class="list-group-item">${task.dueDate}</li>
        <li class="list-group-item">${task.priority}</li>
      </ul>
      <div class="card-footer">
        <a href="#" class="delete text-danger text-decoration-none fw-bold">Remove task</a>
      </div>
    </div>
    `;
    content.appendChild(div)
  }

  static removeTask(ele){
    if(ele.classList.contains('delete')){
      ele.parentElement.parentElement.remove();
    }
  }


  static displayProject(){ 
    const projects =Store.getProject()
    for(let project of projects)
    Display.addProjects(project)
  }
  static addProjects(project){
    const ul = document.getElementById('next')
    const newul = document.createElement('ul')
    const li = document.createElement('li')
    li.classList.add('nav-item')
    li.innerHTML = `
    <li><a href="#" data-bs-toggle="modal" data-bs-target="#task" class="delete text-success fw-bold text-decoration-none">${project.topic}</a></li>
    `
    newul.appendChild(li);
    ul.appendChild(newul)
  }
}
export default Display