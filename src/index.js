import "./assets/css/style.css";
import 'bootstrap'
import  './dom.js'
import Display from "./display";
import Task from './task'
import Store from './storage'
import removeTask from './remove';
import Project from "./project";
import editTask from "./edit";
const newTitle = document.getElementById('edit-title')
const newDescription = document.getElementById('edit-description')
const newDuedate = document.getElementById('edit-dueDate')
const newPriority = document.getElementById('edit-priority')
const project = document.getElementById("select-project");
 const main= document.getElementById('main-form');
 const editForm= document.getElementById('edit-form');
  const content = document.getElementById('content');
const projectForm = document.getElementById('project-form')
const topic = document.getElementById('proName')

 document.addEventListener('DOMContentLoaded', Display.displayProject(), Display.displayProjectTask(), Display.displayEditTask())
 
const next = document.getElementById('next')

main.addEventListener('submit', (event) => {
  event.preventDefault();
    
  const task = new Task(
    title.value,
    description.value,
    dueDate.value,
    priority.value,
    project.value
  
  );
  Display.addTask(task) 
  Store.addTodos(task) 
   window.location.reload(); 

});

 content.addEventListener('click', (event) =>{
  removeTask(event.target)
  Store.deleteTodos(event.target.parentElement.previousElementSibling.firstElementChild.nextElementSibling.textContent);
})

  // content.addEventListener('click', (event)=>{
  //   const value = event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent
    
  //   const todos =Store.getTodos()
  //   for(let task of todos)
  //   if (task.id === value)
  //   newTitle.value = task.title,
  //   newDescription.value = task.description,
  //   newDuedate.value = task.dueDate,
  //   newPriority.value = task.priority,
  //  console.log(task.parentElement.parentElement)
  // })

  editForm.addEventListener('submit', (event)=>{
    event.preventDefault()

    const task = new Task(
      newTitle.value,
      newDescription.value,
      newDuedate.value,
      newPriority.value,
      project.value
    
    );
    Display.addTask(task) 
    Store.addTodos(task) 
     window.location.reload();

  })

projectForm.addEventListener('submit', (event) => {
  event.preventDefault();
    
    const newTopic = new Project(topic.value);
    Store.addProject(newTopic)  
    Display.addProjects(newTopic) 
    Display.addProjectTask(newTopic)
     window.location.reload();
});

next.addEventListener('click', (event) =>{
     const value = event.target.textContent;
     content.innerHTML = ''
     const h2 = document.createElement('h2');
     h2.textContent = value
     content.appendChild(h2)  

     const todos =Store.getTodos()
     for(let task of todos)
     if (task.project === value)
     Display.addTask(task)    
})
const allTodos = document.getElementById('all-todos')

allTodos.addEventListener('click', (event) =>{
  const todo = event.target.value.toUpperCase();
  content.innerHTML = ''
  const h2 = document.createElement('h2');
  h2.textContent = todo
  content.appendChild(h2)  
  document.addEventListener('DOMContentLoaded', Display.displayTask())   
})

// const props = document.getElementById('prop')

// props.addEventListener('click', (event) =>{
//   event.preventDefault()
//   const todo = event.target
//     document.addEventListener('DOMContentLoaded', )
// })




