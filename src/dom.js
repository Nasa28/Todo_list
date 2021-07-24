const content = document.getElementById('content');
const title = document.getElementById('title');
const description = document.getElementById('description');
const dueDate = document.getElementById('dueDate');
const name = document.getElementById('name');
const todos = document.getElementById('proName');
const priority = document.getElementById('priority')
 
const h2 = document.createElement('h2');
h2.textContent = "List of Pending todos"
myLibrary =[]
content.appendChild(h2)

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
    const storedTasks = [
      {
        title: "Get a coffee",
        description: "Black coffee is the very best",
        dueDate: "july 31 2021",
        priority: "High"
      },

      {
        title: "Get a coffee",
        description: "Black coffee is the very best",
        dueDate: "july 31 2021",
        priority: "High"
      }
    ] 
    const tasks = storedTasks;
    tasks.forEach((task)=> UI.addTask(task))
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
  <a href="#" class="delete text-danger text-decoration-none">Remove task</a>
  </div>
</div>
    `;
    content.appendChild(div)
  }

  static removeTask(ele){
    if(ele.className.includes('delete')){
      ele.parentElement.parentElement.remove();
    }
  }
}

document.addEventListener('DOMContentLoaded', UI.displayTask())
  

document.getElementById('main-form').addEventListener('submit', (event) => {
  event.preventDefault();

  // input Validation

  if(
    title.value ==='' ||
    description.value === '' ||
    dueDate.value === ''||
    priority.value
  ){
    alert('Please fill all fields')
  }
  else {
    const task = new Task(
      title.value,
      description.value,
      dueDate.value,
      priority.value
    );
      UI.addTask(task)
      Task.resetFields();
  }

  
  // myLibrary.push(addBookToLibrary(book));
  // addBook(book);
  // window.location.reload();
});

// Add event listener for delete 

content.addEventListener('click', (event) =>{
  UI.removeTask(event.target)
})

 