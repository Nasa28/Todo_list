 import Store from './storage';

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
}

export default Display