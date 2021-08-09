import "./assets/css/style.css";
import 'bootstrap'
import  * as dom from './dom.js'
import Display from "./display";
import Task from './task'
import Store from './storage'
import removeTask from './remove';
import Project from "./project";

 document.addEventListener('DOMContentLoaded', Display.displayProject(), Display.displayProjectTask(), Display.displayEditTask())
 


dom.main.addEventListener('submit', (event) => {
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

 dom.newContent.addEventListener('click', (event) =>{
  removeTask(event.target)
  Store.deleteTodos(event.target.parentElement.previousElementSibling.firstElementChild.nextElementSibling.textContent);
})

 dom.content.addEventListener('click', (event)=>{
    const value = event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent
    const todos =Store.getTodos()
    for(let task of todos)
    if (task.id === value){
    dom.newTitle.value = task.title,
    dom.newDescription.value = task.description,
    dom.newDuedate.value = task.dueDate,
    dom.newPriority.value = task.priority,
    dom.newProject.value = task.project}    
  })

  dom.editForm.addEventListener('submit', (event)=>{
    event.preventDefault()

    const task = new Task(
      dom.newTitle.value,
      dom.newDescription.value,
      dom.newDuedate.value,
      dom.newPriority.value,
      dom.newProject.value
    
    );
    const tasks = Store.getTodos()
    tasks.forEach((index) =>{
      tasks.splice(index, 1)
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
    Display.addTask(task) 
    Store.addTodos(task) 
     window.location.reload();

  })

dom.projectForm.addEventListener('submit', (event) => {
  event.preventDefault();
    
    const newTopic = new Project(dom.topic.value);
    Store.addProject(newTopic)  
    Display.addProjects(newTopic) 
    Display.addProjectTask(newTopic)
     window.location.reload();
});

dom.next.addEventListener('click', (event) =>{
     const value = event.target.textContent;
     dom.content.innerHTML = ''
     const h2 = document.createElement('h2');
     h2.textContent = value
     dom.content.appendChild(h2)  

     const todos =Store.getTodos()
     for(let task of todos)
     if (task.project === value)
     Display.addTask(task)    
})

dom.allTodos.addEventListener('click', (event) =>{
  const todo = event.target.value.toUpperCase();
  dom.content.innerHTML = ''
  const h2 = document.createElement('h2');
  h2.textContent = todo
  dom.content.appendChild(h2)  
  document.addEventListener('DOMContentLoaded', Display.displayTask())   
})





