const content = document.getElementById('content');
const title = document.getElementById('title');
const description = document.getElementById('description');
const dueDate = document.getElementById('dueDate');
const name = document.getElementById('name');
const priority = document.getElementById('priority')
 
const h2 = document.createElement('h2');
h2.textContent = "List of Pending todos"

content.appendChild(h2)


// Storage class 

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
//Task class goes in here

class Task{
  constructor(title, description, dueDate, priority){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority
  }

  static resetFields(){
    title.value = ''
    description.value =''
    dueDate.value =''
    priority.value =''
  }
}

//UI class goes in here

class UI{
  static displayTask(){ 
    const todos =Store.getTodos()
    for(let task of todos)
    UI.addTask(task)
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

document.addEventListener('DOMContentLoaded', UI.displayTask())
  

document.getElementById('main-form').addEventListener('submit', (event) => {
  event.preventDefault();

  // input Validation

  const task = new Task(
    title.value,
    description.value,
    dueDate.value,
    priority.value
  );
  UI.addTask(task) 
  Store.addTodos(task) 
  window.location.reload();
  Task.resetFields();
      

});

// Add event listener for delete 

content.addEventListener('click', (event) =>{
   UI.removeTask(event.target)
   Store.deleteTodos(event.target.parentElement.previousElementSibling.firstElementChild.textContent)
})

 